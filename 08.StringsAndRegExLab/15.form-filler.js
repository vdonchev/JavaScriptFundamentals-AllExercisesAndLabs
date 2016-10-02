function fillForm(input) {
    let [username, email, phone] = input.splice(0, 3);
    for (let line of input) {
        console.log(line
            .replace(/<![a-zA-Z]+!>/g, username)
            .replace(/<@[a-zA-Z]+@>/g, email)
            .replace(/<\+[a-zA-Z]+\+>/g, phone)
        );
    }
}

fillForm(['Pesho', 'pesho@softuni.bg', '90-60-90', 'Hello, <!username!>! ', 'Welcome to your Personal profile. ', 'Here you can modify your profile freely. ', 'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)', 'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)', 'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);
