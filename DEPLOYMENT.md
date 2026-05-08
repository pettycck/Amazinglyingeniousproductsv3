# Deployment Instructions for GitHub Pages

This project is configured to deploy to GitHub Pages at: `https://pettycck.github.io/AmazinglyingeniousproductsV2/`

## Automated Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically builds and deploys your site when you push to the main branch.

### Setup Steps:

1. **Create the GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/pettycck/AmazinglyingeniousproductsV2.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically run and deploy your site

3. **Wait for deployment:**
   - Go to the **Actions** tab in your repository
   - Wait for the deployment workflow to complete (usually takes 1-2 minutes)
   - Your site will be live at: `https://pettycck.github.io/AmazinglyingeniousproductsV2/`

## Manual Deployment

If you prefer to deploy manually:

1. **Build the project:**
   ```bash
   pnpm install
   pnpm run build
   ```

2. **Deploy the `dist` folder:**
   - You can use the `gh-pages` branch method
   - Or upload the contents of the `dist` folder to your hosting service

3. **Using gh-pages package (optional):**
   ```bash
   pnpm add -D gh-pages
   ```
   
   Then add this script to `package.json`:
   ```json
   "scripts": {
     "deploy:manual": "pnpm run build && gh-pages -d dist"
   }
   ```
   
   Run deployment:
   ```bash
   pnpm run deploy:manual
   ```

## Troubleshooting

- **404 Error:** Make sure GitHub Pages is enabled in your repository settings
- **Assets not loading:** Verify that the `base` path in `vite.config.ts` matches your repository name
- **Workflow fails:** Check the Actions tab for error messages and ensure GitHub Pages is set to use GitHub Actions as the source

## Local Testing

To test the production build locally:
```bash
pnpm run build
pnpm run preview
```

This will serve your production build at `http://localhost:4173`
