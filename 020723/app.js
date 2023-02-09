$(function() {
    var $gifArea = $('#display');
    var $searchInput = $('#query');

    $('form').on('submit', function (e) {
        e.preventDefault();
        var searchTerm = $searchInput.val();
        $searchInput.val('');
        $.get(
            `https://api.giphy.com/v1/gifs/search?api_key=CsrT4XAMPFgxgTjWPIKDbNfYTdlegTFg&q=${searchTerm}`
        ).then(function (res) {
            console.log(res);
            var numResult = res.data.length;
            if(numResult) {
                var $randomGif = Math.floor(Math.random() * numResult);
                var $newColumn = $("<div>", {class: "col-md-4 col-12 mb-4 mt-2"});
                var $newGif = $(`<img>`, {
                    src: res.data[$randomGif].images.original.url,
                    class: 'w-100',
                });
                $newColumn.append($newGif);
                $gifArea.append($newColumn);
            };
        });
    });
    $("#remove").on("click", function() {
        $gifArea.empty();
    });
});