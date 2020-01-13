import * as readline from 'readline'
import * as chalk from 'chalk'
import * as action from './logic'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(chalk.yellow('\n========= Luhn Algorithm Validator =========\n'));
console.log(`Provide a number of at least ${chalk.blueBright('2')} digits`);

rl.question('Enter a number: ', (answer: string) => 
{
    answer = answer.replace(/\s/g, '');

    if (answer.length > 1 && answer.match(/^\d+$/)) 
    {
        const luhn = action.validateLuhn(answer);

        if (luhn) 
        {
            console.log(`\nThe number '${chalk.green(answer)}' is a valid Luhn number!`);
            rl.close();
            process.exit(0);
        }
    }
    console.log(`\nThe number '${chalk.red(answer)}' is not a valid Luhn number!`);
    rl.close();
    process.exit(42);
});
