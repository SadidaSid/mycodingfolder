let map;


let url = 'http://127.0.0.1:5000/api/jsondata';
// console.log('check id ', out.lbstream.parcelid.source[0] .record);
function initMap() {

fetch(url)
.then(res => res.json())
.then((out) => {
 // console.log('Checkout this JSON! ', out);  
 console.log('check id ', out.lbstream.parcelid.source[0].record.Latitude));
 console.log('check id ', out.lbstream.parcelid.source[0].record.Longitude));
 lat1=JSON.stringify(out.lbstream.parcelid.source[0].record.Latitude);
 long1=JSON.stringify(out.lbstream.parcelid.source[0].record.Longitude);
})
.catch(err => { throw err });





  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat1, lng: long1},
    zoom: 8,
  });

