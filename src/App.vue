<script setup>
import { ref } from 'vue'
import myFood from './myFood.json'
/////////////// Change Page Scope //////////////////
let page1 = ref(true)
let page2 = ref(false)
let page3 = ref(false)
let page4 = ref(false)
let page5 = ref(false)
// Next Page
    function nextPage(event) {
        if (event.target.id === 'page-1') {
            page1.value = !page1.value
            page2.value = !page2.value
        }
        if (event.target.id === 'page-2') {
            page2.value = !page2.value
            page3.value = !page3.value
        }
        if (event.target.id === 'page-3') {
            page3.value = !page3.value
            page4.value = !page4.value
            setInfo()
        }

        if (event.target.id === 'page-4') {
            page4.value = !page4.value
            page5.value = !page5.value
            conObjToArr () 

            doBMR()
        }
    }

// Back Page
    function backPage(event) {
        if (event.target.id === 'page-2B') {
            page1.value = !page1.value
            page2.value = !page2.value
        }
        if (event.target.id === 'page-3B') {
            page2.value = !page2.value
            page3.value = !page3.value
        }

        if (event.target.id === 'page-4B') {
            page3.value = !page3.value
            page4.value = !page4.value
        }

        if (event.target.id === 'page-5B') {
            page4.value = !page4.value
            page5.value = !page5.value
        }
    }
/////////////// Change Page Scope //////////////////

////////////// Get User Input Scope ////////////////
let userInfo = {}
let userAge 
let userHeight 
let userWeight 
// Get User Age Height Weight 
function setInfo() {
    userInfo.age = userAge
    userInfo.height = userHeight
    userInfo.weight = userWeight
    console.log(userInfo)
}
// Get And Set User Gender
function isWoman() { return userInfo.gender = 'women' }
function isMan() { return userInfo.gender = 'man' }
////////////// Get User Input Scope ////////////////

/////////// Calculate And Check Scope //////////////
let listOfFoods = ref([])
// For carbCal,fatCal,proCal,totalCla
let carb = [] ,pro = [] ,fat = []
let sumCarb ,sumPro ,sumFat ,total
// Fro sumCal Function
let allForSum = [] ,sumOfAll 
    // Converd Object To carb,pro,fat Array 
    function conObjToArr () {
        for (let index of listOfFoods.value){
            if (typeof index.carb === 'number' && typeof index.protein === 'number' && typeof index.fat === 'number') {
                carb.push(index.carb)
                pro.push(index.protein)
                fat.push(index.fat)
                carbCal()
                proCal()
                fatCal()
                totalCal()
                } else {
                sumCarb = 'some variable is not a number';
                sumPro = 'some variable is not a number';
                sumFat = 'some variable is not a number';
                total = 'some variable is not a number';
                }
        }
        
    }
    // Calculate Carb
    function carbCal (){
        allForSum = carb
        sumCal()
        sumCarb = sumOfAll*4
    }
    // Calculate Pro
    function proCal (){
        allForSum = pro
        sumCal()
        sumPro = sumOfAll*4
    }
    // Calculate Fat
    function fatCal (){
        allForSum = fat
        sumCal()
        sumFat= sumOfAll*9
    }
    // Calculate Total
    function totalCal (){
        total = sumCarb+sumFat+sumPro
    }
    // Sum All Number In Array 
    function sumCal(){
        sumOfAll = 0
        for(let item of allForSum){sumOfAll+=item}
        allForSum= []
        
    }
/////////// Calculate And Check Scope //////////////

/////////////////// Select Menu ////////////////////
let customName = ref('')
let customProtein = ref('')
let customCarb = ref('')
let customFat = ref('')
// For filterFood Function
let nameList = [] ,selectFood 
    // Filter Food(User Select In DropdownSelecter) In myFood Array To listOfFoods Array
    function filterFood() {
        let oneFood
        nameList.push(selectFood)
        for (let item of nameList) {
            oneFood = myFood.filter((food) => food.name === item)
            listOfFoods.value.push(...oneFood)
            console.log(selectFood)
            console.log(oneFood)
        }
        nameList = []
        console.log(listOfFoods.value);
    }
    //Push Custom Menu To listOfFoods
    function customAddFood() {
     
        listOfFoods.value.push({ "name": customName.value, "carb": customCarb.value, "protein": customProtein.value, "fat": customFat.value })
        console.log(listOfFoods.value)
       
    }
    // Remove Memu Out Of listOfFoods
    function removeFood(e) {
        console.log(e)
        listOfFoods.value.splice(e, 1);
    }
/////////////////// Select Menu ////////////////////

//////////// BMR Calculate And Check //////////////
let bmr = undefined
let status
    // BMR Calculate For Man
    function manBMRCalculate() {bmr = 66 + (13.7 * userWeight) + (5 * userHeight) - (6.8 * userAge) * 1.55 ; bmrCheck()}
    // BMR Calculate For Woman
    function womanBMRCalculate() {bmr = 655 + (9.6 * userWeight) + (1.8 * userHeight) - (4.7 * userAge) * 1.55 ; bmrCheck()}
    // BMR Check Logic
    function bmrCheck() {
        if (bmr === undefined || bmr <= 0){
            status = "We can't calculate you BMR."
        }else{
            if (total > bmr + 200) { status = 'กินมากเกิน'}
            else if (total >= bmr - 200) { status = 'พอดี' }
            else if (total < bmr - 200) { status = 'กินน้อยเกิน'}
        }
        let bmrInFunction = bmr
        bmr =[]
        bmr.push(bmrInFunction)
    }
    // doBMR And Check Logic Gender 
    function doBMR() {
        let error = []
        if (userAge <= 0 || userAge === undefined ){
            error.push("We don't know you Age")
            bmr = error 
        }
        if(userWeight <= 0 || userWeight === undefined ){
                error.push("We don't know you Weight.")
                bmr = error
        }
        if(userHeight <= 0 || userHeight === undefined ){
                error.push("We don't know you Height.")
                bmr = error
        }
        if(userInfo.gender === undefined){
                error.push("We don't know you gender.")
                bmr = error
        }
        else if (userInfo.gender === 'women') {
            womanBMRCalculate()
        }else if(userInfo.gender === 'man') {
            manBMRCalculate()
        }
    }
//////////// BMR Calculate And Check //////////////
</script>

<template>
    <div>
        <div class="bg-gray-400 rounded-b-3xl">
                <p class="text-black font-inter font-black text-center text-5xl p-10 md:text-7xl md:p-50 ">KCal Cal</p>
        </div>
        <!-- หน้า 1 -->
        <div id="page1" class="flex flex-col w-screen h-screen" v-show="page1">
            <!-- <div class="bg-gray-400">
                <p class="text-black font-black text-9xl text-center m-20">KCal Cal</p>
            </div> -->

            <div class="sm:h-2/3 lg:h-1/3 w-full my-5 flex justify-center ">
                <h3 class="w-3/5 font-medium rounded-lg border-8 border-gray-400  p-10">
                    แอปของเราเป็นแอปสำหรับคำนวณแคลอรี่มี 2 ฟังก์ชัน ให้เลือกใช้ คือ<br>
                    * เลือกอาหารที่คุณกินในแต่ละวันตามที่เรามีให้ในรายการ<br>
                    * ระบุอาหารของคุณพร้อมทั้งปริมาณกรัมของ คาร์โบไฮเดรต โปรตีน ไขมัน <br>
                    เพื่อที่พวกเราจะนำข้อมูลที่คุณได้เลือก นำไปคำนวณออกมาและแสดงให้คุณเห็น 
                    โดยจะแสดงดังนี้ ปริมาณแคลอรี่ทั้งหมด ปริมาณแคลอรี่ของคาร์โบไฮเดรต 
                    ปริมาณแคลอรี่ของโปรตีน ปริมาณแคลอรี่ของไขมัน 
                    พร้อมทั้งให้คำแนะนำเกี่ยวกับปริมาณแคลอรี่ทั้งหมดของคุณว่าเหมาะสมหรือไม่</h3>
            </div>

            <div class="flex justify-center">
                <button @click="nextPage" id="page-1"
                class="m-auto bg-gray-400 hover:bg-gray-600 text-6xl text-center px-10 py-3 rounded-full">Start</button>
            </div>
        </div>
        <!-- จบหน้า 1 -->


        <!-- หน้า 2 -->
        <div id="page2" class="flex flex-col m-auto " v-show="page2">
            <!-- <div class="flex flex-col bg-gray-400">
                <p class="text-black font-inter font-black text-9xl text-center m-20">KCal Cal</p>
            </div> -->

            <div class="p-24">
                <div class="flex flex-col text-4xl space-y-5">
                    <p class=" text-center font-semibold">How old are you?</p>
                    <input v-model="userAge" type="text" class=" bg-gray-200 border border-gray-300 rounded-full m-auto text-center pb-1" placeholder="Age">
                    <p class=" text-center font-semibold">Height</p>
                    <input v-model="userHeight" type="text" class="bg-gray-200 border border-gray-300 rounded-full m-auto text-center pb-1" placeholder="Height">
                    <p class=" text-center font-semibold">Weight</p>
                    <input v-model="userWeight" type="text" class="bg-gray-200 border border-gray-300 rounded-full m-auto text-center pb-1" placeholder="Weight">
                </div>
         

            </div>

            <div class="flex flex-row">
                <div class="m-auto bg-gray-400 hover:bg-gray-600 text-3xl text-center px-5 py-3 rounded-full">
                    <button @click="backPage" id="page-2B">Back</button>
                </div>

                <div class="m-auto bg-gray-400 hover:bg-gray-600 text-3xl text-center px-5 py-3 rounded-full">
                    <button @click="nextPage" id="page-2">Next</button>
                </div>
            </div>
        </div>
        <!-- จบหน้า2 -->


        <!-- หน้า 3 -->
        <div id="page3" class="flex flex-col m-auto" v-show="page3">
            <!-- <div class="bg-gray-400">
                <p class="text-black font-inter font-black text-9xl text-center m-20">KCal Cal</p>
            </div> -->

            <div class="text-8xl text-center mt-6">
                <p>What gender you are</p>
                <div class="flex flex-col mt-10 m-auto w-1/2 md:flex-row">
                    <button @click="isWoman" class="bg-pink-400 pr-6 pl-6 m-5 rounded-full text-white md:m-auto">Woman</button>
                    <button @click="isMan" class="bg-blue-600 pr-6 pl-6 m-5  rounded-full text-white md:m-auto">Man</button>
                </div>
            </div>

            <div class="flex flex-col text-5xl mt-5 w-1/2 md:flex-row m-auto">
                <div class="m-auto">
                    <button @click="backPage" id="page-3B"
                        class="bg-gray-200 m-auto mb-2 rounded-full p-3 md:m-auto">Back</button>
                </div>

                <div class="m-auto">
                    <button @click="nextPage" id="page-3" 
                    class="bg-gray-200 rounded-full p-3 m-auto">Next</button>
                </div>
            </div>
        </div>
        <!-- จบหน้า3 -->

        
        <!-- หน้า4 -->
        <!-- <div class="flex flex-col" v-show="page4">
            <div class="bg-gray-400">
                <p class="text-black font-inter font-black text-9xl text-center m-20">KCal Cal</p>
            </div>

            <div class="flex flex-row m-auto">
                <div class="flex flex-col m-10">
                    <div class="mb-2 border border-red-600">
                        <label for="underline_select" class="sr-only">Underline select</label>
                        <select v-model="selectFood" id="underline_select"
                            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-12 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-800 peer">
                            <option v-for="(myFoods, index) in myFood " :key="index" selected>{{ myFoods.name }}
                            </option>
                        </select>
                        <button @click="filterFood" class="bg-orange-500 text-center w-30 rounded-md p-2">Add</button>
                    </div>

                    <div class="mt-10 border border-red-600">
                        <p>Name:  <input type="text" placeholder="ชื่ออาหาร" v-model="แName"></p>
                        <p>Protein:  <input type="number" placeholder="protein" v-model="customProtein"></p>
                        <p>Carb:  <input type="number" placeholder="carb" v-model="customCarb"></p>
                        <p>fat:  <input type="number" placeholder="fat" v-model="customFat"></p>
                        <button @click="customAddFood" class="bg-orange-500 text-center w-30 rounded-md p-2">Add</button>
                    </div>
                </div> 
                

                 Show selected food 
                 <div class="flex flex-col"> 
                   <div class="bg-red-400 p-52 " v-for="(item,index) in listOfFoods" :key="index">
                        <span>{{ item.name }}</span>
                        <span>{{ index }}</span>
                         <button @click="removeFood(index)" class="bg-orange-500 text-center w-30 rounded-md">Remove</button>
                    </div>
                    <div class=" border border-black p-40" >
                        <div>
                            <div class="ml-0 bg-blue-50" v-for="(item,index) in listOfFoods" :key="index">
                                <table>
                                    <tr>
                                        {{ item.name }}
                                        <button @click="removeFood(index)" class="bg-orange-500 text-center w-30 rounded-md">Remove</button>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-row">
                <div class="m-auto">
                    <button @click="backPage" id="page-4B"
                    class="m-auto bg-gray-400 hover:bg-gray-600 text-6xl text-center px-5 py-3 rounded-lg">Back</button>
                </div>

                <div class="m-auto">
                    <button @click="nextPage" id="page-4" 
                    class="m-auto bg-gray-400 hover:bg-gray-600 text-6xl text-center px-5 py-3 rounded-lg">Cal</button>
                </div>
            </div>
        </div>  -->


<!-- ///////////////// -->
<div class="w-full" v-show="page4">

        <div class="md:flex">
            <div class="md:w-1/2">
            <div class="mb-4 p-8 m-7 rounded-3xl bg-gray-200">
                <h1 class="text-center  mb:p-3 text-2xl">Automatic Mode</h1>
                    <label for="underline_select" class="sr-only">Underline select</label>
                        <select v-model="selectFood" class="block appearance-none w-full p-2 bg-white border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-full shadow">
                            <option v-for="(myFoods, index) in myFood " :key="index" selected>{{ myFoods.name }}</option>
                        </select>
                        <span class="flex justify-center mt-3">
                            <button @click="filterFood" class="bg-blue-500 text-center w-30 rounded-full p-3">Add</button>
                        </span>
            </div>
        
            <div class="mb-4 p-8 m-7 rounded-3xl bg-gray-200">
                <h1 class="text-center p-3 text-3xl">Custom Mode</h1> 
                
                    <div class="flex flex-row m-3">
                        <p class="pr-2 pt-2">Name: </p>
                        <input class="w-full p-2 bg-white border border-gray-400 hover:border-gray-500 rounded-full"  type="text" placeholder="ชื่ออาหาร" v-model="customName">
                    </div>
                    <div class="flex flex-row m-3">
                        <p class="pr-2 pt-2">Protein:</p>
                        <input class="w-full p-2 bg-white border border-gray-400 hover:border-gray-500 rounded-full" type="number" placeholder="protein" v-model="customProtein">
                    </div>
                    <div class="flex flex-row m-3">
                        <p class="pr-2 pt-2">Carb:  </p>
                        <input  class="w-full p-2 bg-white border border-gray-400 hover:border-gray-500 rounded-full" type="number" placeholder="carb" v-model="customCarb">
                    </div>
                    <div class="flex flex-row m-3">
                        <p class="pr-2 pt-2">Fat:</p>  
                        <input class="w-full p-2 bg-white border border-gray-400 hover:border-gray-500 rounded-full " type="number" placeholder="fat" v-model="customFat">
                    </div>

                    <div  class="flex justify-center mt-6">
                        <button @click="customAddFood" class="bg-blue-500 text-center w-30 rounded-full p-2">Add</button>
                    </div>
            </div>
        </div>
        <div class="mb-4 p-8 m-7 rounded-3xl bg-gray-200 md:w-1/2">
                <h2 class="text-center p-3 text-3xl">List Of Foods</h2> 
                <ul v-for="(item,index) in listOfFoods" :key="index" class="flex flex-row m-5">
                    <li class="border-b border-gray-400 w-full" >{{ item.name }}</li>
                    <P>{{ index }}</P>
                        <div class="flex justify-end ">
                            
                            <button  button @click="removeFood(index)" class="bg-red-500 text-center w-30 rounded-full p-1">Remove</button>
                        </div>  
                </ul>

                
        </div>
 
        <!-- <div class="pt-6 pb-6 m-7 rounded-3xl bg-gray-300 w-full">
            <div class="w-full">
                <h2 class="text-3xl " style="text-align: center;"></h2>
          
                <ul v-for="(item,index) in listOfFoods" :key="index" class="flex flex-row m-5">
                    <li class="border-b border-gray-400 w-full" >{{ item.name }}</li> 
                        <div class="flex justify-end ">
                            <button  button @click="removeFood(index)" class="bg-red-500 text-center w-30 rounded-full p-1">Remove</button>
                        </div>  
                </ul>
            </div>
        
        </div> -->

        
    </div>
    <div class="flex flex-row">
                <div class="m-auto">
                    <button @click="backPage" id="page-4B"
                    class="m-auto bg-gray-400 hover:bg-gray-600 text-3xl text-center px-5 py-3 rounded-full">Back</button>
                </div>

                <div class="m-auto">
                    <button @click="nextPage" id="page-4" 
                    class="m-auto bg-gray-400 hover:bg-gray-600 text-3xl text-center px-5 py-3 rounded-full">Calculate</button>
                </div>
            </div>
</div>
<!-- จบหน้า4 -->


    
        <!-- หน้า5 -->
        <div id="page5" class="flex flex-col w-full h-full" v-show="page5">
            <!-- <div class="bg-gray-400">
                <p class="text-black font-black text-9xl text-center m-20">KCal Cal</p>
            </div> -->

            <!-- ทำให้คำอธิบายไปอยู่เป็นแบบrow -->
            <div class="md:flex flex-row bg-red-100">
                <div class="flex flex-col m-auto w-full h-full bg-red-100 overflow-hidden">
                    <!-- จัดให้วงกลม1อันเรียงเป็นrowกับวงกลม3อัน -->
                    <div class="flex flex-row bg-slate-900">
                        <!-- วงกลม1อัน -->
                        <div class="flex flex-col bg-white p-10 w-64 h-64 rounded-full m-auto">
                            <!-- จัดคำภายใน -->
                            <div class="flex flex-col w-full h-full">   
                                <p>Total</p>
                                <p>{{ total }}</p>
                            </div>
                        </div>

                        <!-- วงกลม3อัน -->
                        <div class="flex flex-col space-x-4 bg-blue-600">
                            <div class="flex flex-col bg-white p-10 w-40 h-40 rounded-full m-auto">
                                <!-- จัดคำภายใน -->
                                <div class="flex flex-col w-full h-full">
                                    <p>Total Fat</p>
                                    <p>{{  sumFat }}</p>
                                </div>
                            </div>

                            <div class="flex flex-col bg-white p-10 w-40 h-40 rounded-full m-auto">
                                <!-- จัดคำภายใน -->
                                <div class="flex flex-col w-full h-full">
                                    <p>Total Carb</p>
                                    <p>{{ sumCarb }}</p>
                                </div>
                            </div>

                            <div class="flex flex-col bg-white p-10 w-40 h-40 rounded-full m-auto">
                                <!-- จัดคำภายใน -->
                                <div class="flex flex-col w-full h-full">
                                    <p>Total Protein</p>
                                    <p>{{ sumPro }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
       
                <!-- คำอธิบาย -->
                    <div class="flex flex-col w-full h-full m-auto">
                        <div class="flex bg-red-100 w-full h-full flex-col overflow-hidden">
                            <div class=" bg-red-600 w-80 h-80 m-auto">
                            <p class="flex text-2xl font-bold justify-center pt-3">Result</p>
                            <p v-for="(item, index) in bmr " :key="index" selected>{{ item }}</p>
                            <p>{{ status }}</p>
                        </div>
                        </div>
                    </div>
                </div>


            <!-- ปุ่ม -->
                <div class="m-auto">
                    <button @click="backPage" id="page-5B"
                    class="m-auto bg-gray-400 hover:bg-gray-600 text-3xl text-center px-5 py-3 rounded-full">Back</button>
                </div>
        </div>
    </div>

</template>

<style scoped>
.butSty{
    border-radius: 100%;
}
</style>