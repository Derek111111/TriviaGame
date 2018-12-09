$(document).ready(function(){

    //constants(used trivia.fyi for some of my questions)

    var questionOne = {question: "What city was the capital of the United States of America from 1785 untill 1790?",
        answer:"New York",
        options: ["Detroit","New York", "Washington D.C"]
    };

    var questionTwo = {question: "What is the only snake in the world that builds a nest for its eggs?",
         answer:"King Cobra",
         options: ["Python","Coral Snake", "King Cobra"]
    };

    var questionThree = {question: "What inland U.S. state has the longest shoreline?",
         answer:"Michigan",
         options: ["California","Florida", "Michigan","Alabama"]
    };

    var questionFour = {question: "What is a word called when it is the same both forwards and backwards??",
         answer:"Palindrome",
        options: ["Stupid","Palindrome", "Rhymes","Fibonacci word"]
    };

    var questionFive = {question: "How do red blood cells get their color?",
        answer:"Hemoglobin",
        options: ["Pigment","Hemoglobin", "Protein"]
    };

    var questionSix = {question: "Which mammal is the only mammal born with horns?",
        answer:"Giraffe",
        options: ["Me","Giraffe", "Lion"]
    };

    var questionSeven = {question: "Who is Spongebob's boss?",
        answer:"Mr. Krabs",
        options: ["Mr. Krabs","Patrick", "Squidward"]
    };

    var questionEight = {question: "Which president delivered the emancipation proclimation?",
        answer:"Abraham Lincoln",
        options: ["THe Trumpster","Abraham Lincoln", "Geirge Washington","Obama"]
    };

    var questionNine = {question: "Which bird is flightless?",
        answer:"Kiwi",
        options: ["Kiwi","Hummingbird", "Crane"]
    };

    var questionTen = {question: "What is the capital of the state of Washington??",
        answer:"Olympia",
        options: ["Olympia","Georgia", "New York","Arkansas"]
    };

    var questions = [questionOne, questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

    var maxTime = 120;//seconds

    //changing variables
    var answeredCorrectly;
    var timeLeft = maxTime;
    var timer = null;
    var choices = [];

    function countDown(){

        timeLeft--;
        $("#time-viewer").text("Time Left: " + timeLeft + " seconds");
        if(timeLeft <= 0){
            clearInterval(timer);
            endGame();
        }

    }

    function endGame(){
        $(".question-viewers").empty();
        $("#time-viewer").text("All done!");
        $("#done").css("display","none");

        var questionsCorrect = 0;
        for(var ans = 0; ans < choices.length; ans++){

            if(questions[ans].answer == choices[ans]){
                questionsCorrect++;
            }

        }

        var questionsIncorrect = questions.length - questionsCorrect;

        $("#questions-correct").text("Correct Answers: " + questionsCorrect);
        $("#questions-incorrect").text("Incorrect Answers: " + questionsIncorrect);
        $("#total-questions").text("Total Questions: " + questions.length);
    }

    $("#start").on("click",function(){

        $("#start").css("display","none");
        for(var i = 0; i < questions.length; i++){
            var currQuestion = questions[i];
            var questionTitle = $("<h4 class='left'><br>");
            questionTitle.text(currQuestion.question);
            $(".question-container").append(questionTitle);
            choices.push(null);

            for(var opt = 0; opt < currQuestion.options.length; opt++){

                var option = currQuestion.options[opt];
                 var radBut = $("<input type='radio' class='left'>" + option + "<br>");//future self remember radio buttons with the same name cannot be checked at the same time
                radBut.attr("name", i);//name is question number so i can have it stored and also have them be grouped
                 radBut.attr("value",option);
                $(".question-container").append(radBut);
            }

        }

        $("input[type=radio]").change(function(){
            var buttonVal = $(this).attr("value");
            var questionID = $(this).attr("name");
            choices[questionID] = buttonVal;
        });
        $("#done").css("display","initial");

        $("#done").on("click",function(){

            clearInterval(timer);
            endGame();

        });
       timer = setInterval(countDown,1000);

    });
    

});