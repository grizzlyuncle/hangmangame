    var cityArray = ["Durham", "Newcastle", "Manchester", "Edinburgh", "York","Madrid","Rome"];
    var containerDiv = document.getElementById("divContainer");
    var correctLetterLi = document.getElementById("correctLetters");
    var incorrectLetterList = document.getElementById("incorrectLetters");
    var wordSelection = cityArray[Math.floor(Math.random()*cityArray.length)];
    var correctAnswer = wordSelection;
    console.log(correctAnswer);

    /*function addList(){
        console.log("test");
        var alphabet = ['a','b','c','d','e','f', 'g', 'h',
              'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
              't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var letters = document.createElement('ul');
        //var buttons = document.getElementById('currentDiv');
        for(var i = 0; i < alphabet.length; i++){
            var listItem = document.createElement("li");
            listItem.innerHTML = alphabet[i];
            letters.appendChild(listItem);
        }
    }*/
//Call the addElement function and set clicking to only be enabled once
    $("#test").click(function(){
        $(this).prop('disabled', true);
        addElement();
    });
    function addElement(){
        for(var i = 0; i < wordSelection.length; i++){
            var div = document.createElement("div");
            div.id = "word-list";
            div.innerHTML = "__";
            containerDiv.appendChild(div);
        }
    }

    function handleGuess(){

        var correctGuessLetterList = [];
        var incorrectGuessLetterList = [];
        var selectedLetter = document.getElementById("selectedLetter").value;
        console.log(selectedLetter);
        var checkMatch = correctAnswer.indexOf(selectedLetter);
        //console.log(checkMatch);
        console.log(correctAnswer.charAt(checkMatch));
        if(selectedLetter.length > 0){
            correctGuessLetterList.push(selectedLetter);
                while(checkMatch !== -1){
                    checkMatch = correctAnswer.indexOf(selectedLetter, checkMatch + 1);
                    var getLines = document.getElementById("word-list");
                    getLines.innerHTMl = correctAnswer.charAt(checkMatch);
                }
        }else{
            window.alert("Please enter a letter");
        }
        if(correctGuessLetterList.length > 0){
            //console.log("This has worked");
            for(var i = 0; i < correctGuessLetterList.length; i++ ){
                //alert(correctGuessLetterList[i]);
                var displayLetter = document.createElement("li");
                displayLetter.id = "correctLetter";
                displayLetter.innerHTMl = correctGuessLetterList[i];
                correctLetterLi.appendChild(displayLetter);
                console.log(correctGuessLetterList);
            }
        }else{

            incorrectGuessLetterList.push(selectedLetter);
            //console.log(incorrectGuessLetterList);
            for(var i = 0;i < incorrectGuessLetterList.length; i++){
                console.log(incorrectGuessLetterList[i]);
                var displayWrongLetter = document.createElement("li");
                displayWrongLetter.id = "incorrect-letter";
                displayWrongLetter.innerHTML = incorrectGuessLetterList[i];
                incorrectLetterList.appendChild(displayWrongLetter);
            }
        }
        //console.log(correctGuessLetterList);


    }
