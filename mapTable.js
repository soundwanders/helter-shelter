let mapData =
    [
        { Location: "Bedford", Name: "Animal Rescue League of New Hampshire", Address: "545 NH-101, Bedford, NH 03110", 
        Latitude: 42.88017166872979, Longitude: -71.57145002651751
        },

        { Location: "Charlestown", Name: " River Valley Animal Protection", Address: "60 Cummings Ave, Charlestown, NH 03603",
        Latitude: 43.25343420053334, Longitude: -72.27105875717771
        },

        { Location: "Chichester", Name: "Live & Let Farm", Address: "20 Paradice Ln, Chichester, NH 03258", 
        Latitude: 43.27309109525063, Longitude: -71.61676265840609
        },

        { Location: "Concord", Name: "Pope Memorial SPCA of Concord", Address: "94 Silk Farm Rd, Concord, NH 03301", 
        Latitude: 43.241086332706374,Longitude: -71.82000972872403
        },

        { Location: "Conway", Name: "Conway Area Humane Society", Address: "223 E Main St, Conway, NH 03818", 
        Latitude: 43.994603572767254,Longitude: -71.04689021327206
        },

        { Location: "Derry", Name: "The Greater Derry Humane Society", Address: "11 Beaver Lake Rd, Derry, NH 03038", 
        Latitude: 42.92103589577785, Longitude: -71.25009087535844
        },

        { Location: "Dover", Name: "Pope Memorial Humane Society - Cocheco Valley", Address: "221 County Farm Rd, Dover, NH 03820", 
        Latitude: 43.23227695833639, Longitude: -70.8630601671781
        },

        { Location: "Enfield", Name: "Upper Valley Humane Society", Address: "300 Old Rte 10, Enfield, NH 03748",
        Latitude: 43.61734117845991, Longitude: -72.08164451714268
        },

        { Location: "Franklin", Name: "Franklin Animal Shelter", Address: "19 Rescue Road, Franklin, NH 03235", 
        Latitude: 43.42856839976283, Longitude: -71.58582048313339
        },

        { Location: "Hudson", Name: "Happy Tails Pet Rescue", Address: "14 Pine Rd, Hudson, NH 03051", 
        Latitude: 42.72227834132841, Longitude: -71.34458524183644
        },

        { Location: "Laconia", Name: "New Hampshire Humane Society", Address: "1305 Meredith Center Rd, Laconia, NH 03246", 
        Latitude: 43.63099127848263, Longitude: -71.36545040256439
        },

        { Location: "Littleton", Name: "Second Chance Animal Rescue", Address: "1517 Meadow St, Littleton, NH 03561", 
        Latitude: 44.311944563627286,Longitude: -72.02325679904196
        },

        { Location: "Manchester", Name: "Manchester Animal Shelter", Address: "490 Dunbarton Rd, Manchester, NH 03102", 
        Latitude: 43.597342526041565,Longitude: -71.51698816320429
        },

        { Location: "Nashua", Name: "Humane Society for Greater Nashua", Address: "24 Ferry Rd, Nashua, NH 03064", 
        Latitude: 42.79995651951563, Longitude: -71.61334325859174
        },

        { Location: "New Boston", Name: "Canine Commitment", Address: "733 Bedford Rd, New Boston, NH 03070", 
        Latitude: 42.98273072288184, Longitude: -71.52338484097939
        },

        { Location: "Northwood", Name: "Mary's Dogs Rescue & Adoption", Address: "984 1st New Hampshire Turnpike, Northwood, NH 03261", 
        Latitude:  43.2307150104135, Longitude: -71.1631204070168
        },

        { Location: "Ossipee", Name: "Lakes Region Humane Society", Address: "11 Old Rte 28, Ossipee, NH 03864", 
        Latitude: 43.701499940709354,Longitude: -71.07464196054205
        },

        { Location: "Salem", Name: "Salem Animal Rescue League", Address: "4 SARL Dr, Salem, NH 03079", 
        Latitude: 42.774256733036836,Longitude: -71.14367773124076
        },

        { Location:"Seabrook", Name: "Cat Tales Rescue", Address: "920 Lafayette Rd #201, Seabrook, NH 03874", 
        Latitude: 42.94488441193613, Longitude: -70.78387548513204
        },

        { Location: "Stratham", Name: "New Hampshire SPCA", Address: "104 Portsmouth Ave, Stratham, NH 03885", 
        Latitude: 43.03077429588942, Longitude: -70.88549902029635
        },

        { Location: "Sugar Hill", Name: "Above the Notch Humane Society", Address: "298 NH-18, Sugar Hill, NH 03586", 
        Latitude: 44.24835044609184, Longitude: -71.72835566235251
        },

        { Location: "Swanzey", Name: "Monadnock Humane Society", Address: "101 W Swanzey Rd, Swanzey, NH 03446" , 
        Latitude: 42.93483097189659, Longitude: -72.14343359063717
        },

        { Location: "Weare", Name: "Hearts And Tails Animal Alliance", Address: "35 Daniels Rd, Weare, NH 03281", 
        Latitude: 43.07542973659716, Longitude: -71.5501718718713
        },

        { Location: "Weare", Name: "We Are Animal Guardians", Address: "15 Flanders Memorial Rd, Weare, NH 03281", 
        Latitude: 43.11613860902086, Longitude: -71.86004564719458
        },
    ];

    
    const dataTableHead = (table, data) => {
        let tableHeader = table.createTHead();
        let row = tableHeader.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    };

    const generateTable = (table, data) => {
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let tableText = document.createTextNode(element[key]);
                cell.appendChild(tableText);
            }
        }
    }

    const table = document.querySelector("table");
    let data = Object.keys(mapData[0]);


    generateTable(table, mapData);
    dataTableHead(table, data);