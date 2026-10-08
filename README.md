# Aakash Singh — Full Stack Developer Portfolio

A production-grade, responsive, and performance-optimized personal developer portfolio website engineered for **Aakash Singh** (Full Stack Developer & MCA Student).

Built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Features

- **Domain-Focused & Authentic**: Tailored specifically to Aakash Singh's real engineering background, freelance client engagements, and academic trajectory. Zero fabricated statistics or fake metrics.
- **Dark & Light Mode**: Seamless theme switching with system preference detection and `localStorage` persistence.
- **Sophisticated Monogram Avatar**: A custom circular "A" monogram with subtle orbital rings and cyber-industrial accents—no stock photos required.
- **Featured Project Showcase**: Dedicated showcase for **NEW ERA Engineering Solutions** (commercial MERN booking platform) with interactive application architecture previews.
- **Microservices & Systems Portfolio**: Dedicated breakdown of the **Authentication API** (JWT, OTP, refresh token rotation) and **Railway Management System** (Python OOP, in-development status).
- **Interactive Modals**: Detailed specification drawers for all projects and certification credentials.
- **Direct Contact & Copy Utilities**: One-click email and phone copying with feedback toasts, plus a client-side contact inquiry composer.
- **Accessible & Performance-Ready**: Follows WCAG contrast, keyboard navigation, and `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Frontend Library**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 📁 Project Architecture

```
├── index.html                   # HTML entry point with SEO, JSON-LD schema & favicon
├── metadata.json                # Project identity metadata
├── src/
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces for projects, skills, education
│   ├── data/
│   │   └── portfolioData.ts     # Centralized, easily editable portfolio content
│   ├── context/
│   │   └── ThemeContext.tsx     # Dark/light theme provider & state
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky header with active scroll indicator & mobile drawer
│   │   ├── Footer.tsx           # Clean footer with quick links & copyright
│   │   ├── MonogramAvatar.tsx   # Custom circular "A" monogram vector component
│   │   ├── ProjectModal.tsx     # Deep-dive project specification modal
│   │   └── CertificateModal.tsx # Digital certificate credential viewer
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero banner with monogram & quick CTAs
│   │   ├── AboutSection.tsx     # Professional bio & core highlights
│   │   ├── SkillsSection.tsx    # Categorized skill badges with category filters
│   │   ├── FeaturedProjectSection.tsx  # Highlighted NEW ERA project showcase
│   │   ├── OtherProjectsSection.tsx    # Auth API & Railway Management cards
│   │   ├── ExperienceSection.tsx       # Freelance client timeline
│   │   ├── EducationSection.tsx        # Academic history (MCA, BCA, School)
│   │   ├── CertificationsSection.tsx   # be10x workshop credential
│   │   ├── CurrentlyLearningSection.tsx# Active CS study roadmap
│   │   └── ContactSection.tsx   # Recruiter contact cards & inquiry form
│   ├── App.tsx                  # Root application component
│   ├── index.css                # Tailwind import, fonts & custom scrollbars
│   └── main.tsx                 # React DOM mount point
```

---

## ⚙️ How to Update Portfolio Data

All personal information, project details, skills, and links are kept in a single location:

👉 **`src/data/portfolioData.ts`**

To add your GitHub repository links, live demos, or update your contact details, simply edit this file:

```typescript
export const projects: Project[] = [
  {
    id: 'new-era-engineering-solutions',
    githubUrl: 'https://github.com/your-username/your-repo', // Add your repo here
    liveUrl: 'https://your-live-demo.com',                   // Add your live site here
    // ...
  }
];
```

---

## 🚀 Deployment Guide

### Deploying to Vercel

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 📄 License

Created by Aakash Singh. Available under the Apache-2.0 License.
