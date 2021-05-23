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

    if (!description) {
        // in case we didn't find the correct description,
        // get the first one
        description = $('.desc').first().text().trim();
    }

    var title = $('.prog-button.blue.ga').attr('data-ga-label');
    var difficulty = $('.task-box').attr('class').split(' ').filter(x => x.startsWith('diff-'));

    var functionLine = description.split("\n").find(x => x.includes('function solution'));

    if (functionLine) {
        functionLine = functionLine.replace(/;$/, '');
    }

    var fileContent = [
        title,
        '------------------------',
        synopsis + "\n",
        `Link: ${url}`,
        `Difficulty: ${difficulty}\n`,
        description,
    ];

    fs.writeFileSync(`./${name}/readme.md`, fileContent.join("\n"), { encoding: 'utf-8' });

    if (functionLine) {
        var indexFileContent = `${functionLine} {
}

module.exports.solution = solution;
`
    } else {
        indexFileContent = '';
    }

    if (!fs.existsSync(`./${name}/index.js`)) {
        fs.writeFileSync(`./${name}/index.js`, indexFileContent, { encoding: 'utf-8' });
    }

})


