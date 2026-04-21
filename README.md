# Open Source Badge Generator

> Turn any GitHub profile into a shareable **Open Source Contributor** badge in seconds.

🔗 **Live:** [tharvid.in/Open-Source-Badge-Generator](https://tharvid.in/Open-Source-Badge-Generator/)

![Badge preview](images/screenshots/Badge.png)

## Features

- 🎨 **Modern, responsive UI** — looks great on mobile and desktop
- ⚡ **Live GitHub data** — avatar, bio, followers, repos, stars, top projects
- 📤 **One-tap sharing** — LinkedIn, WhatsApp, X (Twitter), Facebook, Telegram, Reddit, email
- 📱 **Native share sheet** on mobile via the Web Share API (shares the PNG directly)
- 🖼️ **High-res PNG export** (2× resolution) for posts, slides and portfolios
- 🔗 **Deep-linkable badges** — every badge has its own URL (`?user=username`)
- 🆓 **Free & open source** — no signup, no tracking, no paywall

## How to use

1. Open [the live site](https://tharvid.in/Open-Source-Badge-Generator/).
2. Enter a GitHub username and hit **Generate badge**.
3. **Download PNG**, **Copy link**, or tap a social icon to share.

You can also deep-link to any badge:

```
https://tharvid.in/Open-Source-Badge-Generator/?user=torvalds
```

## Run locally

Everything is a single static HTML file — no build step.

```bash
git clone https://github.com/TharVid/Open-Source-Badge-Generator.git
cd Open-Source-Badge-Generator
# any static server works, e.g.
python3 -m http.server 8000
# then open http://localhost:8000
```

## Tech

- Vanilla HTML, CSS and JavaScript — one self-contained `index.html`
- [GitHub REST API](https://docs.github.com/en/rest) (public, unauthenticated — 60 requests/hour/IP)
- [html2canvas](https://html2canvas.hertzen.com/) for PNG export
- [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) for native mobile sharing

## Contributing

PRs welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) · Made with ♡ by [TharVid](https://github.com/TharVid)
