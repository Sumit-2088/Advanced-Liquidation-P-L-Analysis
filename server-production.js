import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const requestPath = req.path;
  
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (requestPath.startsWith("/api")) {
      console.log(`${req.method} ${requestPath} ${res.statusCode} in ${duration}ms`);
    }
  });
  
  next();
});

// Create HTTP server
const httpServer = createServer(app);

// Error handling middleware
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  
  res.status(status).json({ message });
  console.error(err);
});

// Serve static files in production
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Catch-all handler: send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Start server
const port = parseInt(process.env.PORT || '10000', 10);

httpServer.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});