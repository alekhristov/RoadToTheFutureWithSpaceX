(function () {
    var app = $.sammy(function () {

        this.get('#/home', function () {
            homeController.visualizeHomeController();
        });

        this.get('#/rockets', function () {
            rocketsController.visualizeRocketsController();
        });

        this.get('#/upcomingLaunches', () => {
            launchesController.visualizeLaunchesController();
        });

        this.get('#/rockets/:id', function () {
            const rocketId = this.params['id'];

            rocketDetailsController.visualizeRocketDetails(`${rocketId}`);
        });
<<<<<<< HEAD
    });
=======

        this.get('#/aboutus', function () {
            aboutUsController.visualizeAboutUs();
        });
    })
>>>>>>> 9a6f6e64a912aec5b8661d5c8b9204f44d802196

    $(function () {
        app.run();
    });
})();
