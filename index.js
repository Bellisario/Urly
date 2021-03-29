process.removeAllListeners('warning');
let uu = require('url-unshort')();
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ask() {
	rl.question("Enter a link: ", function (link) {unshort(link)});
};

function unshort(text) {
	rl.pause();
    console.clear();
    console.log("Trying to unshort this link");
    uu.expand(text || "")
    .then(url => {
        console.clear();
        if (url)
            console.log(`Original url is: ${url}`);
        // no shortening service or an unknown one is used
        else
            console.log('This url can\'t be expanded');
			console.log();
		ask();
    })
    .catch(err => console.log(err));
}

ask();
