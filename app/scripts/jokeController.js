var jokesController = (function () {
    var visualizeJokeController = function () {
        $.get(config.jokeApi)
            .then((result) => {
                $('#request').html($(`
<<<<<<< HEAD
            <div>
            <h1>Some text here</h1>
            <p>${result.setup} <br/>${result.punchline}</p>
=======
            <div class="joke-style">
                <h1>Some text here</h1>
                <p>${result.setup} <br/>${result.punchline}</p>    
>>>>>>> ceb85c95b0afe6569b24d25d882537a7b7dd58fa
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
