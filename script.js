

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the toggle button and the menu
    const toggleButton = document.getElementById("navbarToggle");
    const menu = document.getElementById("navbarMenu");
  
    // Add click event listener to the toggle button
    toggleButton.addEventListener("click", function () {
        // Toggle the display of the menu and change the toggle button icon
        if (menu.style.display === "flex") {
            menu.style.display = "none";
            toggleButton.innerHTML = "&#9776;"; // Hamburger icon
        } else {
            menu.style.display = "flex";
            toggleButton.innerHTML = "&times;"; // Close icon
        }
    });
  });
  

  $(".quote-submit").on('click',()=>{
    var nameregex= new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
    firstName=$("#firstName").val();
    if(!firstName || ! firstName.trim().match(firstName)){
      $("#firstName").css('border',"1px solid red");
      alert('Invalid name, please check')
      return;
    }
    $("#firstName").css('border',"1px solid #ccc");
    firstName=firstName.trim();
    Message=$("#message").val();
    if(! Message){
      Message="";
    }
    else{
      Message+="."
    }
    country=$("#to").val();
    console.log(country)
    countryList=["Afghanistan","Bangladesh","Bhutan","India","Maldives","Nepal","SriLanka","USA","United Kingdom"];
    if (countryList.indexOf(country)==-1){
      $("#to").css('border',"1px solid red");
      alert('Invalid country, please check')
      return;
    }
    $("#to").css('border',"1px solid #ccc");
    products=[];
    allcheckboxes=$(".boxes input[type=checkbox]:checked");
    if(allcheckboxes.length==0){
      alert('Please select a product before submit !!');
      return;
    }
    for(i=0;i<allcheckboxes.length;i++){
      products.push($(allcheckboxes[i]).val())
    }
    
    new_products = products.slice(0,-1).join(', ')
    new_products+=" and "+products.slice(-1);
    message="Hello AK Brothers, I am "+firstName+". I am in need of "+new_products + " in "+country+". "+Message;
    whatsappUrl="https://wa.me/917737859169?text="+encodeURI(message)
    window.open(whatsappUrl, '_blank');
    $("#firstName, #message, #to").val("");
    $(".boxes input[type=checkbox]").prop('checked',false);
  });


  













 // hero-section- fading title
 $(document).ready(function() {
  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
      .fadeIn(750)
      .delay(1000)
      .fadeOut(750, showNextQuote);
  }

  showNextQuote();
});





$(".readmorebtn").on('click',(ev)=>{
    c_btn = $(ev.currentTarget);
    if(c_btn.text()=="Read More"){
      c_btn.text("Read Less");
      $(".extrapara").css('display','block');
    }
    else{
      c_btn.text("Read More");
      $(".extrapara").css('display','none');
    }
});
// about





$(function() {
  var $clientslider = $('#clientlogo');
  var clients = $clientslider.children().length;
  var clientwidth = (clients * 220); 
  $clientslider.css('width', clientwidth);
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  $(document).on({
    mouseenter: function() {
      rotating = false;
    },
    mouseleave: function() {
      rotating = true;
    }
  }, '#ourclients');
  function rotateClients() {
    if (rotating != false) {
      var $first = $('#clientlogo li:first');
      $first.animate({
        'margin-left': '-220px'
      }, 2000, function() {
        $first.remove().css({
          'margin-left': '0px'
        });
        $('#clientlogo li:last').after($first);
      });
    }
  }
});


// testimonials


$(document).ready(function(){
  $(".testi").owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });
});