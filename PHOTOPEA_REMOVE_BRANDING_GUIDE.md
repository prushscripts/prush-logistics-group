# How to Remove Branding from Truck Image in Photopea

## Problem
You want to remove the PRUSH logo and branding from the truck, but Clone Stamp is showing where you clicked and not matching the van's white color properly.

---

## Best Method: Content-Aware Fill (Easiest & Most Natural)

### Step-by-Step:

1. **Select the branding area:**
   - Use **Lasso Tool** (L key) - draw around the PRUSH logo and LOGISTICS GROUP text
   - Or use **Magic Wand** (W key) - click on orange text to select it
   - Hold **Shift** to add more areas (arrow, tagline, etc.)

2. **Expand selection slightly:**
   - **Select → Modify → Expand**
   - Enter **2-3 pixels** (this helps blending)

3. **Fill with Content-Aware:**
   - **Edit → Fill** (or Shift+F5)
   - Choose **Content-Aware** from dropdown
   - Click **OK**

4. **Photopea will automatically:**
   - Fill the area with surrounding white van color
   - Blend naturally with the van's texture
   - No visible marks or obvious edits

**This is the BEST method** - it automatically matches the van color!

---

## Alternative Method: Healing Brush (For Smaller Areas)

### Step-by-Step:

1. **Select Healing Brush Tool** (J key - looks like bandaid)

2. **Sample white area:**
   - Hold **Alt key**
   - Click on **clean white area** of van (away from logo)
   - **Important:** Sample from area with similar lighting/texture

3. **Paint over logo:**
   - Click and drag over PRUSH text
   - Healing Brush will blend automatically
   - No visible marks - it matches color/texture

4. **Resample as needed:**
   - If color doesn't match, hold Alt, click different white area
   - Continue painting

**Why Healing Brush is Better than Clone Stamp:**
- Automatically blends colors
- Matches texture and lighting
- No visible "click marks"
- Looks more natural

---

## Method 3: Brush Tool with White (If Others Don't Work)

### Step-by-Step:

1. **Select Brush Tool** (B key)

2. **Set color to white:**
   - Click foreground color (top toolbar)
   - Enter hex: **#FFFFFF**
   - Or click pure white in color picker

3. **Adjust brush settings:**
   - **Size:** Match the area (use [ and ] keys)
   - **Hardness:** 0-20% (soft edges for blending)
   - **Opacity:** 100%

4. **Paint over logo:**
   - Paint over PRUSH, LOGISTICS GROUP, arrow, etc.
   - Use soft brush for natural edges

5. **If white doesn't match:**
   - Use **Eyedropper Tool** (I key)
   - Click on actual white area of van
   - This samples the exact white color
   - Now use Brush Tool with that color

---

## Method 4: Patch Tool (For Large Areas)

### Step-by-Step:

1. **Select Patch Tool** (J key, then click icon in toolbar - looks like patch)

2. **Draw around logo area:**
   - Click and drag to select the branding area

3. **Drag to white area:**
   - Click inside selection
   - Drag to clean white area of van
   - Release mouse

4. **Photopea will:**
   - Copy white area to logo area
   - Blend edges automatically
   - Match texture

---

## Pro Tips for Perfect White Match

### 1. Sample the Exact White Color:

1. **Use Eyedropper Tool** (I key)
2. **Click on clean white area** of van (not near logo)
3. This sets your foreground color to the exact van white
4. Now use **Brush Tool** with that color

### 2. Check Van's White Tone:

- Vans aren't pure white (#FFFFFF)
- They're usually slightly off-white or have lighting variations
- **Sample from multiple areas** to find the right tone
- Use the area closest to the logo for best match

### 3. Work in Layers:

1. **Create new layer** (Ctrl+Shift+N)
2. **Paint on new layer** (not directly on image)
3. **Adjust layer opacity** if needed (try 90-95%)
4. **Use layer blend modes** if color is slightly off

### 4. Use Soft Edges:

- **Hard edges look fake**
- Use **soft brush** (0-20% hardness)
- Or **feather selection** before filling (Select → Modify → Feather → 2-3 pixels)

---

## Step-by-Step: Complete Removal Process

### Recommended Workflow:

1. **Select all branding:**
   - Use **Magic Wand** (W key)
   - Click on orange PRUSH text
   - Hold **Shift**, click on grey LOGISTICS GROUP
   - Hold **Shift**, click on arrow
   - Hold **Shift**, click on tagline
   - Hold **Shift**, click on orange stripe

2. **Expand selection:**
   - **Select → Modify → Expand → 2 pixels**

3. **Feather edges:**
   - **Select → Modify → Feather → 2 pixels**

4. **Fill with Content-Aware:**
   - **Edit → Fill → Content-Aware → OK**

5. **If any areas look off:**
   - Use **Healing Brush** (J key) to touch up
   - Sample nearby white area
   - Paint over problem spots

---

## Troubleshooting

### Clone Stamp Showing Click Marks:
- **Solution:** Use **Healing Brush** instead (J key)
- Or use **Content-Aware Fill**

### White Doesn't Match Van:
- **Solution:** Use **Eyedropper Tool** (I key) to sample actual van white
- Or use **Content-Aware Fill** (automatically matches)

### Still Visible After Removal:
- **Solution:** Use **Healing Brush** to blend edges
- Or lower layer opacity slightly
- Or use **Blur Tool** on edges

### Large Areas Look Fake:
- **Solution:** Use **Content-Aware Fill** for large areas
- Or use **Patch Tool** to copy white areas

---

## Quick Reference: Best Tools for This Job

| Tool | Best For | Why |
|------|----------|-----|
| **Content-Aware Fill** | Large areas, entire logo | Automatically matches color/texture |
| **Healing Brush** | Small areas, touch-ups | Blends naturally, no marks |
| **Patch Tool** | Medium areas | Copies white area perfectly |
| **Brush Tool** | Final touches | Manual control, use sampled white |

---

## Keyboard Shortcuts

- **L** - Lasso Tool (select area)
- **W** - Magic Wand (select by color)
- **J** - Healing Brush / Patch Tool
- **B** - Brush Tool
- **I** - Eyedropper Tool (sample color)
- **Alt + Click** - Sample area (for Healing Brush)
- **Shift + F5** - Fill dialog
- **Ctrl + D** - Deselect
- **[** - Decrease brush size
- **]** - Increase brush size

---

## Recommended Workflow for Your Situation

**Easiest Method (Do This First):**

1. **Magic Wand Tool** (W key)
2. **Click on orange PRUSH text**
3. **Hold Shift, click on other branding elements**
4. **Select → Modify → Expand → 2 pixels**
5. **Edit → Fill → Content-Aware → OK**
6. **Done!** Should look natural

**If Content-Aware Doesn't Work Well:**

1. **Healing Brush Tool** (J key)
2. **Hold Alt, click on clean white van area**
3. **Paint over logo areas**
4. **Resample as needed** (Alt + click different white area)

**For Perfect Match:**

1. **Eyedropper Tool** (I key)
2. **Click on actual white van area**
3. **Brush Tool** (B key)
4. **Paint over logo** (use soft brush, 0-20% hardness)

---

## Why Clone Stamp Wasn't Working

- Clone Stamp shows exactly where you sampled from
- It doesn't blend colors automatically
- You need to manually match the white
- Healing Brush and Content-Aware are much better for this

---

**Try Content-Aware Fill first - it's the easiest and usually works perfectly!** 🎨✨
