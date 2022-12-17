import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React, { useRef, useState } from 'react';
import MapInfo from './MapInfo';

const locationSets = [{
    title: 'close',
    locations: [{
        name: '',
        coordinate: {
            lat: 17.86694872286288,
            lng: 120.45789897915579
        },
        icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/30/null/external-7-eleven-is-your-go-to-convenience-store-for-food-snacks-hot-and-cold-beverages-food-color-tal-revivo.png'
    },{
        name:'Flying V',
        coordinate:{
            lat: 17.867563350402587, 
            lng: 120.45865314365042
        }
    },
]
}
    , {
    title: 'near',
    locations: [{
        name: '7-Eleven',
        coordinate: {
            lat: 17.86694872286288,
            lng: 120.45789897915579
        },
        icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/30/null/external-7-eleven-is-your-go-to-convenience-store-for-food-snacks-hot-and-cold-beverages-food-color-tal-revivo.png'
    }, {
        name: 'Infinitea',
        coordinate: {
            lat: 17.859304849251853,
            lng: 120.45403437541616
        },
        icon: '../../public/icons/infinitea.png'
    }, {
        name: 'Cabantalan Beach',
        coordinate: {
            lat: 17.87617348489904,
            lng: 120.44916644455488
        }
    }]
}, {
    title: 'far',
    locations: [{
        name: 'Vigan',
        coordinate: {
            lat: 17.570527441418868,
            lng: 120.38699708621502
        }
    }, {
        name: 'Sand Dunes',
        coordinate: {
            lat: 18.140676539152672,
            lng: 120.51726928867616
        }
    }, {
        name: 'Poro Island',
        coordinate: {
            lat: 17.79514257832246,
            lng: 120.38836597572376
        }
    }, {
        name: 'Robinson Supermarket',
        coordinate: {
            lat: 18.179651208781834,
            lng: 120.59318549918656
        }
    }]
}]
const containerStyle = {
    width: '100vw',
    height: '102vh',
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

function MyComponent({ showMap }) {
    const [activeIndex, setActiveIndex] = useState(0)
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
    }, [showMap])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const handleZoom = () => {
        setActiveIndex(state => (state + 1) % locationSets.length)
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < locationSets[(activeIndex + 1) % locationSets.length].locations.length; i++) {
            bounds.extend(locationSets[(activeIndex + 1) % locationSets.length].locations[i].coordinate);
        }
        bounds.extend(center)

        map.fitBounds(bounds);
        // map.setCenter(center)
        // map.setZoom(1)
    }

    return isLoaded ? (
        <>
            <div style={{ opacity: showMap ? 1 : .4 }} className='duration-300 fixed z-10'>
                {/* <MapInfo /> */}
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={showMap ? 16 : 17}
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
                        {locationSets[activeIndex].locations.map((location, index) => (
                            <Marker
                                icon={{
                                    scaledSize: new google.maps.Size(20, 20),
                                    url: location.icon || 'https://img.icons8.com/office/50/null/100-percents.png',
                                }}
                                position={{
                                    lat: location.coordinate.lat,
                                    lng: location.coordinate.lng
                                }}
                                label={location.name}
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
            {showMap ?
                <button className='p-2 fixed bottom-4 left-4 z-30 bg-black text-white rounded-md' onClick={handleZoom}>Next</button>
                : <></>}
        </>
    ) : <></>
}

export default React.memo(MyComponent)