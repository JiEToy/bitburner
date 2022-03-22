Scripts for automating Bitburner.
Run deployer.js from the home server to start up the hacking scripts. Due to a bug, the script needs to be ran multiple times to deploy the hacking scripts on all servers directly connected to hom.

The idea is that on startup you can run a script to fully automatically get back to your previous state but with new augmentations. This is WIP.

Current status: deployer.js has to be run multiple times for it to actually hack and run the scripts because of issues with waiting for the scripts that are called to finish. This causes the check for root access to occur before gainaccess.js has been finished, resulting in hackn00dles.js not being run on a server we do have root access for after gainaccess.js has run. There is no automation for purchasing servers or getting the hacknet up and running. I have not progressed into the game far enough to automate factions yet.

Todo:
1 Find a way for a script to notify it is done, so deployer.js can wait for it. Ports or an output file are decent options. Sleep probably is either too long, or too short when later .exe are unlocked.
2 Create script to make a txt file (JSON structured?) with information on all servers.
3 Have deployer.js work recursively to cover not just servers directly connected to home (Possibly using the txt file with information on all servers as per 2).
4 Write a program to purchase all player owned servers and start the hacking script on them.
5 Start a program that buys hacknet nodes/levels when profitable.
6 Find out how the code for factions work.
7 Play the game!