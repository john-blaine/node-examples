const https = require('https');

const printComments = (name, email, comment) => {
    const message = `User ${name} with the email ${email} left the following comment:\n${comment}`;
    console.log(message);
}

function getComments(testId) {
    https.get(`https://jsonplaceholder.typicode.com/comments?postId=${testId}`, (res) => {
        console.log('statusCode:', res.statusCode);
    
        let body = '';
    
        res.on('data', data => {
            body += data.toString();
        });
    
        res.on('end', () => {
            body = JSON.parse(body);
            for (var i = 0; i < body.length; i++) {
              printComments(body[i].name, body[i].email, body[i].body);
            }
        })
    });
}

const userIds = process.argv.slice(2);

userIds.forEach(getComments);


