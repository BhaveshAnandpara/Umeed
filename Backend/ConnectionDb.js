require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
	const connection = mongoose
		.connect(process.env.DB,{
            // useUnifiedTopology: true, useNewUrlParser: true,
        })
		.then((result) => console.log("Connected to database"))
		.catch((err) => console.log("could not connect to database",err));
};