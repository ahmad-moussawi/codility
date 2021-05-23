const fs = require('fs');
const http = require("https");
const { argv } = require('process');
const cheerio = require('cheerio');


function fetch(url) {
    var content = "";

    return new Promise((resolve, reject) => {
        var req = http.request(url, function (res) {
            res.setEncoding("utf8");
            res.on("data", function (chunk) {
                content += chunk;
            });

            res.on("end", function () {
                resolve(content);
            });
        });
        req.end();
    })
}


const url = argv[2]
const name = url.replace('https://app.codility.com/programmers/lessons/', '').replace(/\/$/, '');

fetch(url).then(html => {
    const $ = cheerio.load(html);
    var synopsis = $('.synopsis').text().trim();
    var description = $('.desc-js-en').text().trim();
    var title = $('.prog-button.blue.ga').attr('data-ga-label');

    var fileContent = [
        title,
        '------------------------',
        synopsis + "\n\n",
        `Link: ${url}\n\n`,
        description,
    ];

    fs.writeFileSync(`./${name}/readme.md`, fileContent.join("\n"), { encoding: 'utf-8' });

})


