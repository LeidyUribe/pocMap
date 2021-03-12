
import React, { useEffect, useRef } from 'react';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import StreamLayer from '@arcgis/core/layers/StreamLayer';
import config from '@arcgis/core/config';
import Directions from '@arcgis/core/widgets/Directions';


const ArcgisMap = ({ id, center, height, width, webSocketUrl }) => {
  const mapRef = useRef(null);
  
  useEffect(() => {
    config.assetsPath = '/assets'

    const map = new WebMap({
        basemap: 'streets-vector',
    });
  
    // load the map view at the ref's DOM node
    const view = new MapView({
      container: mapRef.current,
      map,
      center,
    });

    const directionsWidget = new Directions({
      view: view
    });

    view.ui.add(directionsWidget, {
      position: "top-right",
      index: 2
    });

    var labelClass = {
      // Content
      labelExpressionInfo: {
        //$feature.OBJECTID
      expression: "$feature.STOCK"
      },
      // Appearance
      symbol: {
        type: "text",
        color: "gray",
        //haloColor: [30, 70, 190],
        //haloSize: 1,
        font: {
          family: "arial",
          style: "normal",
          weight: "bold",
          size: 9
        }
      },
      // Placement
      labelPlacement: "center-center",
    }

    const streamLayer = new StreamLayer({
      popupTemplate: {
        content: "OBJECTID={OBJECTID}, TRACKID={TRACKID}",
      },
      webSocketUrl,
      objectIdField: "OBJECTID",
      fields: [
        {
          name: "OBJECTID",
          alias: "ObjectId",
          type: "oid",
        },
        {
          name: "TRACKID",
          alias: "TrackId",
          type: "oid",
        },
      ],
      timeInfo: {
        trackIdField: "TRACKID"
      },
      geometryType: "point",
      maxReconnectionAttempts: 100,
      maxReconnectionInterval: 10,
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-marker",
          size: "8px",
          color: "gray",
        },
      },
    });

     streamLayer.labelingInfo = [labelClass]
    mapRef.current = map;
     mapRef.current.add(streamLayer)

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
      data-automation="locationMapBox"
      id={id}
      ref={mapRef}
      data-testid="Map"
    />
  );
};

export default ArcgisMap;