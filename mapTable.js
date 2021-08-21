let mapData =
    [
        { Location: "Bedford", Name: "Animal Rescue League of New Hampshire", Address: "545 NH-101, Bedford, NH 03110", },

        { Location: "Charlestown", Name: " River Valley Animal Protection", Address: "60 Cummings Ave, Charlestown, NH 03603", },

        { Location: "Chichester", Name: "Live & Let Farm", Address: "20 Paradice Ln, Chichester, NH 03258", },

        { Location: "Concord", Name: "Pope Memorial SPCA of Concord", Address: "94 Silk Farm Rd, Concord, NH 03301", },

        { Location: "Conway", Name: "Conway Area Humane Society", Address: "223 E Main St, Conway, NH 03818", },

        { Location: "Derry", Name: "The Greater Derry Humane Society", Address: "11 Beaver Lake Rd, Derry, NH 03038", },

        { Location: "Dover", Name: "Pope Memorial Humane Society - Cocheco Valley", Address: "221 County Farm Rd, Dover, NH 03820", },

        { Location: "Enfield", Name: "Upper Valley Humane Society", Address: "300 Old Rte 10, Enfield, NH 03748" },

        { Location: "Franklin", Name: "Franklin Animal Shelter", Address: "19 Rescue Road, Franklin, NH 03235", },

        { Location: "Hudson", Name: "Happy Tails Pet Rescue", Address: "14 Pine Rd, Hudson, NH 03051", },

        { Location: "Laconia", Name: "New Hampshire Humane Society", Address: "1305 Meredith Center Rd, Laconia, NH 03246", },

        { Location: "Littleton", Name: "Second Chance Animal Rescue", Address: "1517 Meadow St, Littleton, NH 03561", },

        { Location: "Manchester", Name: "Manchester Animal Shelter", Address: "490 Dunbarton Rd, Manchester, NH 03102", },

        { Location: "Nashua", Name: "Humane Society for Greater Nashua", Address: "24 Ferry Rd, Nashua, NH 03064", },

        { Location: "New Boston", Name: "Canine Commitment", Address: "733 Bedford Rd, New Boston, NH 03070", },

        { Location: "Northwood", Name: "Mary's Dogs Rescue & Adoption", Address: "984 1st New Hampshire Turnpike, Northwood, NH 03261", },

        { Location: "Ossipee", Name: "Lakes Region Humane Society", Address: "11 Old Rte 28, Ossipee, NH 03864", },

        { Location: "Salem", Name: "Salem Animal Rescue League", Address: "4 SARL Dr, Salem, NH 03079", },

        { Location:"Seabrook", Name: "Cat Tales Rescue", Address: "920 Lafayette Rd #201, Seabrook, NH 03874", },

        { Location: "Stratham", Name: "New Hampshire SPCA", Address: "104 Portsmouth Ave, Stratham, NH 03885", },

        { Location: "Sugar Hill", Name: "Above the Notch Humane Society", Address: "298 NH-18, Sugar Hill, NH 03586", },

        { Location: "Swanzey", Name: "Monadnock Humane Society", Address: "101 W Swanzey Rd, Swanzey, NH 03446" , },

        { Location: "Weare", Name: "Hearts And Tails Animal Alliance", Address: "35 Daniels Rd, Weare, NH 03281", },

        { Location: "Weare", Name: "We Are Animal Guardians", Address: "15 Flanders Memorial Rd, Weare, NH 03281", },
    ];

    const generateTableHead = (table, data) => {
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
    };

    const table = document.querySelector("table");
    let data = Object.keys(mapData[0]);

    generateTable(table, mapData);
    generateTableHead(table, data);

// Collapsible Data Table Functionality
// calculates screen size 
const collapse = document.getElementsByClassName("button-collapsible");
let i;

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;

        if (content.style.display === "flex") {
            content.style.display = "none";
        } else { content.style.display = "flex";
        }
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
};