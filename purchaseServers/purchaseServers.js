/** Buys new servers when player has enough available money. Manually set the amount of RAM you want to purchase. It is recommended to choose a size that you can afford. */
/** @param {NS} ns **/
export async function main(ns) {
    // Buys a server for the given ram.
	function buyServer(ram) {
		let serverName = ns.purchaseServer("hackdrive", ram);
		ns.run("/scripts/hackn00dles.js", 1, serverName);
		ns.tprint("Bought a new server: " + serverName);
	}

	let money = ns.getServerMoneyAvailable("home");
	// Choose a realistic goal for cost of the server to buy here.
	// let serverRam = 1048576 // Costs $57.671.680.000
	// let serverRam = 524288 // Costs $28.835.840.000
	// let serverRam = 262144 // Costs $14.417.920.000
	// let serverRam = 131072 // Costs $7.208.960.000
	// let serverRam = 65536 // Costs $3.604.480.000
	// let serverRam = 32768 // Costs $1.802.240.000
	// let serverRam = 16384 // Costs $901.120.000
	let serverRam = 8192; // Costs $450.560.000
	let nextServerCost = ns.getPurchasedServerCost(serverRam);
	// Try to buy all servers directly.
	while (money > nextServerCost) {
		buyServer(serverRam);
		await ns.sleep(1000);
	}
	// Wait until money is available to buy more servers. Checks every 10 minutes if enough money is available.
	while (ns.getPurchasedServers.length < 25) {
		ns.tprint(ns.getPurchasedServers.length);
		if (money > nextServerCost) {
			buyServer(serverRam);
		}
		await ns.sleep(600000);
	}
	ns.tprint("All servers purchased! Let the money flow!");
}