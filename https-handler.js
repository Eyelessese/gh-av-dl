const https = require('https');
//const stream = require('stream');


let reqOpt = function requestOptions(host, path)
{
return {"host": host, "path": path};
}

let options = reqOpt('example.com', '/');

/*
let dataHndl = function dataHandler(data)
{
  console.log(`chunk recieved, length = ${data.length}`);
};

let onEnd = function onResponseEnd()
{
 console.log('Response complete.');
};

let cb = function callback(res)
*/

https.get(options, function (res)
{
  res.setEncoding("utf8");
  res.on('data', function (data)
  {
    console.log(`chunk recieved, length = ${data.length}`, data);
    res.on('end', function ()
    {
      console.log('Response complete.');
    });
  });
});
