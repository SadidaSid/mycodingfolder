

var getrecords=function ( ) {
let url = 'http://127.0.0.1:5000/api/jsondata';

fetch(url)
.then(res => res.json())
.then((out) => {
 // console.log('Checkout this JSON! ', out);  
 console.log('check id ', out.lbstream.parcelid.source);
 sn=out.lbstream.parcelid.source;

// console.log('check id ', out.lbstream.parcelid.source[0] .record);
text=''
 for(i=0;i<  sn.length; i++ )
 {
 	console.log('check id ', sn[i].sourcename);
 	text+=sn[i].sourcename +  ' ,   ';
 	
 }
 var snentry = document.getElementById("sourcename");
 snentry.innerText=text;
 
 var parcelIdentry = document.getElementById("parcelid");
 parcelIdentry.innerText=out.lbstream.parcelid.id;
 
 mydata=out.lbstream.parcelid.source[0].record;
 var table = document.createElement("table");
mykeys=Object.keys(mydata);

 var tr1 = document.createElement("tr");
    var th1 = document.createElement("th");
    th1.innerText = 'PropertyName';
    var th2= document.createElement("th");
    th2.innerText = 'Description';
    var th3= document.createElement("th");
    th3.innerText = 'Update Date';
    var th4= document.createElement("th");
    th4.innerText = 'Value';

     tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);

    table.appendChild(tr1);
    Object.keys(mydata).forEach(function(key) {
    	
   var tr = document.createElement("tr");
    var val = mydata[key];
   
   // console.log('key', key);
    var thkey = document.createElement("th");
    thkey.innerText = key;
    
   // console.log('value ', JSON.stringify(val.description)); 
    var tddescrp = document.createElement("td");
    tddescrp.innerText = JSON.stringify(val.description);
    
    // console.log('value ', JSON.stringify(val.update_date)); 
      var tdupdatedate = document.createElement("td");
    tdupdatedate.innerText = JSON.stringify(val.update_date);

   //   console.log('value ', JSON.stringify(val.value)); 
       var tdvalue= document.createElement("td");
   tdvalue.innerText =  "               " +  JSON.stringify(val.value);
   
   tr.appendChild(thkey);
    tr.appendChild(tddescrp);
  tr.appendChild(tdupdatedate);
tr.appendChild(tdvalue);

    table.appendChild(tr);

      
});
document.body.appendChild(table);
var dvTable = document.getElementById("RecordTable");
     dvTable.innerHTML = "";
        dvTable.appendChild(table);
          document.getElementById ( "RecordTable" ).style.maxHeight = "250px";
          document.getElementById ( "RecordTable" ).style.overflow = "auto";

        mydata=out.lbstream.parcelid.source[1].record;
 var table = document.createElement("table");
mykeys=Object.keys(mydata);

 var tr1 = document.createElement("tr");
    var th1 = document.createElement("th");
    th1.innerText = 'PropertyName';
    var th2= document.createElement("th");
    th2.innerText = 'Description';
    var th3= document.createElement("th");
    th3.innerText = 'Update Date';
    var th4= document.createElement("th");
    th4.innerText = 'Value';

     tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);

    table.appendChild(tr1);
    Object.keys(mydata).forEach(function(key) {
    	
   var tr = document.createElement("tr");
    var val = mydata[key];
   
   // console.log('key', key);
    var thkey = document.createElement("th");
    thkey.innerText = key;
    
   // console.log('value ', JSON.stringify(val.description)); 
    var tddescrp = document.createElement("td");
    tddescrp.innerText = JSON.stringify(val.description);
    
    // console.log('value ', JSON.stringify(val.update_date)); 
      var tdupdatedate = document.createElement("td");
    tdupdatedate.innerText = JSON.stringify(val.update_date);

   //   console.log('value ', JSON.stringify(val.value)); 
       var tdvalue= document.createElement("td");
   tdvalue.innerText =  "               " +  JSON.stringify(val.value);
   
   tr.appendChild(thkey);
    tr.appendChild(tddescrp);
  tr.appendChild(tdupdatedate);
tr.appendChild(tdvalue);

    table.appendChild(tr);

      
});
document.body.appendChild(table);
var dvTable = document.getElementById("RecordTable2");
     dvTable.innerHTML = "";
        dvTable.appendChild(table);
        document.getElementById ( "RecordTable2" ).style.maxHeight = "250px";
        document.getElementById ( "RecordTable2" ).style.overflow = "auto";

})
.catch(err => { throw err });

}

window.onload=getrecords;