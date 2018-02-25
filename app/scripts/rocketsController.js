$(function () {
    $('#rockets').on('click', () => {
        $.get(config.rocketsApi)
            .then((result) => {
                console.log(result);
                let rocketsData = '<div><h2 class="home-header">Random Header</h2><div class="row">';

                for (rocket of result) {
                    rocketsData += `<div class="col-md-4 cols-style"><a href="#" onclick="visualiseRocketDetails(rocket)"><img src="app/images/${rocket.id}.jpg" alt="" class="img-fluid img-hover"></a>`
                    rocketsData += `<h3>Rocket name: ${rocket.name}</h3>`;
                    rocketsData += `<h3>Cost per launch: ${rocket.cost_per_launch}</h3></div>`;
                }
                rocketsData += '</div> </div>';
                $('#request').html(rocketsData);
            })

            .catch(function (error) {
                $('#request')
                    .html($(`<h2>An Error has Ocurred</h2>`));
            });
    })
})