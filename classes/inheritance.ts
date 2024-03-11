class Animal {
    name: string
    constructor(name:string){
        this.name = name
    }
    move(distanceInMeters: number = 0) {
        console.log(`Animal : ${this.name}`)
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    move(distanceInMeters?: number): void {
        console.log(`Dog : ${this.name}`)
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

const animal: Animal = new Animal("Tom")
const dog: Dog = new Animal("Spike")

animal.move(0)
dog.move(10)