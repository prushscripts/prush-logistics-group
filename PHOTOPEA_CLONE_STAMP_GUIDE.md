# Photopea Clone Stamp Tool Guide

## Problem
The Clone Stamp tool has old grey color sampled and you need to select a white portion of the truck to paint over areas.

---

## Solution: Reset Clone Stamp and Sample White

### Method 1: Resample White Area (Easiest)

1. **Select Clone Stamp Tool** (S key, or click in toolbar)
2. **Hold Alt key** (or Option on Mac)
3. **Click on a white area** of the truck where you want to sample from
4. **Release Alt key**
5. Now the Clone Stamp will use that white area as the source
6. **Click and paint** over the grey areas you want to remove

**Important:** Every time you want to change the source, hold **Alt** and click a new area.

---

## Method 2: Use Healing Brush Instead (Better for Blending)

The Healing Brush automatically blends colors better than Clone Stamp:

1. **Select Healing Brush Tool** (J key, or click in toolbar - looks like a bandaid)
2. **Hold Alt key**
3. **Click on a white area** of the truck to sample
4. **Release Alt key**
5. **Paint over grey areas** - it will blend automatically

**Why Healing Brush is Better:**
- Automatically matches texture and lighting
- Blends colors more naturally
- Less obvious that you edited it

---

## Method 3: Use Brush Tool with White Color (Simplest)

If you just need to paint white over grey areas:

1. **Select Brush Tool** (B key)
2. **Click foreground color** (top of toolbar)
3. **Set color to white:**
   - Enter hex: **#FFFFFF**
   - Or RGB: **R:255 G:255 B:255**
   - Or click pure white in color picker
4. **Adjust brush size** (use [ and ] keys to resize)
5. **Set brush hardness** (0% for soft edges, 100% for hard edges)
6. **Paint over grey areas**

**Pro Tip:** Use **soft brush** (0-30% hardness) for natural blending.

---

## Method 4: Use Content-Aware Fill (Best for Large Areas)

For removing larger grey areas:

1. **Select the grey area** using:
   - **Lasso Tool** (L key) - draw around grey area
   - Or **Magic Wand** (W key) - click grey area to select
2. **Right-click selection** → **Fill**
3. Choose **Content-Aware** from dropdown
4. Click **OK**
5. Photopea will automatically fill with surrounding white

---

## Step-by-Step: Remove Grey and Paint White

### Using Clone Stamp (Your Current Method):

1. **Select Clone Stamp Tool** (S key)
2. **Reset the source:**
   - Hold **Alt key**
   - Click on a **clean white area** of the truck (not near edges)
   - Release Alt
3. **Adjust brush settings:**
   - Size: Match the area you're painting (use [ and ] keys)
   - Hardness: 0-30% for soft edges
   - Opacity: 100% (or lower for subtle blending)
4. **Paint over grey areas:**
   - Click and drag to paint
   - If you need a different white area, hold Alt and click again
5. **Check your work:**
   - Zoom in (Ctrl + Plus)
   - Make sure white matches surrounding area

### Using Healing Brush (Recommended):

1. **Select Healing Brush Tool** (J key)
2. **Sample white area:**
   - Hold **Alt key**
   - Click on clean white area of truck
   - Release Alt
3. **Paint over grey:**
   - Click and drag over grey areas
   - Healing Brush will blend automatically
4. **Resample if needed:**
   - Hold Alt, click new white area
   - Continue painting

---

## Pro Tips

### Getting Perfect White Match:

1. **Sample from multiple areas:**
   - Different parts of the truck may have slightly different white tones
   - Sample from the area **closest** to what you're painting over
   - Lighting can make white look slightly different

2. **Use soft brush edges:**
   - Hard edges look fake
   - Soft edges (0-30% hardness) blend naturally

3. **Work in small sections:**
   - Don't try to paint large areas at once
   - Work section by section, resampling as needed

4. **Check at 100% zoom:**
   - Zoom in to see if white matches perfectly
   - Look for color differences or obvious edits

5. **Use layer opacity:**
   - If white is too bright, lower layer opacity
   - Or use **Color Dodge** blend mode for subtle blending

---

## Keyboard Shortcuts

- **S** - Clone Stamp Tool
- **J** - Healing Brush Tool
- **B** - Brush Tool
- **Alt + Click** - Sample area (for Clone Stamp/Healing Brush)
- **[** - Decrease brush size
- **]** - Increase brush size
- **Shift + [** - Decrease brush hardness
- **Shift + ]** - Increase brush hardness
- **Ctrl + Plus** - Zoom in
- **Ctrl + Minus** - Zoom out
- **Space + Drag** - Pan around image

---

## Troubleshooting

### Clone Stamp Still Has Old Color:
- **Solution:** Hold Alt and click a new white area to resample

### White Doesn't Match:
- **Solution:** Sample from an area closer to what you're painting
- Or use Healing Brush instead (blends better)

### Brush Too Hard/Soft:
- **Solution:** Adjust hardness in toolbar (0-100%)
- Or use Shift + [ or Shift + ] keys

### Can't Find Clean White Area:
- **Solution:** Use Brush Tool with pure white (#FFFFFF)
- Or use Content-Aware Fill for larger areas

### Paint Looks Obvious:
- **Solution:** Lower brush opacity (try 70-80%)
- Or use Healing Brush (blends automatically)
- Or use soft brush edges

---

## Quick Workflow for Your Situation

1. **Select Healing Brush Tool** (J key) - easier than Clone Stamp
2. **Hold Alt**, click on **clean white area** of truck
3. **Release Alt**
4. **Paint over grey areas** (arrow area, white line, etc.)
5. **If needed, resample:** Hold Alt, click different white area
6. **Continue until grey is gone**

**Alternative Quick Method:**
1. **Select Brush Tool** (B key)
2. **Set color to white** (#FFFFFF)
3. **Set brush hardness to 20%** (soft edges)
4. **Paint over grey areas**
5. **Done!**

---

## For Your Specific Arrow Issue

To remove the white horizontal line in the arrow:

1. **Select Healing Brush Tool** (J key)
2. **Hold Alt**, click on **white area of truck** near the arrow
3. **Paint over the white line** in the arrow
4. The Healing Brush will blend it naturally
5. If arrow looks weird, you may need to redraw it (see arrow fix guide)

---

Good luck! The Healing Brush is usually easier than Clone Stamp for this kind of work! 🎨✨
