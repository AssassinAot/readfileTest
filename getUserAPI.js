
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
const getUserAPI = (request,reply) => {
  const usersData = info.data;
  const userName = request.query.user;
  const filterData = usersData.find((u) => u.name === userName ? u : '');
  if (typeof filterData !== 'undefined') {
    const filePath = filterData.dataFile;
    const userFilePath = `./assets/data/${filePath}`;
    return readFilePromise(userFilePath).then((data) => reply(data)).catch((err) => reply(err));
  } else {
    return reply('No file found for this user');
  }
};
module.exports = {getUserAPI,readFilePromise};