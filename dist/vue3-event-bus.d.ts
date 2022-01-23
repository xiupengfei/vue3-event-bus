import { ICallbackFun } from './event-bus';
export declare const useEventBus: () => {
    on: (key: string, cb: ICallbackFun) => void;
    once: (key: string, cb: ICallbackFun) => void;
    off: (key: string, cb?: ICallbackFun | undefined) => void;
    emit: (key: string, payload?: any) => void;
};
export default useEventBus;
