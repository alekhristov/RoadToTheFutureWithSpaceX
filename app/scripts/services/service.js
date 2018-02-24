var service = (function () {

    var getCompanyData = function() {

        var companyData = $.get('https://api.spacexdata.com/v2/info', function (data) {
            // do some data manipulation if necessary
        });

        return companyData;
    }

    var getAllRockets = function () {

        var rockets = $.get('https://api.spacexdata.com/v2/rockets', function (data) {
            // do some data manipulation if necessary
        });

        return rockets;
    }

    return {
        getCompanyData,
        getAllRockets
    }

}) ();
