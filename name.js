let paragraph = document.createElement('p');
paragraph.innerText = "Welcome To JavaScript DOM Manipulation"
document.body.appendChild(paragraph);
paragraph.className="text";
console.log(paragraph);


let div3= document.createElement('div')
let Mainheading =document.createElement('h1')
Mainheading.innerText = "Every Tag Is A Object"
let subheading =document.createElement('h2')
subheading.innerText="Method"
div3.appendChild(Mainheading);
div3.appendChild(subheading);
document.body.appendChild(div3);
Mainheading.className="text1"
console.log(Mainheading)
subheading.className="text2"
console.log(subheading)


let ul= document.createElement('ul')
let list1= document.createElement('li1')
list1.innerText='Thar'
let list2= document.createElement('li2')
list2.innerText='Benz'
let list3= document.createElement('li3')
list3.innerText='Audi'
ul.appendChild(list1)
ul.appendChild(list2)
ul.appendChild(list3)
document.body.appendChild(ul);
ul.className="table"
console.log(ul)
list1.className="table1"









  const table = document.createElement('table');
  const row1 = document.createElement('tr');
  const cell1_1 = document.createElement('td');
  cell1_1.innerText = 'Item, Cost';
  const cell1_2 = document.createElement('td');
  cell1_2.innerText = 'cup, 100Rs';
  row1.appendChild(cell1_1);
  row1.appendChild(cell1_2);
  const row2 = document.createElement('tr');
  const cell2_1 = document.createElement('td');
  cell2_1.innerText = 'Item, Cost';
  const cell2_2 = document.createElement('td');
  cell2_2.innerText = 'Bottle, 120Rs';
  row2.appendChild(cell2_1);
  row2.appendChild(cell2_2);
  table.appendChild(row1);
  table.appendChild(row2);
  document.body.appendChild(table);
 


  
  let div1= document.createElement('div')
  let img= document.createElement('img')
  let p= document.createElement('p')
  div1.className="container"
  console.log(div1)
  img.src = "3.jpeg";
img.className = "img";
// img.alt = "3 Movie";


p.innerText = "3 Movie";


div1.append(img, p);
document.body.appendChild(div1);



let o1M = document.createElement("ol");
let olS = document.createElement("ol");
let l1 = document.createElement("li");
let l2 = document.createElement("li");
let lS = document.createElement("li");
o1M.innerText = "Main Order list";
olS.innerText = "Sub Order list";
l1.innerText="main ordered list item-1"
l2.innerText = "main ordered list item-2"
lS.innerText = "inside ordered list item-1"
olS.appendChild(lS);
l2.appendChild(olS);
o1M.append(l1,l2)
document.body.appendChild(o1M)


let section = document.createElement("section");
let h2 = document.createElement("h2");
let h4 = document.createElement("h4");
section.className = "sec";
h2.innerText="Heading of section tag";
p.innerText = "Paragarph tag";
section.append(h2, h4);
document.body.appendChild(section);


let  dl = document.createElement("dl");

let dt1 = document.createElement("dt");
let dt2 = document.createElement("dt");
let dt3 = document.createElement("dt");

let dd1 = document.createElement("dd");
let dd2 = document.createElement("dd");
let dd3 = document.createElement("dd");

dt1.innerText = "dt1";
dt2.innerText = "dt2";
dt3.innerText = "dt3";

dd1.innerText = "dd1";
dd2.innerText = "dd2";
dd3.innerText = "dd3";

dt1.appendChild(dd1);
dt2.appendChild(dd2);
dt3.appendChild(dd3);

dl.append(dt1,dt2,dt3);
document.body.appendChild(dl);



let quote = document.createElement("div");
let blockquote = document.createElement("blockquote");

blockquote.innerText = "blockquote text";
div.innerText = "div text";

div.appendChild(blockquote);
document.body.appendChild(quote);


let div2 = document.createElement("div");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");

p1.innerText = "Paragraph tag 1";
p2.innerText = "Paragraph tag 2";
p3.innerText = "Paragraph tag 3";

div.innerHTML = "div tag";

div.append(p1,p2,p3);

document.body.appendChild(div2);
