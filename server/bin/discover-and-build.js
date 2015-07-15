var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.mysqldb;

console.log('in here');
dataSource.discoverAndBuildModelsSync('TbWkWork', { schema: 'myworld' },
	function(err, models) {
		console.log('in here');
		if (err) throw err;
		console.log(models);
	}
);

//process.exit(0);
