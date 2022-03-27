/** Run to hack all servers in current run. Make sure to run createservermodel.js first to create a list of all servers. */
/** @param {NS} ns **/
export async function main(ns) {
	// We need to update the servermodel to be sure it is accurate.
	ns.run("createservermodel.js");
	await ns.sleep(1000);
	const servermodel = JSON.parse(ns.read("servermodel.txt"));
	const servers = [];
	for (let server of servermodel) {
		servers.push(server.location);
	}
	// Remove home from the list
	servers.shift();
	for (let serverName of servers) {
		ns.run("gainaccess.js", 1, serverName);
		// Wait for the script to be done
		await ns.sleep(200);
		// If we have successfully gained root, hack n00dles from this server.
		if (ns.hasRootAccess(serverName)) {
			ns.run("hackjoesguns.js", 1, serverName);
		}
	}
}