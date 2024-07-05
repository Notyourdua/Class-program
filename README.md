class person {
    
    name : string;
    age : number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class student extends person {
    rollno: string;
    constructor(name: string, age: number, rollno: string) {
        super(name, age);
        this.rollno = rollno;

    }

}
class teacher extends person {
    qualification: string;
    constructor(name:string, age: number, qualification: string) {
        super(name, age);
        this.qualification = qualification;

    }
}
let s1 = new student("ali", 23 , "123456");
let t1 = new teacher("duaa" , 15 , "matric");
console.log(s1);
console.log(t1);
