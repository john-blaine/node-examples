console.log('Hello world');
console.error('Error 404');
console.dir({name: 'John', age: 33});

const printComments = (name, email, comment) => {
    const message = `User ${name} with the email ${email} left the following comment:\n${comment}`;
    console.log(message);
}

printComments('John', 'john.alan.blaine@gmail.com', 'This is a comment');
