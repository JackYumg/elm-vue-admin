import { fromEvent, Observable } from "rxjs";
class WindowEvent {
    event = fromEvent(window, 'resize');
    private weakMap = new WeakMap();
    constructor() {

    }

    subscribe(observer: () => any) {
        if(!this.weakMap.has(observer)) {
            this.weakMap.set(observer, observer);
            return this.event.subscribe(observer);
        }
    }
}

export const windowEvent = new WindowEvent();
export const isEnterEvent = (e: KeyboardEvent ) => {
    return String.prototype.toUpperCase.call(e.key) === 'ENTER';
}