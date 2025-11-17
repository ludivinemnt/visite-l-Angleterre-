// Carte interactive simple (sans API externe)
const mapContainer = document.getElementById('mapContainer');

mapContainer.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;

    const marker = document.createElement('div');
    marker.classList.add('marker');
    marker.style.left = x + 'px';
    marker.style.top = y + 'px';

    mapContainer.appendChild(marker);
});

// Style des marqueurs
const style = document.createElement('style');
style.textContent = `
.marker {
    width: 12px;
    height: 12px;
    background: red;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}
`;
document.head.appendChild(style);
