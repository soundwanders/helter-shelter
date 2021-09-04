export default function resetMap() {
    for (let i = 0; i < pins.length; i++) {
        marker = new L.marker([pins[i][1], pins[i][2]], markerOptions)
        .bindPopup(pins[i][0])
        .addTo(shelterMap);
    }

    // Reset the map to the initial view/zoom level
    const resetBtn = document.getElementById('resetButton');

    resetBtn.addEventListener('click', function () {
        shelterMap.flyTo([43.441086332706374, -71.82000972872403], 8);
    });
};