import axios from 'axios';

const CODEJUDGE_API_URL = 'https://api.codejudge.com/execute'; // Example URL
const API_KEY = 'YOUR_API_KEY_HERE'; // Keep this safe!

export const runCode = async (code) => {
  const response = await axios.post(CODEJUDGE_API_URL, {
    code,
    api_key: API_KEY,
  });
  return response.data.output; // Adapt based on actual API response
};
