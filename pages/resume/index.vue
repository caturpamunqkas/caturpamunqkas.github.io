<template>
    <div>
        <!-- About -->
        <div class="pb-3">
            <h1 class="title title--h1 first-title title__separate">Resume</h1>
        </div>
        
        <!-- Experience -->
        <div class="pb-0">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h2 class="title title--h3"><img class="title-icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-education.svg" alt="" /> Education</h2>
                    <div class="timeline">
                        <!-- Item -->
                        <article class="timeline__item">
                            <h5 class="title title--h5 timeline__title">SMK Negeri 2 Surabaya</h5>
                            <span class="timeline__period">2016 — 2019</span>
                            <p class="timeline__description">Jurusan Rekayasa Perangkat Lunak (RPL), aktif dalam kelompok belajar / organisai / ekstrakulikuler IT CLUB. Sebuah wadah untuk bertukar informasi dan belajar seputar dunia pemrograman.</p>
                        </article>
                    </div>	
                </div>
                
                <div class="col-12 col-lg-6">
                    <h2 class="title title--h3"><img class="title-icon" src="https://art-template.ru/vcard1/assets/icons/dark/icon-experience.svg" alt="" /> Experience</h2>
                    <div class="timeline">
                        <!-- Item -->
                        <article class="timeline__item">
                            <h5 class="title title--h5 timeline__title">Fullstack Developer at MCFLYON TEKNOLOGI INDONESIA</h5>
                            <span class="timeline__period">2019 — Sekarang</span>
                            <p class="timeline__description"></p>
                        </article>
                        
                        <!-- Item -->
                        <article class="timeline__item">
                            <h5 class="title title--h5 timeline__title">Fullstack Developer at Aksamedia</h5>
                            <span class="timeline__period">2017 — 2018 (Magang)</span>
                            <p class="timeline__description">Pengenalan terhadapat Web Framework, mengerjakan Company Profile suatu lembaga maupun perusahaan.</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Skills -->
        <div class="box-inner box-inner--rounded">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h2 class="title title--h3">Design Skills</h2>
                    <div class="box box__second">
                        <!-- Progress -->
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-text"><span>Web Design</span><span>80%</span></div>
                            </div>
                            <div class="progress-text"><span>Web Design</span></div>
                        </div>
                        
                        <!-- Progress -->
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-text"><span>Graphic Design</span><span>75%</span></div>
                            </div>
                            <div class="progress-text"><span>Graphic Design</span></div>
                        </div>
                        
                        <!-- Progress -->
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-text"><span>Photoshop</span><span>90%</span></div>
                            </div>
                            <div class="progress-text"><span>Photoshop</span></div>
                        </div>
                        
                        <!-- Progress -->
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-text"><span>Illustrator</span><span>50%</span></div>
                            </div>
                            <div class="progress-text"><span>Illustrator</span></div>
                        </div>
                    </div>
                </div>
                
                <div class="col-12 col-lg-6 mt-4 mt-lg-0">
                    <h2 class="title title--h3">Coding Skills</h2>
                    <div class="box box__second">
                        <!-- Progress -->
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-text"><span>CSS</span><span>85%</span></div>
                            </div>
                            <div class="progress-text"><span>CSS</span></div>
                        </div>
                        
                        <!-- Progress -->
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-text"><span>Javascript</span><span>90%</span></div>
                            </div>
                            <div class="progress-text"><span>Javascript</span></div>
                        </div>
                        
                        <!-- Progress -->
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-text"><span>HTML</span><span>99%</span></div>
                            </div>
                            <div class="progress-text"><span>HTML</span></div>
                        </div>
                        
                        <!-- Progress -->
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-text"><span>PHP</span><span>80%</span></div>
                            </div>
                            <div class="progress-text"><span>PHP</span></div>
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
            title: "Resume - Catur Pamungkas"
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        loadJS() {
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
    },
    mounted() {
        setTimeout(() => {
            this.loadJS()
        }, 500);
    }
}
</script>