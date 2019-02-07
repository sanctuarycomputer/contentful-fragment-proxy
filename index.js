const request = require("request");

module.exports = async function (req, res) {
  request("https://cdn.jsdelivr.net/gh/sanctuarycomputer/contentful-fragment@master/dist/index.html")
  .on("response", remote => {
    remote.headers['Content-Type'] = 'text/html; charset=utf-8';
    remote.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    remote.headers['Pragma'] = 'no-cache';
    remote.headers['Expires'] = 0;
  }).pipe(res);
}
