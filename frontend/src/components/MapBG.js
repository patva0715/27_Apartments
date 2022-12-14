import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useRef, useState } from 'react';
import MapInfo from './MapInfo';

const containerStyle = {
    width: '100vw',
    height: '100vh',
    zIndex: '0',
};
const center = {
    lat: 17.866945,
    lng: 120.456615
};
const mapStyle = [
    {
        "stylers": [
            { "visibility": "simplified" },
            { "saturation": -100 }
        ]
    },
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cccccc"
            }
        ]
    },


    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": 4
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": 1
            }
        ]
    },




    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
]

function MyComponent({ showMap, visibleLocations }) {
    const [map, setMap] = useState(null)
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBbqswcDn_ThMrI9M0OdlY6PuefdcnzCIw"
    })

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        // const bounds = new window.google.maps.LatLngBounds(center);
        // map.fitBounds(bounds);
        // map.setZoom(showMap?14:17)
        setMap(map)
        // map.setZoom(10)
    }, [showMap])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    useEffect(() => {
        if ( !showMap&&map) {
            map.setCenter(center)
            map.setZoom(16)
        }
    }, [showMap,map])
 
    useEffect(() => {
        if (map&&visibleLocations.length>0) {
            var bounds = new google.maps.LatLngBounds();
            for (let i = 0; i < visibleLocations.length; i++) {
                bounds.extend(visibleLocations[i].coordinate)
            }
            bounds.extend(center)
            map.fitBounds(bounds);
        }
    }, [visibleLocations, map])
    return isLoaded ? (
        <>
            <div style={{ opacity: showMap ? 1 : .4 }} className='duration-300 fixed z-10'>
                {/* <MapInfo /> */}
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={{
                        styles: mapStyle,
                        fullscreenControl: false,
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        disableDoubleClickZoom: true,
                        scrollwheel: false
                    }}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <>
                        {visibleLocations.map((location, index) => location.name==='hidden'?<></>:(
                            <Marker
                                icon={{
                                    scaledSize: new google.maps.Size(20, 20),
                                    url: location.icon || 'https://img.icons8.com/sf-regular-filled/30/null/pin.png',
                                }}
                                position={{
                                    lat: location.coordinate.lat,
                                    lng: location.coordinate.lng
                                }}
                                label= {{
                                    text: location.name,
                                    color: 'red',
                                    fontSize: '12px',
                                    className: 'marker-position',
                                }}
                                key={index}
                            />
                        ))}
                        <Marker
                            icon={{
                                url: 'https://img.icons8.com/ios-glyphs/30/exterior.png',
                                scaledSize: new google.maps.Size(25, 25)
                            }}
                            position={center} />
                    </>
                </GoogleMap>

            </div>

        </>
    ) : <></>
}

export default React.memo(MyComponent)