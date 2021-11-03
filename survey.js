const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sentence;
rl.question('What is your name? ', (answer) => {
  sentence  = "--------------------------------------------------- \n";
  sentence += `Your name is: ${answer} \n`;
  rl.question('What is your favorite activity? ', (answer) => {
    sentence += `Your activity is: ${answer} \n`;
    rl.question('What is your favorite music? ', (answer) => {
      sentence += `Your favourite music is: ${answer} \n`;
      rl.question('What meal is your favorite? ', (answer) => {
        sentence += `Your favourite meal is: ${answer} \n`;
        rl.question('What is your favorite sport? ', (answer) => {
          sentence += `Your favourite sport is: ${answer} \n`;
          rl.question('Wo is your Hero? ', (answer) => {
            sentence += `Your Hero is: ${answer} \n`;
            sentence += "---------------------------------------------------";
            console.log(sentence);
            rl.close();
          });
        });
      });
    });
  });
});