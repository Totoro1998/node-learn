/**
 * 实现事件系统
 * 1. 事件的订阅
 * 2. 事件的发布
 * 3. 事件的取消订阅
 * 4. 事件的监听
 */
class MyEventEmitter {
  constructor() {
    this.events = {}; // 存储事件及其监听器
  }

  // 1. 注册事件监听器（一次性或者多次触发）
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push({ listener, once: false });
  }

  // 2. 注册事件监听器，只触发一次
  once(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push({ listener, once: true });
  }

  // 3. 移除某个事件的指定监听器
  off(event, listener) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter((item) => item.listener !== listener);
  }

  // 4. 触发事件，执行所有监听器
  emit(event, ...args) {
    if (!this.events[event]) return false;

    // 获取当前事件的所有监听器
    const listeners = this.events[event].slice();

    // 执行所有监听器
    listeners.forEach((listenerObj) => {
      listenerObj.listener(...args); // 调用监听器

      // 如果是 once 类型的监听器，执行完后移除
      if (listenerObj.once) {
        this.off(event, listenerObj.listener);
      }
    });

    return true;
  }

  // 5. 移除所有事件的所有监听器
  removeAllListeners(event) {
    if (event) {
      delete this.events[event]; // 删除特定事件的所有监听器
    } else {
      this.events = {}; // 删除所有事件的所有监听器
    }
  }
}

function Test() {
  const eventEmitter = new MyEventEmitter();

  function handleTest() {
    console.log("test");
  }

  function handleTestOnce() {
    console.log("test once");
  }

  eventEmitter.on("test", handleTest);
  eventEmitter.once("test once", handleTestOnce);
  eventEmitter.emit("test");
  eventEmitter.emit("test once");
  eventEmitter.off("test", handleTest);

  setTimeout(() => {
    eventEmitter.emit("test");
    eventEmitter.emit("test once");
  }, 1000);
}

Test();
