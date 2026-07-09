# Portfolio site — setup guide

This is a plain HTML/CSS/JS site (no build step, no npm install). That means you can put it
on GitHub Pages by just uploading the files through GitHub's website — no command line required.

## What's in here

- `index.html` — the whole site (one page, organized by domain — AI Agents, Identity & Access,
  Billing & Packaging, API Docs, Arts & Culture)
- `styles.css` — all the design/layout
- `script.js` — a small scroll animation, nothing else
- `assets/` — put your resume PDF here (see the placeholder file inside)

## 1. Create the GitHub repo

1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Click the **+** in the top right → **New repository**.
3. Name it either:
   - `amoreen-portfolio` (site will live at `https://yourusername.github.io/amoreen-portfolio/`), or
   - `yourusername.github.io` (site will live at `https://yourusername.github.io/` — cleaner
     URL, but the repo name has to match your GitHub username exactly)
4. Set it to **Public** (GitHub Pages on the free tier requires public repos).
5. Click **Create repository**. Don't add a README/gitignore — you already have these files.

## 2. Upload the files

No git or terminal needed:

1. On your new repo's page, click **uploading an existing file** (or "Add file" → "Upload files").
2. Drag in `index.html`, `styles.css`, `script.js`, and `README.md`.
3. Create the `assets` folder by uploading a file with the path `assets/amoreen-armetta-resume.pdf`
   — GitHub will create the folder automatically when you name the upload that way, or you can
   upload the whole `assets` folder if your browser supports drag-and-drop folders.
4. Scroll down, add a commit message like "Initial site," and click **Commit changes**.

## 3. Turn on GitHub Pages

1. In your repo, go to **Settings** → **Pages** (left sidebar, under "Code and automation").
2. Under **Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**. Click **Save**.
4. Wait a minute or two, then refresh — GitHub will show your live URL at the top of that page.

## 4. Before you share it

- [ ] Add your actual resume PDF to `assets/amoreen-armetta-resume.pdf`
- [ ] Double-check all the external links (ClickUp Help Center articles) still work
- [ ] Read the whole page once on your phone — the design is responsive, but always worth a check
- [ ] Consider adding a custom domain later if you want (Settings → Pages → Custom domain)

## Editing later

Every section in `index.html` is commented (`<!-- ============ AI AGENTS ============ -->` etc.)
so you can find and edit each domain block without reading the whole file. To add a new work
sample: copy an existing `<article class="card">...</article>` block and edit the text and link.

If you want to keep building this out — more case studies, a dedicated page per project, etc. —
Claude Code can work directly in this repo with you and handle the git commands for you.
