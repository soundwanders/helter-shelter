const shelterMap = L.map('map-display').setView([43.441086332706374, -71.82000972872403] , 8);
                
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
minZoom: 7,
id: 'mapbox/streets-v11',
tileSize: 512,
iconSize: (30, 30) ,
zoomOffset: -1,
accessToken: 'pk.eyJ1Ijoic291bmR3YW5kZXJzIiwiYSI6ImNrcmpsZmFkaTcwcWEzMW10MXBpbXdrdTMifQ.BCHaQ4HmyW_TKhwQsxRbAQ'
}).addTo(shelterMap);

// override Leaflet default icon to pass custom icon parameters
const iconOptions = {
    iconUrl: 'media/icons/map-icon.png' ,
    iconSize: [ 30, 30 ] ,
};

// Assigning the custom icon paramaters to a new Icon variable
const smallIcon = L.icon(iconOptions);

// Set options for the map markers
const markerOptions = {
    title: this.value ,
    clickable: true ,
    draggable: false ,
    icon: smallIcon ,
};

// Create an array of data then loop through to create a pin for each location using bind
let pins =
    [
        [
            "Bedford <br/> Animal Rescue League of New Hampshire <br/> 545 NH-101, Bedford, NH 03110", 
            42.90899271926205, -71.5670055232745
        ] ,
        [
            "Charlestown <br/> River Valley Animal Protection <br/> 60 Cummings Ave, Charlestown, NH 03603",
            43.237437440869456, -72.42256720798986
        ] ,
        [
            "Chichester <br/> Live & Let Farm <br/> 20 Paradice Ln, Chichester, NH 03258", 
            43.21022313179583, -71.41382396891218
        ] ,
        [
            "Concord <br/> Pope Memorial SPCA of Concord <br/> 94 Silk Farm Rd, Concord, NH 03301", 
            43.17797488092451, -71.57122347422742
        ] ,
        [
            "Conway <br/> Conway Area Humane Society <br/> 223 E Main St, Conway, NH 03818", 
            43.97781369967596, -71.1100240508895
        ] ,
        [
            "Derry <br/> The Greater Derry Humane Society <br/> 11 Beaver Lake Rd, Derry, NH 03038", 
            42.90696976682642, -71.28462149754908
        ] ,
        [
            "Dover <br/> Pope Memorial Humane Society - Cocheco Valley <br/> 221 County Farm Rd, Dover, NH 03820", 
            43.218264375114536, -70.9307315619577
        ] ,
        [
            "Enfield <br/> Upper Valley Humane Society <br/> 300 Old Rte 10, Enfield, NH 03748",
            43.58179476977152, -72.16305625023782
        ] ,
        [
            "Franklin <br/> Franklin Animal Shelter <br/> 19 Rescue Road, Franklin, NH 03235", 
            43.41516604997343, -71.6645171969221
        ] ,
        [
            "Hudson <br/> Happy Tails Pet Rescue <br/> 14 Pine Rd, Hudson, NH 03051", 
            42.7074140097934, -71.40750910763715
        ] ,
        [
            "Laconia <br/> New Hampshire Humane Society <br/> 1305 Meredith Center Rd, Laconia, NH 03246", 
            43.63099127848263, -71.36545040256439
        ] ,
        [
            "Littleton <br/> Second Chance Animal Rescue <br/> 1517 Meadow St, Littleton, NH 03561", 
            44.311944563627286, -72.02325679904196
        ] ,
        [
            "Manchester <br/> Manchester Animal Shelter <br/> 490 Dunbarton Rd, Manchester, NH 03102", 
            43.597342526041565, -71.51698816320429
        ] ,
        [
            "Nashua <br/> Humane Society for Greater Nashua <br/> 24 Ferry Rd, Nashua, NH 03064", 
            42.78133633006082, -71.48803780246365
        ] ,
        [
            "New Boston <br/> Canine Commitment <br/> 733 Bedford Rd, New Boston, NH 03070", 
            42.963817700786706, -71.61916037301043
        ] ,
        [
            "Northwood <br/> Mary's Dogs Rescue & Adoption <br/> 984 1st New Hampshire Turnpike, Northwood, NH 03261", 
            43.2307150104135, -71.1631204070168
        ] ,
        [
            "Ossipee <br/> Lakes Region Humane Society <br/> 11 Old Rte 28, Ossipee, NH 03864", 
            43.701499940709354, -71.07464196054205
        ] ,
        [
            "Salem <br/> Salem Animal Rescue League <br/> 4 SARL Dr, Salem, NH 03079", 
            42.774256733036836, -71.14367773124076
        ] ,
        [
            "Seabrook <br/> Cat Tales Rescue <br/> 920 Lafayette Rd #201, Seabrook, NH 03874", 
            42.90254490291506, -70.86815684539962
        ] ,
        [
            "Stratham <br/> New Hampshire SPCA <br/> 104 Portsmouth Ave, Stratham, NH 03885", 
            43.01669380802378, -70.91480667280028
        ] ,
        [
            "Sugar Hill <br/> Above the Notch Humane Society <br/> 298 NH-18, Sugar Hill, NH 03586", 
            44.241921626015284, -71.76077076744905
        ] ,
        [
            "Swanzey <br/> Monadnock Humane Society <br/> 101 W Swanzey Rd, Swanzey, NH 03446" , 
            42.93483097189659, -72.14343359063717
        ] ,
        [
            "Weare <br/> Hearts And Tails Animal Alliance <br/> 35 Daniels Rd, Weare, NH 03281", 
            43.07542973659716, -71.5501718718713
        ] ,
        [
            "Weare <br/> We Are Animal Guardians <br/> 15 Flanders Memorial Rd, Weare, NH 03281", 
            43.11613860902086, -71.86004564719458
        ] ,
    ];

for (let i = 0; i < pins.length; i++) {
    marker = new L.marker([pins[i][1] , pins[i][2]] , markerOptions)
        .bindPopup(pins[i][0])
        .addTo(shelterMap);
};

// Reset the map to the initial view/zoom level
const resetBtn = document.getElementById("resetButton");

resetBtn.addEventListener('click', function() {
    shelterMap.flyTo([43.441086332706374, -71.82000972872403] , 8);
});