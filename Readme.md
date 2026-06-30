# StoryAI (YBAI) — AI Storytelling Frontend

A polished, fully static front-end UI for an AI-powered storytelling application. Users describe a story idea, pick a category, and StoryAI presents a generated story as a sequence of illustrated scenes — complete with history, a prompt library, profile management, and PDF export, all built with vanilla HTML, CSS, and JavaScript.

> This is a **UI/UX prototype** — all story data, history, and prompts are mocked in JavaScript and persisted to `localStorage`. There is no backend or real AI generation wired in yet.

## ✨ Features

**Core Story Experience**
- Google-style search bar to describe a story idea, with category selection (e.g. Fantasy Quest, Sci-Fi Mystery, Digital Adventure)
- Voice input support via the browser's speech recognition API
- Dynamically rendered story scenes with alternating image/text layout
- "No story found" fallback state with an illustrative animation
- Download any story as a PDF (client-side, via jsPDF + html2canvas)

**Navigation & Layout**
- Fixed header with logo, an "apps" grid (Story Progress / History / Prompt Library), and a profile dropdown
- Breadcrumb navigation on the story page
- Slide-in side panels for Story History (left) and Prompt Library (right)
- Static pages for Privacy Policy, Terms of Service, and Contact (with a feedback form modal)
- Fully responsive layout for desktop, tablet, and mobile

**Productivity Tools**
- **Story Progress modal** — visualizes generation stages (Idea → Story → Plot → Cast)
- **Story History** — searchable, grouped by Today / Yesterday / Older, with a "Delete browsing data"-style modal (Basic/Advanced tabs, time range, data type checkboxes)
- **Prompt Library** — create, edit, delete, copy, and reuse prompts, split into "My Personal Library" and recommended prompts

**Account & Profile**
- Profile page to view/edit display name, change profile picture, and view email
- Simulated password change flow with OTP verification
- Sign-out confirmation popup
- Toast-style confirmation popups for key actions (feedback sent, PDF downloaded, history cleared, profile updated, password changed)

**UX Details**
- Smooth modal/panel/dropdown transitions with blurred backdrops
- Custom focus styles and ARIA attributes for accessibility
- Page loader animation during transitions

## 🛠️ Tech Stack

- **HTML5 / CSS3** — no framework, hand-rolled responsive layout
- **Vanilla JavaScript** — DOM manipulation, SPA-like page switching, no build step
- **Google Fonts** — Poppins
- **Font Awesome** — icons
- **jsPDF** + **html2canvas** — client-side PDF generation
- **localStorage** — persists story history, prompts, and profile data across sessions

## 📁 Project Structure

```
.
├── index.html              # Main app shell — Idea Page, header, panels, modals
├── story.html               # Story display page
├── profile.html              # User profile page
├── contact_us.html            # Contact page with feedback modal
├── privacy_policy.html         # Static privacy policy page
├── terms_of_service.html        # Static terms of service page
└── assist/
    ├── css/
    │   └── storyai.css         # All application styling
    ├── js/
    │   ├── storyai.js           # App logic: story data, routing, modals, history, prompts, profile
    │   ├── jspdf.js              # PDF generation library
    │   └── html2canvas.min.js     # DOM-to-canvas library (used for PDF export)
    └── images/                    # Logos, illustrations, and animated GIFs
```

## 🚀 Getting Started

This is a static site with **no build step or dependencies to install** — but it must be served over HTTP (not opened directly as a `file://` URL), since the PDF export and some browser APIs require a server context.

### Option 1: VS Code Live Server
1. Open the project folder in VS Code.
2. Install the "Live Server" extension.
3. Right-click `index.html` → **Open with Live Server**.

### Option 2: Python's built-in server
```bash
# From the project root
python3 -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 3: Node's `serve`
```bash
npx serve .
```

## 🔍 How to Search for a Story

1. **Type an idea** — On the Idea Page, choose a category from the dropdown, type a story idea into the search bar, and submit (press Enter or click the paper plane icon).
2. **Voice input** — Click the microphone icon, speak your idea, and submit once it's transcribed.
3. **From the Prompt Library** — Open the apps grid → Prompt Library, pick a saved or recommended prompt to auto-fill the search bar.
4. **From History** — Open the apps grid → History, and click a past search to revisit that story.

Try searching for: `"The Lost Chronicle of Eldoria"` under the **Fantasy Quest** category to see a full sample story.

## 📌 Notes & Limitations

- Story content (`assist/js/storyai.js`) is a hardcoded dataset — there's no real AI generation or backend API connected yet.
- Authentication, profile data, history, and prompts are all simulated using `localStorage`; there's no real user account system.
- PDF downloads require the page to be served over HTTP — opening the HTML files directly will not work correctly.

## 🗺️ Roadmap Ideas

- Connect to a real AI story-generation backend/API
- Replace the mocked `localStorage` data layer with real user authentication and persistence
- Add real speech-to-text and image-generation integration for scenes
- Componentize the UI (e.g. migrate to React/Vue) for easier maintenance

## 📄 License

No license has been specified yet. Add one (e.g. MIT) before publishing or distributing this project.
