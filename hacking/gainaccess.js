/** @param {NS} ns **/
export async function main(ns) {
	let serverName = ns.args[0];
	// Try to open ports and get root access
	let openPorts = 0;
	if (ns.fileExists("BruteSSH.exe")) {
		ns.brutessh(serverName);
		openPorts++;
	}
	if (ns.fileExists("FTPCrack.exe")) {
		ns.ftpcrack(serverName);
		openPorts++;
	}
	if (ns.fileExists("RelaySMTP.exe")) {
		ns.relaysmtp(serverName);
		openPorts++;
	}
	if (ns.fileExists("HTTPWorm.exe")) {
		ns.httpworm(serverName);
		openPorts++;
	}
	if (ns.fileExists("SQLInject.exe")) {
		ns.sqlinject(serverName);
		openPorts++;
	}
	// If enough ports are opened, get root access
	if (ns.getServerNumPortsRequired(serverName) <= openPorts) {
		ns.nuke(serverName);
	}
	ns.tprint("we have rootAccess for " + serverName + ": " + ns.hasRootAccess(serverName));
}