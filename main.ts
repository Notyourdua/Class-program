class person{
    name :string
    age :number

    constructor(user_name :string , user_age :number) { 
        this.name = user_name 
        this.age = user_age
    }
}

let p1 = new person("dua" , 16)
let p2 = new person("mubashira" , 18)
console.log (p1);
console.log(p2);