const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const DB_USERNAME = process.env.DB_USERNAME || 'mongoadmin';
const DB_PASSWORD = process.env.DB_PASSWORD || 'mongoadmin';
const DB_DOMAIN = process.env.DB_DOMAIN || '@localhost:27017';
const PORT = process.env.PORT || 5000;
const DB_URI = 'mongodb://' + DB_USERNAME + ':' + DB_PASSWORD + DB_DOMAIN;

module.exports = {
    jwtSecret: JWT_SECRET,
    mongodbURI: DB_URI,
    port: PORT,
    //mongodburi: 'mongodb://' + DB_USERNAME + ':' + DB_PASSWORD + '@ds233763.mlab.com:33763/basic-mern-stack-app'
};