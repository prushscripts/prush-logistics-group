# Prush Logistics Group - Deployment Guide

## Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `prush-logistics-website`
   - Make it **Private** (recommended) or Public
   - **Don't** initialize with README
   - Click "Create repository"

2. Connect and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/prush-logistics-website.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Import your GitHub repository:
   - Select `prush-logistics-website`
   - Click **"Import"**
4. Configure project:
   - **Framework Preset:** Other (or leave default)
   - **Root Directory:** `./` (default)
   - **Build Command:** Leave empty (static site)
   - **Output Directory:** Leave empty
   - Click **"Deploy"**

## Step 3: Add Custom Domain to Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Add your domain:
   - Enter: `prushlogistics.com`
   - Click **"Add"**
   - Also add: `www.prushlogistics.com`
   - Click **"Add"** for both
3. Vercel will show you DNS configuration:
   - **Note down the nameservers** (you'll need these for Namecheap)

## Step 4: Configure DNS in Namecheap

1. Log into Namecheap: https://www.namecheap.com/myaccount/login/
2. Go to **Domain List** → Click **"Manage"** next to `prushlogistics.com`
3. Go to **Advanced DNS** tab
4. **Option A: Use Vercel Nameservers (Recommended)**
   - Scroll to **"Nameservers"** section
   - Select **"Custom DNS"**
   - Enter Vercel's nameservers (from Step 3):
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`
   - Click **"Save"**
   - Wait 24-48 hours for propagation

   **OR**

   **Option B: Use A Records (Faster, but more complex)**
   - Delete any existing A records
   - Add new A Record:
     - Type: `A Record`
     - Host: `@`
     - Value: `76.76.21.21` (Vercel's IP)
     - TTL: Automatic
   - Add CNAME Record:
     - Type: `CNAME Record`
     - Host: `www`
     - Value: `cname.vercel-dns.com`
     - TTL: Automatic
   - Click **"Save"**

## Step 5: Verify and Wait

1. DNS propagation can take 24-48 hours
2. Check status in Vercel dashboard (Settings → Domains)
3. Once active, your site will be live at:
   - `https://prushlogistics.com`
   - `https://www.prushlogistics.com`

## Troubleshooting

- **Domain not connecting?** Wait 24-48 hours for DNS propagation
- **SSL certificate issues?** Vercel auto-generates SSL, wait a few minutes
- **Need to update site?** Just push to GitHub, Vercel auto-deploys

## Quick Commands Reference

```bash
# Navigate to project
cd "C:\Users\James\Desktop\Prush Logistics Group"

# Make changes, then:
git add .
git commit -m "Your commit message"
git push origin main

# Vercel will automatically deploy!
```
