import readline from 'readline';
import { accessSync, readFileSync, writeFileSync } from 'fs';

const filePath = `${process.cwd()}/taskDB.json`;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askFirstName = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your first name: ', (firstName) => {
            if (firstName === '') {
                reject('Please fill in the first name');
                return;
            }
            fulfil(firstName);
        })
    });
}

const askLastName = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your last name: ', (lastName) => {
            if (lastName === '') {
                reject('Please fill in the last name');
                return;
            }
            fulfil(lastName);
        })
    });
}
const askAge = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your age: ', (age) => {
            if (age === '' || age <= 0 || isNaN(age) === true) {
                reject('The age should be bigger than 0');
                return;
            }
            fulfil(age);
        })
    });
}

const askEmail = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your email: ', (email) => {
            if (email === '') {
                reject('Please fill in your email.');
                return;
            }
            fulfil(email);
        })
    });
}

const askAddress = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your address: ', (address) => {
            if (address === '') {
                reject('Please fill in your address.');
                return;
            }
            fulfil(address);
        })
    });
}



try {
    accessSync(filePath);
    const jsonObject = readFileSync(filePath, 'utf8');

    const firstName = await askFirstName();
    const lastName = await askLastName();
    const age = await askAge();
    const email = await askEmail();
    const address = await askAddress();

    const newDbEntry = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        address: address
    }

  
    writeFileSync(filePath, JSON.stringify(newDbEntry));

    console.log(`The data is:\n Frist name: ${firstName}, last name: ${lastName}, email: ${email}, age: ${age}, address: ${address}`)

} catch (e) {
    console.log(`Whoops, something went wrong. Error is: ${e}`);
}


rl.close();