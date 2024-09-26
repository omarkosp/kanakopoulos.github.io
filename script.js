const { Storage } = require('@google-cloud/storage');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const storage = new Storage({
    projectId: 'kanakopoulos',
    keyFilename: 'key.json', // Make sure to upload this file in your function environment
});
const bucket = storage.bucket('photoskanakopoulos');

exports.uploadFile = (req, res) => {
    upload.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(500).send('Error uploading file: ' + err);
        }

        const blob = bucket.file(req.file.originalname);
        const blobStream = blob.createWriteStream({
            resumable: false,
        });

        blobStream.on('error', (error) => {
            return res.status(500).send('Error uploading file: ' + error);
        });

        blobStream.on('finish', () => {
            return res.status(200).send(`${req.file.originalname} uploaded successfully.`);
        });

        blobStream.end(req.file.buffer);
    });
};
