# GitHub Deployment Guide

This guide will help you deploy the Artificial Intelligence Lab website to GitHub Pages.

## Prerequisites

- Git installed on your computer
- A GitHub account
- Node.js and npm installed

## Step 1: Prepare Your Repository

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name your repository (e.g., `ai-lab-website`)
   - Choose public or private
   - Don't initialize with README (we already have files)

2. Connect your local project to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: AI Lab website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Step 2: Configure for GitHub Pages

1. Install the `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

2. Add the following to your `package.json`:
```json
{
  "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts` to set the base path:
```typescript
export default defineConfig({
  base: '/YOUR-REPO-NAME/',
  // ... rest of config
});
```

## Step 3: Deploy to GitHub Pages

1. Build and deploy:
```bash
npm run deploy
```

2. This will create a `gh-pages` branch and push the built files to it.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select the `gh-pages` branch
5. Click "Save"

Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

## Updating the Website

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main
npm run deploy
```

The `npm run deploy` command will rebuild and redeploy your site.

## Troubleshooting

### Issue: White screen or 404 errors
- Check that the `base` path in `vite.config.ts` matches your repository name
- Ensure the `homepage` in `package.json` is correct

### Issue: Images not loading
- Make sure all image URLs are correct
- Consider using relative paths for local images
- External images (like from postimg.cc) should work fine

### Issue: Deploy fails
- Run `npm run build` locally first to check for build errors
- Make sure all dependencies are installed: `npm install`
- Check that you have the latest version of gh-pages: `npm update gh-pages`

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable "Enforce HTTPS" in the GitHub Pages settings

For more details, see: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Support

For issues related to GitHub Pages, visit: https://docs.github.com/en/pages
