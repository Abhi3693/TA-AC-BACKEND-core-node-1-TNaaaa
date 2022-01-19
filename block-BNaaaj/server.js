const { constants } = require("buffer");
let url = require("url");

let parsedUrl = url.parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`);

console.log(parsedUrl.protocol);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(url.parse(parsedUrl.query));

parsedUrl = url.parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`, true);

console.log(parsedUrl.query);
