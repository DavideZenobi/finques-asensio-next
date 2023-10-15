import mysql from 'mysql2';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '1298DZGS',
    database: 'finques_asensio'
};

const pool = mysql.createPool(dbConfig);

export default pool.promise();