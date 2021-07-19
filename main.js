starray = [];
darray = [];
function submit(){
for (var j=1;j<=4;j++){
    var name_1 = document.getElementById("name"+j).value;
starray.push(name_1);
    
  
}    
 var arraylenth =starray.length;
 for (var k=0;k<=arraylenth;k++){ 
  darray.push("<h4>NAME - "+ starray[k] + "</h4>")  ;
    
 }
 rcomma=darray.join(" ");document.getElementById("cname").innerHTML=rcomma;
 
 document.getElementById("dname").innerHTML= darray;
    document.getElementById("submitbtn").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
    
}

function sort1 (){

starray.sort();
dsarray=[];

var arraylenth =starray.length;
 for (var k=0;k<=arraylenth;k++){ 
  dsarray.push("<h4>NAME - "+ starray[k] + "</h4>")  ;
  rcomma=dsarray.join(" ");document.getElementById("cname").innerHTML=rcomma;
 }
}