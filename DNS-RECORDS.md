# DNS Records for moonjab.com

Add these records at your DNS provider (Namecheap, Cloudflare, GoDaddy, etc.).
Last reviewed: 2026-05-14

---

## SPF Record — Sender Policy Framework

Authorizes which mail servers can send email on behalf of moonjab.com.
Prevents spammers from forging the `From: @moonjab.com` header.

| Type | Host | Value | TTL |
|------|------|-------|-----|
| TXT | @ | `v=spf1 include:_spf.google.com ~all` | 3600 |

> **`~all`** = soft fail (recommended while validating). Upgrade to **`-all`** once confirmed.
> Add additional `include:` directives for other sending services:
> - Resend / Postmark: add their respective `include:` per their documentation
> - Vercel does not send email — no additional include needed

**Full record (Google Workspace only):**
```
v=spf1 include:_spf.google.com ~all
```

---

## DMARC Record — Domain-based Message Authentication, Reporting & Conformance

Tells receiving servers what to do on SPF/DKIM failure, and where to send reports.

| Type | Host | Value | TTL |
|------|------|-------|-----|
| TXT | _dmarc | `v=DMARC1; p=none; rua=mailto:dmarc@moonjab.com; ruf=mailto:dmarc@moonjab.com; fo=1; adkim=r; aspf=r` | 3600 |

**Breakdown:**
- `p=none` — monitor only (start here)
- `rua=mailto:dmarc@moonjab.com` — aggregate reports (daily)
- `ruf=mailto:dmarc@moonjab.com` — forensic reports (per-failure)
- `fo=1` — generate forensic report on any alignment failure
- `adkim=r` — relaxed DKIM alignment
- `aspf=r` — relaxed SPF alignment

### Enforcement rollout (recommended):

1. **Week 1–2:** `p=none` — collect reports, ensure legitimate mail passes
2. **Week 3–4:** `p=quarantine; pct=10` — quarantine 10% of failing mail
3. **Month 2:** `p=quarantine; pct=100` — quarantine all failing mail
4. **Month 3+:** `p=reject` — reject all failing mail (full enforcement)

**Production record (after rollout):**
```
v=DMARC1; p=reject; rua=mailto:dmarc@moonjab.com; ruf=mailto:dmarc@moonjab.com; fo=1; adkim=r; aspf=r
```

---

## DKIM

Generated automatically by your email provider when you verify the domain:
- **Google Workspace:** Admin Console → Apps → Google Workspace → Gmail → Authenticate email → Generate DKIM
- The DKIM TXT record will be something like: `google._domainkey` at `moonjab.com`

---

## Verification

After adding records (allow up to 48h for DNS propagation):
- SPF: https://mxtoolbox.com/spf.aspx
- DMARC: https://mxtoolbox.com/dmarc.aspx
- Full mail test: https://www.mail-tester.com
