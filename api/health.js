// Vercel serverless function example. Move to /api/health.js to enable /api/health.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    ok: true,
    app: 'ToolVerse',
    version: '2.0.0',
    message: 'API backend is online'
  });
}
