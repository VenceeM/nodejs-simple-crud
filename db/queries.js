import { pool } from "./index.js";

const client = async () => {
    return await pool.getConnection();
}

export const find = async () => {
    const QUERY = "SELECT * FROM products";
    try {

        const connection = await client();
        const [result] = await connection.query(QUERY);

        return result;

    } catch (err) {
        console.log(err);
    }
};

export const update = async (id, title, description, price) => {
    const QUERY = "UPDATE products SET title = ?, description = ?, price = ? where id = ?";
    try {
        const connection = await client();
        const result = (await connection).query(QUERY, [title, description, price, id]);
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const insert = async (title, description, price) => {
    const QUERY = "INSERT INTO products(title,description,price) VALUES(?,?,?)";

    try {
        const connection = await client();
        const result = (await connection).query(QUERY, [title, description, price]);
        return result;

    } catch (error) {
        console.log(error);
    }
};

export const findById = async (id) => {
    const QUERY = "SELECT * FROM products WHERE id = ?";

    try {
        const connection = await client();
        const [result] = await connection.query(QUERY, [id])
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const deleteById = async (id) => {
    const QUERY = "DELETE FROM products where id = ?";
    try {
        const connection = await client();
        const result = (await connection).query(QUERY, [id]);
        return result;

    } catch (error) {
        console.log(error);
    }
}
