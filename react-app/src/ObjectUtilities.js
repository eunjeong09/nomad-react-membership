class ObjectUtilities {
    /* Your magic here */
    mergeObjects = (objA, objB) => {
      console.log(...objA, ...objB);
    };
    // const removePassword = () => {
  
    // }
  
    // const freezeObj = () => {
  
    // }
  
    // const getOnlyValues = () =>{
  
    // }
    // const getOnlyProperties = () =>{
  
    // }
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
  
  // const cleanUser = ObjectUtilities.removePassword(user);
  // console.log(cleanUser);
  
  // const frozenUser = ObjectUtilities.freezeObj(cleanUser);
  
  // const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
  // console.log(onlyValues);
  
  // const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
  // console.log(onlyProperties);
  
  frozenUser.name = "Hello!"; // This should show an error
  