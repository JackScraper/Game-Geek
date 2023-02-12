#!/usr/bin/env node
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import pressAnyKey from 'press-any-key';
import { sleep } from './app.mjs';


export async function welcome() {
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
                                Well let's see, you will need to guess the final games Bosses
                                              from only one pixel picture 
                                          for each guessed you will receive a bal
        `));

       const disc = chalkAnimation.neon(`   
                                                 PRESS ANY KEY TO START`
                                 );

await sleep(500)

await pressAnyKey(" ", )

   console.clear()
   welcomeTitle.stop();
   disc.stop()
    }