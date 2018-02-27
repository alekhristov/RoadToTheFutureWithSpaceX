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
<<<<<<< HEAD
        
    });
=======

        this.get('#/rockets/:id', function () {
            const rocketId = window.location.hash.split('/')[2];

            rocketDetailsController.visualizeRocketDetails(`${rocketId}`);
        });

    })
>>>>>>> de504e1d2b2dc3655607e41261051e03b3602ebe

$(function () {
    app.run();
});
}) ();
