window.addEventListener( 'load', onVrViewLoad );

function onVrViewLoad() {
	const vrviewEle = document.getElementById( 'vrview' );
	const vrviewSrc = vrviewEle.getAttribute( 'data-src' );
	// Selector '#vrview' finds element with id 'vrview'.
	console.log( vrviewSrc );
	const vrView = new VRView.Player( '#vrview', {
		image: vrviewSrc,
	} );
}
