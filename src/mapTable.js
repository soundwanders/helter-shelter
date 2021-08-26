import './index.css';

export function mapTable() {

  const mapData =
      [
        { LOCATION: 'Bedford', NAME: 'Animal Rescue League of New Hampshire', ADDRESS: '545 NH-101, Bedford, NH 03110' },

        { LOCATION: 'Charlestown', NAME: ' River Valley Animal Protection', ADDRESS: '60 Cummings Ave, Charlestown, NH 03603' },

        { LOCATION: 'Chichester', NAME: 'Live & Let Farm', ADDRESS: '20 Paradice Ln, Chichester, NH 03258' },

        { LOCATION: 'Concord', NAME: 'Pope Memorial SPCA of Concord', ADDRESS: '94 Silk Farm Rd, Concord, NH 03301' },

        { LOCATION: 'Conway', NAME: 'Conway Area Humane Society', ADDRESS: '223 E Main St, Conway, NH 03818' },

        { LOCATION: 'Derry', NAME: 'The Greater Derry Humane Society', ADDRESS: '11 Beaver Lake Rd, Derry, NH 03038' },

        { LOCATION: 'Dover', NAME: 'Pope Memorial Humane Society - Cocheco Valley', ADDRESS: '221 County Farm Rd, Dover, NH 03820' },

        { LOCATION: 'Enfield', NAME: 'Upper Valley Humane Society', ADDRESS: '300 Old Rte 10, Enfield, NH 03748' },

        { LOCATION: 'Franklin', NAME: 'Franklin Animal Shelter', ADDRESS: '19 Rescue Road, Franklin, NH 03235' },

        { LOCATION: 'Hudson', NAME: 'Happy Tails Pet Rescue', ADDRESS: '14 Pine Rd, Hudson, NH 03051' },

        { LOCATION: 'Laconia', NAME: 'New Hampshire Humane Society', ADDRESS: '1305 Meredith Center Rd, Laconia, NH 03246' },

        { LOCATION: 'Littleton', NAME: 'Second Chance Animal Rescue', ADDRESS: '1517 Meadow St, Littleton, NH 03561' },

        { LOCATION: 'Manchester', NAME: 'Manchester Animal Shelter', ADDRESS: '490 Dunbarton Rd, Manchester, NH 03102' },

        { LOCATION: 'Nashua', NAME: 'Humane Society for Greater Nashua', ADDRESS: '24 Ferry Rd, Nashua, NH 03064' },

        { LOCATION: 'New Boston', NAME: 'Canine Commitment', ADDRESS: '733 Bedford Rd, New Boston, NH 03070' },

        { LOCATION: 'Northwood', NAME: "Mary's Dogs Rescue & Adoption", ADDRESS: '984 1st New Hampshire Turnpike, Northwood, NH 03261' },

        { LOCATION: 'Ossipee', NAME: 'Lakes Region Humane Society', ADDRESS: '11 Old Rte 28, Ossipee, NH 03864' },

        { LOCATION: 'Salem', NAME: 'Salem Animal Rescue League', ADDRESS: '4 SARL Dr, Salem, NH 03079' },

        { LOCATION: 'Seabrook', NAME: 'Cat Tales Rescue', ADDRESS: '920 Lafayette Rd #201, Seabrook, NH 03874' },

        { LOCATION: 'Stratham', NAME: 'New Hampshire SPCA', ADDRESS: '104 Portsmouth Ave, Stratham, NH 03885' },

        { LOCATION: 'Sugar Hill', NAME: 'Above the Notch Humane Society', ADDRESS: '298 NH-18, Sugar Hill, NH 03586' },

        { LOCATION: 'Swanzey', NAME: 'Monadnock Humane Society', ADDRESS: '101 W Swanzey Rd, Swanzey, NH 03446' },

        { LOCATION: 'Weare', NAME: 'Hearts And Tails Animal Alliance', ADDRESS: '35 Daniels Rd, Weare, NH 03281' },

        { LOCATION: 'Weare', NAME: 'We Are Animal Guardians', ADDRESS: '15 Flanders Memorial Rd, Weare, NH 03281' }
      ];

  const generateTableHead = (table, data) => {
    const tableHeader = table.createTHead();
    const row = tableHeader.insertRow();
    for (const key of data) {
      const th = document.createElement('th');
      const text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  };

  const generateTable = (table, data) => {
    for (const element of data) {
      const row = table.insertRow();
      for (key in element) {
        const cell = row.insertCell();
        const tableText = document.createTextNode(element[key]);
        cell.appendChild(tableText);
      }
    }
  };

  const table = document.querySelector('table');
  const data = Object.keys(mapData[0]);

  generateTable(table, mapData);
  generateTableHead(table, data);

  // Calculate screen size to create a slide down effect on data table show/hide
  const collapse = document.getElementsByClassName('collapseTableButton');
  let i;

  for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const content = this.nextElementSibling;

      if (content.style.display === 'flex') {
        content.style.display = 'none';
      } else {
        content.style.display = 'flex';
      }
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
};

module.exports = mapTable;