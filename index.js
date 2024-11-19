// index.js
const axios = require('axios');

async function makeApiCall() {
    try {
        // Access the secret from environment variable
        const apiKey = process.env.SCHEDULER_API_KEY;

        // Make your API call here
        const response = await axios.get('https://api.mayberryminitrucks.com/management/triggerInventoryNewsLetter', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        console.log('API call successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error making API call:', error);
        throw error;
    }
}

// Execute if running directly (not imported as module)
if (require.main === module) {
    makeApiCall()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
}

module.exports = { makeApiCall };