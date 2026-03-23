# Mini-playground

`Mini-playground` is the root app and parent workspace for experiments, prototypes, and nested sub-apps.

## Structure

- `app/`: the main Next.js app deployed from the repository root
- `ehc-proposal-ui/`: a nested app project being developed alongside the root app

## Unified domain

- Deploy `Mini-playground` from the repository root
- Deploy `ehc-proposal-ui` as its own Vercel project from `ehc-proposal-ui/`
- Route `/ehc-proposal-ui` through the root project using `vercel.json`
- Keep `basePath: "/ehc-proposal-ui"` in the nested app config

## Local development

```bash
npm install
npm run dev
```
