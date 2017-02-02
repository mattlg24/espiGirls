// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
          user: 'root',
          password: 'Lemmon@4',
          database: 'espiGirls'
        }
    }


    // production: {
    //     client: 'mysql',
    //     connection: process.env.DATABASE_URL + '?ssl=true'
    // }
};
