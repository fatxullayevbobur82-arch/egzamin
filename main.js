// const ism = +prompt(`son kiriting`)  ;

// if (ism % 2 ===0){
//     alert(`juft son`)
// } else {
//     alert(`toq son`)
// }


// const ism = prompt(`ism kiriting`)

// const bot = ism.split("").reverse("").join("")

//  console.log(bot);

// const ism = prompt ("ism kiriting")

// alert(ism.length);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const juft = []
// const toq = []

// arr.forEach(raqam => {

//     if (ism % 2 === 0) {
//         alert(`juft son`)
//     } else {
//         alert(`toq son`)
//     }


// })

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const juft = [];
// const toq = [];

// arr.forEach(raqam => {
//     if (raqam % 2 === 0) {
//         juft.push(raqam);   
//     } else {
//         toq.push(raqam);    
//     }
// });

// console.log("Juft:", juft);
// console.log("Toq:", toq);



// const ism = +prompt("son kiriting")
// const nom = prompt("tanlang: 1)+   2)/   3)*   4)-  ")
// alert 



// const userName  = ("bobur")

// const yangiTag = document.createElement("h1")

// yangiTag.textContent = userName ;

// document.body.append(yangiTag)

// console.log(yangiTag);

// console.log(userName);






// const ism = prompt("ismingizni kiriting")

// const newTag = document.createElement("h2")

// newTag.textContent = ism 

// newTag.className = "text-red-500"

// console.log(ism);

// document.body.append(ism)


let div = document.createElement("div")


const num1 = +prompt("1-raqamni kiriting")
const operator = +prompt("1) + \n 2) - \n 3)/ \n 4) * ")
const num2 = +prompt("2-raqamni kiriting")

if(operator === 1){
    div.textContent =(`javob : ${num1} + ${num2} = ${num1 + num2}`);
    
}
else if(operator === 2){
    div.textContent = (`javob : ${num1} - ${num2} = ${num1 - num2}`);
    
}
else if(operator === 3){
    div.textContent = (`javob : ${num1} / ${num2} = ${num1 / num2}`);
    
}
else if(operator === 4){
    div.textContent = (`javob : ${num1} * ${num2} = ${num1 * num2}`);
    
}

div.className = "pt-[70px] rounded-xl mt-[200px] w-[500px] h-[200px] bg-black text-[30px] m-auto text-center font-bold text-2xl  text-white"

document.body.append(div)



          
















