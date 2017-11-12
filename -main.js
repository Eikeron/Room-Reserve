var request = require('request');
var cheerio = require('cheerio');

request('http://leml365x-lemlpi.seattleu.edu/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('div.space').each(function(i, element){
            var next = $(this).next();
            console.log(next.text());
        });

        $('div.container').children().each(function() {
            var val = $(this).val();
            console.log(val);
            var str = val.toString();

            // returns true if room is in use
            var is_in_use = str.includes("in use");
            console.log(is_in_use);
        });
    }
});
