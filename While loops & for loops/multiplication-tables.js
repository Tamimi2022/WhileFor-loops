
// Answer  Multiplication tables
const tables = 9;
for (let i = 1; i <=10; i++) {
    let result = tables * 1;
    console.log(tables + " * " + i + " = " + result);
}

// Bonus 

for (let tables = 1; tables <= 10; tables++) {
    for (let i = 1; i <= 10; i++) {
        let result = tables * i;
        console.log(tables + " * " + i + " = " + result);
    }
}