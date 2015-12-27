/**
 * Created by jeton on 25.11.15.
 */
var App = {
    selected: null,
    firstNumber: null,
    secondNumber: null,
    result: null,
    score: 0,
    typeLength: 0,
    start: function(){
        $('.msg').text('');
        Score.submitted = false;
        this.firstNumber = this.getRandomInt();
        this.secondNumber = this.getRandomInt();
        $('.result').text('');
        $('.firstNumber').text(this.firstNumber);
        $('.secondNumber').text(this.secondNumber);
        HTML.reset();
    },
    addition: function(first, second){
        return first + second;
    },
    substraction: function(first, second){
        return first - second;
    },
    division: function(first, second){
        return first / second;
    },
    multiplication: function(first, second){
        return first * second;
    },
    raiseScore: function(){
        this.score++;
        $('.score').text(this.score);
    },
    showResponse: function(flag){
        if(flag){
           $('.correct').show();
            $('.panel-body').addClass('correct-ans');
        }else{
            $('.wrong').show();
            $('.panel-body').addClass('wrong-ans');
        }
    },
    select: function(selected){
        this.selected = selected;
        switch(selected){
            case 'addition':
                $('.operator').text('+');
                break;
            case 'substraction':
                $('.operator').text('-');
                break;
            case 'division':
                $('.operator').text('/');
                break;
            case 'multiplication':
                $('.operator').text('x');
                break;
        }
        this.start();
        $('.main-div').hide();
        $('.calc-div').show();
        $('.header').text(selected.toUpperCase());
    },
    getRandomInt: function(){
        return Math.floor(Math.random() * 10);
    }
};