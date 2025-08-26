import type { VercelRequest, VercelResponse } from '@vercel/node';
import { collection_to_csv } from '../src/services/data_handler';
import * as crypto from "crypto";

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

  const adminKey = process.env.ADMIN_KEY;
  const rawKey = req.query.key;
  const providedKey = Array.isArray(rawKey)
    ? rawKey[0]
    : typeof rawKey === "string"
    ? rawKey
    : undefined;

  if (!adminKey || !providedKey) {
    return res.status(403).json({ message: 'Forbidden: Admin key required' });
  }

  // Use constant-time comparison to mitigate timing attacks
  const adminBuf = Buffer.from(adminKey);
  const providedBuf = Buffer.from(providedKey as string);

  const keysMatch =
    adminBuf.length === providedBuf.length &&
    crypto.timingSafeEqual(adminBuf, providedBuf);

  if (!keysMatch) {
    return res.status(403).json({ message: 'Forbidden: Invalid admin key' });
  }

  try {
    const csv = await collection_to_csv();
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=data.csv");
    res.status(200).send(csv);
  } catch (err: unknown) {
    console.error("Error exporting CSV:", err);
    res.status(500).json({ success: false, message: "Failed to export CSV" });
  }
}
