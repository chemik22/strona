$.getJSON("https://cors.szurek.local/10/", function(json) {
        alert(`Obecna temperatura to ${json['sekret']}.`);
    });
