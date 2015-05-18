/*
*RequestAnimFrame es un método estándar
*/
window.requestAnimFrame = (function(){
	return window.requestAnimationFrame		  ||
		   window.webkitRequestAnimationFrame ||
		   window.mozRequestAnimationFrame	  ||
		   function( callback ){
		   	window.setTimeout(callback, 1000 / 60);
		   };
})();

// Esta variable la utilizaremos después.
var time;