const multer = require('multer');
const File = require('../models/files-model');

const upload = multer({ dest: 'uploads/' })

const profile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded." });
        }

        const myFile = new File({
            filename: req.file.originalname,
            contentType: req.file.mimetype,
            data: req.file.size
        });

        await myFile.save();
        res.status(200).json({ message: "File Uploaded Successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving file." });
    }
}

const getFiles = async (req, res) => {
    try {
        const images = await File.find();
        res.json(images);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching images.');
    }
}

const getFile = async (req, res) => {
    const file = req.body
    const files = await File.find({ filename: file.filename })

    if (files.length == 0) {
        return res.status(500).json({ message: "No File Found with given Name." })
    }
    res.status(200).json(files)
}

const getFileByFilter = async (req, res) => {
    const { filter } = req.body
    const files = await File.find()
    const output = files.filter((file) => {
        const myArr = file.filename.split('.')
        const extension = myArr[1]
        return filter == extension
    })
    if (output.length == 0) {
        return res.json({ message: "No Files with given Extension Found." })
    }
    res.status(200).json(output)
}


module.exports = {
    profile,
    upload,
    getFiles,
    getFile,
    getFileByFilter
}