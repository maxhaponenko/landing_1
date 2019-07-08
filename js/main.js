var $ = jQuery.noConflict(); 

// SLIDER AUTOPLAY
$('#myCarousel').carousel({ interval: 500, cycle: true });


// MAP INIT AND STYLES
function initMap() {
	// Styles a map
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 49.838, lng: 24.029},
	  zoom: 16,
	  styles: [
		{elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
			  {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
			  {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
			  {
			  featureType: 'administrative',
			  elementType: 'geometry.stroke',
			  stylers: [
				  {
				  color: '#c9b2a6'
				  }
			  ]
			  },
			  {
			  featureType: 'administrative.land_parcel',
			  elementType: 'geometry.stroke',
			  stylers: [
				  {
				  color: '#dcd2be'
				  }
			  ]
			  },
			  {
			  featureType: 'administrative.land_parcel',
			  elementType: 'labels.text.fill',
			  stylers: [
				  {
				  color: '#ae9e90'
				  }
			  ]
			  },
			  {
			  featureType: 'landscape.natural',
			  elementType: 'geometry',
			  stylers: [
				  {
				  color: '#dfd2ae'
				  }
			  ]
			  },
			  {
			  featureType: 'poi',
			  elementType: 'geometry',
			  stylers: [
				  {
				  color: '#dfd2ae'
				  }
			  ]
			  },
			  {
			  featureType: 'poi',
			  elementType: 'labels.text.fill',
			  stylers: [
				  {
				  color: '#93817c'
				  }
			  ]
			  },
			  {
			  featureType: 'poi.business',
			  stylers: [
				  {
				  visibility: 'off'
				  }
			  ]
			  },
			  {
			  featureType: 'poi.park',
			  elementType: 'geometry.fill',
			  stylers: [
				  {
				  color: '#a5b076'
				  }
			  ]
			  },
			  {
			  featureType: 'poi.park',
			  elementType: 'labels.text',
			  stylers: [
				  {
				  visibility: 'off'
				  }
			  ]
			  },
			  {
			  featureType: 'poi.park',
			  elementType: 'labels.text.fill',
			  stylers: [
				  {
				  color: '#447530'
				  }
			  ]
			  },
			  {
			  featureType: 'road',
			  elementType: 'geometry',
			  stylers: [
				  {
				  color: '#f5f1e6'
				  }
			  ]
			  },
			  {
			  featureType: 'road.arterial',
			  elementType: 'geometry',
			  stylers: [
				  {
				  color: '#fdfcf8'
				  }
			  ]
			  },
			  {
			  featureType: 'road.highway',
			  elementType: 'geometry',
			  stylers: [
				  {
				  color: '#f8c967'
				  }
			  ]
			  },
			  {
			  featureType: 'road.highway',
			  elementType: 'geometry.stroke',
			  stylers: [
				  {
				  color: '#e9bc62'
				  }
			  ]
			  },
			  {
			  featureType: 'road.highway.controlled_access',
			  elementType: 'geometry',
			  stylers: [
				  {
				  color: '#e98d58'
				  }
			  ]
			  },
			  {
			  featureType: 'road.highway.controlled_access',
			  elementType: 'geometry.stroke',
			  stylers: [
				  {
				  color: '#db8555'
				  }
			  ]
			  },
			  {
			  featureType: 'road.local',
			  elementType: 'labels.text.fill',
			  stylers: [
				  {
				  color: '#806b63'
				  }
			  ]
			  },
			  {
			  featureType: 'transit.line',
			  elementType: 'geometry',
			  stylers: [
				  {
				  color: '#dfd2ae'
				  }
			  ]
			  },
			  {
			  featureType: 'transit.line',
			  elementType: 'labels.text.fill',
			  stylers: [
				  {
				  color: '#8f7d77'
				  }
			  ]
			  },
			  {
			  featureType: 'transit.line',
			  elementType: 'labels.text.stroke',
			  stylers: [
				  {
				  color: '#ebe3cd'
				  }
			  ]
			  },
			  {
			  featureType: 'transit.station',
			  elementType: 'geometry',
			  stylers: [
				  {
				  color: '#dfd2ae'
				  }
			  ]
			  },
			  {
			  featureType: 'water',
			  elementType: 'geometry.fill',
			  stylers: [
				  {
				  color: '#b9d3c2'
				  }
			  ]
			  },
			  {
			  featureType: 'water',
			  elementType: 'labels.text.fill',
			  stylers: [
				  {
				  color: '#92998d'
				  }
			  ]
			  }
	  ]
	});
};

$(document).ready(function() { 
	
	// HIGHLIGHTING MENU WITH SCROLLING
	$(window).scroll(function(){
		var $sections = $('section');
		$sections.each(function(i, el){
			var top  = $(el).offset().top-100;
			var bottom = top +$(el).height();
			var scroll = $(window).scrollTop();
			var id = $(el).attr('id');
			if( scroll > top && scroll < bottom){
				$('nav li a').removeClass('active_underlined');
				$('nav li a[href="#'+id+'"]').addClass('active_underlined');
			}
		})
	});
	
	// ANCHOR ANIMATION
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
		var target = $(this.hash);
		if (target) {
			$("html, body").animate(
			{
				scrollTop: target.offset().top
			},
			500
			);
		}
		});
	});
});


// FORM VALIDATION
(function() {
	'use strict';
	window.addEventListener('load', function() {
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.getElementsByClassName('needs-validation');
	// Loop over them and prevent submission
	var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			} 
			form.classList.add('was-validated');
		}, false);
	});
	}, false);
})();

// PROGRESS BAR ANIMATION
var inview = new Waypoint.Inview({
    element: $('#progressBars')[0],
    enter: function() {
        $("#bar1").animate({
            width: "79%"
        }, 800 );
        $("#bar2").animate({
            width: "90%"
        }, 1200 );
        $("#bar3").animate({
            width: "69%"
        }, 1300 );
        $("#bar4").animate({
            width: "92%"
        }, 1400 );
        this.destroy();
    } 
});

