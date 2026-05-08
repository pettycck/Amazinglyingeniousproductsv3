# Product Catalog Website

A modern, responsive product catalog website built with React, TypeScript, and Tailwind CSS, featuring 3D-printed products, electronics, and handmade items.

## Features

- **3D-Printed Items**: Pencil holders, vases, flowerpots, and hinged boxes
- **Electronics**: Custom lamps with 3D-printed shades
- **Sewing & Others**: Handmade tote bags and laser-cut MDF boxes
- Responsive design that works on all devices
- Product cards with images, descriptions, prices (in SGD), and dimensions
- Badge system (Bestseller, Popular, New, Handmade, Premium)
- Contact section with email information

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS v4
- Vite
- Lucide React (icons)

## Local Development

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. The Vite dev server should already be running in Figma Make, or you can start it with:
   ```bash
   pnpm run dev
   ```

## Deployment to GitHub Pages

### Step 1: Create the Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `Amazinglyingeniousproductsv3`
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 2: Push Your Code

Since the repository is already initialized locally with all commits, you have two options:

#### Option A: Using GitHub Desktop (Recommended)

1. Open GitHub Desktop
2. Click "File" → "Add Local Repository"
3. Click "Choose..." and navigate to your project folder
4. Click "Add Repository"
5. Click "Publish repository" in the top bar
6. Make sure "Keep this code private" is **UNCHECKED** (must be public for free GitHub Pages)
7. Click "Publish Repository"

#### Option B: Using Command Line

If you prefer the command line and have Git credentials configured:

```bash
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/pettycck/Amazinglyingeniousproductsv3`
2. Click "Settings" tab
3. In the left sidebar, click "Pages"
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. Click "Save"

### Step 4: Automatic Deployment

Once you push your code to the `main` branch:

1. GitHub Actions will automatically build and deploy your site
2. Go to the "Actions" tab to monitor the deployment progress
3. Once complete (usually 1-2 minutes), your site will be live at:
   
   **https://pettycck.github.io/Amazinglyingeniousproductsv3/**

### Future Updates

After the initial setup, any time you want to update your website:

1. Make your changes in the code
2. In GitHub Desktop:
   - Write a summary of your changes in the "Summary" field
   - Click "Commit to main"
   - Click "Push origin" (the button at the top)
3. GitHub Actions will automatically rebuild and redeploy your site
4. Changes will be live in 1-2 minutes

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx              # Main application component
│   │   └── components/          # React components
│   │       ├── category-section.tsx
│   │       ├── product-card.tsx
│   │       └── ui/              # UI components (shadcn)
│   └── styles/                  # CSS files
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment workflow
├── vite.config.ts               # Vite configuration
└── package.json                 # Dependencies and scripts

```

## Product Information

### 3D-Printed Products
- Pencil Holder (6cm × 10cm) - $12.00
- Vase (9cm × 14cm) - $15.00
- Flowerpot & Saucer (9cm × 12cm) - $15.00
- Hinged Box (9cm × 9.5cm) - $15.00

### Electronics
- Lamp with shade (10cm × 15cm) - $15.00

### Sewing & Others
- Lined Tote Bag (42cm × 32cm) - $15.00
- MDF Storage/Gift Box (10cm × 10cm) - $15.00
- MDF Craft Box (7.5cm × 7.5cm) - $15.00

## Contact

Email: funnylittlethingsjames@gmail.com

## License

© 2026 Product Catalog. All rights reserved.
