const visualiseRockets = () => {
    $.get(config.rocketsApi)
        .then((result) => {
            let rocketsData = '<div>';

            for (rocket of result) {
                rocketsData += `<h1>Rocket name: ${rocket.name}</h1>`;
                rocketsData += `<h1>Cost per launch: ${rocket.cost_per_launch}</h1>`;
            }
            rocketsData += '</div>';
            $('#wrapper').html(rocketsData);
        })

        .catch(function (error) {
            $('#wrapper')
            .html($(`<h2>An Error has Ocurred</h2>`));
        });
}