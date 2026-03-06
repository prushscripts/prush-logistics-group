# Social Media Preview Image Guide

## The Problem
Link previews are showing text-only because the image isn't displaying properly. We need a dedicated social media preview image.

## Solution: Create a Social Preview Image

### Recommended Dimensions
- **1200 x 630 pixels** (1.91:1 aspect ratio)
- This is the standard size for Facebook, LinkedIn, Twitter, and most messaging apps

### What Should Be in the Image?

**Option 1: Logo + Tagline (Recommended)**
- Your PRUSH logo (large, centered)
- "LOGISTICS GROUP LLC" text below
- Tagline: "Professional Delivery Services in New York"
- Background: Dark blue/black with subtle orange gradient
- Professional, clean design

**Option 2: Fleet Image + Logo Overlay**
- Your truck fleet image as background
- Logo overlaid in top-left or center
- Semi-transparent dark overlay for text readability
- Tagline text

### AI Image Generation Prompt

Use this prompt to generate a professional social preview image:

```
"Social media preview image, 1200x630 pixels, Prush Logistics Group LLC, large PRUSH logo with arrow element in orange, LOGISTICS GROUP text below in white, Professional Delivery Services in New York tagline, dark navy blue background with subtle orange gradient, professional logistics company branding, clean modern design, high resolution, horizontal banner format"
```

### Where to Generate
- **DALL-E 3** (ChatGPT Plus)
- **Midjourney**
- **Stable Diffusion**
- **Canva** (if you have design skills)

### After Creating the Image

1. **Save it as:** `images/social-preview.png` or `images/og-image.png`
2. **Update the meta tags** in `index.html`:
   ```html
   <meta property="og:image" content="https://prushlogistics.com/images/social-preview.png">
   <meta name="twitter:image" content="https://prushlogistics.com/images/social-preview.png">
   ```
3. **Push to GitHub** - Vercel will auto-deploy
4. **Clear cache** using the tools mentioned earlier

## Temporary Fix (Current)

I've updated the meta tags to use your fleet truck image (`truck1choice.png`) as a temporary solution. This should show an image preview, though it may not be perfectly optimized.

## Testing

After updating:
1. Use Facebook Debugger: https://developers.facebook.com/tools/debug/
2. Enter your URL and click "Scrape Again"
3. Test sharing in iMessage with `?v=999` parameter
