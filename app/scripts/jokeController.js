<<<<<<< HEAD
(function () {

    let jokesData = function () {
        return $.get(config.jokeApi);
    };

    $('#jokesModal').on('show.bs.modal', function (e) {
        jokesData()
            .done(function (data) {
                $('#replaceText').html($(`
                    <div>
                        <h4>${data.setup}</h4>
                        <h5>${data.punchline}</h5>
                    </div>
                `));
        });
    });
}) ();
=======
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
})();
>>>>>>> 9a6f6e64a912aec5b8661d5c8b9204f44d802196
