const visualiseRocketDetails = (rocket) => {
    $('#request').html($(`
            <div class="row padding">
                <div class="col-md-6">
                    <img src="app/images/${rocket.id}.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h4>Name: ${rocket.name}</h4>
                    <h4>Cost: ${rocket.cost_per_launch}</h4>
                    <h4>Country: ${rocket.country}</h4>
                    <h4>Name: ${rocket.description}</h4>   
                </div>
            </div>
            `));

}