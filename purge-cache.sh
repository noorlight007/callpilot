#!/usr/bin/env bash
# ---- Vercel: redeploy production without build cache (both projects) ----
# cd callpilot-site && vercel --prod --force
# cd panel && vercel --prod --force

# ---- Cloudflare in front of the site: purge everything for the zone ----
# Needs CF_ZONE_ID and CF_API_TOKEN (token with Cache Purge permission)
curl -X POST "https://api.cloudflare.com/client/v4/zones/${CF_ZONE_ID}/purge_cache" \
  -H "Authorization: Bearer ${CF_API_TOKEN}" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'

# ---- Netlify: clear cache and redeploy ----
# netlify deploy --prod --build   (or UI: Deploys > Trigger deploy > Clear cache and deploy site)
