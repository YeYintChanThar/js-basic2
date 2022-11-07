 'use strict'

// function logger(){
//     console.log("Hello JavaScript Developer");
// }
// logger();

// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice = `This juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,6);
// console.log(appleJuice);
// // console.log(fruitProcessor(2,3));
// const age =calcAge(1990);

// function calcAge(birthYear){
//     return 2022- birthYear;  
// }
// console.log(age);

// const calcAge2 = function(birthYear){
//     return 2022-birthYear;
// }
// const age2 = calcAge2(1987);
// console.log(age2);

// const calcAge =birthYear => 2022-birthYear;

// const age3 = calcAge(2000);
// console.log(age3);

// const retirementAge =(birthYear,firstName) => {
//     const age = 2022-birthYear;
//     const retirement = 65-age;
//     return `${firstName} will retire within ${retirement} years`;
// }
// console.log(retirementAge(1999,'Ye Yint'));
// function fruitCutter(fruits){
//   return fruits * 4;
// }


//  function fruitProcessor(apples,oranges){
//     const applePiece =fruitCutter(apples);
//     const orangePiece =fruitCutter(oranges);

//      console.log(apples,oranges);

//      const juice = `This juice with ${applePiece} apples and ${orangePiece} oranges`;
//      return juice;
//  }
// console.log(fruitProcessor(2,3));


// Arrow function
// const yearUntilRetirement =(birthYear,firstName){
//     const age =2022-birthYear;
//     const retirement = 65-age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// const calcAge = function(birthYear){
//     return 2022 - birthYear;
// }
// // function Expression
// const yearRetirement =function(birthYear,firstName){
//     const age =calcAge(birthYear);
//      const retirement = 65-age;
//      if(retirement>0){
//         return retirement;
//      }else{
//         return `You have been expired ${retirement} years`;
//      }
//     //  return `${firstName} retires in ${retirement} years.`;
// }
// console.log(yearRetirement(1999,"YYCT"));
// console.log(yearRetirement(1948,"YYCT"));

// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (a draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of at least 100 points. HINT: Use a logical operator to test for a minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108, and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112, and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112, and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

// const averageScoreCalc = function (score1,score2,score3){
//    const averageScore = (score1+score2+score3)/3;
//    return averageScore;
// }
// const scoreDolphin =function (score1,score2,score3){
//     const averageScoreDolphin = averageScoreCalc(score1,score2,score3);
//     return averageScoreDolphin;
// }
// const scoreKoala = function (score1,score2,score3){
//     const averageScoreKoala = averageScoreCalc(score1,score2,score3);
//    return averageScoreKoala;
// }
//  const trophyWinnerCheck = function(a,b,c,d,e,f){
//     const avgScoreDolphin = scoreDolphin(a,b,c);
//     const avgScoreKoala   = scoreKoala(d,e,f);
//     console.log(avgScoreDolphin,avgScoreKoala);
//     if(avgScoreDolphin > avgScoreKoala && avgScoreDolphin >=100){
//       console.log("Team Dolphin Win");
//     }else if(avgScoreKoala >avgScoreDolphin && avgScoreKoala >= 100 ){
//       console.log("Team Koala Win");
//     }else if(avgScoreDolphin < 101 && avgScoreKoala < 101 && avgScoreDolphin===avgScoreKoala)
//     {
//       console.log("With Draw");
//     }else{
//       console.log("Both can't get Trophy");
//     }
//  }
// trophyWinnerCheck(97,112,101,109,95,123);
// scoreKoala(97,112,101);

// const friends = ['Mg Mg','Ko Ko','Kyaw Kyaw'];
// console.log(friends);
// const birthYear = new Array(1991,1985,2008);
// friends[2] = "Ye Yint";
// console.log(birthYear[0]);
// console.log(friends[friends.length-1]);
// const friends = ['Hla Hla','Mg Zaw','Say']
// const fullName ="YYX";
// const personal = [fullName,2022-1999,'developer',friends,false];
// console.log(personal);
// console.log(personal.length);

// const calcAge = function(birthYear){
//    return 2022-birthYear;
// }
// const years = [1990,1660,1948,2018];
// console.log(calcAge(years[0]));
// console.log(calcAge(years[1]));
// console.log(calcAge(years[2]));
// console.log(calcAge(years[3]));

// const friends = ['Hla Hla','Mg Zaw','Say'];
// friends.push('Aung Aung');
// console.log(friends);
// const resultPush = friends.push('Aye Aye');
// console.log(resultPush);
// friends.unshift('Mg Ba');
// console.log(friends);
// const resultPop =friends.pop();
// console.log(resultPop);
// friends.shift();
// console.log(friends);
// console.log(friends);
// console.log(friends.indexOf('Say'));
// console.log(friends.includes('Say'));
// friends.push(23);
// console.log(friends.includes('23'));
// if(friends.includes('Mg Zaw')){
//    const indexOfSay = friends.indexOf('Mg Zaw');
//    console.log(indexOfSay);
//    console.log(`Your friend Name is ${friends[indexOfSay]}`);
// }else{
//    console.log("Not Friend Name");
// }

// Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

// const calcTip = function(bill){
//   return  bill>= 50 && bill <= 300 ? bill*0.15 : bill * 0.2;
// }
// const bill = [125,555,44];
// const tips  =[calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];
// const totals =[bill[0]+tips[0],bill[1]+tips[1],bill[2]+tips[2]];
// console.log(tips);
// console.log(totals);

// const personalArray =[
//   'hello',
//   'world',
//   2022-2020,
//   'Js Developer',
//   ['Michal','Peter','Steven']
// ];
// const personalObject ={
//   firstName: 'Hello',
//   lastName : 'World',
//   age:2022-1999,
//   job:'Js Developer',
//   friends:['Michal','Peter','Steven']
// }
// personalObject.location = 'Myanmar';
// personalObject['facebookPage'] = '@BMPS education Center';
// personalObject.subject = ['JavaScript','WebDesign','React Js'];
// console.log(`BMPS open ${personalObject.subject.length} subjects and interesting subject is ${personalObject.subject[0]}`);
// // const nameKey = 'Name'
// console.log(personalObject);
// console.log(personalObject.lastName);
// console.log(personalArray.length);
// console.log(personalObject['first'+ nameKey]);

// const interstIn = prompt('What do you want to know about persoanlObject? Choose firstName,lastName,age,job,friends');
// console.log(interstIn);

// if(personalObject[interstIn]){
//   console.log(personalObject[interstIn]);
// }else{
//   alert(`Wrong Request ${interstIn} is not property Choose between firstName,lastName,age,job,friends.`)
// }

// const bmps={
//   firstName: 'BMPS',
//   lastName : 'Education Center',
//   birthYear:1999,
//   job:'Js Developer',
//   friends:['Michal','Peter','Steven'],
//   hasDriverLicense: true,
//   // method
//   // calcAge : function(birthYear){
//   //   return 2022 - this.birthYear;
//   // },
//   calcAge :function(){
//     // console.log(this);
//     this.age = 2022-this.birthYear;
//     return this.age;
//   }
// }
// console.log(bmps.calcAge(bmps.birthYear));
// // console.log(bmps['calcAge'](bmps.birthYear));
// console.log(bmps.calcAge());
// console.log(bmps.calcAge());
// console.log(bmps.calcAge());
// console.log(bmps.calcAge());
// console.log(bmps.calcAge());

// BMPS is 46years old teacher and he has a driver's license
// 1976
// const getSummary = {
//    fullName : 'BMPS',
//    birthYear:1976,
//    hasDriverLicense: false,
//    calcAge : function(){
//       this.age = 2022-this.birthYear;
//       return this.age;
//    }
// }

// const hasDriverLicense = getSummary.hasDriverLicense? 'has':'doesn\'t has';
// console.log(`${getSummary.fullName} is ${getSummary.calcAge()} years old teacher and he ${hasDriverLicense} a driver's license`);

// Coding Challenge #1
/*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formulas/heights/height ** 2 = mass / (height * height). (mass in kg and height in meter).
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John wweighs92 kg and is 1.95 m tall.
// TEST DATA 2: Marweighshts 95 kg and is 1.88 m tall. Joweighshts 85 kg and is 1.76 m tall.
// GOOD LUCK 😀
// */

// const mark = {
//   fullName: 'Mark',
//   mass    : 78,
//   height  : 1.69,
//   calcBMI :function(){
//     this.bmi = this.mass/(this.height*this.height);
//     return this.bmi;
//   }
// }
// const john ={
//   fullName: 'John',
//   mass    : 92,
//   height  : 1.95,
//   calcBMI :function(){
//     this.bmi = this.mass/(this.height*this.height);
//     return this.bmi;
//   }
// }
// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// const marksBMI = mark.calcBMI();
// const johnBMI  = john.calcBMI();
// if(marksBMI > johnBMI){
//   console.log(`Marks's BMI is Greater than the John BMI`);
// }else{
//   console.log(`JohnBMI is Greater than the Marks's BMI`);
// }

// for(let i =0; i<5;++i){
//   console.log(`loop for ${i}`);
// }

// const bmpsArray = [
//   'BMPS',
//   'Education Center',
//    2022-1999,
//    'Developer',
//    ['JavaScript','PHP','Flutter']
// ];

// const bmpsValueType = [];

// for(let i=0; i < bmpsArray.length; i++){
//   console.log(bmpsArray[i]);
//   bmpsValueType.push(typeof bmpsArray[i]);
//   console.log(bmpsValueType);
// }

// const years = [1991,2007,1969,2020];
// const ages = [];
// for(let i =0;i <years.length;i++){
//   const ageCalc = 2022-years[i];
//   ages.push(ageCalc);
// }
// console.log(ages);

// for(let i=0; i<bmpsArray.length;i++){
//   if(typeof bmpsArray[i] === 'number'){
//     break;
//   }
//   console.log(bmpsArray[i],typeof bmpsArray[i]);
// }

// const bmpsArray = [
//   'BMPS',
//   'Education Center',
//    2022-1999,
//    'Developer',
//    ['JavaScript','PHP','Flutter']
// ];
// for(let i=bmpsArray.length-1; i >=0;i--){
//   console.log(bmpsArray[i]);
// }
// for(let exercise =1;exercise < 4; exercise++){
//   console.log(`-----------exercises ${exercise}`);
//   for(let rep =1;rep <6;rep++){
//     console.log(`*******exercise repeating ${rep}`);
//   }
// }

// for(let rep =1 ;rep <=10 ;rep++){
//   console.log(`repeating ${rep}`);
// }
// let rep=1;
// while(rep <=10){
//   console.log(`repeating ${rep}`);
//   rep++;
// }

// let dice = Math.trunc((Math.random()*6)+1);
// // console.log(dice);

// while(dice !== 6){
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc((Math.random()*6)+1);

//   if(dice === 6){
//     console.log(`loop is stop beacuse the value is 6`);
//   }
// }

// // Coding Challenge #4
// /*
// Steven wants to build a very simple tip calculator for whenever he goes to eat in a restaurant In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
// TEST DATA: Test for bill values 275, 40 and 430
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀
// */

// // Coding Challenge #4
  // /*
  // Steven wants to build a very simple tip calculator for whenever he goes to eat in a restaurant In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
  // 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
  // 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
  // TEST DATA: Test for bill values 275, 40 and 430
  // HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
  // HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
  // GOOD LUCK 😀
  // */// // Coding Challenge #4
// /*
// Steven wants to build a very simple tip calculator for whenever he goes to eat in a restaurant In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
// TEST DATA: Test for bill values 275, 40 and 430
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀
// */
  
  
  // // Coding Challenge #4
  // /*
  // Steven wants to build a very simple tip calculator for whenever he goes to eat in a restaurant In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
  // 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
  // 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
  // TEST DATA: Test for bill values 275, 40 and 430
  // HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
  // HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
  // GOOD LUCK 😀
  // */

// const bill = [22,295,176,440,37,105,10,1100,86,52];
// const tip  = [];
// const total =[];
// for(let i= 0; i < bill.length ;i++){
//   let billValue = bill[i];
//   let tipCalc = billValue >= 50 && billValue <= 300 ? billValue * (15/100) :billValue *(20/100);
//   tip.push(tipCalc);
// }
// console.log(tip);

const calcTip = function (bill){
  return bill >= 50 && bill <= 300 ? bill*0.15:bill*0.20;
}
const bill = [22,295,176,440,37,105,10,1100,86,52];
const tips =[]
const total=[]

for(let i =0;i<bill.length;i++){
  const tip = calcTip(bill[i]);
  tips.push(tip);
  total.push(tip+bill[i]);
}
console.log(tips,total);

const calcAvg = function(arr){
  let sum =0;
  for(let i=0; i< arr.length;i++){
    sum +=arr[i];
  }
  return sum/arr.length;
  console.log(sum);
}
console.log(calcAvg(total));
console.log(calcAvg(tips));
console.log(calcAvg(bill));

