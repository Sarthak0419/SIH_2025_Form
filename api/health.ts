import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connectDB } from '../src/services/data_handler';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || 'https://sih-2025-form.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectDB();
    res.status(200).json({ message: 'Server is running! DB Connected' });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).json({ message: 'Database connection failed' });
  }
}
