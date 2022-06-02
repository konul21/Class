// constructor

// function User(name,surname,age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }

// // User.prototype.fullName = function(){
// //     console.log('nese');
// // }

// User.prototype.friends = ['dost1', 'dost2'];

// let arif = new User('Arif', 'Qulu', 34);
// let akif = new User('Akif', 'Qulu', 43);

// arif.friends.push('dost3');

// console.log(arif.friends);
// console.log(akif.friends);



class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    // this.friends  = ['dost1', 'dost2']
  }


  //   fullName(){
  //       console.log('nese');
  //   }


}



let arif = new User('Arif', 'Qulu', 34);
let akif = new User('Akif', 'Qulu', 43);

// arif.friends.push('dost3');

console.log(arif);
console.log(akif);



// Person sub class 
// User super class
// class Person extends User {

//     constructor(name,surname, age, job){
//         super(name,surname,age);
//         this.is = job
//     }


//     salam(){
//         console.log('salam');
//     }

// }


// let orxan = new Person('Orxan', 'Zeynalli', 34, 'reper');

// Person.salam();


// console.log(orxan instanceof Person );
// console.log(arif instanceof User );
// console.log(akif instanceof User );
// console.log(arif instanceof Person );
// console.log(orxan instanceof User);





class Sirket {
  constructor(sirketAdi, filialAdi) {
    this.sirket = sirketAdi,
      this.filial = filialAdi
  }



  isciler = [
    [],
    [],
    []
  ]

  gonder() {
    let data = this.isciler;
    let ad = document.querySelector('#ad').value;
    let maas = document.querySelector('#maas').value;
    let vezife = document.querySelector('#vezife').value;
    data[0].push(ad);
    data[1].push(maas);
    data[2].push(vezife);
  }

  tableQur() {
    let data = this.isciler;
    let ekran = `<tr>
        <th scope="col">#</th>
        <th scope="col">Ad</th>
        <th scope="col">Maas</th>
        <th scope="col">Vezife</th>
      </tr>`;

    for (let i = 0; i < data[0].length; i++) {
      if (data[0][i] == '' || data[1][i] == '' || data[2][i] == '') {
        alert('Melumatlari doldurun')
      } else {


        ekran += `  <tr>
      <th scope="row"> ${i + 1} </th>
      <td> ${data[0][i]} </td>
      <td>${data[1][i]}</td>
      <td>${data[2][i]}</td>
    </tr>`

      }

    }


    return ekran;
  }



}




let a = new Sirket('YupTech', 'Nizami');
let b = new Sirket('YupTech', 'Elmler');
let c = new Sirket('YupTech', 'Yasamal');


let arr = [];

arr.push(a.filial, b.filial, c.filial);

let ekran = ` <option selected disabled > Filial Secin </option>`

for (let i = 0; i < arr.length; i++) {
  ekran += `<option value="${i}"> ${arr[i]} </option>`
}

document.querySelector("#slc").innerHTML = ekran;


document.querySelector("#sirketAdi").innerHTML = a.sirket;
// document.querySelector("#sirketFlial").innerHTML = a.filial;


let slc = document.querySelector('#slc');
let filial = document.querySelector('#sirketFlial')

slc.addEventListener('change', SelectQur);

function SelectQur() {
  if (slc.value == 0) {
    filial.innerHTML = a.filial

  } else if (slc.value == 1) {
    filial.innerHTML = b.filial
  } else {
    filial.innerHTML = c.filial
  }
}

function send() {

  a.gonder();

  document.querySelector('#tbl').innerHTML = a.tableQur();

}
