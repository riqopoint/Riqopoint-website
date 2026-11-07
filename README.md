# RIQOPOINT website

**Brand:** RIQOPOINT  
**Tagline:** Solve What Matters.  
**RIQO:** Research · Innovation · Quality · Optimisation

Responsive Next.js 14 + React + TypeScript website, ready to push to GitHub and deploy on Vercel.

## Run locally
1. Install Node.js LTS.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_CONTACT_EMAIL` to your real business email.
4. Run `npm run dev` and open http://localhost:3000.

## Push to GitHub
Create an empty GitHub repository, extract this ZIP, then run these commands in the project directory:

```bash
git init
git add .
git commit -m "Initial RIQOPOINT website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/riqopoint-website.git
git push -u origin main
```

## Deploy on Vercel
Import the GitHub repository into Vercel, add `NEXT_PUBLIC_CONTACT_EMAIL` in Project Settings → Environment Variables, and deploy.

## Before launch
- Replace `https://www.example.com` in `app/layout.tsx` with your final domain.
- Set your real enquiry email in Vercel environment variables.
- Review every service and industry description for accuracy.
- Publish client names, case studies, credentials and facility access only when you have permission. Do not imply IIT Delhi or any other institution endorses RIQOPOINT or provides facility access without formal authorisation.
- Add your registered company details, privacy notice and terms when applicable.

## Enquiry form
The form opens the visitor's default email application with the details pre-filled. It does not store or directly transmit submissions. For reliable lead capture, connect a form backend (for example Formspree or a server-side email API) before launch.
