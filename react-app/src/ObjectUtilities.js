class ObjectUtilities {
    /* Your magic here */
    static mergeObjects = (objA, objB) => {
      const objC = { ...objA, ...objB };
      return objC;
    };
  
    static removePassword = (user) => {
      delete user.password;
      return user;
    };
  
    static freezeObj = (cleanUser) => {
      Object.defineProperty(cleanUser, "name", { writable: false });
      return cleanUser;
    };
  
    static getOnlyValues = (frozenUser) => {
      const values = [];
      values.push(frozenUser.name);
      values.push(frozenUser.favFood);
  
      return values;
    };
  
    static getOnlyProperties = (frozenUser) => {
      const test = Object.keys(frozenUser);
      return test;
    };
  }
  
  const objA = {
    name: "Nicolas",
    favFood: "Kimchi"
  };
  
  const objB = {
    password: "12345"
  };
  
  const user = ObjectUtilities.mergeObjects(objA, objB);
  console.log(user);
  
  const cleanUser = ObjectUtilities.removePassword(user);
  console.log(cleanUser);
  
  const frozenUser = ObjectUtilities.freezeObj(cleanUser);
  
  const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
  console.log(onlyValues);
  
  const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
  console.log(onlyProperties);
  
  frozenUser.name = "Hello!"; // This should show an error
  