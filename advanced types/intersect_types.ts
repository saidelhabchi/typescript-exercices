interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;
let customer : Customer = {
    name : "x",
    credit : 100,
    email : "x@gmail.com",
    phone : "+212 666666666"
}