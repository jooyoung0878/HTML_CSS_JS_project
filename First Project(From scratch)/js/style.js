//modal window upon clicking logo on top-left corner
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


//slider image
$(function(){

    var slideIndex = 1;
    showSlides(slideIndex);


    function plusSlides(n) {
        showSlides(slideIndex += n);    
    }


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
});

//main menu - 9 images with button controller
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

//Live-search function

$(function(){
    var hotKeywords = {
        design: ["Graphic design","Interior design","Game design","Fashion","architecture","Industrial design","UI desin"],
        creator: ["Social media","Digital media","Instagram","Youtube star","Influencer","Podcast","News and social impact editor"],
        exercise: ["Personal Training","Pilates","Yoga","Diets","Posture correction"]
    };
    var resultArray = [];
    var $search = $('#t-search');
    
    $.each(hotKeywords,function(key,value){
        for(var i=0; i<value.length; i++){
            resultArray.push({
                element: "<p>"+value[i]+"</p>",
                text: value[i]
            });
        }
    });
    
    function filter(){
        $('div.results-wrapper').empty();
        var query = this.value.trim().toLowerCase();
        resultArray.forEach(function(result){
            var keyword = result.text.toLowerCase();
            var status = true;
            var dump = [];
            if(query){
                for(var i=0; i<query.length; i++){
                    if(keyword.charAt(i)!=query.charAt(i)){
                        status = false;
                    }
                }
                if(status){
                    $('div.results-wrapper').append(result.element);
                }
            }
        });
    }

    $search.on('input',filter);

    $('div.results-wrapper').on('click',"p",function(){
        $search.val($(this).text()); 
    });
});
    
    
  
    
    
  