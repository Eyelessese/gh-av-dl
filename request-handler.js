const request = require('request');
const fs = require('fs');

/*
function getURL(protocol, domain, resource, com)
{
  return `${protocol}://${domain}${resource}.${com}`;
}*/

let url = 'https://sytantris.github.io/http-examples';

request.get(url)
.on('error', function (error)
{
  console.log('error: ', error.statusCode);
})
.on('response', function (response)
{
  console.log('got response:', response.statusCode);
})
.pipe(fs.createWriteStream('./requesttest.html'));
