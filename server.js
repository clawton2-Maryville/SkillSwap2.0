const http = require("http");
const fs = require("fs");
const findSkill = require("./skillMatcher");

const server = http.createServer((req, res) => {

    // Serve index.html
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    // Serve style.css
    else if (req.url === "/style.css") {
        fs.readFile("style.css", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
    }

    // Serve script.js
    else if (req.url === "/script.js") {
        fs.readFile("script.js", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.end(data);
        });
    }

    // Use our custom module
    else if (req.url === "/photography") {

        const match = findSkill("Photography");

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <h1>SkillSwap Match</h1>
            <p>${match.name} can teach you ${match.skill}!</p>
            <a href="/">Back to SkillSwap</a>
        `);
    }

    // Page not found
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("SkillSwap server running on port 3000");
});
