import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import * as Api from "../../services/rain.service";
import { useEffect } from "react";
import Marker from "../../components/marker/Marker";
import config from "../../config/constants";

function Record(props) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getRecords();
  }, []);

  const getRecords = async () => {
    try {
      const response = await Api.getRecords();
      setRecords(response);
      console.log("RECORDS :: ", response);
    } catch (error) {
      console.log("ERROR GET RECORDS :: ", error);
    }
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: config.API_KEY_GOOGLE }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {records.map(item => (
          <Marker lat={item.latitude} lng={item.longitude} />
        ))}
        {/* <AnyReactComponent lat={item.latitude} lng={item.longitude}  text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
}

Record.defaultProps = {
  center: {
    lat: -22.98,
    lng: -43.635
  },
  zoom: 13
};

export default Record;
