
export default {
    style: {
        version: 8,
        sources: {
            basemap: {
                type: 'vector',
                'tiles': ['https://maptiles-prod-website.s3-us-west-2.amazonaws.com/misctilesets/usstatecounties/{z}/{x}/{y}.pbf'],
                'minzoom': 2, // setting this to equal the minzoom of main map, real tile extent is 2
                'maxzoom': 6  // setting this to equal the maxzoom of main map, real tile extent is 10
            } 
        },
        'sprite': '',
        'glyphs': 'https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf',
        'layers': [
            {
                'id': 'background',
                'paint': {
                    'background-color': 'hsl(205, 56%, 73%)'
                },
                'type': 'background',
                'showButtonLayerToggle': false
            },
            {
                'id': 'states',
                'type': 'fill',
                'source': 'basemap',
                'source-layer': 'states',
                'paint':{
                    'fill-color': 'hsl(47, 26%, 88%)'
                }
            },
            {
                'id': 'stateOutlines',
                'type': 'line',
                'source': 'basemap',
                'source-layer': 'states',
                'minzoom': 2,
                'maxzoom': 24,
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-color': 'rgb(50,50,50)'
                }

            }
        ]
    }
};
