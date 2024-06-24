// infer types(implicit types)
let userName = "rilwan";
let phoneNumber = 726352415172;

// defining types(explicit types)
let Name: string = "roony";
let nnumberss: number = 2176272872;

let obj: { name: string; number: number } = { name: "rilwan", number: 2412525 };

let arr: string[] = ["2", "2", "1"];
let arr1: number[] = [2, 3, 1];

// interface
interface Details {
  name: string;
  age: number;
  salary: number;
  getName: () => void;
}

let object: Details = {
  name: "jack",
  age: 23,
  salary: 66000,
  getName() {
    console.log(`may name is ${this.name}`);
  },
};

// type
type Details1 = {
  name: string;
  age: number | string; //union && optional
  salary: number;
  getName?: () => void;
};

let object1: Details1 = {
  name: "jack",
  age: "22",
  salary: 66000,
};
type user = {
  name: string;
  age: number | string;
};
function getUserNAme(userName: Details1): user {
  // return userName.name
  return { name: userName.name, age: userName.age };
}
getUserNAme(object1);

// Named types

type Status = "Pending" | "completed" | "ordered";

let response: Status = "Pending";
if (response === "Pending") {
  response = "completed";
}

// method overloading
function add(num1:string,num2:string):string;
function add(num1:number,num2:number):string;
function add(num1: any, num2: any): any {
  return num1 + num2;
}

add('2','5')

// generic

function getAge<T>(age:T){
  return age
}
getAge<number>(23)
getAge<string>('23')

type userDetails={
  userName:string;
  age?:number
}
// type adminDetails={
//   adminName:string;
//   role:string
// }
type adminDetails= userDetails & {  //removing repeating code
  role:string
}
let userDetails:userDetails={
 userName:'rilwan',
 age:23
}
let adminDetails:adminDetails={
  userName:'admin',
  role:'admin'
}

function getDetails<T>(details:T):T{
  return details
}

let user=getDetails<userDetails>(userDetails)
let admin=getDetails<adminDetails>(adminDetails)
admin.userName
user.userName
console.log(user.userName);
console.log(admin.role);


// enums
enum statusType{
  PENDING=1,
  COMPLETED,
  FAILED
}
// const enum statusType{
//   PENDING=1,
//   COMPLETED,
//   FAILED
// }
function getStatus(orderId:string,status:statusType){
  console.log(orderId ,'==', status);
}
getStatus('123',statusType.PENDING)

// as const
let number = 10 as const 
// number=12


// keyof / typeof
const statusType1={
  PENDING:'pending',
  COMPLETED:'completed',
  FAILED:'failed'
}as const
function getStatus1(orderId:string, status:keyof typeof statusType1){
  //  statusType1.PENDING='hiii'
  console.log(orderId,'==',statusType1[status]);
  
}
getStatus1('12345', 'PENDING')


// utility types
type User ={
  name:string;
  age?:number
}
let userDetails1:Readonly<User>={
  name:'rilwan',
  age:23
}
// userDetails1.name='ril'

let userDetails2:Partial<User>={
  name:'rilwan',
}
let userDetails3:Required<User>={
  name:'rilwan',
  age:23
}

export {}