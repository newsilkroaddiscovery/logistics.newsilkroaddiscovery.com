ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-948882.208008, 23843.249202, 16807415.398358, 11255677.105976]);
var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_openrailwaymap_1 = new ol.layer.Tile({
            'title': 'openrailwaymap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png'
            })
        });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_openrailwaymap_1.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_openrailwaymap_1];
