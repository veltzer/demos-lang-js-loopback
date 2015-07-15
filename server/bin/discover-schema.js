var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.mysqldb;

dataSource.discoverSchema('TbWkWork', {},
	function(err, schema) {
		if (err) throw err;
		console.log(JSON.stringify(schema, null, '  '));
		dataSource.disconnect();
	}
);

// process.exit(0);
