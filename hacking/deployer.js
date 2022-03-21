/** @param {NS} ns **/
export async function main(ns) {
	const servers = ns.scan('home');
	ns.tprint("Deploying on following servers: " + servers);
	for (let serverName of servers) {
		ns.run("/scripts/gainaccess.js", 1, serverName);
		// If we have successfully gained root, hack n00dles from this server.
		if (ns.hasRootAccess(serverName)) {
			ns.run("/scripts/hackn00dles.js", 1, serverName);
		}
	}
}