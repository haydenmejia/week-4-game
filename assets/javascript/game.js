$(document).ready(function() {
    var wins = 0;
    var loses = 0;
    var score = 0;
    var randomNumber =  150 + Math.floor(Math.random() *25); // 65-75

    $('#wins').text(wins);
    $('#loses').text(loses);
    $('#score').text(score);
    $('#randomNumber').text(randomNumber);

    $('#redButton').on('click', function() {
        score = score + 10;
        $('#score').text(score);
    }); 
    $('#blueButton').on('click', function() {
        score = score + 16;
        $('#score').text(score);
    }); 
    $('#yellowButton').on('click', function() {
        score = score + 24;
        $('#score').text(score);
    }); 
    $('#greenButton').on('click', function() {
        score = score + 28;
        $('#score').text(score);
    }); 
 
});