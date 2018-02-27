<<<<<<< HEAD
var rocketsController = (function () {
    var visualizeRocketsController = function () {
<<<<<<< HEAD
        getRocketsData()
        .done(function (data) {
            
        });
    };

    var getRocketsData = function () {
        var rocketsData = $.get(config.rocketsApi, function (data) {

        });
=======
=======
const rocketsController = (() => {
    const visualizeRocketsController = () => {
>>>>>>> 4690e593993d596229e490cc6488067a65ff0523
        $.get(config.rocketsApi)
            .then((result) => {
                container.database.rockets = result;

                let rocketsData = '<div><h2 class="rockets-header">Random Header</h2><div class="row">';

                for (rocket of result) {
                    rocketsData += `<div id="${rocket.id}" class="col-md-4 cols-style"><a href="#/rockets/${rocket.id}"><img src="app/images/${rocket.id}.jpg" alt="" class="img-fluid img-hover"></a>`
                    rocketsData += `<h3>Rocket name: ${rocket.name}</h3>`;
                    rocketsData += `<h3>Cost per launch: $${rocket.cost_per_launch}</h3></div>`;
                }
                rocketsData += '</div> </div>';
                $('#request').html(rocketsData);
            })
>>>>>>> de504e1d2b2dc3655607e41261051e03b3602ebe

        return rocketsData;
    };

    return {
        visualizeRocketsController
    }
}) ();


// $.get(config.rocketsApi)
//     .then((result) => {
//
//         let rocketsData = '<div><h2 class="home-header">Random Header</h2><div class="row">';
//
//         for (rocket of result) {
//             rocketsData += `<div class="col-md-4 cols-style"><a href="#" onclick="visualizeRocketDetails(rocket)"><img src="app/images/${rocket.id}.jpg" alt="" class="img-fluid img-hover"></a>`
//             rocketsData += `<h3>Rocket name: ${rocket.name}</h3>`;
//             rocketsData += `<h3>Cost per launch: ${rocket.cost_per_launch}</h3></div>`;
//         }
//
//         rocketsData += '</div> </div>';
//         $('#request').html(rocketsData);
//     })
//     .catch(function (error) {
//         $('#request')
//             .html($(`<h2>An Error has Ocurred</h2>`));
//     });
