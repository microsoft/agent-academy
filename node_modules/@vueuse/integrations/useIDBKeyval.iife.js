(function (exports, core, idbKeyval, vue) {
  'use strict';

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
    const isFinished = vue.shallowRef(false);
    const data = (shallow ? vue.shallowRef : vue.ref)(initialValue);
    const rawInit = vue.toValue(initialValue);
    async function read() {
      try {
        const rawValue = await idbKeyval.get(key);
        if (rawValue === void 0) {
          if (rawInit !== void 0 && rawInit !== null && writeDefaults) {
            const initValue = serializer.write(rawInit);
            await idbKeyval.set(key, initValue);
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
          await idbKeyval.del(key);
        } else {
          const rawValue = vue.toRaw(data.value);
          const serializedValue = serializer.write(rawValue);
          await idbKeyval.update(key, () => serializedValue);
        }
      } catch (e) {
        onError(e);
      }
    }
    const {
      pause: pauseWatch,
      resume: resumeWatch
    } = core.watchPausable(data, () => write(), { flush, deep });
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

  exports.useIDBKeyval = useIDBKeyval;

})(this.VueUse = this.VueUse || {}, VueUse, idbKeyval, Vue);
