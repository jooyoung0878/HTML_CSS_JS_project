
var modal = (function(){
    var $window = $(window);
    var $modal = $('<div calss="modal"/>');
    var $content = $('<div clss="modal-content"/>');
    var $close = $('<button role="button" class="modal-close">close</button>');

    $modal.append($content, $close);

    $close.on('click',function(e){
        e.preventDefault();
        modal.close();
    });

    return{
        center: function(){
            var top = ($window.height() - $modal.outerHeight()) /2;
            var left = ($window.width() - $modal.outerWidth()) /2 ;
            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        },
        open: function(settings){
            $content.empty().append(settings.content);
            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');

            modal.center();
            
        },
        close: function(){
            $content.empty();
            $modal.detach();
        
        }
    };
}());

$(function(){

    var slideIndex = 1;
    showSlides(slideIndex);

// Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);    
    }

// Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    $('#dot1').on('click',function(){
        currentSlide(1);
    });

    $('#dot2').on('click',function(){
        currentSlide(2);
    });

    $('#dot3').on('click',function(){
        currentSlide(3);
    });
    
    $('a.prev').on('click',function(){
        plusSlides(-1);
    });

    $('a.next').on('click',function(){
        plusSlides(1);
    });

    $('#search a').on('click',function(e){
        e.preventDefault();
        alert('Works still in progress...');
    });
});

$(function(){
    var $imgs = $('#gallery img');                  // Store all images
  var $buttons = $('#buttons');                   // Store buttons element
  var tagged = {};                                // Create tagged object

  $imgs.each(function(){
    var img = this;
    var tags = $(this).data("tags");
    if(tags){
      tags.split(',').forEach(function(item){
      if(tagged[item]==null){
        tagged[item]=[];
      }
      tagged[item].push(img);
      });  
    }
  });

  $('<button/>',{
    text: 'Show All'+'(' + $imgs.length + ')',
    class: 'active',
    click: function(){
      $(this).addClass('active').siblings().removeClass('active');
      $imgs.show();
    }
  }).appendTo($buttons);

  $.each(tagged,function(tagName){
    $('<button>',{
      text: tagName + '(' + tagged[tagName].length + ')',
      click: function(){
        $(this).addClass('active').siblings().removeClass('active');
        $imgs.hide().filter(tagged[tagName]).show();
      }
    }).appendTo($buttons);
  });
});



    
    
  
    
    
  