/* ----------------------------------------------------------------------------------------
* Author        : 1W Media
* Template Name : Regain - Clean & Minimal Personal vCard Template
* Version       : 1.0     
* ---------------------------------------------------------------------------------------- */

   (function ($) {
    'use strict';

          $(window).on('load', function () {


            
            /*  -------------------------------------------------------------------------  *
             *                            Preloader                                        *
             *  -------------------------------------------------------------------------  */
            $('#preloader').delay(300).fadeOut('slow',function(){
              $(this).remove();
            });


          });
          

          $(document).ready(function () {




            /*  -------------------------------------------------------------------------  *
             *                            Sticky Menu                                      *
             *  -------------------------------------------------------------------------  */
            $(".menu-container > .sticky").sticky({
                topSpacing: 0,
            });



            /*  -------------------------------------------------------------------------  *
             *                            Portfolio                                        *
             *  -------------------------------------------------------------------------  */
            
              $('.works .work-items').isotope({
                itemSelector: '.col-md-4'
            });

            // init Isotope
            var $container = $('.work-items').isotope({
                itemSelector: '.item'
            });

            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function () {
                    var number = $(this).on('.number').text();
                    return parseInt(number, 10) > 50;
                },
                // show if name ends with -ium
                ium: function () {
                    var name = $(this).on('.name').text();
                    return name.match(/ium$/);
                }
            };

            // bind filter button click
            $('#filters').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[filterValue] || filterValue;
                $container.isotope({
                    filter: filterValue
                });
            });

            // change is-checked class on buttons
            $('.filters').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'li', function () {
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                });
            });         
   


        /*  -------------------------------------------------------------------------  *
         *                            Navigation js                                    *
         *  -------------------------------------------------------------------------  */            
           
            $(document).ready(function () {
                $(document).on("scroll", onScroll);
                
                //smoothscroll
                $('.list-inline a').not('.external').on('click', function (e) {
                    e.preventDefault();
                    
                    
                    $('a').each(function () {
                        $(this).removeClass('active');
                    })
                    $(this).addClass('active');
                  
                    var target = this.hash,
                        
                    $target = $(target);
                    $('html, body').stop().animate({
                        'scrollTop': $target.offset().top+2
                    }, 500, 'swing', function () {
                        window.location.hash = target;
                        $(document).on("scroll", onScroll);
                    });
                });
            });

            function onScroll(event){
                var scrollPos = $(document).scrollTop();
                $('.list-inline a').not('.external').each(function () {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                        $('.list-inline ul li a').removeClass("active");
                        currLink.addClass("active");
                    }
                    else{
                        currLink.removeClass("active");
                    }
                });
            }


           
            $(document).ready(function () {
                $(document).on("scroll", onScroll);
                
                //smoothscroll
                $('.arrow-icon').on('click', function (e) {
                    e.preventDefault();
                  
                    var target = "#about",
                        
                    $target = $(target);
                    $('html, body').stop().animate({
                        'scrollTop': $target.offset().top+2
                    }, 500, 'swing', function () {
                        window.location.hash = target;
                        $(document).on("scroll", onScroll);
                    });
                });
            });






      });

  })(jQuery);
            





	







			

             












