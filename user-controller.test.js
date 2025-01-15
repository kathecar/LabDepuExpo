const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

describe("UserController", () =>{
  
test('add user to userController', () => {    
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);    
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {    
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);    
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('find by email to userController', () => {    
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);    
  expect(userController.findByEmail).toBe(user);
});
test('email no existe', () => {    
  let user = new User(3212,"Katherinne", "kathadcc@generation.org");
  userController.add(user); 
  expect(userController.findByEmail).toBeUnifined(user);
});
test('ID correcto', () => {    
  expect(userController.findById(1234)).toBe();
});
test('Id no existe', () => {    
  let user = new User(3212,"Katherinne", "kathadcc@generation.org");
  userController.add(user); 
  expect(userController.findById).toBeUnifined(user);


  //toBeUnifined se usa cuando no se espera que exista ese valor y TOBE 
  //comparar con un valor que si se espera
  // Tocontain se usa para ocnfirmar si el elemnto fue agregado
});


})