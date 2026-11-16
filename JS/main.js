// let age = 18

// if(age >= 17){
//     console.log('მართვის მოწმობა აიღე');
// } else{
//     console.log('ვერ აიღებ');
// }



// switch

// let text = 'hello';

// switch(text){
//     case "hello":
//         console.log('hay');
//         break;
//     case "bye":
//         console.log('googdbye');
//         break;
//     default:
//         console.log('nothing');    

// }


// saklaso JS

// const age = 20
// let price;
// if( age < 12){
//     price = 5;
// } else if(age <=18){
//     price = 7;
// }
// else{
//     price = 10;
// }

// console.log('ბილეთის ფასია',price)


// davaleba JS

let timeOfDay = "morning"

switch(timeOfDay){
    case "morning":
        console.log('დილა მშვიდობის!');
        break;
    case"afternoon":
        console.log('დღე მშვიდობის!');
        break;
    case 'evening':
        console.log('საღამო მშვიდობის!') ;
        break;
    case 'night':
        console.log('ტკბილი ძილი!');
        break;
    default:
        console.log('ჯერ გეძინოს კიდე!');
}

let age = 55
let price = 10

if(age <= 18){
    console.log('შენი ტრანპორტირების საფასურია',price / 2)
}