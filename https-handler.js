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
 return buffer.toString();
};

let GOT = function HTTPSGET(opt)
{let tmpData = "";
  https.get(opt, function (res)
  {
    res.setEncoding("utf8");
    res.on('readable', function (data)
    {
      tmpData += res.push(data);
      res.on('end', function ()
      {
        return onEnd(res);
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
