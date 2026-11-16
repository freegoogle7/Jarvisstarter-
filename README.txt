JARVIS STARTER — VERSION 2

Included:
- index.html: JARVIS starter interface
- manifest.json: installable web app metadata
- sw.js: basic offline cache
- icon-180.png, icon-192.png, icon-512.png: original app icons

WHAT WORKS
- Home screen-style interface and chat layout
- Browser speech output where supported
- Microphone dictation where supported and permission is granted

WHAT IS NOT CONNECTED YET
- No AI model/API is connected
- No live screen sharing or screen-reading
- No cloud memory or account system
- The current chat reply is a local placeholder, not an AI answer

SAFETY NOTES
- No API key, password, payment details, or personal data are included.
- Never put an AI API key into these public website files.
- The microphone is only requested when the user taps its button.
- Browser speech recognition may send audio to the browser's speech provider.
- A hosted website can receive normal server/security logs such as IP address.
- Do not upload private photos, passwords, account details, or private conversations to a public code repository.

FREE HOSTING OPTION: GITHUB PAGES
GitHub Pages can host static files from a public repository on GitHub Free and serves GitHub Pages sites over HTTPS.
1. Sign in to GitHub.
2. Create a new repository named jarvis-app.
3. Keep it public (GitHub Free Pages requires a public repository).
4. Upload all files from this folder to the repository's main branch.
5. Open the repository's Settings, then Pages.
6. Under the build/deployment source, choose Deploy from a branch.
7. Select the main branch and root folder, then save.
8. Wait for the published Pages URL to appear.
9. Open that URL in Safari on your iPhone.
10. Tap Share, then Add to Home Screen.

IMPORTANT HOSTING PRIVACY
GitHub Pages sites are publicly available on the internet. The source code in the repository is public, and GitHub says visitor IP addresses are logged for security. This starter contains no secrets, but keep future API keys and private data out of the repository.

This is only the safe front-end foundation. We will check an AI provider's age rules, privacy terms, and free limits before connecting any AI service. Never enable paid billing or a paid fallback.
