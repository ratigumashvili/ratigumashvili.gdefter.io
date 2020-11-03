var mylat = '41.109254';
var mylong = '42.703276';
var myzoom = '8';

var map = L.map('articleMap').setView([mylat, mylong], myzoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.addControl(new L.Control.Fullscreen());

markers = [{
    "name": "<h6 class='map-title'>სოფლის სახელი</h6>ლივის სახელი. ნაჰიეს სახელი. რეგისტრირებული პირი: 86. <a href='cave-article.html'>დაწვრილებით</a>",
    "textContent": "",
    "lat": 40.912216,
    "lng": 42.704745
}






];



for (var i = 0; i < markers.length; ++i) {
    L.marker([markers[i].lat, markers[i].lng], {
        icon: new L.DivIcon({
            className: 'my-div-icon',
            html: '<span class="my-map-label">' + markers[i].textContent + '</span>'
        })
    }).addTo(map);

    L.marker([markers[i].lat, markers[i].lng]).addTo(map).bindPopup(markers[i].name);
}
