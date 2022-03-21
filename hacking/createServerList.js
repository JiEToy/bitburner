/** @param {NS} ns **/
export async function main(ns) {
	//Takes an array and writes the array's data to a text file as a row in
	//comma-delimited csv format. 
	function writeCsvRow(fn, arrData) {
		row = arrData.join(",");
		row += "\r\n";
		write(fn, row, 'a');
	}

	//Converts an array into a string using the format [X,X,X,X,X]
	function formatArray(arr) {
		res = "[";
		res += arr.join(",");
		res += "]";
		return res;
	}

	//Reads a csv file and print it 
	function readCsvFile(fn) {
		file = read(fn);
		
		
		rows = file.split("\r\n"); //Parse rows using newline character
		for (i = 0; i < rows.length; ++i) {
			//Parse each row into an array using split()
			row = rows[i].split(",");
			
			//Do whatever you want with your row. I'm just printing it
			print(formatArray(row));
		}
	}
	const allServerNamesArray = [];
	const homeServerArray = ns.scan("home");


}