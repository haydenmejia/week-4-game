$(document).ready(function() {
    var wins = 0;
    var loses = 0;
    var score = 0; 
    var maxGuess = 12;
    var minGuess = 1;
    var maxRandomGen = 250;
    var minRandomGen = 15;

    var gem1 = randomNumberFromRange( minGuess, maxGuess);
    var gem2 = randomNumberFromRange( minGuess, maxGuess);
    var gem3 = randomNumberFromRange( minGuess, maxGuess);
    var gem4 = randomNumberFromRange( minGuess, maxGuess);

    var randomNumber = randomNumberFromRange(minRandomGen, maxRandomGen);

    function randomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function winLoss() {
        if (score > randomNumber) {
            alert('you lose!');

            score = 0;
            $('#score').text(score);
            
            loses++;
            $('#wins').text(wins);
            $('#loses').text(loses);

            randomNumber = randomNumberFromRange(minRandomGen, maxRandomGen);
            $('#randomNumber').text(randomNumber);

            var gem1 = randomNumberFromRange( minGuess, maxGuess);
            var gem2 = randomNumberFromRange( minGuess, maxGuess);
            var gem3 = randomNumberFromRange( minGuess, maxGuess);
            var gem4 = randomNumberFromRange( minGuess, maxGuess);
        } else if (score === randomNumber) {
            alert('You Win!');
            score = 0;
            $('#score').text(score);

            wins++;
            
            $('#wins').text(wins);
            $('#loses').text(loses);
            randomNumber = randomNumberFromRange(minRandomGen, maxRandomGen);
            $('#randomNumber').text(randomNumber);

            var gem1 = randomNumberFromRange( minGuess, maxGuess);
            var gem2 = randomNumberFromRange( minGuess, maxGuess);
            var gem3 = randomNumberFromRange( minGuess, maxGuess);
            var gem4 = randomNumberFromRange( minGuess, maxGuess);

        }
    }

    $('#wins').text(wins);
    $('#loses').text(loses);
    $('#score').text(score);
    $('#randomNumber').text(randomNumber);

    $('#redButton').on('click', function() {
        score += gem1;
        $('#score').text(score);
        winLoss();
    }); 
    $('#blueButton').on('click', function() {
        score += gem2;
        $('#score').text(score);
        winLoss();
    }); 
    $('#yellowButton').on('click', function() {
        score += gem3;
        $('#score').text(score);
        winLoss();
    }); 
    $('#greenButton').on('click', function() {
        score += gem4;
        $('#score').text(score);
        winLoss();
    }); 
 
});