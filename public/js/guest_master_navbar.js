var html = trim( '<nav class="navbar navbar-default" role="navigation">
	<div class="container-fluid">
		
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top_navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
			<a href="#" class="navbar-brand">
        <img src="img/logo.png" alt="Logo" height="20">
      </a>
		</div>
    
    <div class="collapse navbar-collapse" id="top_navbar">
      <ul class="nav navbar-nav navbar-left">
        <a href="#" class="btn btn-info navbar-btn" data-toggle="modal" data-target="#request_modal">Create Request</a>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#" data-toggle="modal" data-target="#signup_modal">Sign Up</a>
        </li>
        <li>
          <a href="#" data-toggle="modal" data-target="#login_modal">Log in</a>
        </li>
        <li>
          <button type="button" class="btn btn-primary navbar-btn">Create a unit</button>
        </li>
      </ul>
    </div><!-- .collapse navbar-collapse -->

	</div>
</nav>' )

alert( html.trim() );