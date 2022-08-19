<template>
	<div>
		<!-- About -->
		<div class="pb-0 pb-sm-2">
			<h1 class="title title--h1 first-title title__separate">About Me</h1>
			<p>
				Saya Achmad Novanto Catur Pamungkas, sudah menekuni di bidang Fullstack Developer selama 3 Tahun. Sejak tahun 2019 hingga sekarang, untuk project yang sering saya kerjakan yaitu Web Application menggunakan Framework Laravel, Codeigniter. Untuk Front-End menggunakan Vue.JS, Nuxt.JS, Ext.JS & cukup familiar dengan NodeJS maupun Typescript.
			</p>
			<p> Untuk Mobile Development, saya cukup mahir di Android Java (basic) dan Flutter. Saya tipikal orang yang senang untuk mempelajari hal - hal baru, mampu bersosialisasi dengan baik, dan juga mampu bekerja dibawah tekanan.
			</p>
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
							<h3 class="title title--h5">Bug Hunting</h3>
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

	</div>
</template>

<script>
	export default {
		head() {
			return {
				title: "About Me - Catur Pamungkas"
			}
		},
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
