let captainAmerica={
    firstname: "steve",
    lasrName: "rogers",
    friends:["buckey" ,"tony" , "brue banner"],
    age : 104 ,
    isAvenger:"true",
    Adress:{
        country : "America",
        city : "khi v",
    },
    sayHay : function (){
        console.log(`hello my name is ${this.firstname}`);
    }
}
console.log(captainAmerica);
console.log(captainAmerica.friends);
captainAmerica.sayHay()

for(let key in captainAmerica){
    console.log(key);
    console.log(captainAmerica[key]);
}