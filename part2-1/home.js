var arr = Array();
var n = Number(prompt("Ente number of array element"));
for(i=0; i<n ;i++){
      arr[i] = Number(prompt("Enter array element"));
}

let  sum = 0;
for(let i =0; i< arr.length; i++) {
     sum += arr[i];
}
document.write("sum = ",sum,"<br>");
document.write('average = ', sum/n);