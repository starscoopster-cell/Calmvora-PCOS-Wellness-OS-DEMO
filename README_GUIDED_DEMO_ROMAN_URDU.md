# Calmvora Guided Public Demo — Start Here (Roman Urdu)

Yeh wohi public demo hai lekin ab **har sidebar feature ki apni step-by-step guided walkthrough** hai.

## Buyer ka flow
1. Public demo link open karo: **koi sign-in, license ya purchase nahi**.
2. Dashboard par `Guide me step by step` click karo, ya sidebar > `Guided Tour` open karo.
3. Feature select karo (Daily Planner, Symptoms, Meal Planner, Medicines, etc.).
4. Har feature ke detailed numbered steps read karo, phir `Start guided practice` click karo.
5. Coach box me Next/Back aur `Open practice form` (entry modules) actions available hain.
6. Fictional data add karo, Save aur Eye/View popup dekho.
7. Browser refresh par added/edited data aur walkthrough progress reset hoti hai; original fictional entries reappear hoti hain.

## Source files
- `index.html` — demo entry point
- `app.js` — guided help content, interactive coach, all forms
- `styles.css` — responsive guidance UI
- `schemas.js`, `demo-backend.js` — **unchanged** in-memory fictional records
- `config.js` — optional verified public Gumroad URL only
- `Calmvora_Guided_One_File_Demo.html` — standalone HTML version

## Host on Netlify
Extract ZIP; drag entire `Calmvora_Public_Demo_Guided_Tour_Refresh_Reset` folder to Netlify Drop. Make sure `index.html` stays in that folder root.

## Privacy
The guide is for user education. It is not a medical care plan. No browser or server health-record persistence, and no Google APIs are used. Visitor-entered data stays in JS memory only, reset after refresh/tab close. Do not enter real health information. Printed/exported files are disabled.

## Important
Paid production source files are NOT altered by this package. No licenses/API keys should be uploaded to a public host.
