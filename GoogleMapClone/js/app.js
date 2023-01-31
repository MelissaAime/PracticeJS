let map;

function iniciarMap(){
    var options ={
        zoom: 8,
        center: {lat:-34.5956145, lng: -58.4431949}
    }
    
    var map = new google.maps.Map(document.getElementById('map'), options);

    google.maps.event.addListener(map, 'click', 
    function(event){
        addMarker({coords: event.latLng});
    });

    var markers = [
        {
            coords:{lat: -34.5956145, lng: -58.4431949},
            iconImage: 'https://img.icons8.com/office/30/null/filled-flag.png',
            content: '<p>Buenos Aires</p>'
        }
    ];

    for (var i=0; i<markers.length; i++){
        addMarker(markers[i]);
    }

    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });

        if(props.iconImage){
            marker.setIcon(props.iconImage)
        }

        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}