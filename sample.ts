// infer types(implicit types)
let userName='rilwan'
let phoneNumber = 726352415172

// defining types(explicit types)
let Name:string='roony'
let nnumberss:number=2176272872

let obj:{name:string;number:number}={name:'rilwan',number:2412525}

let arr:string[]=['2','2','1']
let arr1:number[]=[2,3,1]


// interface
interface Details{
    name:string;
    age:number;
    salary:number;
    getName:()=> void
}

let object:Details={
    name:'jack',
    age:23,
    salary:66000,
    getName() {
        console.log(`may name is ${this.name}`);
        
    },
}

// type
type Details1={
    name:string;
    age:number | string; //union && optional
    salary:number;
    getName?:()=> void
}

let object1:Details1={
    name: 'jack',
    age: '22',
    salary: 66000,
   
}
