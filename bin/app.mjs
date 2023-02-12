#!/usr/bin/env node


import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import pressAnyKey from 'press-any-key';
import terminalImage from 'terminal-image';
import { createSpinner } from 'nanospinner';
import { welcome } from './welcomeScreen.mjs';
import got from 'got';

let playerPoints = 0;
let bossImage = '';
process.title = "GAME-GEEK" 

export const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

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
            console.log(`
            ░█████╗░
            ██╔══██╗
            ██║░░██║
            ██║░░██║
            ╚█████╔╝
            ░╚════╝░`)

            console.log(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);

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

            console.log(`WICTORy !!!
          

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
        bossImage = await got('https://i.ibb.co/M9Nv5pV/Ender-Dragon.jpg').buffer();
        console.log(await terminalImage.buffer(bossImage));
        const answers = await inquirer.prompt({
          name: 'question_1',
          type: 'list',
          message: 'Fear of neighboring children\n',
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
        bossImage = await got('https://i.ibb.co/SNtHsvC/shao-kahn.jpg').buffer();
        console.log(await terminalImage.buffer(bossImage));
        const answers = await inquirer.prompt({
          name: 'question_2',
          type: 'list',
          message: 'Video-games dungeon master\n',
          choices: ['Dungeon Khan', 'Lil Khan', 'Shan Han', 'Shao Kahn'],
        });
        return handleAnswer(answers.question_2 === 'Shao Kahn');
      }
      
      async function question3() {
        bossImage = await got('https://i.ibb.co/p3G6r1J/eredin.jpg').buffer();
        console.log(await terminalImage.buffer(bossImage));
        const answers = await inquirer.prompt({
          name: 'question_3',
          type: 'list',
          message: `Wait, it's getting too cold\n`,
          choices: ['Eredin', 'Sub-Zero', 'Sauron', 'Iceron'],
        });
      
        return handleAnswer(answers.question_3 === 'Eredin');
      }
      
      async function question4() {
        bossImage = await got('https://i.ibb.co/3rZPKgY/Alduin.jpg').buffer();
        console.log(await terminalImage.buffer(bossImage));
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
        bossImage = await got('https://i.ibb.co/Sd66q1f/Adam-Smasher.jpg').buffer();
        console.log(await terminalImage.buffer(bossImage));
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
        bossImage = await got('https://i.ibb.co/3zkGMqB/alex-mercer.jpg').buffer();
        console.log(await terminalImage.buffer(bossImage));
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
        bossImage = await got('https://i.ibb.co/x7ndv6D/Darth-Malak.jpg').buffer();
        console.log(await terminalImage.buffer(bossImage));
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
        bossImage = await got('https://i.ibb.co/sP3yV6Y/jack-of-blades.jpg').buffer();
        console.log(await terminalImage.buffer(bossImage));
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
        bossImage = await got('https://i.ibb.co/gS59gns/Lanius.jpg').buffer();
        console.log(await terminalImage.buffer(bossImage));
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
        bossImage = await got('https://i.ibb.co/2yLPdZc/Frank-Horrigan.jpg').buffer();
        console.log(await terminalImage.buffer(bossImage));
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

    


