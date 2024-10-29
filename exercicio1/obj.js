const denise ={
firstName: "Denise",
lastName: " carvalho",
nickName: "De",
age: 27,

fullName: function(){
    return this.firstName+ " "+ this.lastName;
},
getAge: function () {
    return this.age;
},

showName( template){
    console.log(template + " " + this .firstName);
   

},

getName(){
    return this.getName;


    },
}  


denise.age = 20
denise.nickName= " evelise"
console.log( denise.nickName);
console.log(denise.age);
console.log(denise.address);


denise.address = "tarrafal"
console.log(denise.address);


 console.log(denise.getAge ());
 console.log(denise.getName ());
 console.log(denise.fullName ());
 denise.showName ("sou");

 function person(firstName, lastName){
    this.firstName = firstName;
    this.firstName = firstName;
     }
 function cousre(){
    this.name = "";
 }

 const denise = new person (" Denise", " Carvalho");
 console.log(" seu nome é ", denise.firstName);

 let analina = new person (" Analina", "Rosa")


 person();
 console.log("fora da funçao",this);
 console.log("fora da funçao",this firstName);

 class people{
    constructor(name){
        this.name = name;

    }

    getName(){
        return this.Name;
    }
      setName (name){
        this.name = name;

      }  
  },
 const denise= new people("denise");
 console,log(denise.getName());
 denise.setName("denise");

