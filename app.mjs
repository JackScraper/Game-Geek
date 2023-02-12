#!/usr/bin/env node


import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import pressAnyKey from 'press-any-key';
import terminalImage from 'terminal-image';
import { createSpinner } from 'nanospinner';

let playerPoints = 0;
process.title = "GAME-GEEK" 
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    console.clear();
    const welcomeTitle = chalkAnimation.glitch(chalk.green(
    
            `
                        ░██████╗░░█████╗░███╗░░░███╗███████╗░░░░░░░██████╗░███████╗███████╗██╗░░██╗
                        ██╔════╝░██╔══██╗████╗░████║██╔════╝░░░░░░██╔════╝░██╔════╝██╔════╝██║░██╔╝
                        ██║░░██╗░███████║██╔████╔██║█████╗░░█████╗██║░░██╗░█████╗░░█████╗░░█████═╝░
                        ██║░░╚██╗██╔══██║██║╚██╔╝██║██╔══╝░░╚════╝██║░░╚██╗██╔══╝░░██╔══╝░░██╔═██╗░
                        ╚██████╔╝██║░░██║██║░╚═╝░██║███████╗░░░░░░╚██████╔╝███████╗███████╗██║░╚██╗
                        ░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝░░░░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚═╝ )]`
    ));
    await sleep(1000);
    console.clear();
    
       console.log(chalk.greenBright(`
                        ░██████╗░░█████╗░███╗░░░███╗███████╗░░░░░░░██████╗░███████╗███████╗██╗░░██╗
                        ██╔════╝░██╔══██╗████╗░████║██╔════╝░░░░░░██╔════╝░██╔════╝██╔════╝██║░██╔╝
                        ██║░░██╗░███████║██╔████╔██║█████╗░░█████╗██║░░██╗░█████╗░░█████╗░░█████═╝░
                        ██║░░╚██╗██╔══██║██║╚██╔╝██║██╔══╝░░╚════╝██║░░╚██╗██╔══╝░░██╔══╝░░██╔═██╗░
                        ╚██████╔╝██║░░██║██║░╚═╝░██║███████╗░░░░░░╚██████╔╝███████╗███████╗██║░╚██╗
                        ░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝░░░░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚═╝
                        
                        `));
       

              chalk.white(
                console.log(`
                                                      ${chalk.bgRedBright(`TEST YOURSELF`)} 

                      Dude you've played all the video games and consider yourself a true gaming geek?
                                Well let's see, you will need to guess the final Bosses
                                             from only one pixel picture 
                                        for each guessed you will receive a bal
        `));

       const disc = chalkAnimation.neon(`   
                                                 PRESS ANY KEY TO START`
                                 );

await sleep(500)

await pressAnyKey(" ", )

   console.clear()
   await welcomeTitle.stop();
   await disc.stop()
    }

    async function handleAnswer(isCorrect) {
        const spinner = createSpinner(`Next boss is...`).start();
        await sleep();
      
        if (isCorrect) {
          playerPoints++
          spinner.success();
        } else {
          spinner.success();
        }
      }
      
      function winner() {
        console.clear();
      
        switch (playerPoints) {
          case 0:
;  
            console.log(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);
            chalkAnimation.neon(`
           
            ░█████╗░
            ██╔══██╗
            ██║░░██║
            ██║░░██║
            ╚█████╔╝
            ░╚════╝░`)

            break;
        
            case 1:
            
          console.log(`Only ${playerPoints}, go play Fortnite newbie !`)

            break;

            case 2:
            
            console.log(`Only ${playerPoints}, go play Fortnite newbie !`)
  
              break;

              case 3:
            
              console.log(`Only ${playerPoints}, go play Fortnite newbie !`)
    
                break;
            
            case 4 :

            console.log(`Well ${playerPoints} you know something, but it's not enought`)
            
            break;

            case 5 :

            console.log(`Well ${playerPoints} you know something, but it's not enought`)
            
            break;
            
            case 6 :

            console.log(`Well ${playerPoints} you know something, but it's not enought`)
            
            break;

            case 7:

            console.log(`A ${playerPoints} average score game soldier, play a little more`)

            break;

            case 8:
            console.log(`Wow ${playerPoints}, you went through a lot of adventures,
             you deserve to call yourself a Game Geek friend!`)
            break;

            case 9:
            console.log(`Wow ${playerPoints}, you went through a lot of adventures,
             you deserve to call yourself a Game Geek friend!`)
            break;

            case 10:
            chalkAnimation.pulse(`
            ░░███╗░░░█████╗░
            ░████║░░██╔══██╗
            ██╔██║░░██║░░██║
            ╚═╝██║░░██║░░██║
            ███████╗╚█████╔╝
            ╚══════╝░╚════╝░
            
            `)

            console.log(`I'm sorry I wasted your time, you are really cool! Of course you are a GAME-GEEK !!!`)
            break;

            default:
            console.log(`Something is wrong ` + playerPoints)
            break;
        }

          process.exit(0);
      }
      
      async function question1() {
      console.log(await terminalImage.file('GameGeek/images/Ender_Dragon.jpg'));
        const answers = await inquirer.prompt({
          name: 'question_1',
          type: 'list',
          message: 'Even the neighborhood kids know how correct\n',
          choices: [
            'Black Dragon',
            'Ender Dragon',
            'Evil Dragon',
            'Dark Dragon',
          ],
        });
      
        return handleAnswer(answers.question_1 === 'Ender Dragon');
      }
      
      async function question2() {
      console.log(await terminalImage.file('GameGeek/images/shao-kahn.jpg'));
        const answers = await inquirer.prompt({
          name: 'question_2',
          type: 'list',
          message: 'Video-games dungeon master\n',
          choices: ['Dungeon Khan', 'Lil Khan', 'Shan Han', 'Shao Kahn'],
        });
        return handleAnswer(answers.question_2 === 'Shao Kahn');
      }
      
      async function question3() {
      console.log(await terminalImage.file('GameGeek/images/eredin.jpg'));
        const answers = await inquirer.prompt({
          name: 'question_3',
          type: 'list',
          message: `Wait, it's getting too cold\n`,
          choices: ['Eredin', 'Sub-Zero', 'Sauron', 'Iceron'],
        });
      
        return handleAnswer(answers.question_3 === 'Eredin');
      }
      
      async function question4() {
        console.log(await terminalImage.file('GameGeek/images/Alduin.jpg'));
        const answers = await inquirer.prompt({
          name: 'question_4',
          type: 'list',
          message: `Don't worry, this guy isn't strong as he looks\n`,
          choices: [
            'Smaug',
            'Paarthurnax',
            'Alduin',
            'Smallug',
          ],
        });
        return handleAnswer(answers.question_4 === 'Alduin');
      }
      
      async function question5() {
        console.log(await terminalImage.file('GameGeek/images/Adam_Smasher.jpg'));
        const answers = await inquirer.prompt({
          name: 'question_5',
          type: 'list',
          message:
            'Another darling boy\n',
          choices: ['Cyber Demon', 'Frank', 'Synchronous', 'Adam Smasher'],
        });
      
        return handleAnswer(answers.question_5 === 'Adam Smasher');
      };

      async function question6() {
        console.log(await terminalImage.file('GameGeek/images/alex_mercer.jpg'));
        const answers = await inquirer.prompt({
          name: 'question_6',
          type: 'list',
          message:
            'Thanks to him and a other guys from the past for the trend to wear hoods\n',
          choices: ['Alex Mercerc', 'Ezio Auditore', 'Alon Mercery', 'Jake Tyler'],
        });
      
        return handleAnswer(answers.question_6 === 'Alex Mercerc');
      }

      async function question7() {
        console.log(await terminalImage.file('GameGeek/images/Darth_Malak.jpg'));
        const answers = await inquirer.prompt({
          name: 'question_7',
          type: 'list',
          message:
            'What you know about power on a dark side friend?\n',
          choices: ['Darth Maul', 'Darth Revan', 'Darth Malak', 'Darth Malgus'],
        });
      
        return handleAnswer(answers.question_7 === 'Darth Malak');
      };

      async function question8() {
        console.log(await terminalImage.file('GameGeek/images/jack_of_blades.jpg'));
        const answers = await inquirer.prompt({
          name: 'question_8',
          type: 'list',
          message:
            'Hood and mask, perfect\n',
          choices: ['Lord of blades', 'King of blades', 'Jack of blades', 'God of blades'],
        });
      
        return handleAnswer(answers.question_8 === 'Jack of blades');
      };

      async function question9() {
        console.log(await terminalImage.file('GameGeek/images/Lanius.jpg'));
        const answers = await inquirer.prompt({
          name: 'question_9',
          type: 'list',
          message:
            'Hint is a human, but only biologically\n',
          choices: ['Mars', 'Lanius', 'Ares', 'Caesar'],
        });
      
        return handleAnswer(answers.question_9 === 'Lanius');
      };

      async function question10() {
        console.log(await terminalImage.file('GameGeek/images/Frank_Horrigan.jpg'));
        const answers = await inquirer.prompt({
          name: 'question_10',
          type: 'list',
          message:
            'Guys like him like to serve their country for 510 years\n',
          choices: ['Balrog', 'Henry Thomson', 'Arch Dornan', 'Frank Horrigan'],
        });
      
        return handleAnswer(answers.question_10 === 'Frank Horrigan');
      };
      
      // Run it with top-level await
      console.clear();
      await welcome();
      await question1();
      await question2();
      await question3();
      await question4();
      await question5();
      await question6();
      await question7();
      await question8();
      await question9();
      await question10();
      winner();
      console.log(playerPoints)

    


