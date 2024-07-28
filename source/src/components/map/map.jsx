import React from "react";
import {centerMap} from "../../const"
import {YMaps, Map, Placemark, ZoomControl} from "react-yandex-maps";

const MapY = () => {
    return <div id="map" className="map" aria-label="Карта">
        <YMaps>
            <Map
                state={centerMap}
                width="100%"
                height="100%"
            >
                <Placemark
                    geometry={[59.968137, 30.316272]}
                />
                <Placemark
                    geometry={[56.837864, 60.594882]}
                />
                <ZoomControl options={{ float: 'left' }} />
            </Map>
        </YMaps>
    </div>
};

export default MapY;
