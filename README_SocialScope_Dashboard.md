# 📊 SocialScope — Social Media Analytics Dashboard

> *Track. Analyse. Grow.*

A fully responsive, multi-page social media analytics dashboard built with pure HTML, CSS, and JavaScript + Chart.js. SocialScope gives creators and marketers a clean, interactive interface to monitor followers, engagement, reach, and post performance across Instagram, YouTube, and Twitter — all in one place.

---

## 📸 Preview

```
📊 SocialScope
├── Overview        → KPI cards, bar chart, doughnut chart, top posts preview
├── Platforms       → Per-platform deep-dive with individual line charts
├── Posts           → Full post table with sort & platform filter
├── Growth          → Multi-chart growth analytics page
└── About           → Project info, tech stack, requirements checklist
```

---

## 🚀 Live Demo

Open `index.html` directly in any modern browser — no server or build tools required.

---

## ✨ Features

### 📣 Overview (index.html)
- **8 KPI metric cards** displaying: Total Reach, Total Followers, Total Likes, Engagement Rate, Instagram Followers, YouTube Subscribers, Twitter Followers, Total Shares
- Each card shows a percentage change indicator (▲ positive / ▼ negative)
- **Platform Filter bar** — filter cards by All / Instagram / YouTube / Twitter
- **Period selector** — toggle between Last 7 / 30 / 90 Days
- **Weekly Reach Bar Chart** — stacked grouped bar chart showing all 3 platforms across 7 days (Chart.js)
- **Platform Distribution Doughnut Chart** — follower breakdown by platform (Chart.js)
- **Top Posts Preview Table** — top 3 posts with platform badge, likes, comments, shares, reach
- **↻ Refresh button** — animates KPI numbers with a live counting effect and shows a toast
- **🔴 LIVE badge** — pulsing live indicator in navbar
- Floating animated hero cards (followers, likes, reach)

### 🔍 Platforms (platforms.html)
- Dedicated section for each platform with brand colour accent border:
  - 📸 **Instagram** — 128,400 followers, 4.2% engagement, 980 posts, 450K monthly reach
  - ▶️ **YouTube** — 84,600 subscribers, 6.1% engagement, 142 videos, 2.1M monthly views
  - 🐦 **Twitter / X** — 35,500 followers, 3.4% engagement, 3,200 tweets, 320K monthly reach
- Each platform has 4 KPI stat blocks
- Individual **line chart** showing 4-week reach / views trend per platform (Chart.js)
- **"Visit Profile ↗"** external link button for each platform

### 📋 Posts (posts.html)
- Full table of **10 posts** across all 3 platforms with: Platform badge, Title, Date, Likes, Comments, Shares, Reach, Engagement %
- **Platform filter** — show posts for All / Instagram / YouTube / Twitter only
- **Sort dropdown** — sort table by Likes / Reach / Comments / Shares (descending)
- Filters and sort work together in real time
- Colour-coded platform badges (pink / red / blue)

### 📈 Growth (growth.html)
- **Follower Growth Line Chart** — all 3 platforms over 6 months with fill gradients (Chart.js)
- **Monthly / Weekly toggle** — switches the chart between monthly and weekly data sets
- **Engagement Rate Trend** — line chart showing % engagement over time
- **Monthly Reach Comparison** — grouped bar chart per platform over 6 months
- **Shares & Comments Bar Chart** — combined bar chart for both metrics over 6 months

### 👤 About (about.html)
- Developer profile card with avatar initials, role badge, bio, and social link buttons (GitHub, LinkedIn, Email)
- **Requirements checklist** — all 10 project requirements marked as completed
- **Tech stack** — displayed as a tag grid
- Platform info card with project objective
- Expected outcomes section with icon cards

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic page structure across 5 pages |
| **CSS3** | Custom properties, Grid, Flexbox, keyframe animations |
| **Vanilla JavaScript** | DOM manipulation, filters, live data animation |
| **Chart.js (CDN)** | Bar, Line, and Doughnut charts |
| **Google Fonts** | Syne (headings) + DM Sans (body) |
| **No backend** | Fully static — runs in any browser |

---

## 📁 File Structure

```
dashboard/
├── index.html          # Overview — KPI cards, charts, top posts
├── platforms.html      # Per-platform stats and trend charts
├── posts.html          # Full post performance table
├── growth.html         # Growth analytics multi-chart page
├── about.html          # Developer profile + project info
├── style.css           # All styles (single unified dark-theme file)
└── main.js             # Shared JS — filters, charts, refresh, toast
```

---

## 🎨 Design System

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0b0f1a` | Page background |
| `--bg2` | `#111827` | Secondary background / footer |
| `--bg3` | `#1a2236` | Hover states / table rows |
| `--card` | `#141c2e` | Card backgrounds |
| `--accent` | `#6ee7b7` | Primary accent / active states |
| `--accent2` | `#38bdf8` | Gradient partner / links |
| `--pink` | `#f472b6` | Highlight accent |
| `--muted` | `#94a3b8` | Secondary text |
| `--border` | `rgba(255,255,255,0.07)` | Subtle borders |

### Platform Colours

| Platform | Colour |
|---|---|
| Instagram | `#c13584` |
| YouTube | `#ff0000` |
| Twitter | `#1da1f2` |

### Typography
- **Headings:** Syne — geometric, bold, modern
- **Body:** DM Sans — clean and highly legible on dark backgrounds
- **Brand name:** Gradient text (accent → accent2)

---

## ⚙️ How to Run

```bash
# 1. Unzip the project
unzip BhargaviN_SocialScope_Dashboard.zip

# 2. Open in browser (no server needed)
open dashboard/index.html

# OR with VS Code Live Server:
# Right-click index.html → Open with Live Server
```

> ⚠️ Chart.js is loaded via CDN. An internet connection is required for charts to render.

---

## 📱 Responsive Design

| Breakpoint | Behaviour |
|---|---|
| Desktop (>1100px) | Full grid, side-by-side charts, hero with floating cards |
| Tablet (768–1100px) | Charts stack, KPI grid adjusts columns |
| Mobile (<768px) | Hamburger nav, single-column layout, hero visual hidden |

---

## 🌟 Interactive Elements Summary

| Element | Behaviour |
|---|---|
| Platform filter buttons | Shows / hides KPI cards by platform tag |
| Period selector | Changes period label with toast feedback |
| ↻ Refresh button | Animates all KPI values with counting effect |
| Post table filter | Filters rows by platform in real time |
| Post table sort | Re-sorts all rows by selected metric |
| Monthly/Weekly toggle | Swaps growth chart data and labels live |
| Visit Profile buttons | Open real social platform URLs in new tab |
| Social link buttons | Link to GitHub, LinkedIn, Email |
| Mobile hamburger | Toggles mobile menu open/close |
| Toast notifications | Appear bottom-right for all user actions |

---

## 📊 Chart Summary

| Chart | Type | Library | Location |
|---|---|---|---|
| Weekly Reach by Platform | Grouped Bar | Chart.js | Overview |
| Platform Distribution | Doughnut | Chart.js | Overview |
| Instagram Reach Trend | Line (fill) | Chart.js | Platforms |
| YouTube Views Trend | Line (fill) | Chart.js | Platforms |
| Twitter Reach Trend | Line (fill) | Chart.js | Platforms |
| Follower Growth (All) | Multi-line | Chart.js | Growth |
| Engagement Rate Trend | Line (fill) | Chart.js | Growth |
| Monthly Reach Comparison | Grouped Bar | Chart.js | Growth |
| Shares & Comments | Grouped Bar | Chart.js | Growth |

---

## 📋 Project Requirements Checklist

| Requirement | Status |
|---|---|
| Dashboard use case definition | ✅ Complete |
| Responsive layout design | ✅ Complete |
| Data display using cards and tables | ✅ Complete |
| Basic charts using JavaScript | ✅ Complete |
| Interactive filters or controls | ✅ Complete |
| Real-time UI updates | ✅ Complete |
| Consistent visual hierarchy | ✅ Complete |
| Cross-browser compatibility | ✅ Complete |
| Deployment-ready dashboard | ✅ Complete |
| Project documentation | ✅ Complete |

---

## 📈 Sample Data Overview

### Platform Stats

| Platform | Followers | Engagement | Monthly Reach |
|---|---|---|---|
| Instagram | 128,400 | 4.2% | 450,000 |
| YouTube | 84,600 | 6.1% | 2,100,000 |
| Twitter | 35,500 | 3.4% | 320,000 |
| **Total** | **248,500** | **4.8%** | **3,847,200** |

### Top Post Stats

| Post | Platform | Reach | Likes |
|---|---|---|---|
| Morning routine vlog highlights | Instagram | 180,000 | 24,310 |
| Full tutorial: Building a dashboard | YouTube | 220,000 | 18,900 |
| Thread: 10 CSS tips for beginners | Twitter | 95,000 | 9,400 |

---

## 🔮 Future Improvements

- [ ] Connect to real social media APIs (Instagram Graph API, YouTube Data API)
- [ ] LocalStorage or IndexedDB for data persistence
- [ ] CSV / PDF export for reports
- [ ] Date range picker for custom periods
- [ ] Dark/light theme toggle
- [ ] User authentication and multi-account support
- [ ] Scheduled email digest reports
- [ ] Sentiment analysis on comments

---

## 👤 Author

**Bhargavi N**
Web Development Internship Project — Industry-Oriented Web Dashboard for Data Visualization
Domain: Social Media Analytics

---

## 📄 License

This project is built for educational and portfolio purposes.
© 2026 Bhargavi N. All rights reserved.
