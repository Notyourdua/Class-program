var person = /** @class */ (function () {
    function person(user_name, user_age) {
        this.name = user_name;
        this.age = user_age;
    }
    return person;
}());
var p1 = new person("dua", 16);
var p2 = new person("mubashira", 18);
console.log(p1);
console.log(p2);
