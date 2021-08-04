<template>
	<div>
		<!-- About -->
		<div class="pb-0 pb-sm-2">
			<h1 class="title title--h1 first-title title__separate">About Me</h1>
			<p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
			<p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
		</div>
		
		<!-- What -->
		<div class="box-inner pb-0">
			<h2 class="title title--h3">What I'm Doing</h2>
			<div class="row">
				<!-- Case Item -->
				<div class="col-12 col-lg-6">
					<div class="case-item box box__second">
						<img class="case-item__icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-design.svg" alt="" />
						<div>
							<h3 class="title title--h5">Web Design</h3>
							<p class="case-item__caption">The most modern and high-quality design made at a professional level.</p>
						</div>	
					</div>
				</div>
				
				<!-- Case Item -->
				<div class="col-12 col-lg-6">
					<div class="case-item box box__second">
						<img class="case-item__icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-dev.svg" alt="" />
						<div>
							<h3 class="title title--h5">Web Development</h3>
							<p class="case-item__caption">High-quality and professional development of sites at the professional level.</p>
						</div>
					</div>
				</div>
				
				<!-- Case Item -->
				<div class="col-12 col-lg-6">
					<div class="case-item box box__second">
						<img class="case-item__icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-app.svg" alt="" />
						<div>
							<h3 class="title title--h5">Mobile Apps</h3>
							<p class="case-item__caption">Professional development of applications for iOS and Android.</p>
						</div>
					</div>
				</div>
				
				<!-- Case Item -->
				<div class="col-12 col-lg-6">
					<div class="case-item box box__second">
						<img class="case-item__icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-photo.svg" alt="" />
						<div>
							<h3 class="title title--h5">Photography</h3>
							<p class="case-item__caption">I make high-quality photos of any category at a professional level.</p>
						</div>
					</div>
				</div>
			</div>	
		</div>
		
		<!-- Clients -->
		<div class="box-inner">
			<h2 class="title title--h3">Clients</h2>
			
			<div class="swiper-container js-carousel-clients">
				<div class="swiper-wrapper">
					<!-- Item client -->
					<div class="swiper-slide">
						<a href="#"><img src="https://art-template.ru/vcard1/assets/img/logo-partner-white.svg" alt="Logo" /></a>
					</div>
					
					<!-- Item client -->
					<div class="swiper-slide">
						<a href="#"><img src="https://art-template.ru/vcard1/assets/img/logo-partner-white.svg" alt="Logo" /></a>
					</div>

					<!-- Item client -->
					<div class="swiper-slide">
						<a href="#"><img src="https://art-template.ru/vcard1/assets/img/logo-partner-white.svg" alt="Logo" /></a>
					</div>

					<!-- Item client -->
					<div class="swiper-slide">
						<a href="#"><img src="https://art-template.ru/vcard1/assets/img/logo-partner-white.svg" alt="Logo" /></a>
					</div>
					
					<!-- Item client -->
					<div class="swiper-slide">
						<a href="#"><img src="https://art-template.ru/vcard1/assets/img/logo-partner-white.svg" alt="Logo" /></a>
					</div>
					
					<!-- Item client -->
					<div class="swiper-slide">
						<a href="#"><img src="https://art-template.ru/vcard1/assets/img/logo-partner-white.svg" alt="Logo" /></a>
					</div>
				</div>
				
				<div class="swiper-pagination"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			loadJS() {
			
				// Clients
				$('.js-carousel-clients').each(function() {
					var carousel = new Swiper('.js-carousel-clients', {
						slidesPerView: 4,
						spaceBetween: 30,
						//loop: true,
						grabCursor: true,
						watchOverflow: true,
						pagination: {
							el: '.swiper-pagination',
							clickable: true
						},
						breakpoints: {
							320: {
								slidesPerView: 1,
								spaceBetween: 0
							},				
							580: {
								slidesPerView: 2,
								spaceBetween: 30
							},				
							991: {
								slidesPerView: 3,
								spaceBetween: 30
							}
						}
					});
				});
			}
		},
		mounted() {
			setTimeout(() => {
				this.loadJS()
			}, 500);
		}
	}
</script>