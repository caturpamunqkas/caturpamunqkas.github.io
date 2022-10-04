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
                        <img class="gallery-grid__image cover lazyload" :src="porto.img" data-zoom alt="" />
                    </div>
                    <figcaption class="gallery-grid__caption">
                      <h4 class="title gallery-grid__title"><a :href="porto.url" target="_blank">{{ porto.title }}</a></h4>
                        <span class="gallery-grid__category">{{ porto.build }}</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: "Portofolio - Catur Pamungkas"
        }
    },
    data() {
        return {
            listPortofolio: [
                { img:"/assets/images/desktop.png", url: "https://gitlab.com/caturpamunqkas/sewatanah_web", title: "Sewa Tanah Web (Admin)", build: "Codeigniter + RestAPI" },
                { img:"/assets/images/smartphone.png", url: "https://gitlab.com/caturpamunqkas/sewatanah_app", title: "Sewa Tanah Android (User)", build: "Android Java" },
                { img:"/assets/images/smartphone.png", url: "https://gitlab.com/caturpamunqkas/kelasku", title: "Kelasku.NET Android", build: "Android Java" },
                { img:"/assets/images/desktop.png", url: "https://gitlab.com/caturpamunqkas/catstore", title: "Catstore", build: "PHP + HTML + CSS + MYSQL" },
                { img:"/assets/images/desktop.png", title: "ASIK DISPERINDAG", build: "Laravel + Vue.JS" },
                { img:"/assets/images/portofolio/silabi.png", url: "http://silabi.dlh.jatimprov.go.id/", title: "SI-LABI UPT.Lab DLH Jatim ", build: "Laravel + Vue.JS" },
                { img:"/assets/images/desktop.png", title: "TUKINER", build: "Laravel + Vue.JS" },
                // { img:"/assets/images/portofolio/CTS.png", title: "Consolidated Ticketing System", build: "Enggano Platform (Custom) + Ext.JS" },
                { img:"/assets/images/portofolio/PUSDA.png", url: "https://lkr.esakip.net/", title: "SAKIP & LKR PU-SDA", build: "Laravel + Vue.JS" },
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
