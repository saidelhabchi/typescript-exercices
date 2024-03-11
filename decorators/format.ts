//this one doesn't work correctly i need to figure i out what's the problem
function format(target , propertyKey , descriptor){
    const originalFunction = descriptor.value as Function
    descriptor.value = function(name : string){
        const res = originalFunction.call(name)
        return res.toUpperCase()
    }
}


class Greeting {
    @format
    greet(name: string) : string {
        return "Hello, " + name;
    }
}