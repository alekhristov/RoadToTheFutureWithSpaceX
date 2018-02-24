const visualiseHome = () => {
    $.get(config.companyInfoApi)
        .then((result) => {
            $('#wrapper').html($(`
            <div>
                    <h1>Company name: ${result.name}</h1>
                    <h1>Founder: ${result.founder}</h1>
                    <h1>Founded: ${result.founded}</h1>
                    <h1>Employees: ${result.employees}</h1>
                    <h1>Vehicles: ${result.vehicles}</h1>
                    <h1>CEO: ${result.ceo}</h1>
                    <h1>Headquarters: <br>Address: ${result.headquarters.address} <br>City: ${result.headquarters.city} <br>State:${result.headquarters.state}</h1>
                    <p>${result.summary}</p>
                </div>
            `));
        })
        .catch(function (error) {
            $('#wrapper')
                .html($(`<h2>An Error has Ocurred</h2>`));
        });
}