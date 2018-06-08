const https = require('https');
const testId = 1;

const printComments = (name, email, comment) => {
    const message = `User ${name} with the email ${email} left the following comment:\n${comment}`;
    console.log(message);
}

printComments('John', 'john.alan.blaine@gmail.com', 'This is a comment');

https.get(`https://jsonplaceholder.typicode.com/posts/${testId}`, (res) => {
    console.log('statusCode:', res.statusCode);

    let body = '';

    res.on('data', data => {
        body += data.toString();
    });

    res.on('end', () => {
        body = JSON.parse(body);
        console.log(body.body);
    })
});

