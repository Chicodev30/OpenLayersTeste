import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import MousePosition from 'ol/control/MousePosition.js'; //adicionado na v01

const map = new Map({           // declara um novo mapa
  target: 'map',                // define o elemento HTML que contém o mapa
  layers: [                     // define as camadas do mapa
    new TileLayer({             // camada de azulejos
      source: new OSM()         // fonte de azulejos OpenStreetMap
    })
  ],
  view: new View({             // define a visualização do mapa
    center: [0, 0],            // define o centro do mapa
    zoom: 2                    // define o nível de zoom
  })
});

// Adiciona o controle de posição do mouse - adicionado na v01
const mousePositionControl = new MousePosition({  //cria uma nova instância do controle
  coordinateFormat: function(coordinate) {        //define a função de formatação de coordenadas
    return `Coordenadas: ${coordinate}`;          //retorna as coordenadas x e y do mouse do mapa
  },
  projection: 'EPSG:4326',                        //define a projeção do mapa - padrão é EPSG:3857
  className: 'custom-mouse-position',             //define a classe CSS do elemento DOM que contém as coordenadas
  target: document.getElementById('mouse-position'),//define o elemento DOM que contém as coordenadas                           //define o conteúdo HTML para as coordenadas quando o ponteiro do mouse está fora do mapa
});

// Adiciona o controle ao mapa - adicionado na v01
map.addControl(mousePositionControl); //adiciona o controle ao mapa