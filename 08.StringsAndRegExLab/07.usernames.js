    function userNames(emails) {
        let usernames = [];
        for (let email of emails) {
            let emailTokens = email.split('@');
            let name = emailTokens[0] + '.';
            emailTokens[1].split('.').map(t => name += t[0]);
            usernames.push(name);
        }

        return usernames.join(', ');
    }

console.log(userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));