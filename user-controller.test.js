const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

  test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers).not.toContain(user);
});

test('find by email to userController', () => {    
    let useremail = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(useremail);   
    expect (userController.findByEmail("santiago@generation.org")).toContain(useremail.email);
});
test('email no existe', () => {    
    let useremail = new User(3212,"Katherinne", "kathadcc@generation.org");
    userController.add(useremail); 
    expect (userController.findByEmail("kathadcc@generation.org")).toContain(useremail.email);
});
test('Id correcto to userController', () => {    
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);   
  expect(userController.findById(1234)).toStrictEqual(user);
});
  test('Id no existe', () => {    
    let user = new User(1234,"Katherinne", "kathadcc@generation.org");
    userController.add(user); 
    expect(userController.findById(user)).toBeUndefined();
  });

 //toStrictEqual compara el contenido de los objetos
  //toBeUnifined se usa cuando no se espera que exista ese valor y TOBE 
  //comparar con un valor que si se espera
  //toBeUndefined: Este matcher comprueba si el valor que está siendo probado es exactamente undefined.
  // Tocontain se usa para ocnfirmar si el elemnto fue agregado