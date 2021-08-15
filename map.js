let shelterMap = L.map('map-display').setView([43.241086332706374, -71.82000972872403] , 8);
                
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
iconSize: (30, 30) ,
zoomOffset: -1,
accessToken: 'pk.eyJ1Ijoic291bmR3YW5kZXJzIiwiYSI6ImNrcmpsZmFkaTcwcWEzMW10MXBpbXdrdTMifQ.BCHaQ4HmyW_TKhwQsxRbAQ'
}).addTo(shelterMap);

let iconOptions = {
    iconUrl: 'media/icons/map-icon.png' ,
    iconSize: [30, 30
    ] ,
 }
 
 // Creating a custom icon
let smallIcon = L.icon(iconOptions);

// Options for the marker
let markerOptions = {
    title: this.value ,
    clickable: true ,
    draggable: false ,
    icon: smallIcon ,
 }

// Array of pins to enable use of a for loop to create multiple markers
let pins =
    [
        [
            "Bedford <br/> Animal Rescue League of New Hampshire <br/> 545 NH-101, Bedford, NH 03110", 
            42.88017166872979, -71.57145002651751
        ] ,
        [
            "Charlestown <br/> River Valley Animal Protection <br/> 60 Cummings Ave, Charlestown, NH 03603",
            43.25343420053334, -72.27105875717771
        ] ,
        [
            "Chichester <br/> Live & Let Farm <br/> 20 Paradice Ln, Chichester, NH 03258", 
            43.27309109525063, -71.61676265840609
        ] ,
        [
            "Concord <br/> Pope Memorial SPCA of Concord <br/> 94 Silk Farm Rd, Concord, NH 03301", 
            43.241086332706374, -71.82000972872403
        ] ,
        [
            "Conway <br/> Conway Area Humane Society <br/> 223 E Main St, Conway, NH 03818", 
            43.994603572767254, -71.04689021327206
        ] ,
        [
            "Derry <br/> The Greater Derry Humane Society <br/> 11 Beaver Lake Rd, Derry, NH 03038", 
            42.92103589577785, -71.25009087535844
        ] ,
        [
            "Dover <br/> Pope Memorial Humane Society - Cocheco Valley <br/> 221 County Farm Rd, Dover, NH 03820", 
            43.23227695833639, -70.8630601671781
        ] ,
        [
            "Enfield <br/> Upper Valley Humane Society <br/> 300 Old Rte 10, Enfield, NH 03748",
            43.61734117845991, -72.08164451714268
        ] ,
        [
            "Franklin <br/> Franklin Animal Shelter <br/> 19 Rescue Road, Franklin, NH 03235", 
            43.42856839976283, -71.58582048313339
        ] ,
        [
            "Hudson <br/> Happy Tails Pet Rescue <br/> 14 Pine Rd, Hudson, NH 03051", 
            42.72227834132841, -71.34458524183644
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
            42.79995651951563, -71.61334325859174
        ] ,
        [
            "New Boston <br/> Canine Commitment <br/> 733 Bedford Rd, New Boston, NH 03070", 
            42.98273072288184, -71.52338484097939
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
            42.94488441193613, -70.78387548513204
        ] ,
        [
            "Stratham <br/> New Hampshire SPCA <br/> 104 Portsmouth Ave, Stratham, NH 03885", 
            43.03077429588942, -70.88549902029635
        ] ,
        [
            "Sugar Hill <br/> Above the Notch Humane Society <br/> 298 NH-18, Sugar Hill, NH 03586", 
            44.24835044609184, -71.72835566235251
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
