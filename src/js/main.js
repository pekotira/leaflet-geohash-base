'use strict';

var data = require('./data.js');

var L = require('leaflet');
require('leaflet-dvf');

var geoHash = require('geohash');

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([1, 1], 2);


// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var colorFunction = new L.HSLHueFunction(new L.Point(357,200), new L.Point(34677,0), {outputSaturation: '100%', outputLuminosity: '25%'});
var fillColorFunction = new L.HSLHueFunction(new L.Point(357,200), new L.Point(34677,0), {outputSaturation: '100%', outputLuminosity: '50%'});

var options = {
		recordsField: 'terms',
		geohashField: 'term',
		displayOptions: {
			count: {
				color: colorFunction,
				fillColor: fillColorFunction,
				gradient: true
			}
		},
		layerOptions: {
			fillOpacity: 0.7,
			opacity: 1,
			weight: 1,
			gradient: true
		}
	};


window.decodeGeoHash = geoHash.GeoHash.decodeGeoHash;

var layer = new L.GeohashDataLayer(data, options);

map.addLayer(layer);
