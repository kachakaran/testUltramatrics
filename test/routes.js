const express = require('express');
const multer = require('multer');
const fs = require('fs');
const readExel = require('read-excel-file/node');
const Details = require('./models/details');

const routes = express.Router();

const uploadedfiles = multer({ dest: 'uploads/' })

routes.post('/fileHandle', uploadedfiles.single('datafile'), async (req, res) => {
    try {

        const createData = [];

        const data = await readExel(fs.createReadStream(req.file.path))

        data.forEach((row, index) => {
            if (index > 0 && row[index]) {
                createData.push({
                    practiceName: row[index, 0],
                    practiceType: row[index, 1],
                    firstName: row[index, 2],
                    lastName: row[index, 3],
                    profDesig: row[index, 4],
                    add1: row[index, 5],
                    add: row[index, 6],
                    city: row[index, 7],
                    state: row[index, 8],
                    zip: row[index, 9],
                    phone: row[index, 10],
                    fax: row[index, 11],
                    gender: row[index, 12],
                })
            }
        })

        await Details.insertMany(createData);

        return res.json({ createData });

    } catch (error) {

        console.log(error)
        return res.status(400).json({ error: true });
    }



}
);

module.exports = routes; 