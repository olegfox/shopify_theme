module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shopify');

    grunt.initConfig({
        shopify: {
            options: {
                //You can find these in your Shopify Admin under Apps then look at the bottom for Create a private API Key
                api_key: "6406b8b6be720a36ed4f76e2c21c5d77",
                password: "05940372532f29624252d884d33ff7ab",
                url: "olegfox.myshopify.com",
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