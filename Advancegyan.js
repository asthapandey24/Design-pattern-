// // 'this' in global scope 
// this.table = 'window table';
// this.garage = {
//     table: 'garage table'
// };

// // 'this' inside in an object 
// let jhonsRoom = {
//     table: 'jhon table'
// };
// console.log(jhonsRoom.table);

// // 'this' inside a method 
// let jhonRoom = {
//     table: 'jhon table',
//     cleanTable(){
//         console.log(`cleaning ${this.table}`)
//     }
// };
// jhonRoom.cleanTable();

// // 'this' inside a function 

// // 'use strict';
// // this.tables = 'window table';
// // const cleanTable = function(soap){
// //     console.log(`cleaning ${this.tables} using ${soap}`);
// // };
// // // call function to rescue 

// // this.garage = {
// //     table: 'garage table'
// // };
// // let jhoniRoom = {
// //   table: 'jhons table'
// // }
// // cleanTable.call(this, 'some soap');
// // cleanTable.call(this.garage, 'some soap');
// // cleanTable.call(jhoniRoom, 'some soap');

// // this inside an inner function 
// 'use strict';
// this.tables = 'window table';
// const cleanTable = function(soap){
//     let that = this;
//     const innerFunction = function(_soap){

    
//     console.log(`cleaning ${that.tables} using ${soap}`);
//     }
//     innerFunction(soap);
// };
// // call function to rescue 

// this.garage = {
//     table: 'garage table'
// };
// let jhoniRoom = {
//   table: 'jhons table'
// }
// cleanTable.call(this, 'some soap');
// cleanTable.call(this.garage, 'some soap');
// cleanTable.call(jhoniRoom, 'some soap');


// // 'this' inside a constructor 

// let createRoom = function(name){
//     this.table = `${name}s table `
// }

// createRoom.prototype.cleanTable = function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`);
// };
// const jillsRoom = new createRoom('jill');
// const jhonoRoom = new  createRoom('jhono');
// jillsRoom.cleanTable('some soap');
// jhonoRoom.cleanTable('some soap');

// // 'this' inside a class 

// class createRooms{
//    constructor(name){
//     this.table = `${name}s table`
//    }
//    cleanTable(soap){
//     console.log(`cleaning ${this.table} using ${soap}`);
//    }
// }
// const jillsRoom = new createRoom('jill');
// const jhonoRoom = new  createRoom('jhono');
// jillsRoom.cleanTable('some soap');
// jhonoRoom.cleanTable('some soap');



// question 3,4,5,6



// class student{

//     static count=0;  //static variable to call

    

//    constructor(name,age,ph_no,marks){

//        this.name=name;

//        this.age=age;

//        this.ph_no=ph_no;

//        this.marks=marks;

//        student.countStudent();

//    }

//    static countStudent(){

       

//        return(student.count++);     //this is how u access static variable

//    }

//    eligible(){

//        if(this.marks >=40){

//            console.log(`${this.name} age ${age} is eligible`);

//        }

//        else if(this.marks<40){

//            console.log(`${this.name} age ${age} is not eligible`);

//        }

//    }







   

// }

// const Riya=new student('Riya',18,1234,34);

// const Hiya=new student('Hiya',15,2345,35);

// const Diya=new student('Diya',16,4567,60);

// const Siya=new student('Siya',17,7891,70);

// const Rooh=new student('Rooh',19,3456,80);

// console.log(student.countStudent());

// Riya.eligible();

// Hiya.eligible();

// Diya.eligible();

// Siya.eligible();

// Rooh.eligible();


//*****************************************************************

// " use strict"

// var getA = function(a){
//     return a;
// };

// let getA = a => a;

// let squar = a => a*a;

// let square = (a) => {return a*a};
// console.log(square(2));

// var a = 4;
// let sq = () => {return a*a};
// console.log(sq());

// let mult = (a,b) => {return a*b};

// console.log(2,4);

// // will not give proper answer
// // var x = function(){
// //     this.val = 1;
// //     setTimeout(function(){
// //       this.val++;
// //       console.log(this.val)
// //     },1)
// // };
// // solution 
// //  var xx = new x();var x = function(){
// //     var that = this;
// //     this.val = 1;
// //     setTimeout(function(){
// //       this.val++;
// //       console.log(that.val)
// //     },1)
// //     };

// //  var xx = new x();

// // 2nd solution 
// var x = function(){
    
//     this.val = 1;
//     setTimeout(() => {
//       this.val++;
//       console.log(that.val)
//     }, 1)
//     };

//  var xx = new x();
 

// // var x = function(){
// //     console.log(arguments[0])
// // };
// // x(1,2,3);

// // replacing with arrow function 
// var x = (...n) => {
//     console.log(n[0])
// };
// x(1,2,3);

//**********************************************************************************************
// class student{
//     constructor(name , age, marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     setPlacementAge(minplaceAge){
//         return  (minMarks) => {
//             if(this.marks > minMarks && this.age > minplaceAge){
//                 console.log(this.name + "ready");
//             }
//             else{
//                 console.log(this.name + "not ready");
//             }
//         };

//     }
// }

// const student1 = new student('yash', 25, 75);
// const student2 = new student('vaibhav', 13, 35);
// yash.setPlacementAge(18)(40);
    


    
    































































































