const jokesController = (() => {
    const visualizeJokeController = () => {
        $.get(config.jokeApi)
            .then((result) => {
                $('#request').html($(`
                <div class="joke-style">
                    <h1>Some text here</h1>
                    <p>${result.setup} <br/>${result.punchline}</p>
                </div>
            `));
        })
        .catch(function (error) {
            $('#request')
            .html($(`<h2>An Error has Ocurred</h2>`));
        });
    };

    return {
        visualizeJokeController
    }
}) ();
