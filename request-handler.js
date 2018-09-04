const request = require('request');


function getData(opt, cb)
{
  request.get(opt)
  .on('error', function (error)
  {
    console.log('error: ', error.statusCode, '\n', error.statusMessage);
  })
  .on('response', function (response)
  {

    console.log('got response:', response.statusCode, '\n', response.statusMessage,'\n', response.headers['content-type']);
    cb(response);
  });
}

module.exports =
{
getData: getData
};
