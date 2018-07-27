
$("document").ready(function() {
    
    var number = 60;
    var intervalId;

    // Add on click function
    $("#start").on("click", start);
    
    function start() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
  
    //  Add decrement function
    function decrement() {
  
        // Decrease number by one
        number--;
        // Add the time remaining to HTML
        $("#timer").html("<h2>" + number + "</h2>");
      
        // Run the stop function if the number hits zero
        if (number === 0) {

        stop();

        function stop() {

            clearInterval(intervalId);
        }
    }
}
    
        $("#submission").on("click", function(){
        event.preventDefault();
        var answer1 = $("input[name=question1]:checked").val();
        var answer2 = $("input[name=question2]:checked").val();
        var answer3 = $("input[name=question3]:checked").val();
        var answer4 = $("input[name=question4]:checked").val();
        var answer5 = $("input[name=question5]:checked").val();
        var answer6 = $("input[name=question6]:checked").val();
        var answer7 = $("input[name=question7]:checked").val();
        var answer8 = $("input[name=question8]:checked").val();
        var answer9 = $("input[name=question9]:checked").val();
        var answer10 = $("input[name=question10]:checked").val();
        
        console.log(answer1);
        console.log(answer2);
        console.log(answer3);
        console.log(answer4);
        console.log(answer5);
        console.log(answer6);
        console.log(answer7);
        console.log(answer8);
        console.log(answer9);
        console.log(answer10);

        var numberCorrect = 0;
        var numberIncorrect = 0;
        var numberUnanswered = 0;
        
        //Add Score to HTML
        if (answer1 === "correct") {
            numberCorrect++;
        }
        else if (answer1 === "incorrect") {
            numberIncorrect++;
        }
        else {
            numberUnanswered++;
        }
        
        if (answer2 === "correct") {
            numberCorrect++;
        }
        else if (answer2 === "incorrect") {
            numberIncorrect++;
        }
        else {
            numberUnanswered++;
        }
        
        if (answer3 === "correct") {
            numberCorrect++;
        }
        else if (answer3 === "incorrect") {
            numberIncorrect++;
        }
        else {
            numberUnanswered++;
        }
        
        if (answer4 === "correct") {
            numberCorrect++;
        }
        else if (answer4 === "incorrect") {
            numberIncorrect++;
        }
        else {
            numberUnanswered++;
        }
        
        if (answer5 === "correct") {
            numberCorrect++;
        }
        else if (answer5 === "incorrect") {
            numberIncorrect++;
        }
        else {
            numberUnanswered++;
        }
        
        if (answer6 === "correct") {
            numberCorrect++;
        }
        else if (answer6 === "incorrect") {
            numberIncorrect++;
        }
        else {
            numberUnanswered++;
        }
        
        if (answer7 === "correct") {
            numberCorrect++;
        }
        else if (answer7 === "incorrect") {
            numberIncorrect++;
        }
        else {
            numberUnanswered++;
        }
        
        if (answer8 === "correct") {
            numberCorrect++;
        }
        else if (answer8 === "incorrect") {
            numberIncorrect++;
        }
        else {
            numberUnanswered++;
        }
        
        if (answer9 === "correct") {
            numberCorrect++;
        }
        else if (answer9 === "incorrect") {
            numberIncorrect++;
        }
        else {
            numberUnanswered++;
        }
        
        if (answer10 === "correct") {
            numberCorrect++;
        }
        else if (answer10 === "incorrect") {
            numberIncorrect++;
        }
        else {
            numberUnanswered++;
        }

        $("#correctAnswer").html("Correct: " + numberCorrect);
        $("#incorrectAnswer").html("Incorrect: " + numberIncorrect);
        $("#unanswered").html("Unanswered: " + numberUnanswered);
        
    });
});
