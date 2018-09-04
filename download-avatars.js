const request = require('request');
const getData = require('./request-handler').getData
const fs = require('fs');
let repoOptions =
{
  url: "https://api.github.com/repos/jquery/jquery/contributors",
  headers:
  {
    'User-Agent': 'request'
  }
};

function getRepoContributors(opt, cb)
{
  getData(opt, cb);
}

getRepoContributors(repoOptions, function (item)
{
  item.pipe(fs.createWriteStream('contributors.json'))
  .on('finish', function ()
  {
    console.log('done');
    console.log(fs.createReadStream('./contributors.json'));
  });
});
