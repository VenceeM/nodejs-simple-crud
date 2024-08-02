import { deleteById, find, findById, insert, update } from "../db/queries.js"

export const getAllProducts = async (req, res) => {

    try {
        const products = await find();
        return res.status(200).json({ products: products })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }

}

export const getProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const product = await findById(id);
        return res.status(200).json({ product: product });
    } catch (error) {
        return res.status(500).json({ message: error });
    }

}

export const createProduct = async (req, res) => {
    const { title, description, price } = req.body;
    try {

        if (!title || !description || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }

        insert(title, description, price);

        return res.status(201).json({ message: 'Created successfully' });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, description, price } = req.body;

    try {
        const result = update(id, title, description, price);
        res.status(200).json({ message: 'Success' });

    } catch (error) {
        res.status(500).json({ message: error });
    }

}
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await deleteById(id)
        res.status(200).json({ message: 'Deleted' })

    } catch (error) {
        res.status(500).json({ message: error });
    }


}

