/** @param {NS} ns **/
export async function main(ns) {
	let serverName = ns.args[0];
	// Drop our hack script onto the server
	await ns.scp('early-hack-template.js', serverName);
	// Calculate how many threads we need to maximize RAM usage on server
	let ramAvailable = ns.getServerMaxRam(serverName) - ns.getServerUsedRam(serverName);
	let ramPerThread = ns.getScriptRam("early-hack-template.js");
	let threads = Math.floor(ramAvailable / ramPerThread);
	if (threads > 0) {
		// ns.tprint("calculated number of threads, going to execute hack with " + threads + " threads");
		// Execute hack script to hack n00dles
		ns.exec("early-hack-template.js", serverName, threads, "joesguns");
		ns.tprint("started hack on " + serverName);
	}
}