<a id="readme-top"></a>

<!-- BADGES -->
[![GitHub Stars](https://img.shields.io/github/stars/iprashanthvanam/prashanth-portfolio?style=for-the-badge&color=f59e0b)](https://github.com/iprashanthvanam/prashanth-portfolio/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/iprashanthvanam/prashanth-portfolio?style=for-the-badge&color=3b82f6)](https://github.com/iprashanthvanam/prashanth-portfolio/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/iprashanthvanam/prashanth-portfolio?style=for-the-badge&color=ef4444)](https://github.com/iprashanthvanam/prashanth-portfolio/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://prashanth-portfolio-phi.vercel.app/)

---

<div align="center">

# P.B.Sairamreddy — Developer Portfolio
### Personal Portfolio Website | React 19 + Vite 7 + IDE-Inspired Dark UI

*A blazing-fast, data-driven personal portfolio built with React 19 and Vite — featuring a VS Code Dark+ inspired design system, animated terminal hero, scroll-reveal animations, and a live Web3Forms contact form.*

<br/>

[![Live Portfolio](https://img.shields.io/badge/🌐%20Live%20Portfolio-Visit%20Now-46E3B7?style=for-the-badge)](https://prashanth-portfolio-phi.vercel.app/)
[![Download CV](https://img.shields.io/badge/📄%20Download%20CV-Resume%20PDF-f59e0b?style=for-the-badge)](https://prashanth-portfolio-phi.vercel.app/VANAM%20PRASHANTH%20SDE.pdf)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/iprashanthvanam/)

<br/>

<!-- HERO SCREENSHOT -->
<img src="images/hero section.png" alt="Portfolio Hero Section" width="900"/>

> **Sairamreddy-Portfolio** — IDE-inspired dark aesthetic with animated terminal, scroll-reveal sections, and a data-driven architecture

</div>

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary>📑 Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#sections--features">Sections & Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#design-system">Design System</a></li>
    <li><a href="#data-driven-architecture">Data-Driven Architecture</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#customization-guide">Customization Guide</a></li>
    <li><a href="#deployment-vercel">Deployment (Vercel)</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

---

## About The Project

Most portfolio templates are either bloated with heavy animation libraries, locked into generic designs, or require you to hard-code content directly into components — making updates a chore.

This portfolio is built differently. It uses a **data-driven architecture** where all content (projects, skills, education, experience) lives in dedicated JavaScript data files. Updating the portfolio means editing a single object in a `.js` file — no touching JSX, no hunting through component trees.

The design is inspired by **VS Code Dark+** — the interface developers stare at every day — with a deep `#0b0e14` background, GitHub-blue accents, JetBrains Mono for code elements, and Syne for headings. The result feels like a developer tool, not a generic website template.

**Why this portfolio stands out:**

- ❌ **Generic portfolios:** Heavy libraries, bloated CSS, hard-coded content in JSX
- ✅ **This portfolio:** Data files for all content, pure CSS animations via Intersection Observer, Vite for sub-second builds
- 🎯 **Result:** Lighthouse-optimised, fully responsive, zero-dependency animation system

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Screenshots

A complete visual walkthrough of every section in the portfolio.

---

### 🚀 Hero Section

<div align="center">
  <img src="images/hero section.png" alt="Hero Section" width="860"/>
  <br/><br/>
  <sub><b>Hero section.</b> Profile photo, name, role tags, animated terminal box that types out identity lines (<code>whoami</code>, <code>status</code>, <code>location</code>) one by one. Download CV button + Contact Me CTA + social links (LinkedIn, GitHub, LeetCode).</sub>
</div>

---

### 🎓 Education

<div align="center">
  <img src="images/education.png" alt="Education Section" width="860"/>
  <br/><br/>
  <sub><b>Education timeline.</b> Vertical card timeline showing B-Tech (TKREC, 2023–2026), Diploma (Government Model Residential Polytechnic, 2016–2019), and Secondary Education — each with a graduation cap icon, year badge, degree title, and institution name. Scroll-reveal animation on entry.</sub>
</div>

---

### 🛠️ Skills

<div align="center">
  <img src="images/skills.png" alt="Skills Section" width="860"/>
  <br/><br/>
  <sub><b>Skills grid.</b> 18 technologies displayed as interactive tag pills — Figma, React, Bootstrap, HTML5, CSS, Tailwind CSS, JavaScript, Java, Python, MySQL, PostgreSQL, MongoDB, Flask, Django, Git, AWS, MS Office. Scroll-triggered reveal animation on section entry.</sub>
</div>

---

### 💼 Experience

<div align="center">
  <img src="images/experience.png" alt="Experience Section" width="860"/>
  <br/><br/>
  <sub><b>Experience timeline.</b> Card timeline showing the Testing Intern role at ETDC — Electronic Testing and Development Centre (STQC Lab, NABL accredited), November 2018 – May 2019. Data sourced from <code>experience.js</code>.</sub>
</div>

---

### 🚀 Projects

<div align="center">
  <img src="images/projects.png" alt="Projects Section" width="860"/>
  <br/><br/>
  <sub><b>Projects showcase.</b> Three project cards — Face Recognition System and Plagiarism Analysis Application — each with a project image, description, tech stack tags, and dual action buttons (GitHub repo link + Live Demo link). Data sourced from <code>projects.js</code>.</sub>
</div>

---

### 🏆 Achievements

<div align="center">
  <img src="images/achievements.png" alt="Achievements Section" width="860"/>
  <br/><br/>
  <sub><b>Achievements & certifications. Four certification cards — Introduction to Generative AI Studio by Google Cloud / Simplilearn (September 30, 2025), Edunet - SkillsBuild Orientation by IBM SkillsBuild (October 29, 2025), Programming In Java (Elite) by NPTEL - IIT Kharagpur (Jul-Oct 2025), and Salesforce Certified Agentforce Specialist by Salesforce (December 26, 2025) — each with org logo, date, category badge, and a Verify external link.</sub>
</div>

---

### 📞 Contact

<div align="center">
  <img src="images/contact page.png" alt="Contact Section" width="860"/>
  <br/><br/>
  <sub><b>Contact section.</b> Left side: floating-label contact form (Name, Email, Message) integrated with Web3Forms API — real messages land directly in the inbox. Right side: contact details (email, phone, location) and social links row (GitHub, LinkedIn, LeetCode). Footer: "Made with ❤️ by V Prashanth".</sub>
</div>

---

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Sections & Features

### 🚀 Hero
- Profile photo with circular border
- Role tags: `Full Stack · React · NodeJS · FastAPI · Java · SpringBoot`
- **Animated terminal box** — types out `whoami`, `status`, `location` lines sequentially using `useState` + `useEffect` timers (no external library)
- Blinking cursor animation while typing
- **Download CV** button — triggers `<a download>` for `VANAM PRASHANTH SDE.pdf` from the public folder
- **Contact Me** button — smooth scrolls to the contact section
- Social icon links — LinkedIn, GitHub, LeetCode (custom SVG icons with orange accent)

### 🎓 Education
- Vertical timeline with card layout
- Data-driven from `src/data/education.js`
- Each card: graduation cap icon + year badge + degree + institution
- Scroll-reveal animation via `useScrollAnimation` hook

### 🛠️ Skills
- 18-skill pill grid: Figma, React, Bootstrap, HTML, Java, Python, HTML5, CSS, Tailwind CSS, JavaScript, MySQL, PostgreSQL, Git, AWS, MS Office, MongoDB, Flask, Django
- Data-driven from `src/data/skills.js`
- Hover lift effect on each skill pill

### 💼 Experience
- Timeline card for internship at ETDC (Electronic Testing and Development Centre — STQC Lab, NABL accredited), Nov 2018 – May 2019, Testing Intern role
- Data-driven from `src/data/experience.js`

### 🚀 Projects
- 3 project cards with image, description, tech stack tags, GitHub and Live Demo buttons
- Data-driven from `src/data/projects.js`
- Projects: Face Recognition System, The Pet Portal, Plagiarism Analysis Application

### 🏆 Achievements
- 3 certification cards with org logo, date, category, and verify link
- ServiceNow System Administrator · Oracle Data Platform 2025 · Oracle Cloud Infrastructure 2025

### 📞 Contact
- **Web3Forms API integration** — real email delivery, no backend needed
- Floating-label input animations (CSS-only, no JS)
- Contact info panel: email, phone (+91 7036142499), location (LB Nagar, Hyderabad)
- Social links: GitHub, LinkedIn, LeetCode

### 🔧 UX Utilities
- **Sticky Navbar** — scrolls with page, hamburger menu on mobile, active-section highlighting
- **Scroll-to-Top button** — fixed bottom-right, smooth scroll with `FaArrowUp` icon
- **Intersection Observer scroll animations** — sections fade-in from below as they enter the viewport, zero JavaScript animation libraries

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **UI Framework** | React | 19.2.0 | Component-based SPA |
| **Build Tool** | Vite | 7.2.4 | Sub-second HMR, optimised production build |
| **Styling** | Pure CSS3 | — | Custom design system, no CSS frameworks |
| **Icons** | react-icons | 5.0.0 | FontAwesome icons via React components |
| **Contact API** | Web3Forms | — | Email delivery without a backend |
| **Fonts** | Google Fonts | — | JetBrains Mono, Syne, Inter |
| **Animations** | Intersection Observer API | — | Native scroll-reveal, no library |
| **Deployment** | Vercel | — | Zero-config CI/CD from GitHub |
| **Linting** | ESLint | 9.39.1 | With react-hooks + react-refresh plugins |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Design System

The entire portfolio uses a **VS Code Dark+** inspired design system defined as CSS custom properties in `src/index.css`:

```css
:root {
  /* Core Palette */
  --bg-primary:    #0b0e14;   /* deepest background — near-black */
  --bg-secondary:  #0f1218;   /* section backgrounds */
  --bg-card:       #161b24;   /* card surfaces */
  --bg-card-hover: #1c2233;   /* card hover state */

  /* Text */
  --text-primary:   #e1e4e8;  /* GitHub-style light text */
  --text-secondary: #8b949e;  /* muted text */
  --text-muted:     #484f58;  /* very muted */

  /* Accents */
  --accent:        #58a6ff;   /* GitHub-style blue — primary CTA */
  --accent-green:  #3fb950;   /* success / active states */
  --accent-cyan:   #79c0ff;   /* hover accent */
  --accent-orange: #e3b341;   /* dates / warnings */
  --accent-pink:   #f778ba;   /* subtle highlights */

  /* Borders */
  --border:        #21262d;   /* card borders */
  --border-active: #388bfd;   /* active / focus borders */

  /* Fonts */
  --font-heading: 'Syne', sans-serif;        /* bold headings */
  --font-body:    'Inter', sans-serif;       /* body text */
  --font-mono:    'JetBrains Mono', mono;    /* terminal, code, labels */
}
```

**Background texture:** A subtle `radial-gradient` dot grid (`28px × 28px`) overlaid on the body via `::before` + a restrained blue ambient glow at the top-left corner via `::after` — giving depth without distraction.

**Scrollbar:** Custom thin 6px scrollbar styled to match the dark palette, with accent-coloured thumb on hover.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Data-Driven Architecture

All portfolio content lives in plain JavaScript data files under `src/data/`. To update any section, edit the relevant data file — **never touch the JSX components**.

### `src/data/projects.js`
```js
export const projects = [
  {
    title: "Face Recognition System",
    image: faceImg,
    desc: "...",
    tech: ["Flask", "OpenCV", "TensorFlow"],
    github: "https://github.com/iprashanthvanam/face_recognition_system",
    demo: "https://iprashanthvanam.pythonanywhere.com/"
  },
  // Add more projects here
];
```

### `src/data/skills.js`
```js
export const skills = [
  "React", "Python", "Django", "Flask",
  "JavaScript", "Java", "MySQL", "MongoDB",
  // Add / remove skills here
];
```

### `src/data/education.js`
```js
export const education = [
  { year: "2023 - 2026", title: "B-Tech", place: "Teegala Krishna Reddy Engineering College" },
  // Add more entries here
];
```

### `src/data/experience.js`
```js
export const experience = [
  { period: "06/2022 – 11/2022", role: "Intern", company: "RKG Technologies" },
  // Add more roles here
];
```

### Achievements — `src/sections/Achievements.jsx`
Achievements are defined inline as an array. To add a new certification, append an object to `achievementsData` with `title`, `org`, `date`, `category`, `image`, `logoBg`, and `verify` fields.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Project Structure

```
Sairam-portfolio/
│
├── images/                               # 📸 Portfolio screenshots (README images)
│   ├── hero section.png
│   ├── education.png
│   ├── skills.png
│   ├── experience.png
│   ├── projects.png
│   ├── achievements.png
│   └── contact page.png
│
├── public/
│   ├── github.svg                        # Custom GitHub icon (orange accent)
│   ├── linkedin.svg                      # Custom LinkedIn icon
│   ├── leetcode.svg                      # Custom LeetCode icon
│   ├── vite.svg
│   └── Sairamreddy_Resume.pdf           # Downloadable CV
│
├── src/
│   ├── assets/
│   │   ├── face.png                      # Face Recognition project image
│   │   ├── plag.png                      # Plagiarism App project image
│   │   ├── profile.jpeg                  # Hero profile photo        
│   │
│   ├── components/
│   │   ├── Navbar.jsx                    # Sticky navbar with hamburger + links
│   │   └── ScrollTop.jsx                 # Fixed scroll-to-top button
│   │
│   ├── data/                             # ← EDIT THESE TO UPDATE CONTENT
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── education.js
│   │   └── experience.js
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.js         # Intersection Observer scroll-reveal hook
│   │
│   ├── sections/
│   │   ├── Hero.jsx                      # Animated terminal hero + profile + CTAs
│   │   ├── Education.jsx                 # Timeline card layout
│   │   ├── Skills.jsx                    # Tag pill grid
│   │   ├── Experience.jsx                # Experience timeline
│   │   ├── Projects.jsx                  # Project cards
│   │   ├── Achievements.jsx              # Certification cards
│   │   └── Contact.jsx                   # Web3Forms form + info panel
│   │
│   ├── App.jsx                           # Root — assembles all sections
│   ├── App.css                           # Section-level styles
│   ├── index.css                         # Design system CSS variables
│   └── main.jsx                          # React 19 entry point
│
├── index.html                            # HTML shell — Google Fonts, meta tags
├── vite.config.js
├── vercel.json                           # { "outputDirectory": "dist" }
├── package.json
├── eslint.config.js
└── README.markdown
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/sairam0512/Sairam-Portfolio.git
cd prashanth-portfolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

Open your browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Vite optimises, tree-shakes, and minifies automatically.

### Preview Production Build Locally

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Customization Guide

### Update Personal Info

Edit `src/sections/Hero.jsx` — update the terminal lines, name, and role text:

```jsx
const TERMINAL_LINES = [
  { cmd: "whoami",   output: "Your Name — Your Role" },
  { cmd: "status",   output: "Open to opportunities" },
  { cmd: "location", output: "Your City, Country" },
];
```

### Add a New Project

Open `src/data/projects.js` and add an object to the array:

```js
{
  title: "My New Project",
  image: myProjectImg,     // import at top of file
  desc: "Short description",
  tech: ["React", "FastAPI"],
  github: "https://github.com/username/repo",
  demo: "https://your-live-demo.com"
}
```

### Add a New Skill

Open `src/data/skills.js` and add the skill name to the array:

```js
export const skills = [
  // existing skills...
  "Next.js",   // ← just add here
];
```

### Replace the CV

Replace `public/Sairamreddy_Resume.docs` with your updated DOCS, then update the reference in `src/sections/Hero.jsx`:

```jsx
const cvUrl = "/YOUR_CV_FILENAME.pdf";
link.download = "YOUR_CV_FILENAME.pdf";
```

### Update Contact Form

Replace the Web3Forms access key in `src/sections/Contact.jsx`:

```jsx
formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
```

Get a free key at [web3forms.com](https://web3forms.com) — no backend required.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Deployment (Vercel)

### Deploy in 3 Steps

**1. Push to GitHub**

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

**2. Import on Vercel**

- Go to [vercel.com](https://vercel.com) → **New Project**
- Import `sairam0512/Sairam-portfolio`
- Framework: **Vite** (auto-detected)
- Build Command: `npm run build`
- Output Directory: `dist`

**3. Deploy**

Click **Deploy** — every push to `main` triggers an automatic redeployment.

> **`vercel.json`** is already configured:
> ```json
> { "outputDirectory": "dist" }
> ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Roadmap

- [x] Hero section with animated terminal
- [x] Education timeline
- [x] Skills tag grid (18 technologies)
- [x] Experience timeline
- [x] Projects showcase with GitHub + Demo links
- [x] Achievements / certifications section
- [x] Web3Forms contact form with live email delivery
- [x] Scroll-reveal animations (Intersection Observer)
- [x] Responsive navbar with hamburger menu
- [x] Scroll-to-top button
- [x] VS Code Dark+ design system with CSS variables
- [x] CV download from public folder
- [x] Vercel deployment
- [ ] Dark / Light mode toggle
- [ ] Blog section — writeups and technical articles
- [ ] Project detail modal — expanded description, multiple screenshots
- [ ] LeetCode stats widget — live problem count and streak
- [ ] Visitor counter / analytics integration
- [ ] PWA support — offline-capable installable portfolio
- [ ] SEO meta tags + Open Graph for social sharing previews

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

You are free to use this portfolio as a template — just swap out the personal content (name, projects, CV, photos) and deploy.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Contact

<div align="center">

### P.Sairam

<p>
  <a href="mailto:psairam1022@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-psairam1022@gmail.com%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  &nbsp;
  <a href="https://www.linkedin.com/in/pb-sairam-reddy-6426b536a/">
    <img src="https://img.shields.io/badge/LinkedIn-pb-sairam-reddy-6426b536a/-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  &nbsp;
  <a href="https://github.com/sairam0512">
    <img src="https://img.shields.io/badge/GitHub-sairam0512-181717?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  &nbsp;
  <a href="https://leetcode.com/u/Sairam_2210/">
    <img src="https://img.shields.io/badge/LeetCode-Sairam_2210/-FFA116?style=for-the-badge&logo=leetcode&logoColor=black"/>
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/📍%20Location-Hyderabad%2C%20India-f59e0b?style=for-the-badge"/>
  &nbsp;
  <img src="https://img.shields.io/badge/📞%20Mobile-%2B91%2070361%2042499-25D366?style=for-the-badge"/>
</p>

</div>

<br/>

| | |
|---|---|
| 📧 **Email** | [psairam1022@gmail.com](mailto:prashanthvanamnetha@gmail.com) |
| 💼 **LinkedIn** | [www.linkedin.com/in/pb-sairam-reddy-6426b536a/](https://www.linkedin.com/in/pb-sairam-reddy-6426b536a/) |
| 🐙 **GitHub** | [github.com/sairam0512](https://github.com/sairam0512) |
| 💡 **LeetCode** | [leetcode.com/u/Sairam_2210/](https://leetcode.com/u/Sairam_2210/) |
| 📍 **Location** | TKR Clg ,LB Nagar, Hyderabad, Telangana, India |
| 📞 **Mobile** | +91 9701278324 |

<br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<div align="center">

Built with ❤️ by P.Sairam

⭐ Star this repo if you found it useful as a portfolio template!

</div>
