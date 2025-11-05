Vorschlag: Projektstruktur für deine Blaupause

fotogram-blueprint/
│
├── index.html               → Startseite / Demo
├── about.html               → Beispiel-Unterseite
├── gallery.html             → Beispiel-Galerie
│
├── css/
│   ├── base.css             → Grundstil: Farben, Typografie, Reset
│   ├── layout.css           → Header, Footer, Grid-System
│   ├── components.css       → Buttons, Karten, modale Fenster
│   ├── accessibility.css    → Fokuszustände, Screenreader-Texte
│   └── responsive.css       → Media Queries
│
├── js/
│   ├── main.js              → Navigation, globale Logik
│   ├── gallery.js           → Beispiel für interaktive Galerie
│   ├── accessibility.js     → Fokusfallen, ARIA-Updates
│   └── utils.js             → kleine Hilfsfunktionen
│
├── images/
│   ├── demo/                → Beispielbilder
│
└── docs/
    ├── WCAG-Checkliste.md   → deine Notizen + To-Do-Checkliste
    ├── ARIA-Guidelines.md   → Beispiele + Erklärungen
    ├── Projektplan.md       → wie du deine Projekte künftig strukturierst
    └── Lernnotizen.md       → was du bei jedem Projekt mitnehmen willst
