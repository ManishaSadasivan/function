//print odd numbers in array format

const arr=[1,2,3,4,5,6,7,8,9,10];
(function() {
    const odd=arr.filter((data)=>data%2!==0)
    console.log(odd);
})();

//Convert strings into Capital
const strings=["java","python","reactjs","javascript"]
const tocapital=function (){
const output=strings.map((string)=>string.toUpperCase())
console.log(output);
}
tocapital();
// sum of all numbers in a array format
const array=[5,5,10,2,2];
const sum=function(){
const total=array.reduce((firstval,secondval)=>firstval+secondval)
console.log(total);
}
sum();
//primenumber
let num = [1,2,3,4,5,6,7,8,9,10];
let result = [];
const isPrime=function (num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

//palindrome

const str=["manisha","anina","xox"];
const func= function(){
const palindrome =str.filter((str)=>{
    val=str.split("").reverse().join("")
    if(str===val)
    {
        // palindrome.push(val);
        console.log(val);
    }
})

}
func()

//remove duplicates 
var array1 = ["java","python","python","react","javascript","javascript"];
 
    const removeDuplicates=function (array1) {
        return array1.filter((item,
            index) => array1.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(array1));

    // ------------------------------------------------------------------------------------
    //Arrow function

    //print odd numbers in array format
console.log("Below are output of arrow functions")
const arr1=[1,2,3,4,5,6,7,8,9,10];
odd=()=>{
    const odd=arr1.filter((data)=>data%2!==0)
    console.log(odd);
}
odd();
//Convert strings into Capital
const Astrings=["java","python","reactjs","javascript"]
const Atocapital=()=>{
const output=strings.map((string)=>string.toUpperCase())
console.log(output);
}
Atocapital();
// sum of all numbers in a array format
const Aarray=[5,5,10,2,2];
const Asum=()=>{
const total=array.reduce((firstval,secondval)=>firstval+secondval)
console.log(total);
}
Asum();
//primenumber
let Anum = [1,2,3,4,5,6,7,8,9,10];
let Aresult = [];
const AisPrime=(num)=> {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = AisPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

//palindrome

const Astr=["manisha","anina","xox"];
const Afunc= ()=>{
const palindrome =str.filter((str)=>{
    val=str.split("").reverse().join("")
    if(str===val)
    {
        // palindrome.push(val);
        console.log(val);
    }
})

}
func()

//remove duplicates 
var arrayofDup = ["java","python","python","react","javascript","javascript"];
 
    const AremoveDuplicates=function (array1) {
        return arrayofDup.filter((item,
            index) => arrayofDup.indexOf(item) === index);
    }
 
    console.log(AremoveDuplicates(array1));