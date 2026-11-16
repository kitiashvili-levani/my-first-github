// let newElement = document.createElement('div');
// newElement.setAttribute ('id','container');

// let h1 = document.createElement('h1')
// h1.textContent = "Document Object Model";

// let p = document.createElement ('p');
// p.textContent = "ეს ტექსტი შექმნილია JS-ით";
// p.setAttribute ('id','description');

// let button = document.createElement ('button');
// button.textContent = "დააჭირე აქ";

// document.body.append(newElement);
// newElement.append(h1);
// newElement.append(p);
// newElement.append(button);


// let a = 10;
// let b = 20;
// let c = 25;
// console.log(a+b+c);


// let birthyear = 2005;
// let currentyear = 2026;

// console.log(currentyear-birthyear);

// let math = 20;
// let english = 27;
// let javascript = 22;

// let all = (math+english+javascript) / 3;

// console.log(all);



// events ფუნქციები

// const h1 = document.querySelector ('h1');
// const button = document.getElementById ('clickme');

// button.addEventListener ('mouseover54',myclick)
// button.addEventListener ('mouseout',resetclick)

// function myclick(){
//     console.log('clicked');

//     h1.textContent = "მე ვარ H1 js დან"
//     h1.style.color = 'red'
// }

// function resetclick(){
//     h1.textContent = "მე ვარ H1 html დან"
//     h1.style.color = 'black'
// }

// ანთება ჩაქრობის ფუნქცია

let bulb = document.getElementById('bulb');
let on = document.getElementById('on');
let off = document.getElementById('off');

on.addEventListener('click',lighton);
off.addEventListener('click',lightoff);

function lighton(){
    bulb.setAttribute('src','ant.png')
}

function lightoff(){
    bulb.setAttribute('src','ch.png')
}