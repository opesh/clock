let names=['john','opeyemi','abdul','malik', 'Ayomide', 'Adesewa'];
let age =[2,3,4,5,6,3];
let student = document.getElementById("s_name");

let ent = document.getElementById("ent");
let table_details = document.getElementById("details");

let eligibility = "";


for(let i = 0; i <  names.length; i++){
    if(age[i] < 4){
        eligibility = "Not Eligible";
    }else{
        eligibility = "Eligible";
    }
    table_details.insertAdjacentHTML('afterbegin', `
        <tr>
            <td>${names[i]}</td>
            <td>${age[i]}</td>
            
        </tr>
    `);
}
// let a = 5;
// let b = 4;
// maths = document.getElementById("maths")
// function maths(a,b){
//    console.log(a+b);
// }
// maths(5,4);
// function add(a,b){
//     return a-b;
// }
// console.log(add(5,4));
function wallClock(){
    let date = new Date();
    let dayOfmonth = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth();
    let MonthArr =['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
    let day = date.getDay();
    let dayArr = ['sun','mon','tue','wed','thu','fri','sat'];
    let myDate = `${dayOfmonth} - ${MonthArr[month]} - ${year}`;
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let miliSec = date.getMilliseconds();
    let Tfmt = "";
    let hour =0;
    if(hours>12){
        Tfmt = "pm";
        hour = hours - 12;
    } else {
        Tfmt = "am";
        hour = hours;
    }
    let myTime = `${hour} : ${minutes} : ${seconds}: ${miliSec} ${Tfmt}`;
    // console.log(myTime);

    let docDate = document.getElementById('date');
    let docTime = document.getElementById('time');

    docDate.innerHTML = myDate;
    docTime.innerHTML = myTime;
    // console.log(dayArr[day]);
}
setInterval(wallClock, 10);