function createMail(to: string, subject="No Subject"): string{
    return `reciever : ${to}\nsubject : ${subject}`
}

function add(x:number , y:number , z?: number):number{
    return z ? x + y + z : x + y
}

console.log(add(1,2))