var wordsEnglish = "Hello World";
            var wordsSpansih = "Hola Mundo";
            var wordsFrench = "Bonjour le Monde";
            var translatedGreeting = String;

            function translateBtn(){
                if (document.getElementById('lan1').checked) {
                    translatedGreeting = wordsEnglish;
                } 
                else if (document.getElementById('lan2').checked){
                    translatedGreeting = wordsSpansih;
                }
                else if (document.getElementById('lan3').checked){
                    translatedGreeting = wordsFrench;
                }

                
                console.log(translatedGreeting);
                document.getElementById("greeting").innerHTML = translatedGreeting;
            }