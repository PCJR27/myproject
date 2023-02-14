
// function addFood(Food){
//   listoffood.push(Food)
// }



// function carbCal (){
//     for(let item of myFood){
//      carb.push(item.carb * 4)
//     }
//     for(let item of carb){
//         sumCarb+=item
//     }
// }
// function proCal (){
//     for(let item of myFood){
//      pro.push(item.protein * 4)
//     }
//     for(let item of pro){
//         sumPro+=item
//     }
// }
// function fatCal (){
//     for(let item of myFood){
//      fat.push(item.fat * 9)
//     }
//     for(let item of fat){
//         sumFat+=item
//     }
// }
// function sumAll () {
//     return sumCarb + sumPro + sumFat
// }



// let sum = 0
// function sumCal (){
//     for(let item of myFood){
//         sum += item.carb * 4 + item.protein * 4 + item.fat * 9
//     }
// }
// sumCal()
// console.log(sum)

// carbCal()
// proCal()
// fatCal()
// console.log(sumCarb)
// console.log(sumPro)
// console.log(sumFat)
// console.log(sumAll())
// console.log(myFood)

//////////////////////////////////////
// let user = ["female",20]
// let sumCal = 2100

// function result (){
//ver ตั้น
    // if(user[0]==="female") {
    //     if(user[1]<=30){
    //          if(sumCal>2400) return"เกิน"
    //          else if(sumCal>=2000) return"พอดี"
    //          else if(sumCal<2000)return"น้อย"
    //     }
    //     if(user[1]<=59){
    //         if(sumCal>2200) return"เกิน"
    //         else if(sumCal>=1800) return"พอดี"
    //         else if(sumCal<1800)return"น้อย"
    //     }
    //     if(user[1]>60){
    //         if(sumCal>2000) return"เกิน"
    //         else if(sumCal>=1600) return"พอดี"
    //         else if(sumCal<1600)return"น้อย"
    //     }
    // }
    
    // if(user[0]==="male") {
    //     if(user[1]<=30){
    //          if(sumCal>3000) return"เกิน"
    //          else if(sumCal>=2400) return"พอดี"
    //          else if(sumCal<2400)return"น้อย"
    //     }
    //     if(user[1]<=59){
    //         if(sumCal>3000) return"เกิน"
    //         else if(sumCal>=2200) return"พอดี"
    //         else if(sumCal<2200)return"น้อย"
    //     }
        
    //     if(user[1]>60){
    //         if(sumCal>2600) return"เกิน"
    //         else if(sumCal>=2000) return"พอดี"
    //         else if(sumCal<2000) return"น้อย"
    //     }
    // }
    // }
    


//     if(user[0]==="female") {
//         if(user[1]>60) {
//             switch (true) {
//                 case (sumCal > 2000):
//                     console.log("เกิน")
//                     break;
            
//                 case sumCal >= 1600:
//                     console.log("พอดี")
//                     break;
                
//                 case sumCal < 1600:
//                     console.log("น้อย")
//                     break;
//                 default:
//                     console.log("Error")
//             }
//         }

//         else if (user[1]<=59) {
//             switch (true) {
//                 case sumCal > 2200:
//                     console.log("เกิน")
//                     break;
            
//                 case sumCal >= 1800:
//                     console.log("พอดี")
//                     break;
                
//                 case sumCal< 1800:
//                     console.log("น้อย")
//                     break;
//                 default:
//                     console.log("Error")
//             }
//         }
        
//         else {
//             switch (true) {
//                 case sumCal > 2400:
//                     console.log("เกิน")
//                     break;
//                 case sumCal>= 2000:
//                     console.log("พอดี")
//                     break;
//                 case sumCal< 2000:
//                     console.log("น้อย")
//                     break;
//                 default:
//                     console.log("Error")
//             }
//         }
//     }
// }
// result()

// //////////////////////////////////
// let w = 50,h = 180,e = 30
// let user2 ='women'
// // let sumCal = 1200

// let menCal =0
// let womenCal =0
// function mc() {
//     menCal = 66+(13.7*w)+(5*h)-(6.8*e)
// }
// function wc() {
//     womenCal = 655+(9.6*w)+(1.8*h)-((4.7*e))
// }
// mc()
// wc()
// if(user2=== "men"){
//     if(sumCal > menCal+200){console.log("มาก")}
//     else if(sumCal <= menCal){console.log("กลาง")}
//     else if(sumCal < menCal-200){console.log("น้อย")}
// }
// else if(user2=== "women"){
//     if(sumCal > womenCal+200){console.log("มาก")}
//     else if(sumCal <= womenCal){console.log("กลาง")}
//     else if(sumCal < womenCal-200){console.log("น้อย")}
// }
