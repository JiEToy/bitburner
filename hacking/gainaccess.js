/** @param {NS} ns **/
export async function main(ns) {
	let serverName = ns.args[0];
	let server = ns.getServer(serverName);
	// Try to open ports and get root access
	if (ns.fileExists("BruteSSH.exe") && !server.sshPortOpen) {
		ns.brutessh(serverName);
	}
	if (ns.fileExists("FTPCrack.exe") && !server.ftpPortOpen) {
		ns.ftpcrack(serverName);
	}
	if (ns.fileExists("RelaySMTP.exe") && !server.smtpPortOpen) {
		ns.relaysmtp(serverName);
	}
	if (ns.fileExists("HTTPWorm.exe") && !server.httpPortOpen) {
		ns.httpworm(serverName);
	}
	if (ns.fileExists("SQLInject.exe") && !server.sqlPortOpen) {
		ns.sqlinject(serverName);
	}
	// If enough ports are opened, get root access
	if (server.openPortCount >= server.numOpenPortsRequired && !server.hasAdminRights) {
		ns.nuke(serverName);
	}
	ns.tprint("we have " + (server.hasAdminRights ? "" : "no ") + "rootAccess for " + serverName);
}