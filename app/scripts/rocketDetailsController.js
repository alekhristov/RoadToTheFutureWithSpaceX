var rocketDetailsController = (function () {
    var visualizeRocketDetails = function(rocketId) {
        var rocket = container.database.rockets.find(r => r.id === rocketId);
        $('#request').html($(`
            <div class="row padding">
                <div class="col-md-6">
                    <img src="app/images/${rocket.id}.jpg" alt="" class="img-fluid rocket-details">
                </div>
                <div class="col-md-6 rocket-details">
                    <h4>Name: ${rocket.name}</h4>
                    <h4>Cost: $${rocket.cost_per_launch}</h4>
                    <h4>Country: ${rocket.country}</h4>
                    <h4>Description: ${rocket.description}</h4>   
                </div>
            </div>
            `));
    }
    return {
        visualizeRocketDetails
    }
})();
