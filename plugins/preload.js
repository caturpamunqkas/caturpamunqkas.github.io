export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        if(typeof $ != "undefined") {
            $('.preloader').fadeIn(0);
        }
        next()
    })

    app.router.afterEach((to, from) => {
        if(typeof $ != "undefined") {
            $('.preloader').delay(1000).fadeOut(500);
        }
    })
}
