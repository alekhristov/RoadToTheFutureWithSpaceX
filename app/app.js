(function () {
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
        
    });

    $(function () {
        app.run();
    });
}) ();
