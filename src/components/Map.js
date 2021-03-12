
import React, { useEffect, useRef } from 'react';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import config from '@arcgis/core/config.js';
import Zoom from '@arcgis/core/widgets/Zoom/ZoomViewModel';


const Map = ({ id, center, height, width }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    config.assetsPath = '/assets';

    const map = new WebMap({
        basemap: 'streets-vector',
    });
  
    // load the map view at the ref's DOM node
    const view = new MapView({
      container: mapRef.current,
      map,
      center,
    });
    var zoom = new Zoom({
            view: view,
            layout:'horizontal'
        });

    mapRef.current = map;

    return () => {
      if (view) {
        // destroy the map view
        view.destroy();
      }
    };
  }, [])

  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
        margin: '20px 0',
      }}
      id={id}
      ref={mapRef}
    />
  );
};

export default Map;