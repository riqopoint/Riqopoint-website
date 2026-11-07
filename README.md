# RIQOPOINT website

**Brand:** RIQOPOINT  
**Tagline:** Solve What Matters.  
**RIQO:** Research · Innovation · Quality · Optimisation

Responsive Next.js website, ready for GitHub and Vercel.

## What changed in this version

- The company description refers to the founding team as **IIT graduates**, not PhD researchers.
- Added an **Experience That Shapes Solutions** section for prior individual experience associated with Jindal Saw, Chakra Innovation and HBL. These are not presented as RIQOPOINT clients or endorsers.
- Changed the enquiry button to **Submit enquiry**.
- Enquiry submission now uses a server-side API route and does not open the visitor's email application.
- On successful delivery to the email provider, the visitor sees: **“Enquiry submitted. A RIQOPOINT associate will get back to you shortly.”**
- The enquiry recipient defaults to `friendsclubyr@gmail.com`.

## Important: configure email delivery before the form can send

This version uses the Resend email API. You need a Resend account and a verified sending domain/address.

1. Create an account at https://resend.com.
2. Add and verify a domain you control in Resend. Follow Resend's DNS instructions.
3. Create an API key in Resend.
4. In Vercel, open your project → Settings → Environment Variables.
5. Add these variables for Production (and Preview if desired):

   - `RESEND_API_KEY` = your private Resend API key
   - `RIQOPOINT_TO_EMAIL` = `friendsclubyr@gmail.com`
   - `RIQOPOINT_FROM_EMAIL` = a sender address on your verified domain, for example `RIQOPOINT Website <enquiries@yourdomain.com>`

6. Save the variables.
7. Redeploy the project from Vercel (Deployments → latest deployment menu → Redeploy).

Do not put the API key in client-side code or in a `NEXT_PUBLIC_` variable. Do not commit real API keys to GitHub. The `.env.example` file contains placeholders only.

Until Resend is configured with a valid API key and verified sender, the website form will return an error rather than falsely claiming an email was delivered.

## Upload the update to your existing GitHub repository

1. Download and extract this ZIP.
2. Open your GitHub repository `riqopoint-website`.
3. Upload the updated project contents, preserving the directory structure and allowing GitHub to replace the existing files.
4. Ensure `app/api/enquiry/route.ts` exists in the repository.
5. Commit the changes to `main`.
6. Vercel should automatically start a new deployment.

Keep `package.json`, `next.config.mjs`, `tsconfig.json`, `next-env.d.ts`, `.env.example` and `README.md` in the repository root. Keep the application files inside `app/`.

## Before public launch

- Confirm you have permission to publicly mention Jindal Saw, Chakra Innovation and HBL. Do not use their logos without permission.
- Confirm the Jindal Saw project description is accurate and can be disclosed.
- Add verified details for the Chakra Innovation and HBL experiences when available.
- Add a privacy notice explaining how enquiry data is processed and retained.
- Add company registration details and final domain metadata.
- Confirm that the company description accurately reflects the founders' IIT graduate status.
