const axios = require("axios");

module.exports = async function (req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.statusCode = 200;
  return axios({
    method: 'get',
    url: 'https://cdn.jsdelivr.net/gh/sanctuarycomputer/contentful-fragment@master/dist/index.html',
    responseType: 'stream'
  }).then(({ data }) => data);
}
