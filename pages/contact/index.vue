<template>
    <div class="pb-5">
        <!-- About -->
        <div class="pb-2">
            <h1 class="title title--h1 first-title title__separate">Contact</h1>
        </div>

        <!-- Contact -->
        <!-- <div class="map" id="map"></div> -->
        <!-- <h2 class="title title--h3">Contact Form</h2> -->
            
        <form id="contact-form" class="contact-form" data-toggle="validator">
            <div class="row">
                <!-- <div class="form-group col-12 col-md-6">
                    <i class="font-icon icon-user"></i>
                    <input type="text" class="input input__icon form-control" id="nameContact" name="nameContact" placeholder="Full name" required="required" autocomplete="on" oninvalid="setCustomValidity('Fill in the field')" onkeyup="setCustomValidity('')">
                    <div class="help-block with-errors"></div>
                </div>
                <div class="form-group col-12 col-md-6">
                    <i class="font-icon icon-envelope"></i>
                    <input type="email" class="input input__icon form-control" id="emailContact" name="emailContact" placeholder="Email address" required="required" autocomplete="on" oninvalid="setCustomValidity('Email is incorrect')" onkeyup="setCustomValidity('')">
                    <div class="help-block with-errors"></div>
                </div> -->
                <div class="form-group col-12 col-md-12">
                    <textarea class="textarea form-control" id="messageContact" name="messageContact" placeholder="Your Message"  rows="4" required="required"></textarea>
                    <div class="help-block with-errors"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                    <!-- <div id="validator-contact" class="hidden"></div> -->
                </div>
                <div class="col-12 col-md-6 order-1 order-md-2 text-right">
                    <button @click="sendText" class="btn"><i class="font-icon icon-send"></i> Send Message</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: "Contact - Catur Pamungkas"
        }
    },
    methods: {
        loadMAP() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0dGVtcGxhdGUiLCJhIjoiY2s0M3I5ZHgzMGEzNDNucXM1cDd0dzl3cSJ9.a2wjLlxz8LzWj9nIoGsshw';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/light-v10',
                center: [-73.9751,40.7289], // starting position
                zoom: 13 // starting zoom
            });
                    
            // create the popup
            var popup = new mapboxgl.Popup({ offset: 40 }).setText(
                '756 Livingston Street, Brooklyn, NY 11201'
            );

            // create DOM element for the marker
            var el = document.createElement('div');
            el.id = 'marker';
            
            // create the marker
            new mapboxgl.Marker(el)
                .setLngLat([-73.9751,40.7289])
                .setPopup(popup) // sets a popup on this marker
                .addTo(map);

            // Add zoom and rotation controls to the map.
            map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        },
        sendText() {

            let body = $('#messageContact').val();

            var mail = `mailto:a.n.caturpamungkas@gmail.com?body=${body}`;
            var a = document.createElement('a');
            a.href = mail;
            a.click();

            return 1;
        } 
    },
    mounted() {
        setTimeout(() => {
            // this.loadMAP()
        }, 500);
    }
}
</script>