import { ConfigurableFlush, RemovableRef } from '@vueuse/shared';
import { ShallowRef, MaybeRefOrGetter } from 'vue';

interface Serializer<T> {
    read: (raw: unknown) => T;
    write: (value: T) => unknown;
}
interface UseIDBOptions<T> extends ConfigurableFlush {
    /**
     * Watch for deep changes
     *
     * @default true
     */
    deep?: boolean;
    /**
     * On error callback
     *
     * Default log error to `console.error`
     */
    onError?: (error: unknown) => void;
    /**
     * Use shallow ref as reference
     *
     * @default false
     */
    shallow?: boolean;
    /**
     * Write the default value to the storage when it does not exist
     *
     * @default true
     */
    writeDefaults?: boolean;
    /**
     * Custom data serialization
     */
    serializer?: Serializer<T>;
}
interface UseIDBKeyvalReturn<T> {
    data: RemovableRef<T>;
    isFinished: ShallowRef<boolean>;
    set: (value: T) => Promise<void>;
}
/**
 *
 * @param key
 * @param initialValue
 * @param options
 */
declare function useIDBKeyval<T>(key: IDBValidKey, initialValue: MaybeRefOrGetter<T>, options?: UseIDBOptions<T>): UseIDBKeyvalReturn<T>;

export { useIDBKeyval };
export type { UseIDBKeyvalReturn, UseIDBOptions };
