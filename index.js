// Run this file with "node index.js" to produce the index.html file

const fs = require("fs");

var list = "";

//Writing HTML
console.log("Writing HTML");
fs.readdir("./", function (err, files) {
  files.forEach((element) => {
    if (element != ".git" && element != ".gitignore" && element != "README.md" && element != "index.html" && element != "index.js")
      list += `<li><a href="${element} "> ${element}</a></li> \n`;
  });
  var indexHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Malindu's Projects</title>
  <link rel="stylesheet" href="styles.css">
  
</head>
<body>
	<style>
  body{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 3rem;
}
</style>
  <h1>This website includes my various web dev projects.</h1>
  <p>Currently, I am following <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank">Angela Yu's Web Dev Course.</a>
  <br>The following are my submissions of the homework assignments for the course:</p>
  <ul>
    ${list}
  </ul>
  
	<a href="https://github.com/thisismalindu/full-stack-dev-angela">Git Repo</a>
</body>
</html>
`;

  fs.writeFile("index.html", indexHTML, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log("Writing HTML done!");
  });
});