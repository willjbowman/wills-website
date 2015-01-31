$( document ).ready( function() {

	// listeners to animate nav button 
	$( ".nav_btn" ).hover(
		function() {
			to_icon( this );
		}, function() {
			to_text( this );
		}
	);

});

// switch nav btn text to icon
function to_icon( dom_elem ) {
	var width =	$( dom_elem ).width();
	$( dom_elem ).width( width );

	// console.log(width)

	if ( $( dom_elem ).attr( "href" ) == "#hello" ) {
		$( dom_elem ).html( '<i class="fa fa-coffee fa-lg hello"></i>' );
	} 
	else if ( $( dom_elem ).attr( "href" ) == "#about" ) {
		$( dom_elem ).html( '<i class="fa fa-bicycle fa-lg about"></i>' );
	}  
	else if ( $( dom_elem ).attr( "href" ) == "#featured" ) {
		$( dom_elem ).html( '<i class="fa fa-thumbs-o-up fa-lg featured"></i>' );
	} 
	else if ( $( dom_elem ).attr( "href" ) == "#cv" ) {
		$( dom_elem ).html( '<i class="fa fa-flask fa-lg cv"></i>' );
	}
	else if ( $( dom_elem ).attr( "filetype" ) == "pdf" ) {
		$( dom_elem ).html( '<i class="fa fa-file-pdf-o fa-4x"></i>' );
	} 
	else if ( $( dom_elem ).attr( "filetype" ) == "word" ) {
		$( dom_elem ).html( '<i class="fa fa-file-word-o fa-4x"></i>' );
	}
}

// switch nav btn from icon to text
function to_text( dom_elem ) {
	if ( $( dom_elem ).attr( "href" ) == "#hello" ) {
		$( dom_elem ).html( 'hello' );
	}
	else if ( $( dom_elem ).attr( "href" ) == "#about" ) {
		$( dom_elem ).html( 'about' );
	}
	else if ( $( dom_elem ).attr( "href" ) == "#featured" ) {
		$( dom_elem ).html( 'featured' );
	} 
	else if ( $( dom_elem ).attr( "href" ) == "#cv" ) {
		$( dom_elem ).html( 'cv' );
	}
	else if ( $( dom_elem ).attr( "filetype" ) == "pdf" ) {
		$( dom_elem ).html( '<div style="width:40px;height:40px"><b>.pdf</b></div>' );
	} 
	else if ( $( dom_elem ).attr( "filetype" ) == "word" ) {
		$( dom_elem ).html( '<div style="width:40px;height:40px"><b>.pdf</b></div>' );
	}
}