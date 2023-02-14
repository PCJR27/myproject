const data = [
    [
        {
          "name": "ข้าว",
          "carb": 50 ,
          "protein": 5,
          "fat": 2
        },
        {
          "name": "ไข่",
          "carb": 1 ,
          "protein": 6 ,
          "fat": 5
        },
        {
          "name": "กล้วย",
          "carb": 27 ,
          "protein": 1 ,
          "fat": 0
        },
        {
          "name": "ข้าวเหนียวมะม่วง",
          "carb": 60 ,
          "protein": 5 ,
          "fat": 10
        },
          {
            "name": "ผัดไทย",
            "carb": 22 ,
            "protein": 10 ,
            "fat": 12
          },
          {
            "name": "ก๋วยเตี๋ยวเส้นเล็กหมูต้มยำ ",
            "carb": 54 ,
            "protein": 23 ,
            "fat": 22
          },
          {
            "name": "ก๋วยเตี๋ยวเส้นเล็กหมูน้ำตก  ",
            "carb": 67 ,
            "protein": 26 ,
            "fat": 10
          },
          {
            "name": "ข้าวขาหมู",
            "carb": 62 ,
            "protein": 22 ,
            "fat": 20
          },
          {
            "name": "ราดหน้าหมู",
            "carb": 33.7 ,
            "protein": 58.7 ,
            "fat": 30
          },
          {
            "name": "ต้มยำกุ้ง ",
            "carb": 26.25 ,
            "protein": 80.5 ,
            "fat": 2.75
          },
          {
            "name": "แกงมัสมั่น",
            "carb": 20 ,
            "protein": 8 ,
            "fat": 20
          },
          {
            "name": "แกงเขียวหวานไก่",
            "carb": 9 ,
            "protein": 22 ,
            "fat": 15
          },
          {
            "name": "ก๋วยเตี๋ยวไก่",
            "carb": 10 ,
            "protein": 9 ,
            "fat": 3
          },
          {
            "name": "แกงเผ็ดเนื้อ",
            "carb": 6 ,
            "protein": 19 ,
            "fat": 20
          },
          {
            "name": "แกงพะแนงกุ้ง",
            "carb": 9 ,
            "protein": 22 ,
            "fat": 15
          },
          {
            "name": "แกงเหลือง",
            "carb": 8 ,
            "protein": 4 ,
            "fat": 10
          }, 
          {
            "name": "ข้าวผัด",
            "carb": 40 ,
            "protein": 8 ,
            "fat": 10
          },
          {
            "name": "ส้มตำ",
            "carb": 15 ,
            "protein": 2 ,
            "fat": 5
          },
          {
            "name": "ปอเปี๊ยะ",
            "carb": 20 ,
            "protein": 5 ,
            "fat": 10
          },
          {
            "name": "ไก่สะเต๊ะ",
            "carb": 15 ,
            "protein": 25 ,
            "fat": 20
          },
          {
            "name": "ผัดซีอิ๊ว",
            "carb": 40 ,
            "protein": 10 ,
            "fat": 10
          },
          {
            "name": "ต้มข่าไก่",
            "carb": 10 ,
            "protein": 5 ,
            "fat": 4
          },
          {
            "name": "ลาบ",
            "carb": 15 ,
            "protein": 15 ,
            "fat": 10
          },
          {
            "name": "ข้าวซอย",
            "carb": 30 ,
            "protein": 15 ,
            "fat": 20
          },
          {
            "name": "ไก่ทอด",
            "carb": 20 ,
            "protein": 15 ,
            "fat": 20
          },
          {
            "name": "ยำปลาดุกฟู",
            "carb": 15 ,
            "protein": 10 ,
            "fat": 10
          },
          {
            "name": "สังขยา",
            "carb": 45 ,
            "protein": 6 ,
            "fat": 15
          },
          {
            "name": "กล้วยทอด",
            "carb": 22 ,
            "protein": 1 ,
            "fat": 7
          },
          {
            "name": "ข้าวต้มมัด",
            "carb": 83 ,
            "protein": 2 ,
            "fat": 2
          },
           {
            "name": "ขนมจันทร์",
            "carb": 55 ,
            "protein": 3 ,
            "fat": 22
          }, {
            "name": "ขนมเบื้อง",
            "carb": 65 ,
            "protein": 3 ,
            "fat": 17
          },
          {
            "name": "ไอศกรีมมะพร้าว",
            "carb": 14 ,
            "protein": 2 ,
            "fat": 11
          },
          {
            "name": "พิซซ่า",
            "carb": 26 ,
            "protein": 10 ,
            "fat": 9
          },
          {
            "name": "พาสต้า",
            "carb": 71 ,
            "protein": 13 ,
            "fat": 2
          },
          {
            "name": "ซูชิ",
            "carb": 22 ,
            "protein": 6 ,
            "fat": 3
          }, 
          {
            "name": "เบอร์เกอร์",
            "carb": 28 ,
            "protein": 15 ,
            "fat": 23
          },
          {
            "name": "แซนวิช",
            "carb": 48 ,
            "protein": 11 ,
            "fat": 13
          }, {
            "name": "แกงกะหรี่",
            "carb": 18 ,
            "protein": 4 ,
            "fat": 6
          },
          {
            "name": "บาร์บีคิว",
            "carb": 9 ,
            "protein": 19 ,
            "fat": 6
          },
          {
            "name": "ราเมน",
            "carb": 29 ,
            "protein": 8 ,
            "fat": 3
          },
          {
            "name": "เทมปุระ",
            "carb": 44 ,
            "protein": 3 ,
            "fat": 19
          },
          {
            "name": "ไก่เทอริยากิ",
            "carb": 23 ,
            "protein": 20 ,
            "fat": 7
          },
          {
            "name": "เส้นอุด้ง",
            "carb": 73 ,
            "protein": 8 ,
            "fat": 2
          },
          {
            "name": "ซาชิมิ",
            "carb": 1 ,
            "protein": 17 ,
            "fat": 7
          },
          {
            "name": "กล่องเบนโตะ",
            "carb": 56 ,
            "protein": 12 ,
            "fat": 13
          },
          {
            "name": "ซุปมิโสะ",
            "carb": 6 ,
            "protein": 4 ,
            "fat": 2
          },
          {
            "name": "ทาโกะยากิ",
            "carb": 18 ,
            "protein": 7 ,
            "fat": 8
          },
          {
            "name": "ทงคัตสึ",
            "carb": 26 ,
            "protein": 15 ,
            "fat": 18
          },
          {
            "name": "โอนิกิริ",
            "carb": 51 ,
            "protein": 6 ,
            "fat": 7
          },
          {
            "name": "โมจิ",
            "carb": 76 ,
            "protein": 3 ,
            "fat": 2
          },
          {
            "name": "ข้าวหน้าเนื้อ",
            "carb": 46 ,
            "protein": 16 ,
            "fat": 12
          },
          {
            "name": "กิมจิ",
            "carb": 7 ,
            "protein": 1 ,
            "fat": 0
          },
          {
            "name": "ต็อกปกกี",
            "carb": 60 ,
            "protein": 3 ,
            "fat": 5
          },
          {
            "name": "จาจังมยอน",
            "carb": 58 ,
            "protein": 12 ,
            "fat": 7
          }, {
            "name": "บิบิมบับ",
            "carb": 44 ,
            "protein": 9 ,
            "fat": 7
          },
          {
            "name": "จับแช",
            "carb": 58 ,
            "protein": 4 ,
            "fat": 1
          },
          {
            "name": "บุลโกกิ",
            "carb": 11 ,
            "protein": 19 ,
            "fat": 13
          },
      
          {
            "name": "สเต็ก",
            "carb": 0 ,
            "protein": 25 ,
            "fat": 20
          },
          {
            "name": "สปาเก็ตตี้โบโลเนส",
            "carb": 43 ,
            "protein": 12 ,
            "fat": 9
          },
          {
            "name": "ไข่เจียว",
            "carb": 2.3 ,
            "protein": 12.6 ,
            "fat": 11.5
          },
          {
            "name": "ต้มจืด",
            "carb": 4  ,
            "protein": 9 ,
            "fat": 5
          },
          {
            "name": "กะเพราหมูกรอบ",
            "carb": 15  ,
            "protein": 15 ,
            "fat": 10
          },
          {
            "name": "ข้าวมันไก่",
            "carb": 33  ,
            "protein": 7 ,
            "fat": 4
          },
          {
            "name": "ข้าวหมูทอด",
            "carb": 34.7  ,
            "protein": 11.2 ,
            "fat": 24.2
          },
          {
            "name": "กะเพราหมูสับ",
            "carb": 8.5  ,
            "protein": 6.5 ,
            "fat": 4.2
          },
          {
            "name": "ข้าวไก่ย่างเทริยากิ",
            "carb": 32  ,
            "protein": 11 ,
            "fat": 5
          },
          {
            "name": "ไก่ย่าง",
            "carb": 2.2  ,
            "protein": 10.6 ,
            "fat": 4.5
          },
          {
            "name": "หมูปิ้ง",
            "carb": 8.2  ,
            "protein": 11.4 ,
            "fat": 4.3
          },
          {
            "name": "ซาลาเปา",
            "carb": 8  ,
            "protein": 4 ,
            "fat": 0
          },
          {
            "name": "ซี่โครงหมู",
            "carb": 10  ,
            "protein": 8 ,
            "fat": 8
          }
      
        ]    
];

const duplicateCheck = arr => {
  const duplicates = [];
  const seen = new Set();
  
  for (const item of arr) {
    if (seen.has(item.name)) {
      duplicates.push(item.name);
    } else {
      seen.add(item.name);
    }
  }
  return duplicates;
};

const duplicates = duplicateCheck(data);

if (duplicates.length) {
  console.log(`Duplicates found: ${duplicates}`);
} else {
  console.log('No duplicates found.');
}
