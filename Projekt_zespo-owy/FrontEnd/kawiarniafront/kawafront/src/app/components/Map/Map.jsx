import React from "react";
import { Map as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import "./Map.scss";
import orderActions from "../../redux/order/actions";

import { Wrapper, Container } from "./components";
import useGeolocation from "../../hooks/useGeolocation";

import "react-toastify/dist/ReactToastify.css";
export default function Map() {
  useGeolocation();
  const dispatch = useDispatch();

  const latLng = useSelector((state) => state.order.latLng);

  return (
    <Wrapper>

      <Container>
        <LeafletMap
          center={latLng ? latLng : [50.286263, 19.104078]}
          zoom={18}
          onClick={(event) =>
            dispatch(
              orderActions.setLatLng([event.latlng.lat, event.latlng.lng])
            )
          }
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {latLng ? (
            <Marker position={latLng}>
              <Popup>Selected Pos</Popup>
            </Marker>
          ) : null}
        </LeafletMap>
      </Container>
     
    </Wrapper>
  );
}
