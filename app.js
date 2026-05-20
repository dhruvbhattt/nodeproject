const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

//USE YOUR REAL API URL HERE
const API_URL = "https://DhruvsWebApp2.azurewebsites.net/api/test";

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_URL);

        if (response.status === 200) {
            res.send(`Success! ${response.data.message}`);
        } else {
            res.send("Failed to call API");
        }
    } catch (error) {
        console.error(error.message);
        res.send("Error calling the API");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});