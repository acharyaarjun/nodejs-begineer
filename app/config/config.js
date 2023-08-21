module.exports = {
    db: {
        user: "root",
        password: "",
        host: "localhost",
        database: "nodejs",
        dialect: "mysql",   // kun chai database use garni vaneko ho
        poll: {       // databse ko timeout rw connection handle garna
            max: 5,
            min: 0,
            acquire: 30000,  // millisecond (3 seconds ma connection acquire)
            idle: 10000, // millisecond ( 1 second standby baseko)
        },
    },
};