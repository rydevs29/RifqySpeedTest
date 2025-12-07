// api/upload.js
export const config = {
    api: {
        bodyParser: false, // Matikan parser otomatis biar lebih cepat
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Kita tidak perlu menyimpan datanya, cukup baca stream sampai habis
        const chunks = [];
        for await (const chunk of req) {
            chunks.push(chunk);
        }
        // Kirim respon sukses
        res.status(200).json({ message: 'Upload received' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
