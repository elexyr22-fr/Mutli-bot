const { spawn } = require('child_process');

const bot1Path = 'index1.js';
const bot2Path = 'index2.js';

function launchBot(botPath) {
    const botProcess = spawn('node', [botPath]);

    botProcess.stdout.on('data', (data) => {
        const cleanData = data.toString().trim();
        console.log(`${cleanData}`);
    });

    botProcess.stderr.on('data', (data) => {
        const cleanData = data.toString().trim();
        console.error(`${cleanData}`);
    });

    botProcess.on('close', (code) => {
        console.log(`Exited with code ${code}`);
    });
}

// Lancer les bots en parallèle
launchBot(bot1Path);
launchBot(bot2Path);
