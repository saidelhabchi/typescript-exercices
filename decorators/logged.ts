function logged(constructor: Function,...args: any[]){
    console.log("created")
    return constructor(...args)
}
@logged
class Greet {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}


let g = new Greet("hi")
console.log(g.greet())