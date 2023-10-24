<html lang="en">

<head>
    <script src="https://code.jquery.com/jquery-3.7.0.js"></script>
</head>

<body>
<div>
                            <script>
                                    function checkWeather1() {
                                        $.getJSON("https://cors.szurek.local/10/", function(json) {
                                            alert(`Obecna temperatura to ${json['sekret']}.`);
                                        });
                                    }
                                </script>
                               
                                <button class="my-4 px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" onclick="checkWeather1()">Sprawdź pogodę</button>
                                </div>
                                
</body>
</html>
