<template>
  <div>
    <!-- Preloader -->
    <div class="preloader">
	    <div class="preloader__wrap">
		    <div class="circle-pulse">
                <div class="circle-pulse__1"></div>
                <div class="circle-pulse__2"></div>
            </div>
		    <div class="preloader__progress"><span></span></div>
		</div>
	</div>
	
	<main class="main">
	    <div class="container gutter-top">
		    <div class="row sticky-parent">
			    <!-- Sidebar -->
                <aside class="col-12 col-md-12 col-xl-3">
				    <div class="sidebar box shadow pb-0 sticky-column">
						<svg class="avatar avatar--180" viewBox="0 0 188 188">
                            <g class="avatar__box">
                                <image xlink:href="/assets/img/avatar.png" height="100%" width="100%" />
                            </g>
                        </svg>
						<div class="text-center">
						    <h3 class="title title--h3 sidebar__user-name"><span class="weight--500">Catur</span> Pamungkas</h3>
							<div class="badge badge--dark">Fullstack Developer</div>
							
							<!-- Social -->
		                    <div class="social">
		                        <a class="social__link" href="https://www.facebook.com/"><i class="font-icon icon-facebook"></i></a>
		                        <a class="social__link" href="https://www.behance.com/"><i class="font-icon icon-twitter"></i></a>
		                        <a class="social__link" href="https://www.linkedin.com/"><i class="font-icon icon-linkedin2"></i></a>
		                        <a class="social__link" href="https://www.linkedin.com/"><i class="font-icon icon-instagram"></i></a>
		                    </div>
						</div>
						
						<div class="sidebar__info box-inner">
		                    <ul class="contacts-block">
					            <li class="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Birthday">
							        <i class="font-icon icon-calendar"></i>July 20, 2001
							    </li>
						        <li class="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Address">
							        <i class="font-icon icon-location"></i>Surabaya
							    </li>
						        <li class="contacts-block__item" data-toggle="tooltip" data-placement="top" title="E-mail">
							        <a href="mailto:example@mail.com"><i class="font-icon icon-envelope"></i>a.n.caturpamungkas@gmail.com</a>
							    </li>
						        <li class="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Phone">
							        <i class="font-icon icon-phone"></i>+6285855226808
							    </li>
						        <!-- <li class="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Skype">
							        <a href="skype:skype-example"><i class="font-icon icon-skype"></i>Felecia_Brown</a>
							    </li> -->
					        </ul>
							
							<a class="btn" href="#"><i class="font-icon icon-download"></i> Download CV</a>
						</div>
					</div>	
		        </aside>
		        
				<!-- Content -->
		        <div class="col-12 col-md-12 col-xl-9">
				    <div class="box shadow pb-0">
					    <!-- Menu -->
					    <div class="circle-menu">
						    <div class="hamburger">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
						</div>
						<div class="inner-menu js-menu">
						    <ul class="nav">
                                <li class="nav__item"><NuxtLink to="/">About</NuxtLink></li>
								<li class="nav__item"><NuxtLink to="/resume">Resume</NuxtLink></li>
                                <li class="nav__item"><NuxtLink to="/portofolio">Portfolio</NuxtLink></li>
                                <!-- <li class="nav__item"><NuxtLink to="/about">Blog</NuxtLink></li> -->
                                <li class="nav__item"><NuxtLink to="/contact">Contact</NuxtLink></li>
                            </ul>
						</div>
						
					    <Nuxt />

					</div>
					
					<!-- Footer -->
					<footer class="footer">© 2019 vCard</footer>
		        </div>
			</div>
		</div>	
    </main>

    <div class="back-to-top"></div>

    <!-- SVG masks -->
    <svg class="svg-defs">
        <clipPath id="avatar-box">
            <path d="M1.85379 38.4859C2.9221 18.6653 18.6653 2.92275 38.4858 1.85453 56.0986.905299 77.2792 0 94 0c16.721 0 37.901.905299 55.514 1.85453 19.821 1.06822 35.564 16.81077 36.632 36.63137C187.095 56.0922 188 77.267 188 94c0 16.733-.905 37.908-1.854 55.514-1.068 19.821-16.811 35.563-36.632 36.631C131.901 187.095 110.721 188 94 188c-16.7208 0-37.9014-.905-55.5142-1.855-19.8205-1.068-35.5637-16.81-36.63201-36.631C.904831 131.908 0 110.733 0 94c0-16.733.904831-37.9078 1.85379-55.5141z"/>
        </clipPath>
        <clipPath id="avatar-hexagon">
             <path d="M0 27.2891c0-4.6662 2.4889-8.976 6.52491-11.2986L31.308 1.72845c3.98-2.290382 8.8697-2.305446 12.8637-.03963l25.234 14.31558C73.4807 18.3162 76 22.6478 76 27.3426V56.684c0 4.6805-2.5041 9.0013-6.5597 11.3186L44.4317 82.2915c-3.9869 2.278-8.8765 2.278-12.8634 0L6.55974 68.0026C2.50414 65.6853 0 61.3645 0 56.684V27.2891z"/>
        </clipPath>		
    </svg>
  </div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	head: {
		bodyAttrs: {
			class: 'bg-triangles'
		}
	},
	methods: {
		loadJS() {
			var isMobile = false; 
			if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				$('html').addClass('touch');
				isMobile = true;
			}
			else {
				$('html').addClass('no-touch');
				isMobile = false;
			}
			
			
			/*-----------------------------------------------------------------
			Loaded
			-------------------------------------------------------------------*/

			anime({
				targets: 'body',
				opacity: 1,
				delay: 400,
				complete: function(anim) {
					progressBar(); //Init progress bar
				}
			});
			
			// $('body, .js-img-load').imagesLoaded({ background: !0 }).always( function( instance ) {
			// 	preloader(); //Init preloader
			// });

			// function preloader() {
			// 	var tl = anime.timeline({}); 
			// 	tl
			// 	.add({
			// 		targets: '.preloader',
			// 		duration: 1,
			// 		opacity: 1
			// 	})
			// 	.add({
			// 		targets: '.circle-pulse',
			// 		duration: 300,
			// 		//delay: 500,
			// 		opacity: 1,
			// 		zIndex: '-1',
			// 		easing: 'easeInOutQuart'
			// 	},'+=500')
			// 	.add({
			// 		targets: '.preloader__progress span',
			// 		duration: 500,
			// 		width: '100%',
			// 		easing: 'easeInOutQuart'
			// 	},'-=500')
			// 	.add({
			// 		targets: '.preloader',
			// 		duration: 500,
			// 		opacity: 0,
			// 		zIndex: '-1',
			// 		easing: 'easeInOutQuart'
			// 	});
			// };

			$('.preloader').delay(1000).fadeOut(500);


			/*-----------------------------------------------------------------
			Hamburger
			-------------------------------------------------------------------*/

			$('.hamburger').on('click', function() {
				$(this).toggleClass('is-active');
				$('.inner-menu').toggleClass('is-active');
				$('body').toggleClass('open-menu');
			});
			
			
			/*-----------------------------------------------------------------
			Nav
			-------------------------------------------------------------------*/
			
			var sideNavOpen = $('.hamburger');
			var sideNavTl = anime.timeline({autoplay: false});

			if (window.matchMedia("(max-width: 580px)").matches) {
				$('.js-menu').each(function(i) {
					sideNavTl
					.add({
						targets: '.nav',
						duration: 1000,
						width: ['0', '100%'],
						opacity: [0, 1],
						easing: 'easeInOutBack'
					})
					.add({
						targets: '.nav__item',
						duration: 200,
						delay: anime.stagger(50),
						opacity: [0, 1],
						translateX: [70, 0],
						easing: 'easeInOutBack'
					},'-=500');
				}); 
			} else {
				$('.js-menu').each(function(i) {
					sideNavTl
					.add({
						targets: '.nav',
						duration: 1000,
						width: ['0', '100%'],
						easing: 'easeInOutBack'
					})
					.add({
						targets: '.nav__item',
						duration: 200,
						delay: anime.stagger(50),
						opacity: [0, 1],
						translateX: [70, 0],
						easing: 'easeInOutBack'
					},'-=500');
				});  
			}
			
			$(sideNavOpen).on('click', function(e) {
				e.preventDefault();
				if (sideNavTl.began) {
					sideNavTl.reverse()
					sideNavTl.completed = false;
				}
				if (sideNavTl.paused) {
					sideNavTl.play()
				}
			});

			/*-----------------------------------------------------------------
			Sticky sidebar
			-------------------------------------------------------------------*/

			function activeStickyKit() {
				$('.sticky-column').stick_in_parent({
					parent: '.sticky-parent'
				});

				// bootstrap col position
				$('.sticky-column')
				.on('sticky_kit:bottom', function(e) {
					$(this).parent().css('position', 'static');
				})
				.on('sticky_kit:unbottom', function(e) {
					$(this).parent().css('position', 'relative');
				});
			};
			activeStickyKit();

			function detachStickyKit() {
				$('.sticky-column').trigger("sticky_kit:detach");
			};

			//  stop sticky kit
			//  based on your window width

			var screen = 1200;

			var windowHeight, windowWidth;
			windowWidth = $(window).width();
			if ((windowWidth < screen)) {
				detachStickyKit();
			} else {
				activeStickyKit();
			}

			// windowSize
			// window resize
			function windowSize() {
				windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
				windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
			}
			windowSize();

			function debounce(func, wait, immediate) {
				var timeout;
				return function() {
					var context = this, args = arguments;
					var later = function() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) func.apply(context, args);
				};
			};

			$(window).resize(debounce(function(){
				windowSize();
				$(document.body).trigger("sticky_kit:recalc");
				if (windowWidth < screen) {
					detachStickyKit();
				} else {
					activeStickyKit();
				}
			}, 250));


			/*-----------------------------------------------------------------
			Progress bar
			-------------------------------------------------------------------*/
			
			function progressBar() {
				$('.progress').each(function() {
					var ctrl = new ScrollMagic.Controller();
					new ScrollMagic.Scene({
						triggerElement: '.progress',
						triggerHook: 'onEnter',
						duration: 300
					})
					.addTo(ctrl)
					.on("enter", function (e) {
						var progressBar = $('.progress-bar');
						progressBar.each(function(indx){
							$(this).css({'width': $(this).attr('aria-valuenow') + '%', 'z-index': '2'});
						});
					});
				});
			}
			
			
			/*-----------------------------------------------------------------
			Scroll indicator
			-------------------------------------------------------------------*/
		
			function scrollIndicator() {
				$(window).on('scroll', function() {
					var wintop = $(window).scrollTop(), docheight = 
					$(document).height(), winheight = $(window).height();
					var scrolled = (wintop/(docheight-winheight))*100;
					$('.scroll-line').css('width', (scrolled + '%'));
				});
			}
			
			scrollIndicator(); //Init
			
			
			/*-----------------------------------------------------------------
			ScrollTo
			-------------------------------------------------------------------*/
			
			function scrollToTop() {
				var $backToTop = $('.back-to-top'),
					$showBackTotop = $(window).height();
					
				$backToTop.hide();


				$(window).scroll( function() {
					var windowScrollTop = $(window).scrollTop();
					if( windowScrollTop > $showBackTotop ) {
						$backToTop.fadeIn('slow');
					} else {
						$backToTop.fadeOut('slow');
					}
				});
				
				$backToTop.on('click', function (e) {
					e.preventDefault();
					$(' body, html ').animate( {scrollTop : 0}, 'slow' );
				});
			}
			
			scrollToTop(); //Init


			/*-----------------------------------------------------------------
			Style background image
			-------------------------------------------------------------------*/	
		
			$('.js-image').each(function(){
				var dataImage = $(this).attr('data-image');
				$(this).css('background-image', 'url(' + dataImage + ')');
			});
			
			
			/*-----------------------------------------------------------------
			Autoresize textarea
			-------------------------------------------------------------------*/	

			$('textarea').each(function(){
				autosize(this);
			});


			/*-----------------------------------------------------------------
			Tabs
			-------------------------------------------------------------------*/	
			
			$('.js-tabs').each(function(){
				$('.content .tabcontent').hide();
				$('.content .tabcontent:first').show();
				$('.nav .nav__item a').on('click', function () {
					$('.nav .nav__item a').removeClass('active');
					$(this).addClass('active');
					var currentTab = $(this).attr('href');
					$('.content .tabcontent').hide();            
					$(currentTab).show();
					$portfolioMasonry.isotope ({
						columnWidth: '.gallery-grid__item',
						gutter: '.gutter-sizer',
						isAnimated: true
					});
					$('.js-scroll').getNiceScroll().resize()
					return false;
				});
				
				// Mobile close menu
				var screenMobile = 580;
			
				windowWidth = $(window).width();
				if ((windowWidth < screenMobile)) {	
					$('.nav .nav__item a').on('click', function (e) {
						e.preventDefault();
						$('.hamburger').removeClass('is-active');
						$('.inner-menu').removeClass('is-active');
						$('body').removeClass('open-menu');
				
						if (sideNavTl.began) {
							sideNavTl.reverse()
							sideNavTl.completed = false;
						}
						if (sideNavTl.paused) {
							sideNavTl.play()
						}
					});
					
					// autoscroll to content
					$(".nav__item a").click(function(e) {
						e.preventDefault();
						var offset = -35;
				
						$('html, body').animate({
							scrollTop: $("#content").offset().top + offset
						}, 0);
					});			
				} else {
				
				}
			});
			
			
			/*-----------------------------------------------------------------
			Tooltip
			-------------------------------------------------------------------*/
			
			$(function () {
				$('[data-toggle="tooltip"]').tooltip()
			});


			/*-----------------------------------------------------------------
			Switch categories & Filter mobile
			-------------------------------------------------------------------*/	
		
			$('.select').on('click','.placeholder',function(){
			var parent = $(this).closest('.select');
			if ( ! parent.hasClass('is-open')){
				parent.addClass('is-open');
				$('.select.is-open').not(parent).removeClass('is-open');
			}else{
				parent.removeClass('is-open');
			}
			}).on('click','ul>li',function(){
				var parent = $(this).closest('.select');
				parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
				parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
			
				$('.filter__item').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				
				$('.js-filter-container').isotope({
					filter: selector
				});
				return false;	
			});

			/*-----------------------------------------------------------------
			niceScroll
			-------------------------------------------------------------------*/		

			$('textarea').niceScroll({
				horizrailenabled:false
			});


			/*-----------------------------------------------------------------
			emoji add in textarea
			-------------------------------------------------------------------*/
			
			$(function() {
				$('.emoji-wrap img').on('click', function(){
					var emoji = $(this).attr('title');
					$('#commentForm').val($('#commentForm').val()+" "+emoji+" ");
				});
			});


			/*-----------------------------------------------------------------
			mediumZoom
			-------------------------------------------------------------------*/
		
			mediumZoom('[data-zoom]', {
				margin: 30
			});

			
			/*-----------------------------------------------------------------
			Lazyload
			-------------------------------------------------------------------*/

			lazySizes.init();

			
			/*-----------------------------------------------------------------
			Polyfill object-fit
			-------------------------------------------------------------------*/	
			
			var $someImages = $('img.cover');
			objectFitImages($someImages);
			

			/*-----------------------------------------------------------------
			Contacts form
			-------------------------------------------------------------------*/

			$("#contact-form").validator().on("submit", function (event) {
				if (event.isDefaultPrevented()) {
					formError();
					submitMSG(false, "Please fill in the form...");
				} else {
					event.preventDefault();
					submitForm();
				}
			});

			function submitForm(){
				var name = $("#nameContact").val(),
					email = $("#emailContact").val(),
					message = $("#messageContact").val();
					
				var url = "assets/php/form-contact.php";
				
				$.ajax({
					type: "POST",
					url: url,
					data: "name=" + name + "&email=" + email + "&message=" + message,
					success : function(text){
						if (text == "success"){
							formSuccess();
						} else {
							formError();
							submitMSG(false,text);
						}
					}
				});
			}

			function formSuccess(){
				$("#contact-form")[0].reset();
				submitMSG(true, "Thanks! Your message has been sent.");
			}
		
			function formError(){
				$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).removeClass();
				});
			}  
		
			function submitMSG(valid, msg){
				var msgClasses;
				if(valid){
					msgClasses = "validation-success";
				} else {
				msgClasses = "validation-danger";
				}
				$("#validator-contact").removeClass().addClass(msgClasses).text(msg);
			}
		}
	},
	mounted() {
		setTimeout(() => {
			this.loadJS()
		}, 1000);
	}
}
</script>