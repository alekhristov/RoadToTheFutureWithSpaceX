(() => {
    var app = $.sammy(() => {

        this.get('#/home', () => {
            homeController.visualizeHomeController();
        });

        this.get('#/rockets', () => {
            rocketsController.visualizeRocketsController();
        });

        this.get('#/upcomingLaunches', () => {
            launchesController.visualizeLaunchesController();
        });

        this.get('#/jokes', () => {
            jokesController.visualizeJokeController();
        });

        this.get('#/rockets/:id', () => {
            const rocketId = window.location.hash.split('/')[2];

            rocketDetailsController.visualizeRocketDetails(`${rocketId}`);
        });

    })

    $(() => {
        app.run();
    });
})();
