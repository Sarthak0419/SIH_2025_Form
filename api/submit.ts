import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertData } from '../src/services/data_handler';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || 'https://sih-2025-form.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body;
    await insertData(data);
    res.status(200).json({ message: 'Data submitted successfully!' });
  } catch (error: unknown) {
    console.error('Error submitting data:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to submit data';
    res.status(500).json({
      success: false,
      message: `${errorMessage}`,
    });
  }
}
