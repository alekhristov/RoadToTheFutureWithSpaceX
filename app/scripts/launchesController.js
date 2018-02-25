$(function () {
    $('#upcomingLaunches').on('click', () => {
        $.get(config.launchesApi)
            .then((result) => {
                console.log(result);
                let launchesData = '<div class="col">';

                for (launch of result) {
                    launchesData += `<h1>Rocket name: ${launch.flight_number}</h1>`;
                    
                    let date = new Date(launch.launch_date_utc);
                    let gmtIndex = date.toUTCString().indexOf('GMT');
                    let parsedDate = date.toUTCString().substring(0, gmtIndex - 1);

                    launchesData += `<h1>Date: ${parsedDate}</h1>`;
                    launchesData += `<h1>Rocket: ${launch.rocket.rocket_name}</h1>`;
                    launchesData += `<h1>Launch site: ${launch.launch_site.site_name_long}</h1>`;

                    if (launch.details !== null) {
                        launchesData += `<p>Details: ${launch.details}<p>`;
                    }
                }
                launchesData += '</div>';
                $('#request').html(launchesData);
            })

            .catch(function (error) {
                $('#request')
                    .html($(`<h2>An Error has Ocurred</h2>`));
            });
    })
})