import express from 'express';
import axios from 'axios';

const router = express.Router();

// API Key 直接写死，暂时不使用 .env
const VITE_UV_API_KEY = 'openuv-11cnu4rm879yhg7-io';

router.get('/uv/:lat/:lng', async (req, res) => {
    const { lat, lng } = req.params;

    try {
        const response = await axios.get(`https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lng}`, {
            headers: { 
                'x-access-token': VITE_UV_API_KEY,
              }
        });

        const uvIndex = response.data.result.uv;    
        res.json({ uvIndex });
    } catch (error) {
        console.error('Error fetching UV index:', error.response?.data || error.message);
        res.status(error.response?.status || 500).json({
            error: 'Failed to fetch UV index',
            details: error.response?.data || error.message
        });
    }
});

export default router;
