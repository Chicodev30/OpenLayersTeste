import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { fromLonLat } from 'ol/proj';

const portoAlegreCoordinates = [-51.2177, -30.0392];

const portoAlegreLonLat = fromLonLat(portoAlegreCoordinates);

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

document.getElementById('zoom-out').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};

// Adicione um evento de clique ao botão "Ir para Porto Alegre"
const toPOAButton = document.getElementById('toPOA');
toPOAButton.addEventListener('click', function() {
  // Mude a visualização para Porto Alegre com zoom 13
  map.getView().setCenter(portoAlegreLonLat);
  map.getView().setZoom(13);
});

const resetViewButton = document.getElementById('resetView');
resetViewButton.addEventListener('click', function() {
  map.getView().setCenter([0, 0]);
  map.getView().setZoom(2);
});
