// api/download.js
export default function handler(req, res) {
    // Tentukan ukuran file (5 MB = 5 * 1024 * 1024 bytes)
    const sizeInBytes = 5 * 1024 * 1024;
    
    // Buat buffer kosong berisi karakter 'a'
    const buffer = Buffer.alloc(sizeInBytes, 'a');

    // Set header agar browser tahu ini file biner
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename=dummy.bin');
    
    // Kirim data
    res.send(buffer);
}
