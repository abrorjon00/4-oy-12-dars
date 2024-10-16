// 1-masala
// function Yigindi(arg) {
//     let sum = 0; 
//     for (let i = 0; i < arg.length; i++) {
//         sum += arg[i]
//     }
//     return sum
// }
// let arr = [2, 3, 4, 5]
// console.log(Yigindi(arr));



// 2-misol
// function AddElement(arg) {
// return Math.min(...arg)

// }
// let arr = [2, 3, 4, 1, 4];
// console.log(AddElement(arr));



// 3-misol
// function Length(arg) {
// return arg.length

// }
// let arr = "salom"
// console.log(Length(arr));


// 4-misol
// function Tartiblash(arg) {
// let res = arg.sort(function(a, b) {
//     return b - a
// })
//     return res
// }
// let arr = [1, 4, 7, 2, 1]
// console.log(Tartiblash(arr));



// 5-misol
// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);
//   }

//   let array1 = [1, 2, 3];
//   let array2 = [4, 5, 6];
//     console.log(mergeArrays(array1, array2)); 


// 6-misol
// function Teskari(arg) {
//  return arg.reverse()
// }
// let arr = [2, 3, 4, 5]
// console.log(Teskari(arr));



// 7-misol
// function Musbatson(arg) {
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] > 0) {
//             res.push(arg[i])
//         }
//     }
//     return res
// }
// let arr = [2, -4, -3, 4, 6, 7]
// console.log(Musbatson(arr));



// 9-misol
// function ajratish(massiv) {
//     let musbat = [];
//     let manfiy = [];

//     for(let i = 0; i < massiv.length; i++) {
//         if(massiv[i] >= 0) {
//             musbat.push(massiv[i]);
//         } else {
//             manfiy.push(massiv[i]);
//         }
//     }

//     return { musbat, manfiy };
// }   

// let massiv = [1, -2, 3, -4, 5, -6];
// let result = ajratish(massiv);

// console.log("Musbat sonlar:", result.musbat);
// console.log("Manfiy sonlar:", result.manfiy);



// 10-misol
// let massiv = [1, 2, '2', '5', 9, '32'];

// function toNumber() {
//   let res = [];
//   for (let i = 0; i <= massiv.length - 1; i++) {
//     res.push(Number(massiv[i]));
//   }
//   console.log(res);
// }

// toNumber();


// 11-misol
// function ortachaQiymat(massiv) {
//     let summa = 0;


//     for (let i = 0; i < massiv.length; i++) {
//         summa += massiv[i];
//     }
//     return summa / massiv.length;
// }


// let sonlar = [10, 20, 30, 40, 50];
// console.log(ortachaQiymat(sonlar))



// 12-masala
// function ajratish(massiv) {
//     let juft = [];
//     let toq = [];

//     for(let i = 0; i < massiv.length; i++) {
//         if(massiv[i] % 2 == 0) {
//             juft.push(massiv[i]);
//         } else {
//             toq.push(massiv[i]);
//         }
//     }

//     return { juft, toq };
// }   

// let massiv = [1, 2, 3, 4, 5, 7];
// let result = ajratish(massiv);

// console.log("juft sonlar:", result.juft);
// console.log("toq sonlar:", result.toq);


// 13-masala
// function olibtashlash(arg) {
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         arg.shift()
//         res.push(arg[i])
//     }
//     return res
// }
// let arr = [1, 2, 3,4];
// console.log(olibtashlash(arr));



// 14-misol
// function Kvadratson(arg) {
//     let res = [];
//     for(let i = 0; i < arg.length; i++) {
//         res.push(arg[i] ** 2)
//     }
//     return res
// }
// let arr = [1, 2, 3, 4];
// console.log(Kvadratson(arr));



// 15-misol
// function Ikkibaravar(arg) {
//         let res = [];
//         for(let i = 0; i < arg.length; i++) {
//             res.push(arg[i] * 2)
//         }
//         return res
//     }
//     let arr = [1, 2, 3, 4];
//     console.log(Ikkibaravar(arr));



// 16-misol
// function olibTashlsh(arg) {
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] != undefined && arg[i] != null) {
//             res.push(arg[i])
//         }
//     }
//     return res
// }
// let arr = [undefined, null, 2, 3, 4]
// console.log(olibTashlsh(arr));



// 17-misol
// function Boshharf(arg) {
//     let res = [];
//     for (let i = 0; i< arg.length; i++) {
//         res.push(arg[i].toUpperCase())
//     }
//     return res
// }
// let arr = 'salom'
// console.log(Boshharf(arr));



// 18-misol
// function qiymatSoniniHisoblash(massiv, qiymat) {
//     let hisob = 0;


//     for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] === qiymat) {
//             hisob++;
//         }
//     }

//     return hisob;
// }

// let sonlar = [1, 2, 3, 2, 4, 2, 5];
// let qiymat = 2;
// let natija = qiymatSoniniHisoblash(sonlar, qiymat);
// console.log(natija); 



// 19-misol
// function Elementqoshish(arg) {
//     arg.push(12)
//     return arg
// }
// let arr = [2, 3, 4];
// console.log(Elementqoshish(arr));



// 20-misol
// function LengthElement(arg) {
//     return arg.length
// }
// let arr = 'salom, hayr'
// console.log(LengthElement(arr));



// 22-misol
// function massivniBirlashtirish(massiv) {
//     return massiv.join(", ");
// }
// let elementlar = ["olma", "banan", "apelsin", "xurmo"];
// let natija = massivniBirlashtirish(elementlar);
// console.log(natija);


// 23-masala
// function faqatRaqamlar(massiv) {
//     return massiv.filter(element => typeof element === 'number');
// }

// /
// let elementlar = [1, 'salom', 3, 'dunyo', 5, null, 7, 10];
// let raqamlar = faqatRaqamlar(elementlar);
// console.log(raqamlar);


// 24-misol
// function oxirgiNElementlar(massiv, n) {
    
//     return massiv.slice(-n);
// }


// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let oxirgiElementlar = oxirgiNElementlar(sonlar, 3);
// console.log(oxirgiElementlar); 
