<p align="center"> <img src="media/icons/readmeLogo.png" /> </p>

<p align="center" style="font-weight: bold">
  <a href="https://heltershelter.netlify.app">View on Netlify</a>
  &#8741;
  <a href="https://soundwanders.github.io/helter-shelter">View Github Pages</a>
</p>


  <div align="center"> 

  [![Netlify Status](https://api.netlify.com/api/v1/badges/7a2ca23b-0fe6-4a24-8fce-e52cd745c819/deploy-status)](https://app.netlify.com/sites/heltershelter/deploys)

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  </div>
</p>
<br/>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about">About...</a></li>
    <li><a href="#technology">Technology</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

### About Helter-Shelter

- Helter-Shelter focuses on showcasing New Hampshire animal shelters and rescue organizations.
- Click each pinned location on the [Leaflet](https://leafletjs.com/) map to reveal each organization's name and location.
- Collapsible data table generated with JavaScript, just click the '+' button to expand the table.
- Table fields populated by looping through an array of Objects and appending data to display.
- Layout achieved with CSS Flexbox with a focus on a mobile-friendly, responsive design.
- Lossless image compression to limit asset file size using <a href="https://kraken.io/web-interface" style="text-decoration: none; font-weight: bold; letter-spacing: 0.25px;" title="Link redirects to https://kraken.io">Kraken.io</a>
- Bundled with <a href="https://webpack.js.org/guides/getting-started/" style="text-decoration: none; font-weight: bold; letter-spacing: 0.25px;" title="Link redirects to https://webpack.js.org">Webpack</a>

### Project Structure

```bash

.
└─── dist
│    │
│    └─── assets
│    │    
│    └─── webpack bundle
│    
└─── src
     └─── assets
          └── cards
          └── carousel
          └── icons

```

### Technology
- HTML, CSS, JavaScript, Leaflet.js, Webpack

<code>Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. 
Weighing just about 39 KB of JS, it is designed with simplicity, performance and usability in mind. It works efficiently across 
all modern platforms, can be extended with plugins, and has a well-documented API.</code>
<br/>

### Contributing
If you have any ideas, improvements, suggestions or issues with the project please feel free to contribute &smile;

1. Fork the Project from branch 'main'
2. Create your Update Branch (`git checkout -b update/ThisIsBetter`)
3. Commit your Changes (`git commit -m 'Hey change this!'`)
4. Push to the Branch (`git push origin update/BugSquash`)
5. Open a Pull Request

### License
<a href="https://mit-license.org/" rel="noopener noreferral" style="text-decoration: none;">The MIT License (MIT)</a>
