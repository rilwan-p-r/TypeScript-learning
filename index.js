"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// infer types(implicit types)
var userName = "rilwan";
var phoneNumber = 726352415172;
// defining types(explicit types)
var Name = "roony";
var nnumberss = 2176272872;
var obj = { name: "rilwan", number: 2412525 };
var arr = ["2", "2", "1"];
var arr1 = [2, 3, 1];
var object = {
    name: "jack",
    age: 23,
    salary: 66000,
    getName: function () {
        console.log("may name is ".concat(this.name));
    },
};
var object1 = {
    name: "jack",
    age: "22",
    salary: 66000,
};
function getUserNAme(userName) {
    // return userName.name
    return { name: userName.name, age: userName.age };
}
getUserNAme(object1);
var response = "Pending";
if (response === "Pending") {
    response = "completed";
}
function add(num1, num2) {
    return num1 + num2;
}
add('2', '5');
// generic
function getAge(age) {
    return age;
}
getAge(23);
getAge('23');
var userDetails = {
    userName: 'rilwan',
    age: 23
};
var adminDetails = {
    userName: 'admin',
    role: 'admin'
};
function getDetails(details) {
    return details;
}
var user = getDetails(userDetails);
var admin = getDetails(adminDetails);
admin.userName;
user.userName;
console.log(user.userName);
console.log(admin.role);
// enums
var statusType;
(function (statusType) {
    statusType[statusType["PENDING"] = 1] = "PENDING";
    statusType[statusType["COMPLETED"] = 2] = "COMPLETED";
    statusType[statusType["FAILED"] = 3] = "FAILED";
})(statusType || (statusType = {}));
// const enum statusType{
//   PENDING=1,
//   COMPLETED,
//   FAILED
// }
function getStatus(orderId, status) {
    console.log(orderId, '==', status);
}
getStatus('123', statusType.PENDING);
// as const
var number = 10;
// number=12
// keyof / typeof
var statusType1 = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed'
};
function getStatus1(orderId, status) {
    //  statusType1.PENDING='hiii'
    console.log(orderId, '==', statusType1[status]);
}
getStatus1('12345', 'PENDING');
