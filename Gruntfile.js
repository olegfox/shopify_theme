module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shopify');

    grunt.initConfig({
        shopify: {
            options: {
                //You can find these in your Shopify Admin under Apps then look at the bottom for Create a private API Key
                api_key: "de724a535ce1b6ad2f4f369bb44390da",
                password: "740fef529d18ff50f6bbb9835252e9d3",
                url: "tattooist-shop.myshopify.com",
                base: 'shop/'
            }
        },
        watch: {
            shopify: {
                files: ['shop/**'],
                tasks: ["shopify"]
            }
        }

    });

    grunt.registerTask('default', ['shopify']);

};