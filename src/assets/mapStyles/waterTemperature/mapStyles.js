
export default {
    style: {
        version: 8,
        sources: {
            basemap: {
                type: 'vector',
                'tiles': ['https://maptiles-prod-website.s3-us-west-2.amazonaws.com/misctilesets/usstatecounties/{z}/{x}/{y}.pbf'],
                'minzoom': 2, // setting this to equal the minzoom of main map, real tile extent is 2
                'maxzoom': 6  // setting this to equal the maxzoom of main map, real tile extent is 10
            },
            openmaptiles: {
                type: 'vector',
                'tiles': ['https://maptiles-prod-website.s3-us-west-2.amazonaws.com/openmaptiles/baselayers/{z}/{x}/{y}.pbf'],
                'minzoom': 2,
                'maxzoom': 6
            },
            hillshade: {
                type: 'raster',
                'tiles': ['https://maptiles-prod-website.s3-us-west-2.amazonaws.com/openmaptiles/omthillshade/{z}/{x}/{y}.png'],
                'minzoom': 2,
                'maxzoom': 12,
                'tileSize': 256
            },
            streams: {
                type: 'vector',
                'tiles': ['http://wbeep-test-website.s3-website-us-west-2.amazonaws.com/waterTemperature/tiles/{z}/{x}/{y}.pbf'],
                'minzoom': 0,
                'maxzoom': 6
            }
        },
        'sprite': '',
        'glyphs': 'https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf',
        'layers': [
            {
                'id': 'background',
                'paint': {
                    'background-color': 'hsl(47, 26%, 88%)'
                },
                'type': 'background',
                'showButtonLayerToggle': false
            },
            {
                'filter': ['all', ['==', '$type', 'LineString'],
                    ['in', 'class', 'minor', 'service', 'trunk', 'primary', 'secondary', 'tertiary', 'motorway']
                ],
                'id': 'Roads',
                'layout': {
                    'line-cap': 'round',
                    'line-join': 'round',
                    'visibility': 'visible'
                },
                'paint': {
                    'line-color': 'hsl(0, 0%, 97%)',
                    'line-width': {
                        'base': 1.55,
                        'stops': [
                            [4, 0.25],
                            [20, 30]
                        ]
                    }
                },
                'source': 'openmaptiles',
                'source-layer': 'transportation',
                'type': 'line',
                'minzoom': 5,
                'maxzoom': 24,
                'showButtonLayerToggle': true
            },
            {
                'filter': ['all', ['==', '$type', 'Polygon'],
                    ['==', 'intermittent', 1]
                ],
                'id': 'water_intermittent',
                'paint': {
                    'fill-color': 'hsl(205, 56%, 73%)',
                    'fill-opacity': 0.7
                },
                'source': 'openmaptiles',
                'source-layer': 'water',
                'type': 'fill',
                'layout': {
                    'visibility': 'visible'
                },
                'showButtonLayerToggle': false
            },
            {
                'filter': ['all', ['==', '$type', 'LineString'],
                    ['==', 'brunnel', 'tunnel']
                ],
                'id': 'waterway-tunnel',
                'paint': {
                    'line-color': 'hsl(205, 56%, 73%)',
                    'line-dasharray': [3, 3],
                    'line-gap-width': {
                        'stops': [
                            [12, 0],
                            [20, 6]
                        ]
                    },
                    'line-opacity': 1,
                    'line-width': {
                        'base': 1.4,
                        'stops': [
                            [8, 1],
                            [20, 2]
                        ]
                    }
                },
                'source': 'openmaptiles',
                'source-layer': 'waterway',
                'type': 'line',
                'layout': {
                    'visibility': 'visible'
                },
                'showButtonLayerToggle': false
            },
            {
                'filter': ['all', ['==', '$type', 'LineString'],
                    ['!in', 'brunnel', 'tunnel', 'bridge'],
                    ['!=', 'intermittent', 1]
                ],
                'id': 'waterway',
                'paint': {
                    'line-color': 'hsl(205, 56%, 73%)',
                    'line-opacity': 1,
                    'line-width': {
                        'base': 1.4,
                        'stops': [
                            [8, 1],
                            [20, 8]
                        ]
                    }
                },
                'source': 'openmaptiles',
                'source-layer': 'waterway',
                'type': 'line',
                'layout': {
                    'visibility': 'visible'
                },
                'showButtonLayerToggle': false
            },
            {
                'filter': ['all', ['==', '$type', 'LineString'],
                    ['!in', 'brunnel', 'tunnel', 'bridge'],
                    ['==', 'intermittent', 1]
                ],
                'id': 'waterway_intermittent',
                'paint': {
                    'line-color': 'hsl(205, 56%, 73%)',
                    'line-opacity': 1,
                    'line-width': {
                        'base': 1.4,
                        'stops': [
                            [8, 1],
                            [20, 8]
                        ]
                    },
                    'line-dasharray': [2, 1]
                },
                'source': 'openmaptiles',
                'source-layer': 'waterway',
                'type': 'line',
                'layout': {
                    'visibility': 'visible'
                },
                'showButtonLayerToggle': false
            },
            {
                'id': 'Neighboring Countries',
                'type': 'fill',
                'source': 'basemap',
                'minzoom': 2,
                'maxzoom': 24,
                'source-layer': 'neighboringcountry',
                'layout': {
                    'visibility': 'visible'
                },
                'paint': {
                    'fill-color': 'hsl(47, 26%, 88%)'
                },
                'showButtonLayerToggle': false
            },
            {
                'filter': ['all', ['==', '$type', 'Polygon'],
                    ['!=', 'intermittent', 1]
                ],
                'id': 'water',
                'paint': {
                    'fill-color': 'hsl(205, 56%, 73%)'
                },
                'source': 'openmaptiles',
                'source-layer': 'water',
                'type': 'fill',
                'layout': {
                    'visibility': 'visible'
                },
                'showButtonLayerToggle': false
            },
            {
                'id': 'Terrain',
                'type': 'raster',
                'source': 'hillshade',
                'layout': {
                    'visibility': 'visible'
                },
                'showButtonLayerToggle': true,
                'showButtonStreamToggle': false,
            },
            {
                'id': 'Counties',
                'type': 'line',
                'source': 'basemap',
                'source-layer': 'counties',
                'minzoom': 4.5,
                'maxzoom': 24,
                'layout': {
                    'visibility': 'none'
                },
                'paint': {
                    'line-color': 'rgb(0,0,0)',
                    'line-dasharray': [2, 4]
                },
                'showButtonLayerToggle': true
            },
            {
                'id': 'states',
                'type': 'line',
                'source': 'basemap',
                'source-layer': 'states',
                'minzoom': 2,
                'maxzoom': 24,
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-color': 'rgb(0,0,0)'
                }

            },
            {
                'id': 'streams',
                'layerDescription': 'all streams',
                'type': 'line',
                'source': 'streams',
                'source-layer': 'segsAllConus',
                'minzoom': 0,
                'maxzoom': 6,
                'layout': {
                    'visibility': 'visible'
                },
                'paint': {
                    'line-color': 'rgba(148, 193, 225, 1)'
                }
            },
            {
                'filter': ['all', ['==', '$type', 'Point'],
                    ['==', 'class', 'city']
                ],
                'id': 'place_label_city',
                'layout': {
                    'text-field': '{name:latin}\n{name:nonlatin}',
                    'text-font': ['Noto Sans Regular'],
                    'text-max-width': 10,
                    'text-size': {
                        'stops': [
                            [3, 12],
                            [8, 16]
                        ]
                    }
                },
                'maxzoom': 16,
                'minzoom': 5,
                'paint': {
                    'text-color': 'hsl(0, 0%, 0%)',
                    'text-halo-blur': 0,
                    'text-halo-color': 'hsla(0, 0%, 100%, 0.75)',
                    'text-halo-width': 2
                },
                'source': 'openmaptiles',
                'source-layer': 'place',
                'type': 'symbol',
                'showButtonLayerToggle': false
            }
        ]
    }
};
