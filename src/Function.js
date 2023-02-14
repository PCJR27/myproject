// const myFood = require('./myFood.json')
// let listOfFoods = []
// let nameList = ['ข้าว','ไข่']
// let carb = [],pro = [],fat = []

// let sumCarb = []
// let sumPro = []
// let sumFat = []
// let totalArr = []
// let total = 0

// let allForSum = []
// let sumOfAll 

// let oneFood

// let bmr = 0

// // Filter
// function filterFood(){
// for(let item of nameList){ 
// oneFood = myFood.filter((food)=> food.name === item)
// listOfFoods.push.apply(listOfFoods,oneFood)}
// ตัวเลือกเสริม
// // listOfFoods.value = listOfFoods.value.concat(oneFood)
// // listOfFoods.value.push(...oneFood)
// }
// console.log(listOfFoods);

// // Con Object To Array
// function conObjToArr () {
//     for (let index of listOfFoods){
//     carb.push(index.carb)
//     pro.push(index.protein)
//     fat.push(index.fat)
//     }
// }

// // conObjToArr()
// // console.log(carb)
// // console.log(pro)
// // console.log(fat)

// // Calculate Function
//   function carbCal (){
//     allForSum = carb
//     sumCal()
//     sumCarb = sumOfAll*4
//   }

//   function proCal (){
//     allForSum = pro
//     sumCal()
//     sumPro = sumOfAll*4
//   }
//   function fatCal (){
//     allForSum = fat
//     sumCal()
//     sumFat= sumOfAll*9
//   }
//   function totalCal (){
//       total = sumCarb+sumFat+sumPro
//   }
  
//   function sumCal(){
//     sumOfAll = 0
//     for(let item of allForSum){sumOfAll+=item}
//     allForSum = []
//   }
// filterFood()
// conObjToArr()
// carbCal()
// console.log(sumCarb);
// console.log('----------');
// proCal()
// console.log(sumPro);
// console.log('----------');
// fatCal()
// console.log(sumFat);
// console.log('----------');

// totalCal()
// console.log(total);


// // Film Test Scop
// let userAge =20
// let userWeight = 80
// let userHeight = 190
// function manBMRCalculate () {
//     bmr = 66+(13.7*userWeight)+(5*userHeight)-(6.8*userAge)
//     console.log(bmr);
// }
// function womanBMRCalculate () {
//     bmr = 655+(9.6*userWeight)+(1.8*userHeight)-(4.7*userAge)
//     console.log(bmr);
// }
// // Film Test Scop
// //manBMRCalculate()
// // womanBMRCalculate ()
// // console.log(bmr);
// // total = 1671
// function bmrCheck(){
// if(bmr > 0 || total === 0){
//     if(total > bmr+200){return "มาก"}
//     else if(total >= bmr-200){return "กลาง"}
//     else if(total < bmr-200){return "น้อย"}
// }else return "error"
// }
// console.log(bmrCheck())


let arr = [2];
let number = parseInt(arr);
console.log(number);

let s =0
s = arr[0]
console.log(s);
