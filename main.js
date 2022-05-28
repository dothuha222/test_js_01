// 1.
// function reverse(str){
//     let str1 = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         str1 += str[i];
//     }
//     return str1;
// }
// let str = "program";
// console.log(reverse(str));
//------------------------------------------------------------------------------------------------
//2.
// let str = "data";
// function count(str){
//     let ob = {};
//     for(let i = 0; i < str.length -1 ; i++){
//         let dem = 0;
//         for(let j = i; j < str.length; j++){
//             if(str[i] == str[j]){
//                 dem ++;
//                 let str2 = str.slice(j, j+1);
//                 str.replace(str2,"");
//             }
//         }
//         ob[str[i]] = dem;
//     }
//     return ob;
// }
// console.log(count(str));
//------------------------------------------------------------------------------------------------
//3.
// let hello = "hello future academy";
// let message = hello.split(" ");
// console.log(message);
// function inHoa (str){
//     let newStr = str.split(" ");
//     for(let i = 0; i < newStr.length; i++){
//         let charStr = newStr[i].split("");
//         charStr[0] = charStr[0].toUpperCase();
//         newStr[i] = charStr.join("");
//     }
//    return newStr.join(" ");
// }
// console.log(inHoa(hello));
//------------------------------------------------------------------------------------------------
//4.
// function update(str){
//     let newArr = [];
//     for(let i = 0; i < str.length; i++){
//         if(newArr.indexOf(str[i]) == -1){
//             newArr.push(str[i]);
//         }
//     }
//     return newArr;
// }
// let str = ["one","two","three","one","one","four","five","four","five","five"];
// let str1 = [1,3,2,2,4,1,3,5,6,7,2];
// console.log(update(str));
// console.log(update(str1));
//------------------------------------------------------------------------------------------------

//5.
// function sort(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i ; j < arr.length; j++){
//             if(arr[i] > arr[j]){
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let arr = [5, 2, 3, 4, 1];
// console.log(sort(arr));
//------------------------------------------------------------------------------------------------
//6.
// let staffList =[
//     {
//         name: "Minh Cuong",
//         age: 25,
//         salary: "3000$",
//         position: "director"
//     },
//     {
//         name: "Hoang Hai",
//         age: 21,
//         salary: "2000$",
//         position: "manager"
//     },
//     {
//         name: "Quoc Huy",
//         age: 20,
//         salary: "1000$",
//         position: "mentor"
//     },
// ]

// let loop = true;
// function readAll(){
//     let str = "";
//     staffList.forEach(function(e,index){
//         str += `${index + 1}. ${e.name} - ${e.age} - ${e.salary} - ${e.position} \n`
//     })
//     return str;
// }

// function findIndex(name){
//     let index = staffList.findIndex(function(e){
//         return e.name === name;
//     })
//     return index;
// }
// // alert(readAll());
// while(loop){
//     let userInput = prompt("What do you want to do? (C/R/U/D)").toUpperCase();
//     if(userInput == "C"){
//         let name = prompt("Enter name:");
//         let age = prompt("Enter age:");
//         let salary = prompt("Enter salary:");
//         let position = prompt("Enter position:");
//         let newStaff = {
//             name,
//             age,
//             salary,
//             position
//         }
//         staffList.push(newStaff);
//         alert(readAll());
//     }
//     else if(userInput == "R"){
//         alert(readAll());
//     }
//     else if(userInput == "U"){
//         let name = prompt("Enter name you want to update:");
//         let index = findIndex(name);
//         if(index > -1){
//             let age = prompt("Enter age you want to update:");
//             let salary = prompt("Enter salary you want to update:")
//             let position = prompt("Enter position you want to update:");
//             staffList[index].name = name;
//             staffList[index].age = age;
//             staffList[index].salary = salary;
//             staffList[index].position = position;
//             alert(readAll());
//         }
//         else{
//             alert("This staff does not exist");
//         }
//     }
//     else if(userInput == "D"){
//         let name = prompt("Enter name you want to delete:");
//         let index = findIndex(name);
//         if(index > -1){
//             staffList.splice(index, 1);
//             alert(readAll());
//         }
//         else{
//             alert("This staff does not exist");
//         }
//     }
//     else if(userInput == "E"){
//         loop = false;
//     }
// }
//------------------------------------------------------------------------------------------------
//7.
// a.
// let userInput = prompt("Enter day/month/year:");
// let arr = userInput.split("/");
// let newArr = arr.map(function(e){
//     return Number(e);
// })
// console.log(newArr);

// if(newArr[2] % 4 == 0){
//     if(newArr[1] >= 1 & newArr[1] <= 12){
//         if(newArr[1] == 4 || newArr[1] == 6 ||newArr[1] == 9 ||newArr[1] == 11){
//             if(newArr[0] >0 && newArr[0] <= 30){
//                 console.log("Hop le");
//             }
//             else{
//                 console.log("Khong hop le");
//             }
//         }
//         else{
//             if(newArr[1] == 2){
//                 if(newArr[0] > 0 && newArr[0] <= 29){
//                     console.log("Hop le");
//                 } 
//                 else console.log("Khong hop le");
//             }
//             else{
//                 if(newArr[0] > 0 && newArr[0] <= 31){
//                     console.log("Hop le");
//                 } 
//                 else console.log("Khong hop le");
//            }
//         }
//     }
//     else{
//         console.log("Khong hop le");
//     }
// }
// else{
//     if(newArr[1] >= 1 & newArr[1] <= 12){
//         if(newArr[1] == 4 || newArr[1] == 6 ||newArr[1] == 9 ||newArr[1] == 11){
//             if(newArr[0] >0 && newArr[0] <= 30){
//                 console.log("Hop le");
//             }
//             else{
//                 console.log("Khong hop le");
//             }
//         }
//         else{
//             if(newArr[1] == 2){
//                 if(newArr[0] > 0 && newArr[0] <= 28){
//                     console.log("Hop le");
//                 } 
//                 else console.log("Khong hop le");
//             }
//             else{
//                 if(newArr[0] > 0 && newArr[0] <= 31){
//                     console.log("Hop le");
//                 } 
//                 else console.log("Khong hop le");
//            }
//         }
//     }
//     else{
//         console.log("Khong hop le");
//     }
// }
