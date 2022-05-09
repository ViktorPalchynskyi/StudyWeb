 
class Person {

}

// class Guest extends Person {
//    isGuest = true;
// }

class Member extends Person {
   acess() {
      console.log('You have asess');
   } 
}
 
class Frontend extends Member {
   canCreateFrontend() {}
}

class Backend extends Member {
   canCreateBackend() {}
}

// class PersonFromDifferentCompany extends Guest {
//    acess() {
//       throw new Error('You dont have access!');
//    }
// }

function openSecretDoor (person) {
   person.acess();
} 

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
// openSecretDoor(new PersonFromDifferentCompany());
