class EventBus {
  events: object;

  constructor() {
    this.events = {};
  }

  on(eventName: string, callback: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName: string, callback: Function) {
    if (this.events[eventName]) {
      if (callback) {
        const index = this.events[eventName].indexOf(callback);
        this.events[eventName].splice(index, 1);
      } else {
        delete this.events[eventName];
      }
    }
  }

  emit(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((cb: Function) => cb());
    }
  }

  once(eventName: string, callback: Function) {
    this.on(eventName, () => {
      callback();
      this.off(eventName, callback);
    });
  }
}

export default EventBus;
