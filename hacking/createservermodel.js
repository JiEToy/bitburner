/** @param {NS} ns **/
export async function main(ns) {
	// Location is a server, connections are all servers directly connected to a location (found with scan(location)).
	const allLocations = [];
	const locationsIterator = ns.scan("home");
	const scannedLocations = [];
	// For home, add an object in allLocations.
	allLocations.push({location:"home", connections:locationsIterator});
	scannedLocations.push("home");
	ns.tprint("allLocations: " + JSON.stringify(allLocations))
	while (locationsIterator.length > 0) {
		// For each server in the connectionList, scan it's connections.
		const connectionsCurrentLocation = ns.scan(locationsIterator[0]);
		ns.tprint(locationsIterator[0]);
		ns.tprint("connectionsCurrentLocation: " + JSON.stringify(connectionsCurrentLocation));
		// Put all locations that already have been scanned in a new list.
		const newConnections = [];
		for (let connection of connectionsCurrentLocation) {
			if (!locationsIterator.includes(connection) && !scannedLocations.includes(connection)) {
				newConnections.push(connection);
			}
		}
		ns.tprint("newConnections: " + JSON.stringify(newConnections))
		// Add this as an object in allLocations.
		allLocations.push({location:locationsIterator[0], connections:newConnections});
		// ns.tprint("allLocations: " + JSON.stringify(allLocations))
		// Add all new connections to the list of locations to scan and add.
		locationsIterator.push(...newConnections);
		// ns.tprint("locationsIterator after concat: " + JSON.stringify(locationsIterator));
		// Add scanned location to scannedLocations
		scannedLocations.push(locationsIterator[0]);
		locationsIterator.shift();
		// ns.tprint("locationsIterator after shift: " + JSON.stringify(locationsIterator));
		// ns.tprint("scannedLocations: " + JSON.stringify(scannedLocations));
	}
	await ns.write("test.txt", JSON.stringify(allLocations), 'w');
}