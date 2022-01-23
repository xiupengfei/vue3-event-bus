export interface ICallbackFun extends Function {
    __once?: Function;
    isOnce?: boolean;
}
declare class EventBus {
    constructor();
    eventMap: Map<string, ICallbackFun[]>;
    on(key: string, cb: ICallbackFun): void;
    emit(key: string, payload?: any): void;
    once(key: string, cb: ICallbackFun): void;
    off(key: string, cb?: ICallbackFun): void;
}
export declare const bus: EventBus;
export default EventBus;
