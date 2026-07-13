# CBX Tree Service Website v1.0

Production static website for CBX Tree Service, prepared for Firebase Hosting and GitHub Actions.

## Before first deployment

1. Replace `REPLACE_WITH_FIREBASE_PROJECT_ID` in `.firebaserc` and `.github/workflows/firebase-hosting.yml` with the Firebase project ID.
2. In Firebase Console, open **Hosting** and use **Set up GitHub Action** to authorize this repository. Firebase will create the required GitHub secret.
3. Add the official Jobber request-form URL when available. The current estimate form prepares an email to `haley@cbxtreeservice.com`.
4. Confirm that `(239) 238-0783` remains the primary public number.
5. Add verified customer reviews before publishing review claims.

## Local preview

Open `index.html`, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Firebase deploy

```bash
npm install -g firebase-tools
firebase login
firebase use --add
firebase deploy --only hosting
```

## Custom domain

After the Firebase preview URL is approved, add `cbxtreeservice.com` and `www.cbxtreeservice.com` under Firebase Hosting. Enter only the exact DNS records Firebase provides in Squarespace. Preserve all existing email-related MX, SPF, DKIM, and DMARC records.
