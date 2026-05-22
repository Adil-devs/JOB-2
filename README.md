# Daily News Portal

A 6-page responsive news website built with HTML, Bootstrap 5, jQuery, and external CSS/JavaScript.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Breaking news ticker, lead news, latest/national/education sections |
| About | `about.html` | Editor speech, policies, admin staff cards |
| Category | `category.html` | Category news cards, ads, pagination |
| Author | `author.html` | Senior & general reporter cards |
| Contact | `contact.html` | Contact info, message form, Google Map |
| Login | `login.html` | Reporter login with confirmation popup |

## Local Server Setup (Laragon)

1. Install [Laragon](https://laragon.org/download/) (or XAMPP/WAMP).
2. Copy the `news-portal` folder to:
   - Laragon: `C:\laragon\www\news-portal`
   - XAMPP: `C:\xampp\htdocs\news-portal`
3. Start Apache in Laragon.
4. Open: `http://localhost/news-portal/` or `http://news-portal.test/` (if Laragon auto virtual host is enabled).

## Open Without Server

Double-click `index.html` or open files directly in a browser. CDN resources (Bootstrap, jQuery) require internet.

## Project Structure

```
news-portal/
├── index.html
├── about.html
├── category.html
├── author.html
├── contact.html
├── login.html
├── css/
│   └── style.css
├── js/
│   ├── main.js      (date/time, news ticker)
│   └── login.js     (login confirmation popup)
└── README.md
```

## Features Checklist

- [x] 6 responsive pages
- [x] Bootstrap 5 framework
- [x] External CSS & JavaScript
- [x] Full-width navigation with hover effects
- [x] jQuery breaking news ticker (3+ sliding items)
- [x] Live date & time display
- [x] Login form confirmation popup
- [x] Internal page linking
- [x] Google Maps embed on contact page

## Design Procedure Notes

Steps 1–4 (computer, schedule, IDE, local server) are environment setup—see Laragon section above.

For assignment step 6 (product pages), see the separate `w` folder on Desktop (`product.html`, `product-detail.html`, etc.).
