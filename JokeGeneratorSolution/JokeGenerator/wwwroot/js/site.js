$(document).ready(function () {
    var favoriteProgrammingLanguage = 'C#';
    const API_URL = "https://api.openai.com/v1/engines/text-davinci-003/completions";
    const API_KEY = "YOUR_API_KEY";

    $('#btnGenerate').on('click', function () {
        displayLoader();
        $.ajax({
            url: API_URL,
            type: "POST",
            dataType: "json",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`,
            },
            data: JSON.stringify({
                prompt: `Tell me a funny joke about ${favoriteProgrammingLanguage}.`,
                max_tokens: 100,
                temperature: 0.5
            }),
            success: function (data) {
                hideLoader();
                $('#container').html('');
                $('#container').html(data.choices[0].text);
            },
            error: function (xhr) {
                hideLoader();
                console.log(xhr);
            }
        });
    });

    function displayLoader() {
        $('.loader-container').addClass('show');
    }

    function hideLoader() {
        $('.loader-container').removeClass('show');
    }

    $('input[type=radio][name=favoriteLanguage]').change(function () {
        favoriteProgrammingLanguage = this.value;
    });
});