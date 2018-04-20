var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.976050, lng:  36.232344},
        zoom: 15,
        disableDefaultUI: true, //отмена всех дефолтных элементов управления
       
       // добавление необходимых элементов управления вручную
        zoomControl: true,
        mapTypeControl: true,
        fullscreenControl: true,
        styles: gmapStyles
        // gestureHandling: 'none' //запрет на прокручивание карты
      });
}

var gmapStyles = [
		{ 	
			
			elementType: "labels", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{ 	
			
			elementType: "labels.text.stroke", 
			stylers: [
				{visibility: "off"} 
			] 
		},

	{
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      { color: '#172C3E'}
    ]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      { color: '#002136'}
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      { color: '#313E4C'}
    ]
  },
  {
    featureType: "transit.station.rail",
    elementType: "geometry.fill",
    stylers: [
      { visibility: 'off'}
    ]
  },
  {
    featureType: "transit.station.bus",
    elementType: "labels.icon",
    stylers: [
      { visibility: 'on'}
    ]
  },

   {
    featureType: "transit.station.rail",
    elementType: "labels.icon",
    stylers: [
      { visibility: 'on'}
    ]
  },
  {
    featureType: "transit.station.rail",
    elementType: "labels.text",
    stylers: [
      { visibility: 'on'}
    ]
  },
  {
    featureType: "transit.station.rail",
    elementType: "labels.text.fill",
    stylers: [
      { visibility: 'on'},
      { color: '#AE7A59'}
    ]
  },
  {
    featureType: "transit.station.rail",
    elementType: "labels.text.stroke",
    stylers: [
      { visibility: 'off'}

    ]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      { color: '#313E4C'}
    ]
  },
   {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [

      { visibility: "on" },
      { color: "transparent" }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {  visibility : "off" }

    ]
  },
  { 	
			//don't show local road lables on the map
			featureType: "road", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},

		// { 	
		// 	//don't show local road lables on the map
		// 	featureType: "administrative.neighborhood", 
		// 	elementType: "labels", 
		// 	stylers: [
		// 		{visibility: "on"} 
		// 	] 
		// },
		{ 	
			//don't show local road lables on the map
			featureType: "administrative.neighborhood", 
			elementType: "labels.text.fill", 
			stylers: [
				{visibility: "on"}, 
				{color: "#886A58"} 
			] 
		},

		{ 	
			
			featureType: "poi", 
			// elementType: "labels.text.fill",
			stylers: [
				{visibility: "off"}
				] 
		},

		{ 	
			
			featureType: "landscape.man_made", 
			elementType: "geometry.stroke",
			stylers: [
				{color: "#314250"}
				] 
		},
		{ 	
			
			featureType: "transit.line", 
			elementType: "geometry.fill",
			stylers: [
				{visibility: "on"},
				{color: "#314250"}
				] 
		},

		{ 	
			
			featureType: "poi.business", 
			elementType: "labels",
			stylers: [
				{visibility: "on"}
				// {color: "#314250"}
				] 
		},

		{ 	
			
			featureType: "poi.business", 
			elementType: "labels.text.fill",
			stylers: [
				{color: "#886A58"}
				] 
		},

		{ 	
			
			featureType: "poi.business", 
			elementType: "labels.text.stroke",
			stylers: [
				{visibility: "off"}
				] 
		}

		
		
		


];