// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: 'mysql://localhost/espiGirls'
    },
    production: {
        client: 'mysql',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
