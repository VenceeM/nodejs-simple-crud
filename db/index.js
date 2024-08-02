import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const pool = createPool({
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE_NAME,
    host: process.env.MYSQL_HOST

});

const connectToDatabase = async () => {
    try {
        await pool.getConnection();
        console.log("Connected");
    } catch (error) {
        console.log("Database connection error");
        console.log(error);
        throw error;
    }
}
export { connectToDatabase, pool }
