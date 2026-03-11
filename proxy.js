

// task Proxy
// ----------------------------------------------------

var obj = {
  name: "ali",
  age: 2,
  address: "123st",
};

var handler = {
    //get trap

  get(target, prop) {
    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      throw "undefined property";
    }
  },
   //set trap

  set(target, prop, value) {
    if (target.hasOwnProperty(prop)) {
        //name validation
      if (prop == "name") {
        if (/^[a-zA-Z]{7}$/.test(value)) {
          target[prop] = value;
        } else {
          throw Error("wrong value");
        }
         ///address validation
      } else if (prop == "address") {
        if (typeof value === "string") {
          target[prop] = value;
        } else {
          throw Error("wrong value");
        }
        //age validation
      } else if (prop == "age") {
        if (typeof value === "number" && value >= 25 && value <= 60) {
          target[prop] = value;
        } else {
          if (typeof value !== "number") {
            throw Error("wrong typed");
          } else {
            throw Error("out of range");
          }
        }
      }
    } else {
      throw Error("non-exist property");
    }
  },
};

var myProxy = new Proxy(obj, handler);
myProxy.name = "emanali";
myProxy.age = 30;
myProxy.address = "233st"
console.log(myProxy);