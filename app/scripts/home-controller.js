(function () {

    $('#home').on('click', function () {

        service.getCompanyData()
        .done(function (data) {
            // do something with the data received
            console.log(data);
        })
        .fail(function (error) {
            // when error
        });

    });

}) ();
