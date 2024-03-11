"use client";
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { Draw } from 'ol/interaction';
import { createStringXY } from 'ol/coordinate';
import Overlay from 'ol/Overlay';
import Polygon from 'ol/geom/Polygon';
import LineString from 'ol/geom/LineString';

const MapComponent: React.FC = () => {
  const [measurement, setMeasurement] = useState<number | null>(null);
  const mapRef = useRef<Map | null>(null);
  const overlayRef = useRef<Overlay | null>(null);
  const drawInteractionRef = useRef<Draw | null>(null);

  useEffect(() => {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({ color: 'red' }),
          stroke: new Stroke({
            color: 'black',
            width: 2,
          }),
        }),
      }),
    });

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
    });

    const drawPolygon = new Draw({
      source: vectorSource,
      type: 'Polygon',
    });

    const drawLine = new Draw({
      source: vectorSource,
      type: 'LineString',
    });

    // Event handlers for drawend events
    drawPolygon.on('drawend', (event) => {
      const geometry = event.feature.getGeometry();
      if (geometry instanceof Polygon) {
        const area = geometry.getArea();
        setMeasurement(area);
        map.removeInteraction(drawPolygon);
      }
    });

    drawLine.on('drawend', (event) => {
      const geometry = event.feature.getGeometry();
      if (geometry instanceof LineString) {
        const length = geometry.getLength();
        setMeasurement(length);
        map.removeInteraction(drawLine);
      }
    });

    map.addInteraction(drawPolygon);
    map.addInteraction(drawLine);

    overlayRef.current = new Overlay({
      element: document.getElementById('measurement-overlay')!,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -15],
    });
    map.addOverlay(overlayRef.current);

    map.on('pointermove', (event) => {
      if (event.dragging) {
        return;
      }
      const coordinate = map.getEventCoordinate(event.originalEvent);
      const hdms = createStringXY(2)(coordinate);
      overlayRef.current?.setPosition(coordinate);
      overlayRef.current?.setOffset([0, -22]);
      if (document.getElementById('measurement-overlay')) {
        (document.getElementById('measurement-overlay') as HTMLElement).innerHTML = hdms;
      }
    });

    map.on('click', () => {
      overlayRef.current?.setOffset([0, -15]);
      overlayRef.current?.setPosition(undefined);
      setMeasurement(null);
    });

    mapRef.current = map;

    return () => {
      map.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col h-[90vh]">
      <div id="map" className="flex-grow"></div>
      {measurement !== null && ReactDOM.createPortal(
        <div className="measurement-overlay bg-black p-2 rounded-md shadow-md">
          {measurement.toFixed(2)} square meters
        </div>,
        document.body
      )}
      {
        <div>
          <p>{measurement !== null ? measurement.toFixed(2) : '0'} square meters</p>
        </div>
      }
    </div>
  );
};

export default MapComponent;
