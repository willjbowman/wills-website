$( document ).ready( function() {

	$( ".nav_btn" ).hover(
		function() {
			to_icon( this );
		}, function() {
			to_text( this );
		}
	);

});

function to_icon( dom_elem ) {
	var width =	$( dom_elem ).width();
	$( dom_elem ).width( width );

	if ( $( dom_elem ).attr( "href" ) == "#hello" ) {
		$( dom_elem ).html( '<i class="fa fa-coffee fa-lg"></i>' );
	} 
	else if ( $( dom_elem ).attr( "href" ) == "#about" ) {
		$( dom_elem ).html( '<i class="fa fa-bicycle fa-lg"></i>' );
	} 
	else if ( $( dom_elem ).attr( "href" ) == "#cv" ) {
		$( dom_elem ).html( '<i class="fa fa-flask fa-lg"></i>' );
	} 
	else if ( $( dom_elem ).attr( "href" ) == "#projects" ) {
		$( dom_elem ).html( '<i class="fa fa-rocket fa-lg"></i>' );
	}
}

function to_text( dom_elem ) {
	if ( $( dom_elem ).attr( "href" ) == "#hello" ) {
		$( dom_elem ).html( 'hello' );
	}
	else if ( $( dom_elem ).attr( "href" ) == "#about" ) {
		$( dom_elem ).html( 'about' );
	}
	else if ( $( dom_elem ).attr( "href" ) == "#cv" ) {
		$( dom_elem ).html( 'cv' );
	}
	else if ( $( dom_elem ).attr( "href" ) == "#projects" ) {
		$( dom_elem ).html( 'projects' );
	}
}