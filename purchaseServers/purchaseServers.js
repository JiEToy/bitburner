/** @param {NS} ns **/
export async function main(ns) {
	function buyServer(ram) {
		let serverName = ns.purchaseServer("hackdrive", ram);
		ns.run("hackjoesguns.js", 1, serverName);
		ns.tprint("Bought a new server: " + serverName);
	}

	// Choose a realistic goal for cost of the server to buy.
	// let serverRam = 1048576 // Costs $57.671.680.000
	// let serverRam = 524288 // Costs $28.835.840.000
	// let serverRam = 262144 // Costs $14.417.920.000
	// let serverRam = 131072 // Costs $7.208.960.000
	// let serverRam = 65536 // Costs $3.604.480.000
	// let serverRam = 32768 // Costs $1.802.240.000
	let serverRam = 16384 // Costs $901.120.000
	// let serverRam = 8192; // Costs $450.560.000
	let nextServerCost = ns.getPurchasedServerCost(serverRam);
	// Buy all servers possible with current amount of money.
	while (ns.getServerMoneyAvailable("home") > nextServerCost) {
		buyServer(serverRam);
		await ns.sleep(1000);
	}
	// Wait until money is available to buy more servers. Checks every 10 minutes if enough money is available.
	while (ns.getPurchasedServers.length < 25) {
		ns.tprint(ns.getPurchasedServers.length);
		if (ns.getServerMoneyAvailable("home") > nextServerCost) {
			buyServer(serverRam);
		}
		await ns.sleep(600000);
	}
	ns.tprint("All servers purchased! Let the money flow!");
}