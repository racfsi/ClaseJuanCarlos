jQuery(function($) {

    var functionName = ["p", "r", "i", "n", "t"];
    var cont = functionName.length;
    var good = 0;

    //SEARCH FUNCTION NAME
    $('body').on('click', '#btn-search', function() {
        var val = $('#valFunction').val().toLowerCase();
        $(".poslett").removeClass('lettOk');
        good = 0;
        if (val == '') {
            respAjaxFail('Campo vacio');
        } else {
            SearchFunction(val);
        }
    });

    // FIND LETTERS IN THE ARRAY
    function SearchFunction(value) {
        if (value == 'print') {
            respAjaxDone('Función encontrada con éxito');
        } else {
            var newVal = value.split("");
            newVal.forEach(char => {
                $.each(functionName, function(key, letter) {
                    if (char == letter) {
                        good++;
                        AddClassLettOk(key);
                    }
                });
            });
            ValidateLetter();
        }
    }

    // CHECK LETTERS AND COUNT LENGTH NAME FUNCTION
    function ValidateLetter() {
        if (cont == good) {
            respAjaxDone('Función encontrada con éxito');
        } else {
            respAjaxFail('La función no pudo ser encontrada');
        }
    }

    // ADD CLASS LETTER GOOD
    function AddClassLettOk(pos) {
        $("#pos-" + pos).addClass('lettOk');
    }

    // RESPONSE CUSTOM | FAIL
    function respAjaxFail(html) {
        $("#responseAjax").removeClass("responseAjax-beforeSend");
        $("#responseAjax").addClass("responseAjax-fail");
        $("#responseAjax").html(html);
        setTimeout(function() {
            $("#responseAjax").removeClass("responseAjax-fail");
            $("#responseAjax").html("");
        }, 5000);
    }

    // RESPONSE CUSTOM | SUCCESS
    function respAjaxDone(html) {
        $("#responseAjax").removeClass("responseAjax-beforeSend");
        $("#responseAjax").addClass("responseAjax-done");
        $("#responseAjax").html(html);
        setTimeout(function() {
            $("#responseAjax").removeClass("responseAjax-done");
            $("#responseAjax").html("");
        }, 3000);
    }
});;