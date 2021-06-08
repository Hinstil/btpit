$(function(){

    $('.one').on('click', function(){
        $('.one_txt').show(600);
        $(this).hide(600);
    })

    $('.one_txt').dblclick(function(){
        $('.one').show(600);
        $(this).hide(600);
    });

    $('.two').on('click', function(){
        $('.two_txt').show(600);
        $(this).hide(600);
    })

    $('.two_txt').dblclick(function(){
        $('.two').show(600);
        $(this).hide(600);
    });

    $('#p1').on('click', function(){
        $(this).css({'background': '#333', 'color' : '#fff'})
    });

    $('#p2').on('dblclick', function(){
        $(this).css({'background': '#333', 'color' : '#fff'})
    });

    $('#p3').on('mouseover', function(){
        $(this).css({'background': '#333', 'color' : '#fff'})
    });

    $('.calculate-variables-button').on('click', function(){
        let x = $('.input-x').val();
        let answer_variables = (Math.sqrt(x+1) + Math.sqrt(Math.pow(x, 4) - 1)) / ( 9 * Math.cos(1+Math.log(x)) + 2 * Math.sqrt(x));
        $('.answer-variables').text('Ответ: ' + answer_variables);
    });

    $('.calculate-hypotenuse-button').on('click', function(){
        let a1 = parseFloat($('.input-a').val());
        let b1 = parseFloat($('.input-b').val());
        let c;
        let P;
        c = Math.round(Math.sqrt((Math.pow(a1, 2)) + (Math.pow(b1, 2))));
        P = a1 + b1 + c;
        $('.answer-hypotenuse').text('Ответ: c = ' + c + ',  P = ' + P);
    });

    $('.calculate-numbers-button').on('click', function(){
        let a2 = parseFloat($('.input_one').val()),
            b2 = parseFloat($('.input_two').val()),
            c2 = parseFloat($('.input_three').val());

        $('.answer-numbers').text('Ответ: наименьшее: ' + Math.min(a2,b2,c2) + '; наибольшее: ' + Math.max(a2,b2,c2));
    });

    $('.calculate-expression-button').on('click', function(){
        let n = parseFloat($('.input-n').val());
        let answer_expression = 0;
        for(let i = 1; i<=n; i++){
            answer_expression += Math.pow(-1,i+1) * (1 + i/10);
        }
        $('.answer-expression').text('Ответ: ' + answer_expression)
    });

});