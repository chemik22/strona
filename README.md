<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CORS - podstawy</title>
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

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

	<script>
		hljs.highlightAll();
	</script>
</body>
