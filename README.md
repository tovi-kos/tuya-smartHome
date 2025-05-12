# tuya-smartHome
A server that addresses Toya servers.

# tuya-smartHome architecture

│
├── controllers/
│   └── deviceController.js         # ניהול בקשות למכשירים
│
├── services/
│   └── tuyaService.js              # אינטגרציה עם ה-API של טויה
│
├── utils/
│   └── appError.js                 # טיפול בשגיאות
│
├── node_modules/                   # ספריות מותקנות של npm
│
├── .env                            # קובץ סביבה עם משתנים (כגון מפתחות API)
│
├── package.json                    # קובץ תלותים והגדרות לפרויקט
├── package-lock.json               # מידע על גרסאות התלויות בפרויקט
├── router.js                       # הגדרת המסלולים של השרת
├── server.js                       # קובץ שרת ראשי שמריץ את היישום
├── README.md                       # קובץ תיעוד

