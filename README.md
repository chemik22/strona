<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CORS - podstawy</title>
    <script src="https://cdn.szurek.local/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.szurek.local/highlight.min.js"></script>
    <link rel="stylesheet" href="https://cdn.szurek.local/tailwind.1.4.6.min.css" />
    <link rel="stylesheet" href="https://cdn.szurek.local/highlight.js.css" />

</head>

<body>

    <div class="bg-gray-100 pt-10">
        <div class="mx-auto max-w-screen-2xl">
            <div class="p-2 bg-gray-100 rounded">
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/3 p-4">
                        <div class="text-3xl">CORS</div>
                        <div class="my-2 text-lg">Podstawy</div>
                    </div>
                    <div class="md:w-3/4">
                        <div class="p-4">

                            <div class="mb-2">
                            <script>
                                    function checkWeather1() {
                                        $.getJSON("https://cors.szurek.local/10/", function(json) {
                                            alert(`Obecna temperatura to ${json['sekret']}.`);
                                        });
                                    }
                                </script>
                                <div
                                    class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                    <div class="flex-auto">Przygotowanie</div>
                                </div>
                                <div class="p-2 text-justify text-left text-gray-800 mb-5 bg-white">
                                <p><a target="_blank" class="underline" href="https://pogoda.szurek.local">pogoda.szurek.local</a> to proste API, które zwraca średnią temperaturę w Polsce.</p>
                                <p>Spróbujmy ją wyświetlić, korzystając z prostego skryptu.</p>
                                <button class="my-4 px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" onclick="checkWeather1()">Sprawdź pogodę</button>
                                </div>
                                <pre><code class="language-js">
    $.getJSON("https://pogoda.szurek.local/", function(json) {
        alert(`Obecna temperatura to ${json['heat']}.`);
    });
                                </code></pre>
                            </div>

                            <div class="mb-2">
                            <script>
                                    function checkWeather2() {
                                        $.getJSON("https://pogoda.szurek.local?cors=1", function(json) {
                                            alert(`Obecna temperatura to ${json['heat']}.`);
                                        });
                                    }
                                </script>
                                <div
                                    class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                                    <div class="flex-auto">Access-Control-Allow-Origin</div>
                                </div>
                                <div class="p-2 text-justify text-left text-gray-800 mb-5 bg-white">
                                <p>Niestety to nie działa. Przeglądarka w konsoli wyświetla:</p>
                                <p class="text-red-600">cors.szurek.local/:1 Access to XMLHttpRequest at 'https://pogoda.szurek.local/' from origin 'https://cors.szurek.local' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.</p>
                                <p>Przeglądarka oczekuje, że serwer zwróci nagłówek <b>Access-Control-Allow-Origin</b>. Spróbujmy to naprawić.</p>
                                <p class="mt-4"> Serwer zwraca ten nagłówek, jeśli w adresie przekażemy parametr <code>?cors=1</code>.</p>
                                
                                <button class="my-4 px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" onclick="checkWeather2()">Sprawdź pogodę jeszcze raz</button>
                                </div>
                                <pre><code class="language-js">
    $.getJSON("https://pogoda.szurek.local?cors=1", function(json) {
        alert(`Obecna temperatura to ${json['heat']}.`);
    });
                                </code></pre>
                            </div>

                            <div class="mb-2">
                            <script>
                                    function checkOrigin() {
                                        alert(window.location.origin);
                                    }
                                    function checkWeather3() {
                                        $.getJSON("https://pogoda.szurek.local?cors=2", function(json) {
                                            alert(`Obecna temperatura to ${json['heat']}.`);
                                        });
                                    }
                                    function checkWeather4() {
                                        $.getJSON("https://pogoda.szurek.local?cors=3", function(json) {
                                            alert(`Obecna temperatura to ${json['heat']}.`);
                                        });
                                    }
                                    function checkWeather5() {
                                        $.getJSON("https://pogoda.szurek.local?cors=4", function(json) {
                                            alert(`Obecna temperatura to ${json['heat']}.`);
                                        });
                                    }
                                </script>
                               

	<script>
		hljs.highlightAll();
	</script>
</body>
