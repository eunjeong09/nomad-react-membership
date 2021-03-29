class ObjectUtilities {
  /* Your magic here */
  static mergeObjects = (objA, objB) => {
    // spread operator로 합침. (깊은 복사) 이로써 objA, objB 원본에 영향 없어짐
    const objC = { ...objA, ...objB };
    return objC;
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

// frozenUser.name = "Hello!"; // This should show an error


export default ObjectUtilities;
