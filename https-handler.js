const https = require('https');
const stream = require('stream');

let reqOpt = function requestOptions(host, path)
{
return {"host": host, "path": path};
}

let options = reqOpt('example.com', '/');

let onEnd = function onResponseEnd(buffer)
{
 console.log('Response complete.');
 console.log(buffer);
};

let GOT = function HTTPSGET(opt)
{let tmpData = "";
  https.get(opt, function (res)
  {
    res.setEncoding("utf8");
    res.on('data', function (data)
    {
      tmpData += data;
      res.on('end', function ()
      {
        onEnd(tmpData);
      });
    });
  });
};
console.log(GOT(options));

/*
let readChunk = function getAndPrintHTML(opt)
{
   console.log(GOT(opt));
}

readChunk(options);
*/
