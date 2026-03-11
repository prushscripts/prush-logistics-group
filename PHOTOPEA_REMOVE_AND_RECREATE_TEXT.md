# Remove and Recreate LOGISTICS GROUP Text - Step by Step

## Part 1: Remove the Old Text Cleanly

### Step 1: Select the Text Area
1. **Select Lasso Tool** (press **L** key, or click in toolbar)
2. **Draw around "LOGISTICS GROUP" text:**
   - Click and drag to create selection around the text
   - Include a small margin around the text (don't cut it too tight)
   - Make sure you select ALL of the text

### Step 2: Expand Selection (For Better Blending)
1. **Select → Modify → Expand**
2. Enter **2-3 pixels**
3. Click **OK**
   - This helps Content-Aware Fill blend better

### Step 3: Fill with Content-Aware
1. **Edit → Fill** (or press **Shift+F5**)
2. In the dialog box:
   - **Contents:** Choose **Content-Aware** from dropdown
   - Click **OK**
3. **Deselect:** Press **Ctrl+D** (or Select → Deselect)

**Result:** Text should be completely gone, replaced with white van color!

---

### Alternative: If Content-Aware Doesn't Work Well

**Use Healing Brush:**
1. **Select Healing Brush Tool** (press **J** key)
2. **Hold Alt**, click on **clean white van area** near the text
3. **Paint over "LOGISTICS GROUP"** text
4. It will blend automatically
5. **Resample** (Alt+click) different white areas if needed

---

## Part 2: Recreate LOGISTICS GROUP with Correct Size

### Step 4: Measure PRUSH Height
1. **Select Text Tool** (press **T** key)
2. **Click on "PRUSH" text** (this selects the text layer)
3. **Check the font size** in the top toolbar
   - Look for font size (e.g., "200px", "250px", etc.)
   - **Write this number down** - you'll need it!

**Example:** If PRUSH is 200px, LOGISTICS GROUP should be 80-90px (40-45%)

---

### Step 5: Create New LOGISTICS GROUP Text
1. **Select Text Tool** (press **T** key)
2. **Click directly below PRUSH** (where old text was)
3. **Type:** "LOGISTICS GROUP" (all caps, no quotes)

### Step 6: Set Font Properties
In the top toolbar, set:

1. **Font Family:**
   - Choose **same font as PRUSH** (Arial, Helvetica, or whatever PRUSH uses)
   - **Important:** Must match PRUSH font family

2. **Font Size:**
   - Calculate: **40-45% of PRUSH size**
   - If PRUSH is 200px → LOGISTICS GROUP = 80-90px
   - If PRUSH is 250px → LOGISTICS GROUP = 100-112px
   - If PRUSH is 300px → LOGISTICS GROUP = 120-135px
   - **Enter the calculated size** in the font size box

3. **Font Weight:**
   - Choose **Regular** (not Bold)
   - PRUSH should be Bold, LOGISTICS GROUP should be Regular

4. **Color:**
   - Click color swatch
   - Enter hex: **#666666** (dark charcoal grey)
   - Or RGB: **102, 102, 102**

5. **Letter Spacing:**
   - In Character panel (Window → Character if not visible)
   - Set **Tracking** to **-10 to -20** (slightly tighter spacing)

### Step 7: Position the Text
1. **Select Move Tool** (press **V** key)
2. **Click on LOGISTICS GROUP text**
3. **Position it:**
   - **Directly below PRUSH**
   - **Center-aligned** with PRUSH
   - **Tight spacing:** 10-15px gap between PRUSH and LOGISTICS GROUP

4. **Use guides for perfect alignment:**
   - **View → Show → Rulers** (if not visible)
   - **Drag guide from left ruler** to center of PRUSH
   - **Align LOGISTICS GROUP** to same guide

### Step 8: Fine-Tune
1. **Zoom in** (Ctrl + Plus) to check alignment
2. **Adjust spacing** if needed (Move Tool - V key)
3. **Check size ratio:**
   - LOGISTICS GROUP should look **significantly smaller** than PRUSH
   - Should be about **half the size** of PRUSH

---

## Quick Reference: Size Calculation

| PRUSH Size | LOGISTICS GROUP (40%) | LOGISTICS GROUP (45%) |
|------------|----------------------|----------------------|
| 150px      | 60px                 | 67px                 |
| 200px      | 80px                 | 90px                 |
| 250px      | 100px                | 112px                |
| 300px      | 120px                | 135px                |

**Use 40-45% range - aim for around 42-43% for best look!**

---

## Complete Checklist

After recreating, verify:

- [ ] LOGISTICS GROUP is 40-45% of PRUSH height
- [ ] LOGISTICS GROUP is center-aligned with PRUSH
- [ ] LOGISTICS GROUP is regular weight (not bold)
- [ ] Color is dark grey (#666666)
- [ ] Spacing is tight (10-15px gap from PRUSH)
- [ ] Font matches PRUSH font family
- [ ] Text is spelled correctly (all caps)
- [ ] Looks professional and balanced

---

## Troubleshooting

### Text Size Still Looks Wrong:
- **Double-check PRUSH size** - select PRUSH text, check font size in toolbar
- **Recalculate:** LOGISTICS GROUP = PRUSH size × 0.40 to 0.45
- **Try 40% first** - you can always make it slightly bigger if needed

### Can't Match PRUSH Font:
- **Select PRUSH text** (Text Tool, click on PRUSH)
- **Check font name** in toolbar
- **Apply same font** to LOGISTICS GROUP

### Alignment Issues:
- **Use guides** (View → Show → Rulers, drag from rulers)
- **Select both text layers** (hold Shift, click both)
- **Use Align tools** in toolbar (center horizontally)

### Color Doesn't Match:
- **Use Eyedropper Tool** (I key)
- **Click on existing grey text** (if any) to sample color
- **Or enter hex:** #666666

---

## Keyboard Shortcuts

- **L** - Lasso Tool (select text area)
- **J** - Healing Brush Tool
- **T** - Text Tool
- **V** - Move Tool
- **I** - Eyedropper Tool (sample color)
- **Shift+F5** - Fill dialog
- **Ctrl+D** - Deselect
- **Ctrl+Plus** - Zoom in
- **Ctrl+Minus** - Zoom out

---

**You've got this! Manual control in Photopea will give you perfect results!** 🎨✨
