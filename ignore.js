var markersByServiceType = {
		clinics: [],
		testing: [],
		ryanwhite: []
	};


	     // Sets the map on all markers in the array.
	     function setMapOnAll(map, type) {
	       for (var i = 0; i < markersByServiceType[type].length; i++) {
	         markersByServiceType[type][i].setMap(map);
	       }
	     }

	     // Removes the markers from the map, but keeps them in the array.
	     function clearMarkers() {
	       setMapOnAll(null);
	     }

	     // Shows any markers currently in the array.
	     function showMarkers(type) {
	       setMapOnAll(map);
	     }
	     ('checked', function(e) {
	     	if(checked) {
	     		setMapOnAll(map,e.target.id)
	     	} else {
	     		setMapOnAll(null,e.target.id)
	     	}
	     })