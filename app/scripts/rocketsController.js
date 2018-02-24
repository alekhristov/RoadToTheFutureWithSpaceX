const visualiseRockets = () => {
    $.get(config.rocketsApi)
        .then((result) => {
            let rocketsData = '<div>';

            for (rocket of result) {
                rocketsData += `<h1>Rocket name: ${rocket.name}</h1>`;
                rocketsData += `<h1>Cost per launch: ${rocket.cost_per_launch}</h1>`;
            }
            rocketsData += '</div>';
            $('#request').html(rocketsData);
        })

        .catch(function (error) {
            $('#request')
            .html($(`<h2>An Error has Ocurred</h2>`));
        });
}