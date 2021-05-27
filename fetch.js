const fs = require('fs');
const http = require("https");
const { argv } = require('process');
const cheerio = require('cheerio');
const Turndown = require('turndown');
const turndown = new Turndown();

let url = argv[2]
url = url.replace(/\/$/, '');

const name = url.replace('https://app.codility.com/programmers/lessons/', '');

function fetch(url) {

    // check from cache first
    if (fs.existsSync(`./${name}/page.html`)) {
        return Promise.resolve(
            fs.readFileSync(`./${name}/page.html`, { encoding: 'utf-8' })
        )
    }

    var content = "";

    return new Promise((resolve, reject) => {
        console.log(`fetching ${url}`);
        var req = http.request(url + '/', function (res) {
            res.setEncoding("utf8");

            res.on("data", function (chunk) {
                content += chunk;
            });

            res.on("end", function () {
                if (content) {
                    fs.writeFileSync(
                        `./${name}/page.html`,
                        content.trim(),
                        { encoding: 'utf-8' }
                    );
                }

                resolve(content);
            });

            res.on('error', (err) => {
                console.error('error');
                reject(err);
            })
        });

        req.end();
    })
}

fetch(url).then(pageHtml => {
    const $ = cheerio.load(pageHtml);
    var synopsis = $('.synopsis').text();
    var html = $('.desc-js-en').html();

    if (!html) {
        // in case we didn't find the correct description,
        // get the first one
        html = $('.desc').first().html();
    }

    if (!html) {
        console.error('failed to find the description within the provided html');
        return;
    }

    html = html.trim();

    var description = turndown.turndown(html);

    var title = $('.prog-button.blue.ga').attr('data-ga-label');
    var difficulty = $('.task-box').attr('class').split(' ').find(x => x.startsWith('diff-'));
    var images = $('img').map((i, x) => x.attribs['src']).toArray().filter(x => !x.startsWith('/static'));

    if (images.length) {
        images = [... new Set(images)];
    }

    // if we have a result url from a previous readme file
    var links = [];

    const readmePath = `./${name}/readme.md`;

    if (fs.existsSync(readmePath)) {
        var oldReadme = fs.readFileSync(readmePath, { encoding: 'utf-8' });

        // backup
        fs.writeFileSync(`./${name}/readme.md.bak`, oldReadme);

        links = oldReadme.split('\n')
            .filter(
                x => x.includes('https://app.codility.com/demo/results') ||
                    x.includes('https://app.codility.com/c/feedback') ||
                    x.includes('https://app.codility.com')
            )
            .map(x => x.trim())
            .map(x => x.substring(x.indexOf('http')))
            .map(x => x.endsWith('/') ? x.substring(0, x.length - 1) : x)
            .filter(x => x !== url);

        // uniq
        links = [... new Set(links)];
    }

    var functionLine = description.split("\n").find(x => x.includes('function solution'));

    if (functionLine) {
        functionLine = functionLine.replace(/;$/, '');
        functionLine = functionLine.substring(functionLine.indexOf('function '))
    }

    var fileContent = [
        title,
        '------------------------',
        synopsis + "\n",
        `Link: ${url}\n`,
        `Difficulty: ${difficulty}\n`,
        description,
        links.length ? '## Links: \n' + links.map(x => ' - ' + x).join('\n') : ''
    ];

    fs.writeFileSync(readmePath, fileContent.join("\n"), { encoding: 'utf-8' });
    fs.writeFileSync(`./${name}/meta.json`, JSON.stringify({
        title,
        datetime: new Date(),
        url,
        synopsis,
        difficulty,
        html,
        markdown: description,
        links,
        images,
    }, null, 2), { encoding: 'utf-8' });

    var indexFileContent = '';

    if (functionLine) {
        indexFileContent = [
            `${functionLine} {`,
            `}\n`,
            `module.exports.solution = solution;`
        ].join('\n')
    }

    if (!fs.existsSync(`./${name}/index.js`)) {
        fs.writeFileSync(`./${name}/index.js`, indexFileContent, { encoding: 'utf-8' });
    }

})


