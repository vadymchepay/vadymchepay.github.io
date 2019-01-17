document.querySelector( ".nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
    document.querySelector(".mobile-nav").classList.toggle("nav_open");
  });

document.querySelector( ".mobile-item.sub" )
  .addEventListener( "click", function() {
    this.classList.toggle( "open_sub" );
  });