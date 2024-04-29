import axios from 'axios';
import FormData from 'form-data';
import tar from 'tar';
import fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Place your circuit creation logic here
        const formData = new FormData();
        formData.append(
            "files",
            tar.c({ gzip: true, sync: true }, ["circuits/"]).read(),
            {
                filename: "compress.tar.gz",
            },
        );

        try {
            const createResponse = await axios.post(
                "https://sindri.app/api/v1/circuit/create",
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.SINDRI_API_KEY}`,
                        ...formData.getHeaders(),
                    }
                }
            );
            res.status(200).json(createResponse.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
