const https = require('https');

const printComments = (name, email, comment) => {
    const message = `User ${name} with the email ${email} left the following comment:\n${comment}`;
    console.log(message);
}

function printError(error) {
    console.error(error.message);
}

function getComments(postId) {
    try {
        const request = https.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, (res) => {
            if (res.statusCode === 200) {
        
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
            } else {
                const message = `There was an error getting the comments for the post with id: ${postId}`
                + ` (Status code: ${res.statusCode}`;

                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        });
    
        request.on('error', error => console.error(`Problem with request: ${error.message}`))
    } catch (error) {
        printError(error);
    }
}

module.exports = getComments;