$(function () {
    $('#home, #spaceX').on('click', () => {
        visualiseHome();
    })
})

// $(function () {
//     $('#spaceX').on('click', () => {
//         visualiseHome();
//     })
// })

function visualiseHome() {
    $.get(config.companyInfoApi)
        .then((result) => {
            $('#request').html($(`
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
            $('#request')
                .html($(`<h2>An Error has Ocurred</h2>`));
        });
}

