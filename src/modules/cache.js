export default {
  get: (key) => global.cache[key],
  
  set: (key, value, seconds = 60) => {
    if (value) {
      global.cache[key] = value;
    }
    else {
      delete global.cache[key];
    }
  },
}


// class Cache {
//   constructor() {
//     // @TODO: We should hydrate store/interval with a local file
//     this.store = {};
//     this.interval = {};

//     setInterval(() => {
//       Object.keys(this.interval).map((key) => {
//         this.interval[key] -= 1;
//         if (this.interval[key] < 0) {
//           delete this.interval[key];
//           delete this.store[key];
//         }

//         return this;
//       });
//     }, 1000);
//   }

//   get(key) {
//     return this.interval[key] ? this.store[key] : undefined;
//   }

//   set(key, value, seconds = 60) {
//     this.store[key] = value;
//     this.interval[key] = seconds;
//   }

//   get status() {
//     return {
//       keys: this.interval,
//       bytes: JSON.stringify(this.store).length * 2,
//     };
//   }
// }

// export default new Cache();
