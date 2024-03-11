interface Circle {
    readonly centerX : number
    readonly centerY : number
    readonly radius : number
}
function moveCircle(c:Circle,x:number, y:number){
    const newC: Circle = {centerX : x, centerY : y, radius : c.radius}
    return newC
}
//for debugging
function printCircle(circle: Circle){
    console.log(`x : ${circle.centerX}\ny : ${circle.centerY}\nradius : ${circle.radius}`)
}

let c : Circle = {centerX : 0, centerY : 0, radius : 4}

printCircle(c)
c = moveCircle(c,1,1)
printCircle(c)