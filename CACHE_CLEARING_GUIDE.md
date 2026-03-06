# How to Clear Link Preview Cache

Social media platforms cache link previews heavily. Here's how to force them to refresh:

## For iMessage / SMS (iPhone)

1. **Delete the old message** with the link
2. **Wait 5-10 minutes**
3. **Send yourself a NEW message** with the link
4. The preview should update

**Alternative Method:**
- Add `?v=2` or `?t=1234567890` to the end of your URL when testing
- Example: `https://prushlogistics.com/?v=2`
- This tricks the cache into thinking it's a new URL

## For Facebook / Meta Platforms

1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL: `https://prushlogistics.com/`
3. Click **"Scrape Again"** button
4. This forces Facebook to re-fetch your page
5. Wait 2-3 minutes, then test sharing again

## For Twitter / X

1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL: `https://prushlogistics.com/`
3. Click **"Preview card"**
4. This validates and refreshes the cache

## For LinkedIn

1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your URL: `https://prushlogistics.com/`
3. Click **"Inspect"**
4. This refreshes LinkedIn's cache

## For WhatsApp

1. WhatsApp uses Facebook's cache
2. Use the Facebook Debugger tool (above)
3. Then try sharing again in WhatsApp

## Quick Test Method

Add a version parameter to your URL when testing:
- `https://prushlogistics.com/?v=1`
- `https://prushlogistics.com/?v=2`
- `https://prushlogistics.com/?v=3`

Each time you change the number, platforms treat it as a new URL!

## Important Notes

- **Cache can take 24-48 hours** to fully clear on some platforms
- **iMessage cache is particularly stubborn** - may need to wait longer
- **Make sure your image is publicly accessible** at the URL in meta tags
- **Image should be at least 1200x630px** for best results
