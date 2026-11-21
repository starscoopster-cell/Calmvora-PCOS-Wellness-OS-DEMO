# Calmvora PCOS Wellness OS — Public Interactive Demo

Yeh production app ka **standalone static demo** hai. Isko public host par deploy karna hai. Google Apps Script deployment ya paid license code ko upload **nahi** karna.

## Demo mein kya hota hai

- Buyer bina Gmail, purchase ya license key ke dashboard explore kar sakta hai.
- Daily Journal, Cycle History, Symptom Tracker, Meal Planner, Routines, Medicines, Care Library, Charts, Reports preview, View/Edit/Duplicate/Archive waghera interactive hain.
- Pehle se **fictional sample records** dikhte hain. User ki nayi/edited entries sirf current tab ki JavaScript memory mein rehti hain.
- Browser refresh ya tab close se user ki changes ghaib hoti hain; fictional original sample data phir aa jata hai.
- Browser ke `localStorage`, `sessionStorage`, `IndexedDB`, cookies, Apps Script, Google Sheets, ya Gumroad API ke zariye **koi record store nahi hota**.
- Public demo mein import/export/download/print functions intentionally disabled hain. Licensed product ka report/export feature alag hai.
- UI par clear warning: please do not enter real medical information.

## Configure full product link

1. `config.js` kholo.
2. `window.CM_PURCHASE_URL = '';` mein apna **verified Gumroad product purchase page ka HTTPS URL** paste karo.
3. Link set na ho to button sirf information message show karta hai. Is ZIP mein koi invented Gumroad link nahi hai.

## 1 minute hosting

**Netlify (drag-and-drop)**
1. Is ZIP ko extract karo.
2. Pure folder `Calmvora_Public_Demo_Refresh_Reset` ko Netlify Drop par drag/drop karo.
3. Deploy ki public URL ko Gumroad page ke “Try Live Demo” button mein use karo.

**GitHub Pages**
1. New public repository banao.
2. Is folder ke content ko repository root mein upload karo (`index.html` root mein hona chahiye).
3. Repository Settings > Pages mein deploy source set karo.

**Cloudflare Pages**
1. Static Pages project banao, upload folder contents; build command required nahi.

**Local preview**
- `index.html` double-click se bhi kaam karna chahiye.
- Better: is folder mein `python -m http.server 8000` chalao aur `http://localhost:8000` open karo.

## Test checklist

1. Site open ho aur banner “LIVE INTERACTIVE PREVIEW” dikhaye.
2. New record add karo, View popup se verify karo.
3. Browser reload karo, nayi entry disappear honi chahiye.
4. Original fictional examples same/renewed hon.
5. “Reset demo” test karo.
6. Desktop aur mobile layouts check karo.
7. Browser DevTools > Application > Local storage/Session storage mein Calmvora ka data na ho.
8. Browser Network check karo: personal data kisi form endpoint par send na ho; sirf static files/fonts/optional external source links request hon.

## Security and claims

- Browser tab ki memory temporary hoti hai. User apna tab khula rakhe to data tab close/refresh tak rehta hai.
- Static hosting providers requests ka standard access logging kar sakte hain. Application **entered health data transmit nahi karti**.
- Google Fonts fetch hota hai for typography, lekin entered content nahi bheja jata. Strict no-external-assets chahiye to font CSS `@import` hata kar system fonts use karo.
- Yeh demo educational self-tracking tool hai, medical advice nahi.
- ZIP mein private Gmail/license/API token nahi hain; yahan production Apps Script backend nahi hai.

## Project files

- `index.html`: static HTML
- `styles.css`: branding/design
- `config.js`: sirf public checkout URL
- `schemas.js`: modules/field definitions
- `demo-backend.js`: ephemeral in-memory sample data CRUD
- `app.js`: interactive frontend
- `assets/`: official brand assets
- `_headers`: static host security + caching guidance (Netlify/Cloudflare support; GitHub Pages ignores this file)

## NEW: Guided Walkthrough (24 Feature Guides)

- Har page par **Guide me step by step** button.
- Sidebar mein **Guided Tour** hub: 24 feature-specific guides.
- Feature choose karne ke baad numbered guidance, **Start guided practice**, interactive **Next / Back**.
- Entry modules ke coach mein **Open practice form**; form use karte waqt coach minimized hota hai, **Continue guide** se resume karo.
- Demo data aur guide ki progress browser refresh par reset hoti hai.
- Is feature mein koi login, API ya saved progress nahi hai.

Full guide: `README_GUIDED_DEMO_ROMAN_URDU.md`.
