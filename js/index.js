let equation = '';
let showDisplay = $('.display');
let click = new Audio('./js/click.mp3');

$('button').click(function () {
    const orginalClass = $(this).attr('class');
    $(this).addClass('pressed');
    setTimeout(() => {
        $(this).removeClass('pressed');
    }, 100);
    statement(orginalClass);
    click.play();
});

let appendValue = function (number) {
    equation += number;
    console.log(equation);
    showDisplay.val(equation);
}
function statement(click) {
    switch (click) {
        case 'dot':
            appendValue('.');
            break;
        case 'one':
            appendValue('1');
            break;
        case 'two':
            appendValue('2');
            break;
        case 'three':
            appendValue('3');
            break;
        case 'four':
            appendValue('4');
            break;
        case 'five':
            appendValue('5');
            break;
        case 'six':
            appendValue('6');
            break;
        case 'seven':
            appendValue('7');
            break;
        case 'eight':
            appendValue('8');
            break;
        case 'nine':
            appendValue('9');
            break;
        case 'zero':
            appendValue('0');
            break;

        // Operators will also append on click.
        case 'divide':
            appendValue('/');

            break;
        case 'multiply':
            appendValue('*');
            break;
        case 'substract':
            appendValue('-');

            break;
        case 'add':
            appendValue('+');
            break;

        // calculate & clear function will happen on click.

        case 'reset':
            resetDisplay();
            break;
        case 'enter':
            calculate();
            break;

    }
}

let resetDisplay = ()=>{
    equation = '';
    showDisplay.val(equation);
}

let calculate = () =>{

    try{
        showDisplay.val(eval(equation));
    }
    catch(error){
        showDisplay.val("Error");
    }
}

