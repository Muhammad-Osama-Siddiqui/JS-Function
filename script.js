// 1. Function of Reverse number
function revNum(){
  num = document.getElementById("inpRev").value;
  var str2arr = num.split("").reverse();
  var arr2str = str2arr.join().replace(/,/g, "");
  document.getElementById("reverse").innerHTML = Number(arr2str);
  }
  
  // 2. Function of palindrome
  function palindrome() {
  var takeStr = document.getElementById("inpPal").value.toLowerCase().replace(' ', '');
  var b = takeStr.split("");
  var c = takeStr.split("").reverse();
  if(b.join() === c.join()){
      document.getElementById("palindrome").innerHTML = "It is palindrome";
  }else{document.getElementById("palindrome").innerHTML = "It is not palindrome";}}
  
  // 3. function of Combination
  function combination() {
  var word = document.getElementById("inpComb").value.toLowerCase();
  var combination = []; 
  for(var i = 0 ;i < word.length; i++) 
  { 
  for(var j = i+1; j< word.length + 1; j++) 
  { combination.push(word.slice(i , j));}  
  document.getElementById("combination").innerHTML = combination;
  } }
  
  // 4. function arrange string to alphabetical order
  function aO(){
  var str = document.getElementById("inpAlp").value.toLowerCase();
  var arr = str.split("");
  var alphabetsOrder = arr.sort();
  document.getElementById("alphabets").innerHTML = alphabetsOrder.join().replace(/,/g, "");
  }
  
  // 5. function capitalized each word
  function cew(str)
  {str = document.getElementById("inpCap").value.toLowerCase();
    var arr = str.split(' ');
    var newarr = [];
      
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    document.getElementById("capital").innerHTML = newarr.join(' ');
  }
  
  // 6. function find longest word
  function longWord(str)
  {str = document.getElementById("inplong").value.toLowerCase();
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];
  
    for(var x = 0 ; x < array1.length ; x++)
    {
      if(result.length < array1[x].length)
      {
      result = array1[x];
      } 
  }
    document.getElementById("longword").innerHTML = result;
  }
  
  // 7. function count vowels
  function countVowel(str) { 
  str = document.getElementById("inpvow").value.toLowerCase();
      var count = str.match(/[aeiou]/gi);
    document.getElementById("vowel").innerHTML =  count.length;
  }
  
  // 8. function check number prime or not
  function prime(num){
  num = document.getElementById("inppri").value;
  if(num == 2){
    document.getElementById("prime").innerHTML = "It is prime number";
      }else if(num == 9) {    
      document.getElementById("prime").innerHTML = "It is not prime number";}
      else{
  for(var i = 2; i < num; i++){
  if(num % i === 0){
  document.getElementById("prime").innerHTML = "It is not prime number";
  break;} else{document.getElementById("prime").innerHTML = "It is prime number";}} }}
  // 9. function return typeof
  function typeRet(){     
  var x = document.getElementById("inpret").value;
  if(x > -1) {
      document.getElementById("ret").innerHTML = "Number";
  }    
  else if(x.match("true")){
  document.getElementById("ret").innerHTML = "Boolean";
  }else if(x.match("false")){
  document.getElementById("ret").innerHTML = "Boolean";
  }
  else if(x.match(/[()]/gi)) {
   document.getElementById("ret").innerHTML = "Function";
  }else if(x === "undefined"){
    document.getElementById("ret").innerHTML = "Undefined";
  }else if(x.match(/[[, {, ;]/gi)){
   document.getElementById("ret").innerHTML = "object";
  }
  else{document.getElementById("ret").innerHTML = "string";}
      }
     
   // 10. function check min and max 2nd number
  function m() {
    inp = document.getElementById("inpm").value;
  var ca = inp.split("");
    var n = ca.sort();
  document.getElementById("maxmin").innerHTML = "2nd lowest number:" + " " + n.slice(1, 2) + " "+ "<br>"+"2nd greatest number:" + " " + n.reverse().slice(1,2);
  }  