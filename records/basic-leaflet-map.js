var mylat = '40.846434';
var mylong = '41.400301';
var myzoom = '8';

var map = L.map('issMap').setView([mylat, mylong], myzoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.addControl(new L.Control.Fullscreen());

markers = [{
    "name": "<h6 class='map-title'>სოფლის სახელწოდება</h6><strong>სანჯაყი</strong>: ახალქალაქის ლივა. <br/> <strong>ნაჰიე:</strong> თორთუმის ნაჰიე. <br/> <strong>სახლების რაოდენობა:</strong> 80 <br/> <strong> პირები:</strong> 876. <br/> <a href='place-article.html'>დაწვრილებით</a>",
    "textContent": "",
    "lat": 40.912216,
    "lng": 42.704745
}, {
    "name": "<h6 class='map-title'>სოფლის სახელწოდება</h6><strong>სანჯაყი</strong>: ოლთის ლივა. <br/> <strong>ნაჰიე:</strong> ჩრდილი (ოლთის ლივაში). <br/> <strong>სახლების რაოდენობა:</strong> 80 <br/> <strong> პირები:</strong> 90123. <br/> <a href='place-article.html'>დაწვრილებით</a>",
    "textContent": "",
    "lat": 40.807313,
    "lng": 42.865420
}, {
    "name": "<h6 class='map-title'>სოფლის სახელწოდება</h6><strong>სანჯაყი</strong>: დიდი არტაანის ლივა. <br/> <strong>ნაჰიე:</strong> ბარდიზი. <br/> <strong>სახლების რაოდენობა:</strong> 80 <br/> <strong> პირები:</strong> 123. <br/> <a href='place-article.html'>დაწვრილებით</a>",
    "textContent": "",
    "lat": 40.939193,
    "lng": 41.987887
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
