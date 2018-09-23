$(document).ready(function() {
	$('.carousel').carousel();
	if(window.innerWidth>=680){
	$('#multiscroll').multiscroll({
		verticalCentered : true,
		scrollingSpeed: 700,
		easing: 'easeInQuart',
		menu: false,
		sectionsColor: [],
		navigation: false,
		navigationPosition: 'right',
		navigationColor: '#000',
		navigationTooltips: [],
		loopBottom: false,
		loopTop: false,
		css3: false,
		paddingTop: 0,
		paddingBottom: 0,
		normalScrollElements: null,
		scrollOverflow: false,
		scrollOverflowOptions: null,
		keyboardScrolling: true,
		touchSensitivity: 5,
		//responsive
		responsiveWidth: 900,
		afterResponsive: function(){
			console.log("after responsive...");
		},
		onLeave: function(index, nextIndex, direction){
			console.log("onLeave: index:" + index + " nextIndex:" + nextIndex + " direction:"+direction);
			if(index ===1){
				$('.section1').addClass('hideOverflow');
				$('body').removeClass('section1-loaded');
			}
		},
		afterLoad: function(anchorLink, index){
			if(index === 1){
				$('.section1').removeClass('hideOverflow');
				$('body').addClass('section1-loaded');
			}
		},
		afterRender: function(){
			$('body').addClass('section1-loaded');
		},

		// Custom selectors
		sectionSelector: '.ms-section',
		leftSelector: '.ms-left',
		rightSelector: '.ms-right',

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
	});
}
});

function egallery(){
	location.href = 'products/earphones.html';
}
function cgallery(){
	location.href = 'products/carchargers.html';
}
function cableGallery(){
	location.href = 'products/cables.html';
}
