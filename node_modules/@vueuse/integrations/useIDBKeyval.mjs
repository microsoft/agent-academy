import { watchPausable } from '@vueuse/core';
import { get, set, del, update } from 'idb-keyval';
import { shallowRef, ref, toValue, toRaw } from 'vue';

function useIDBKeyval(key, initialValue, options = {}) {
  const {
    flush = "pre",
    deep = true,
    shallow = false,
    onError = (e) => {
      console.error(e);
    },
    writeDefaults = true,
    serializer = {
      read: (raw) => raw,
      write: (value) => value
    }
  } = options;
  const isFinished = shallowRef(false);
  const data = (shallow ? shallowRef : ref)(initialValue);
  const rawInit = toValue(initialValue);
  async function read() {
    try {
      const rawValue = await get(key);
      if (rawValue === void 0) {
        if (rawInit !== void 0 && rawInit !== null && writeDefaults) {
          const initValue = serializer.write(rawInit);
          await set(key, initValue);
        }
      } else {
        data.value = serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
    isFinished.value = true;
  }
  read();
  async function write() {
    try {
      if (data.value == null) {
        await del(key);
      } else {
        const rawValue = toRaw(data.value);
        const serializedValue = serializer.write(rawValue);
        await update(key, () => serializedValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  const {
    pause: pauseWatch,
    resume: resumeWatch
  } = watchPausable(data, () => write(), { flush, deep });
  async function setData(value) {
    pauseWatch();
    data.value = value;
    await write();
    resumeWatch();
  }
  return {
    set: setData,
    isFinished,
    data
  };
}

export { useIDBKeyval };
