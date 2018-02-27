(() => {
    var app = $.sammy(function () {

        this.get('#/home', function () {
            homeController.visualizeHomeController();
        });

        this.get('#/rockets', function () {
            rocketsController.visualizeRocketsController();
        });

        this.get('#/upcomingLaunches', function () {
            launchesController.visualizeLaunchesController();
        });

        this.get('#/rockets/:id', function () {
            const rocketId = this.params['id'];

            rocketDetailsController.visualizeRocketDetails(`${rocketId}`);
        });
    });

    $(function () {
        app.run();
    });
})();
