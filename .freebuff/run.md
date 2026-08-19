# Run Doc — Portfolio Dev Server

## Reproduce uncommitted artifacts
No env files needed. The project is fully self-contained in `portfolio/`.

Dependencies are already installed in `portfolio/node_modules/`.

## How to run the server
```bash
cd portfolio && npm run dev
```
Next.js picks an available port automatically. Check the terminal output for the URL.
If port 3000 is occupied, it falls back to the next free port (e.g. 60503).
