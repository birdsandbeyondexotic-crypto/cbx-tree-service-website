# CBX Tree Service Website v2.0

React + Vite website for CBX Tree Service, hosted on Firebase.

## Local preview

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Firebase deploy (manual)

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only hosting
```

## GitHub Actions setup

The workflow is included at `.github/workflows/firebase-hosting.yml`.

GitHub must have this repository secret:

`FIREBASE_SERVICE_ACCOUNT_CBX_TREE_SERVICE`

To create it:

1. Firebase Console → Project Settings → Service accounts.
2. Click **Generate new private key**.
3. In GitHub: Repository → Settings → Secrets and variables → Actions → New repository secret.
4. Name it exactly `FIREBASE_SERVICE_ACCOUNT_CBX_TREE_SERVICE`.
5. Paste the entire JSON file contents as the secret value.
6. Commit/push to `main`, or run the workflow from the Actions tab.

## Website details

- Main phone: (239) 238-0783
- Contact email: haley@cbxtreeservice.com
- Jobber request form is embedded on `/estimate`.
- More gallery images can be added later to `public/images` and listed in `src/pages/BasicPages.jsx`.
