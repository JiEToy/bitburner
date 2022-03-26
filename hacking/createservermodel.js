/** Use this script to get the layout of all the servers in the current run. Results are stored as JSON in /servermodel.txt. */

/** @param {NS} ns **/
export async function main(ns) {
	// Location is a server, connections are all servers directly connected to a location (found with scan(location)).
	const allLocations = [];
	const scannedLocations = [];
	const locationsIterator = ns.scan("home");
	// Add the object for home to allLocations.
	const homeLocations = [...locationsIterator];
	allLocations.push({location:"home", connections:homeLocations});
	scannedLocations.push("home");
	while (locationsIterator.length > 0) {
		// For each server in the connectionList, scan it's connections.
		const connectionsCurrentLocation = ns.scan(locationsIterator[0]);
		// Put all locations that already have been scanned in a new list.
		const newConnections = [];
		for (let connection of connectionsCurrentLocation) {
			if (!locationsIterator.includes(connection) && !scannedLocations.includes(connection)) {
				newConnections.push(connection);
			}
		}
		// Add this as an object in allLocations.
		allLocations.push({location:locationsIterator[0], connections:newConnections});
		// Add all new connections to the list of locations to scan and add.
		locationsIterator.push(...newConnections);
		// Add scanned location to scannedLocations
		scannedLocations.push(locationsIterator[0]);
		locationsIterator.shift();
	}
	await ns.write("servermodel.txt", JSON.stringify(allLocations), 'w');
	ns.tprint("Finished creating server model. Result stored in /servermodel.txt")
}