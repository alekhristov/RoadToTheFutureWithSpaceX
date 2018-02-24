const visualiseJoke = () => {
    $.get(config.jokeApi)
        .then((result) => {
            $('#request').html($(`
            <div>
            <h1>Some text here</h1>
            <p>${result.setup} <br/>${result.punchline}</p>    
            </div>
            `));
        })
        .catch(function (error) {
            $('#request')
                .html($(`<h2>An Error has Ocurred</h2>`));
        });
}