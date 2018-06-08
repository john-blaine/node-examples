const https = require('https');

const printComments = (name, email, comment) => {
    const message = `User ${name} with the email ${email} left the following comment:\n${comment}`;
    console.log(message);
}

printComments('John', 'john.alan.blaine@gmail.com', 'This is a comment');

https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
    console.log('statusCode:', res.statusCode);
})

