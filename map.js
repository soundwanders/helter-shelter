let shelterMap = L.map('map-id').setView([43.01557156507228, -71.4899410452668], 8);
                
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1Ijoic291bmR3YW5kZXJzIiwiYSI6ImNrcmpsZmFkaTcwcWEzMW10MXBpbXdrdTMifQ.BCHaQ4HmyW_TKhwQsxRbAQ'
}).addTo(shelterMap);