Scripts for automating Bitburner.
Run deployer.js from the home server to start up the hacking scripts. Due to a bug, the script needs to be ran multiple times to deploy the hacking scripts on all servers directly connected to hom.

The idea is that on startup you can run a script to fully automatically get back to your previous state but with new augmentations. This is WIP.

Current status: deployer.js has to be run multiple times for it to actually hack and run the scripts because of issues with waiting for the scripts that are called to finish. This causes the check for root access to occur before gainaccess.js has been finished, resulting in hackn00dles.js not being run on a server we do have root access for after gainaccess.js has run. There is no automation for purchasing servers or getting the hacknet up and running. I have not progressed into the game far enough to automate factions yet.

Todo:
1 Find a way for a script to notify it is done, so deployer.js can wait for it. Ports or an output file are decent options. Currently using sleep(200) instead of a notifying system.
5 Start a program that buys hacknet nodes/levels when profitable.
6 Write a script for factions.
7 Add more server details to the servermodel, like hasrootaccess, maxram etc.
8 Run createservermodel.js from the deployer to avoid filenotexist error.
9 Make a purchase script that decides where to put more money. Home server upgrade/buy from darkweb/new player-owned servers/hacknet stuff.
10 Make a script to solve coding contracts (cct files).
* Play the game!