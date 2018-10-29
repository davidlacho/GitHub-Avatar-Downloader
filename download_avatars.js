const {
  gitHubKey,
} = require('./secret/tokens.js');
const request = require('request');

const owner = process.argv[2];
const repo = process.argv[3];

console.log('Welcome to the GitHub Avatar Downloader!');


/**
 * [Callback will be passed in to getRepoContributors()
 * & will be executed when there is a response from request]
 * @param  {[type]}   err     [error parameter with http request]
 * @param  {[type]}   results [incoming data from the server]
 * @return {Function}         [undefined]
 */
const callback = (err, results) => {
  if (err) {
    console.log(err);
  }
  console.log(results);
};

/**
 * [getRepoContributors creates a request to the github server
 * and passes the response to the callback that's passed in as an argument]
 * @param  {[type]}   repoOwner [the username of the repoowner]
 * @param  {[type]}   repoName  [the name of the repo]
 * @param  {Function} cb        [the callback function that will handle the data]
 * @return {[type]}             [undefined]
 */
const getRepoContributors = (repoOwner, repoName, cb) => {
  const options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'request',
      Authorization: gitHubKey,
    },
  };
  request(options, (err, res, body) => {
    cb(err, body);
  });
};

getRepoContributors(owner, repo, callback);
