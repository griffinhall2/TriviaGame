$("document").ready(function() {

    $("#submission").on("click", function(){
        event.preventDefault();
        var answer1 = $("input[name=question1]:checked").val();
        var answer2 = $("input[name=question2]:checked").val();
        var answer3 = $("input[name=question3]:checked").val();
        var answer4 = $("input[name=question4]:checked").val();
        var answer5 = $("input[name=question5]:checked").val();

        console.log(answer1);
        console.log(answer2);
        console.log(answer3);
        console.log(answer4);
        console.log(answer5);
        
    });
});
