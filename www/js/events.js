/**
 * Created by jeton on 25.11.15.
 */
$('.main-div .btn-main').click(function(){
    var selected = $(this).attr('id');
    App.select(selected);

});
$('.btnSubmit').click(function(){
    App.typeLength = 0;
    Score.submitted = true;
    var firstNum = App.firstNumber;
    var secondNum = App.secondNumber;
    var result = App.result;
    var correct;
    switch(App.selected){
        case 'addition':
            correct = App.addition(firstNum, secondNum);
            break;
        case 'substraction':
            correct = App.substraction(firstNum, secondNum);
            break;
        case 'division':
            correct = App.division(firstNum, secondNum);
            break;
        case 'multiplication':
            correct = App.multiplication(firstNum, secondNum);
            break;
    }
    if(result === correct){
        App.showResponse(true);
        setTimeout(function(){
            App.start();
        },1000);
        App.raiseScore();
    }else{
        App.showResponse(false);
        setTimeout(function(){
           App.start();
        },1000);
        HTML.popup();
        navigator.vibrate(1000);
    }
});

$('.btnNext').click(function(){
    App.start();
});

$('.scores .btn-home').click(function(){
    $('.calc-div').hide();
    $('.scores').hide();
    $('.main-div').show();
});

$('.btn-scores').click(function(){
    $('.main-div').hide();
    $('.scores').show();
});

$('.btn-calc').click(function(){
    if(App.typeLength > 3){
        return false;
    }
    App.typeLength++;
    var value = $(this).attr('data');
    if($('.result').text() !== ""){
        var current =  $('.result').text();
        $('.result').text(current + value);
        App.result = parseInt(current + value);
    }else{
        $('.result').text(value);
        App.result = parseInt(value);
    }

});

$('.btn-clear').click(function(){
   $('.result').text(' ');
    App.typeLength = 0;
});

$('.btn-submit-score').click(function(){
    var name = $('#playerName').val();
    Score.save(name, App.score);
    App.score = 0;
    $('.score').text(0);
});

$('.btn-scores').click(function(){
    Score.showAll();
});

$('.btn-save-score').click(function(){
    HTML.popup();
});


$('.calc-div .btn-danger').click(function(){
    if(!Score.submitted){
        HTML.popupExit();
        App.score = 0;
        $('.score').text(0)
    }else{
        $('.calc-div').hide();
        $('.scores').hide();
        $('.main-div').show();
    }
});

$('#btnYes').click(function(){
    $('#exit').hide();
    $('#normal').show();
    $('.btn-submit-score').show();
});


$('#btnNo').click(function(){
    $('#appModal').modal('hide');
    $('.calc-div').hide();
    $('.scores').hide();
    $('.main-div').show();
});