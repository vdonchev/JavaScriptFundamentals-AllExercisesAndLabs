let f = ([email]) => /^[A-Za-z\d]+@[a-z]+\.[a-z]+$/g.test(email) ? 'Valid' : 'Invalid';

console.log(f(['valid@email.bg']));
console.log(f(['invalid@emai1.bg']));