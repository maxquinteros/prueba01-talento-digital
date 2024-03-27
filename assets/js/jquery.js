$(document).ready(function () {
    $(".destacar").hover(function () {
        $(this).css({
            'transform': 'scale(1.2)', // Agrandar
        });
    }, function () {
        $(this).css({
            'transform': 'scale(1)', // Restaurar tamaño original
        });
    });
});

$(document).ready(function () {
    $("#quienes-somos-columna1").click(function () {
        $("#quienes-somos-texto1").toggle();
    });
});

$(document).ready(function () {
    $("#quienes-somos-columna2").click(function () {
        $("#quienes-somos-texto2").toggle();
    });
});

$(document).ready(function () {
    $("#quienes-somos-columna3").click(function () {
        $("#quienes-somos-texto3").toggle();
    });
});

