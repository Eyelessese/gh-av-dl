const request = require('request');
const fs = require('fs');

/*
function getURL(protocol, domain, resource, com)
{
  return `${protocol}://${domain}${resource}.${com}`;
}*/

let url = 'https://sytantris.github.io/http-examples/future.jpg';

request.get(url)
.on('error', function (error)
{
  console.log('error: ', error.statusCode, '\n', error.statusMessage);
})
.on('response', function (response)
{

  console.log('got response:', response.statusCode, '\n', response.statusMessage,'\n', response.headers['content-type']);
  console.log('download starting...');
})
.pipe(fs.createWriteStream('./futures.jpg')
)
.on('finish', function()
{
  console.log('download complete');
});
