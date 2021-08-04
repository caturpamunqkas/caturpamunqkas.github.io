<template>
    <div>
        <!-- About -->
        <div class="pb-2">
            <h1 class="title title--h1 first-title title__separate">Portfolio</h1>
        </div>

        <!-- Gallery -->
        <div class="pb-0">

            <!-- Content -->
            <div class="gallery-grid js-masonry js-filter-container">
                <div class="gutter-sizer"></div>
                <!-- Item 1 -->
                <figure v-for="(porto, index) in listPortofolio" :key="index" class="gallery-grid__item category-concept">
                    <div class="gallery-grid__image-wrap">
                        <img class="gallery-grid__image cover lazyload" src="/assets/img/image_01.jpg" data-zoom alt="" />
                    </div>
                    <figcaption class="gallery-grid__caption">
                        <h4 class="title gallery-grid__title">{{ porto.title }}</h4>
                        <span class="gallery-grid__category">{{ porto.build }}</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listPortofolio: [
                { title: "Sewa Tanah Web (Admin)", build: "Codeigniter + RestAPI" },
                { title: "Sewa Tanah Android (User)", build: "Android Java" },
                { title: "Kelasku.NET Android", build: "Android Java" },
                { title: "Catstore", build: "PHP + HTML + CSS + MYSQL" },
                { title: "ASIK DISPERINDAG", build: "Laravel + Vue.JS" },
                { title: "SI-LABI UPT.Lab DLH Jatim ", build: "Laravel + Vue.JS" },
                { title: "TUKINER", build: "Laravel + Vue.JS" },
                { title: "SIERKEL Kab. Lamongan", build: "Laravel + Vue.JS" },
                { title: "SAKIP & LKR PU-SDA", build: "Laravel + Vue.JS" },
                { title: "Horse Rental (Front End)", build: "Nuxt.JS + RestAPI" },
            ]
        }
    },
    methods: {
        loadJS() {
            /*-----------------------------------------------------------------
			Masonry
			-------------------------------------------------------------------*/	
			
			// Portfolio
			var $portfolioMasonry = $('.js-masonry').isotope({
				itemSelector: '.gallery-grid__item',
				layoutMode: 'fitRows',
				percentPosition: true,
				transitionDuration: '0.5s',
				hiddenStyle: {
					opacity: 0,
					transform: 'scale(0.001)'
				},
				visibleStyle: {
					opacity: 1,
					transform: 'scale(1)'
				},
				fitRows: {
					gutter: '.gutter-sizer'
				},	
				masonry: {
					columnWidth: '.gallery-grid__item',
					gutter: '.gutter-sizer',
					isAnimated: true
				}
			});
		
			$portfolioMasonry.imagesLoaded().progress( function() {
				$portfolioMasonry.isotope ({
					columnWidth: '.gallery-grid__item',
					gutter: '.gutter-sizer',
					isAnimated: true,
					layoutMode: 'fitRows',
					fitRows: {
						gutter: '.gutter-sizer'
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