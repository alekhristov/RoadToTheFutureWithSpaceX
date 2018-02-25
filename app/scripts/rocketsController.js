$(function () {
    $('#rockets').on('click', () => {
        $.get(config.rocketsApi)
            .then((result) => {
                console.log(result);
                let rocketsData = '<div class="row">';

                for (rocket of result) {
                    rocketsData += `<div class="col-md-4"><a href="#" onclick="visualiseRocketDetails(rocket)"><img src="app/images/${rocket.id}.jpg" alt="" class="img-fluid"></a>`
                    rocketsData += `<h1>Rocket name: ${rocket.name}</h1>`;
                    rocketsData += `<h1>Cost per launch: ${rocket.cost_per_launch}</h1></div>`;
                }
                rocketsData += '</div>';
                $('#request').html(rocketsData);
            })

            .catch(function (error) {
                $('#request')
                    .html($(`<h2>An Error has Ocurred</h2>`));
            });
    })
})