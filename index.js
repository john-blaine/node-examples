const getComments = require('./comments.js');

const postIds = process.argv.slice(2);

postIds.forEach(getComments);

