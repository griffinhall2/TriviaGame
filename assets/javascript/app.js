
$("document").ready(function() {
    
    var number = 60;
    var intervalId;

    
    $("#start").on("click", start);
    
    function start() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
  
      //  The decrement function.
    function decrement() {
  
        //  Decrease number by one.
        number--;
    
        $("#timer").html("<h2>" + number + "</h2>");
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

        
    });
});
