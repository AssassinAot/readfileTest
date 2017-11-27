const info = require('./assets/info.json');
const fs = require('fs');
const readFilePromise = (filePath) => new Promise((resolve,reject) => {
  fs.readFile(filePath,'utf8',(err,data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});
const getUserMergeAPI = (request,reply) => {
  const usersData = info.data;
  const userName = request.query.user;
  const filterData = usersData.find((u) => u.name === userName ? u : '');
  if (typeof filterData !== 'undefined') {
    const userFilePath = `./assets/data/${filterData.dataFile}`;
    const userFilePathMeta = `./assets/metadata/${filterData.metadata}`;
    return Promise.all([readFilePromise(userFilePathMeta),readFilePromise(userFilePath)]).then((data) => {
      const objectData = {};
      objectData.metadata = JSON.parse(data[0]).key;
      objectData.data = data[1];
      reply(objectData);
    });
  } else {
    return new Promise((reject) => {
      reject(reply('No file found for this user'));
    }); 
  }
};
module.exports = getUserMergeAPI;