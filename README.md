# Bear Media Links Page

Premium links-in-bio page for Bear Media. Dark, sleek, and modern.

## Quick Deploy

1. Upload all files to GitHub repo: `bear-links-app`
2. Go to **vercel.com**
3. Import the GitHub repo
4. Click **Deploy**
5. Done! ✓

## Set up subdomain

Once deployed:
1. Go to IONOS
2. Add DNS CNAME record:
   - **Name:** links
   - **Value:** cname.vercel-dns.com
3. Wait 5-10 mins
4. Visit **links.bear-media.com** ✓

## Update links

Edit the `links` array in `pages/index.js` and push to GitHub. Vercel auto-deploys.
