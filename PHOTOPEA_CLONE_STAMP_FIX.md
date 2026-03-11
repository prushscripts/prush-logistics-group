# Fix Clone Stamp Tool Issues - Step by Step

## Problem
Clone Stamp showing gray text when dragging left, brownish color when dragging right.

---

## Solution: Fix Your Settings

### Step 1: Check "Aligned" Setting

**In your Clone Stamp toolbar:**
- **Uncheck "Aligned"** (the checkbox next to "Aligned")
- **Why:** When "Aligned" is checked, the source point moves as you paint, which can cause it to sample from wrong areas
- **With "Aligned" unchecked:** The source stays fixed where you sampled, giving you more control

### Step 2: Lower Brush Hardness

**In brush settings:**
- **Hardness:** Change from 90% to **0-30%** (soft brush)
- **Why:** Hard brushes (90%) create obvious edges and don't blend well
- **Soft brushes** blend naturally with the van color

**How to change:**
1. Click the brush size indicator (shows "21" in your image)
2. In the brush panel, find **"Hardness"** slider
3. Drag it to **0-30%** (soft edge)

### Step 3: Sample from Clean White Area

**Critical:** You must sample from the RIGHT area!

1. **Zoom in** on the van (Ctrl + Plus)
2. **Find a clean white area:**
   - **Above or below** the LOGISTICS GROUP text
   - **Away from** the curved panel line
   - **Away from** any text or logos
   - **Flat white area** with no shadows or curves

3. **Hold Alt key**
4. **Click on that clean white area** (this sets your source)
5. **Release Alt**

### Step 4: Paint Over Text

1. **Move to the LOGISTICS GROUP text**
2. **Click and drag** over the text
3. **Paint slowly** - don't rush
4. **If color doesn't match:**
   - **Hold Alt again**
   - **Click on different white area** (resample)
   - **Continue painting**

---

## Correct Settings for Your Task

### Clone Stamp Toolbar Settings:
- **Blend Mode:** Normal ✅
- **Opacity:** 100% ✅ (or try 90-95% for subtle blending)
- **Aligned:** **UNCHECKED** ⚠️ (this is likely your issue!)
- **Source:** Current Layer ✅

### Brush Settings:
- **Size:** 21px (adjust as needed - use [ and ] keys)
- **Hardness:** **0-30%** ⚠️ (not 90% - too hard!)
- **Shape:** Soft circular brush

---

## Why You're Seeing Gray/Brown

**Gray text appearing:**
- You're sampling from an area that has gray text or shadow
- Or "Aligned" is causing source to move to wrong area

**Brownish color:**
- You're sampling from an area with different lighting
- Or sampling from the curved panel area (which might have different tone)
- Or sampling from an area with shadow

**Solution:**
- **Uncheck "Aligned"**
- **Sample from flat, clean white area** (not near curves or text)
- **Use soft brush** (0-30% hardness)

---

## Step-by-Step: Remove LOGISTICS GROUP Correctly

### Complete Workflow:

1. **Select Clone Stamp Tool** (S key)
2. **Set brush:**
   - **Size:** 30-50px (larger for faster work)
   - **Hardness:** 20% (soft edge)
   - **Opacity:** 100%

3. **Uncheck "Aligned"** in toolbar

4. **Sample clean white:**
   - **Zoom in** (Ctrl + Plus)
   - **Find flat white area** above or below text
   - **Hold Alt**, click on clean white
   - **Release Alt**

5. **Paint over text:**
   - **Click and drag** over LOGISTICS GROUP
   - **Work slowly**, section by section
   - **If color doesn't match:**
     - Hold Alt, click different white area
     - Continue painting

6. **Check your work:**
   - **Zoom out** (Ctrl + Minus)
   - **Look for any gray/brown spots**
   - **Resample and touch up** if needed

---

## Pro Tips

### Tip 1: Sample Multiple Times
- Don't try to cover entire text with one sample
- **Resample** (Alt+click) from different white areas as you work
- This ensures color matches throughout

### Tip 2: Work in Sections
- Remove text **above the curve** first (sample from flat area above)
- Remove text **on the curve** (sample from original curve location)
- Remove text **below the curve** (sample from flat area below)

### Tip 3: Use Soft Brush
- **Hardness 0-30%** blends naturally
- **Hardness 90%** creates obvious edges

### Tip 4: Check "Aligned" Setting
- **Unchecked** = Source stays fixed (better for this task)
- **Checked** = Source moves with brush (can cause issues)

---

## Quick Fix Checklist

- [ ] **Uncheck "Aligned"** in Clone Stamp toolbar
- [ ] **Lower hardness** to 0-30% (soft brush)
- [ ] **Sample from clean white area** (flat, no curves)
- [ ] **Resample frequently** (Alt+click different areas)
- [ ] **Work slowly** section by section

---

## Alternative: Use Healing Brush Instead

If Clone Stamp still gives you issues:

1. **Select Healing Brush Tool** (J key)
2. **Set hardness:** 0-30%
3. **Uncheck "Aligned"** (if option available)
4. **Hold Alt**, click on **clean white area**
5. **Paint over text** - it blends automatically

**Healing Brush is often easier** - it automatically matches color and texture!

---

## Keyboard Shortcuts

- **S** - Clone Stamp Tool
- **J** - Healing Brush Tool
- **Alt + Click** - Sample area
- **[** - Decrease brush size
- **]** - Increase brush size
- **Shift + [** - Decrease hardness
- **Shift + ]** - Increase hardness
- **Ctrl + Plus** - Zoom in
- **Ctrl + Minus** - Zoom out

---

**Main fixes: Uncheck "Aligned" and lower hardness to 0-30%!** 🎨✨
