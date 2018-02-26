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
      
        this.get('#/rockets/falcon1', function () {
            rocketDetailsController.visualizeRocketDetails('falcon1');
        });
      
        this.get('#/rockets/falcon9', function () {
            rocketDetailsController.visualizeRocketDetails('falcon9');
        });
      
        this.get('#/rockets/falconheavy', function () {
            rocketDetailsController.visualizeRocketDetails('falconheavy');
        });

    })

    $(function () {
        app.run();
    });
}) ();
