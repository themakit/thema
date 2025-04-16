# 📦 `thema` CLI

The official CLI for [ThemaKit](https://github.com/themakit) — a modular design system for React.  
Quickly scaffold, add, or remove UI modules in your project with ease.

---

## 🚀 Quick Start

```bash
npx thema add button
```
This will install `@themakit/button` and configure it into your project automatically.

## 🧰 CLI Commands

| Command | Description |
| -------- | ---------------- |
| `thema add <name>` | Installs a ThemaKit module (e.g. `button`) |
| `thema del <name>` | Removes a ThemaKit module |
| `thema list` | Lists all installed modules|

## 🧠 How It Works
- Checks if the module is already installed
- Installs it with `npm`, `pnpm`, or `yarn` based on your lockfile

## 📦 Supported Modules
- `button`
- `card`
- `modal`
- `alert`
- `toast`

...more coming soon!

Made with 💚 + 🪄 by ThemaKit
