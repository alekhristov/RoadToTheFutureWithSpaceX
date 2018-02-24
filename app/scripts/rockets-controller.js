(function () {

    $('#rockets').on('click', function () {

        service.getAllRockets()
        .done(function (data) {
            // do something with the data received
            console.log(data);
        })
        .fail(function (error) {
            // when error
        });

    });

}) ();
