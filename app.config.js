module.exports = {
	dev: {
		ip: '127.0.0.1',
		port: 8210,
		mongo_db: {
			domain: 'dev.ns.co.th',
			dbname: 'ns_develop',
			access: {
				username: 'root',
				password: '123456'
			},
			port: 20317
		},
		mysql_db: {
			host: 'dev.ns.co.th',
			user: 'root',
			password: 'pgm1234',
			database: 'ns_develop',
			port: 20400
		}
	},
	serv: {
		ip: '10.0.1.21',
		port: 8210,
		mongo_db: {
			domain: 'dev.ns.co.th',
			dbname: 'ns_develop',
			access: {
				username: 'root',
				password: '123456'
			},
			port: 20317
		},
		mysql_db: {
			host: 'dev.ns.co.th',
			user: 'root',
			password: '123456',
			database: 'ns_develop',
			port: 20400
		}
	}
}