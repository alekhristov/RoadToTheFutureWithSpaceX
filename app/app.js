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

        this.get('#/jokes', function () {
            jokesController.visualizeJokeController();
        });

        this.get('#/rockets/:id', function () {
            const rocketId = window.location.hash.split('/')[2];

            rocketDetailsController.visualizeRocketDetails(`${rocketId}`);
        });

    })

    $(function () {
        app.run();
    });
})();
