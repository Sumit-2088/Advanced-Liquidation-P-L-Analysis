# Crypto Trading Calculator - Render.com Deployment

## Quick Deploy to Render.com

This package is specifically configured for Render.com hosting with automatic deployment.

### Option 1: Direct Upload (Recommended)

1. **Download** this folder as a zip file
2. **Go to** [Render.com](https://render.com) and sign up/login
3. **Click** "New +" → "Web Service"
4. **Choose** "Deploy an existing image or build and deploy from a Git repository"
5. **Select** "Public Git repository" and upload your zip or connect your repo
6. **Configure:**
   - Name: `crypto-trading-calculator`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Auto-Deploy: `Yes`

### Option 2: GitHub Integration

1. **Create a new GitHub repository**
2. **Upload** these files to your repository
3. **Go to** [Render.com](https://render.com)
4. **Click** "New +" → "Web Service"
5. **Connect** your GitHub repository
6. **Render will automatically detect** the `render.yaml` configuration

### Environment Variables (Optional)

If you want to use a PostgreSQL database:

1. **In Render dashboard**, go to your service
2. **Click** "Environment" tab
3. **Add** environment variable:
   - Key: `DATABASE_URL`
   - Value: Your PostgreSQL connection string

### What Happens After Deployment

- ✅ Your app will be available at `https://your-app-name.onrender.com`
- ✅ Automatic HTTPS/SSL certificate
- ✅ Global CDN for fast loading
- ✅ Auto-deployment on code changes (if using GitHub)
- ✅ Free tier includes 750 hours/month

### Render.com Configuration Details

- **Service Type**: Web Service
- **Runtime**: Node.js 18+
- **Region**: Oregon (default)
- **Plan**: Free tier (can upgrade later)
- **Port**: 10000 (Render's default)
- **Health Check**: Root path (`/`)

### File Structure

```
render-deployment/
├── dist/                 # Built application
│   ├── public/          # Frontend assets
│   └── index.js         # Server bundle
├── package.json         # Dependencies
├── render.yaml          # Render configuration
└── README.md           # This file
```

### Troubleshooting

**If deployment fails:**
1. Check the build logs in Render dashboard
2. Ensure Node.js version is 18+ in package.json engines
3. Verify all dependencies are in package.json

**If app doesn't load:**
1. Check the application logs in Render dashboard
2. Verify the start command is correct
3. Ensure PORT environment variable is set to 10000

### Cost Information

- **Free Tier**: 750 hours/month, apps sleep after 15 minutes of inactivity
- **Starter Plan**: $7/month for always-on service
- **Database**: PostgreSQL free tier available or use in-memory storage

Your crypto trading calculator will be live on the internet within minutes of deployment!