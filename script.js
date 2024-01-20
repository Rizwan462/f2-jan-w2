let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.
let arr2 = [
  { id: 4, name: 'Mith', age: 29, profession: 'SDE' },
  { id: 5, name: 'john', age: 24, profession: 'developer' },
  { id: 6, name: 'rose', age: 44, profession: 'intern' },
];

function PrintDeveloper() {
  //Write your code here , just console.log
  arr.map((developler)=>{
    if(developler.profession === 'developer'){
      console.log(developler);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4, name:"susan", age:"20", profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let arr1 = arr.filter((developer)=>developer.profession!=='admin');
  console.log(arr1);
}

function concatenateArray() {
  //Write your code here, just console.log
  arr2.forEach((developer) => arr.push(developer));
  console.log(arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
