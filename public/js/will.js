$( document ).ready( function() {

	$( ".nav_btn" ).hover(
		function() {
			to_icon( this );
		}, function() {
			to_text( this );
		}
	);

	// $( ".download_btn" ).hover(
	// 	function() {
	// 		to_icon ( this );
	// 	}, function() {
	// 		to_text( this );
	// 	}
	// );

});

function to_icon( dom_elem ) {
	var width =	$( dom_elem ).width();
	$( dom_elem ).width( width );

	// console.log(width)

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
	else if ( $( dom_elem ).attr( "filetype" ) == "pdf" ) {
		$( dom_elem ).html( '<i class="fa fa-file-pdf-o fa-4x"></i>' );
	} 
	else if ( $( dom_elem ).attr( "filetype" ) == "word" ) {
		$( dom_elem ).html( '<i class="fa fa-file-word-o fa-4x"></i>' );
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
	else if ( $( dom_elem ).attr( "filetype" ) == "pdf" ) {
		$( dom_elem ).html( '<div style="width:40px;height:40px"><b>.pdf</b></div>' );
	} 
	else if ( $( dom_elem ).attr( "filetype" ) == "word" ) {
		$( dom_elem ).html( '<div style="width:40px;height:40px"><b>.pdf</b></div>' );
	}
}