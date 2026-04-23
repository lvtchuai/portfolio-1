# CI/CD Setup with GitHub Actions

This portfolio uses GitHub Actions to automatically deploy to AWS S3 + CloudFront on every push to `main`.

## 🚀 How it Works

1. Push to `main` branch triggers the workflow
2. GitHub Actions checks out your code
3. Creates `.env` file from repository secrets (keeps credentials safe!)
4. Installs dependencies and builds the project
5. Syncs `dist/` folder to AWS S3 bucket
6. Invalidates CloudFront cache for instant updates

## 🔐 Setting Up GitHub Secrets (IMPORTANT)

**Never commit `.env` file to GitHub!** Instead, use GitHub Secrets.

### Step 1: Get Your EmailJS Credentials

1. Log into [emailjs.com](https://www.emailjs.com/)
2. Go to **Email Services** → copy your **Service ID**
3. Go to **Email Templates** → copy your **Template ID**
4. Go to **Integration** → **EmailJS SDK** → copy **Public Key**

### Step 2: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these 3 secrets:

| Secret Name | Value |
|-------------|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_xxxxxxxxxxxxx` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_xxxxxxxxxxxxx` |
| `VITE_EMAILJS_PUBLIC_KEY` | `user_xxxxxxxxxxxxx` |

**Already configured AWS secrets (from your existing workflow):**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_BUCKET`
- `CLOUDFRONT_DIST_ID`

### Step 3: Verify Local `.env`

Make sure your local `.env` file (not committed) has:
```env
VITE_EMAILJS_SERVICE_ID=service_your_id
VITE_EMAILJS_TEMPLATE_ID=template_your_id
VITE_EMAILJS_PUBLIC_KEY=user_your_key
```

## 🧪 Testing Locally

```bash
# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env
# Edit .env with your credentials

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 What Gets Deployed

- Built files from `dist/` folder
- No `.env` file (created during CI, not committed)
- No `node_modules`
- No source files (compiled/minified)

## 🔄 Deployment Flow

```
git push origin main
    ↓
GitHub Actions triggers
    ↓
Creates .env from secrets
    ↓
npm install && npm run build
    ↓
Upload to S3
    ↓
Invalidate CloudFront cache
    ↓
✅ Site live at your domain
```

## 🐛 Troubleshooting

### Build fails in CI but works locally
- Check Node.js version matches (package.json `engines` field)
- Ensure all dependencies are in `package.json`

### Contact form not sending emails
- Verify EmailJS credentials in GitHub Secrets
- Check browser console for errors
- Test with `npm run dev` first locally

### S3 sync fails
- Verify `AWS_S3_BUCKET` secret is correct
- Check AWS IAM user has S3 full access
- Confirm bucket exists in the correct region

## 📚 Related Files

- `.github/workflows/deploy.yml` - CI/CD pipeline
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.js` - Vite build configuration
- `.env.example` - Template for environment variables
