# Acentria Group Multi-Country Expansion Guide

## Executive Summary

This document provides a comprehensive guide for expanding the Acentria Group website to support multiple African countries (Kenya, Uganda, Tanzania, Zambia, and future markets). The implementation will follow best practices observed in leading pan-African financial services websites such as **Old Mutual**, **Minet Group**, and **Equity Group Holdings**.

---

## Table of Contents

1. [Proposed URL Structure](#1-proposed-url-structure)
2. [Reference Site Analysis](#2-reference-site-analysis)
3. [Content Classification](#3-content-classification)
4. [Shared vs Country-Specific Pages](#4-shared-vs-country-specific-pages)
5. [Country Selector & Auto-Detection](#5-country-selector--auto-detection)
6. [Implementation Approach Options](#6-implementation-approach-options)
7. [Content Management Strategy](#7-content-management-strategy)
8. [Navigation Changes](#8-navigation-changes)
9. [Recommended Rollout Plan](#9-recommended-rollout-plan)
10. [Key Considerations](#10-key-considerations)

---

## 1. Proposed URL Structure

### Recommended Approach: Path-Based Country Routing

```
acentriagroup.com/kenya/...     → Kenya site
acentriagroup.com/uganda/...    → Uganda site  
acentriagroup.com/tanzania/...  → Tanzania site
acentriagroup.com/zambia/...    → Zambia site
acentriagroup.com/...           → Group/Global site (or redirect to country)
```

### URL Examples

| Page Type | Kenya URL | Uganda URL |
|-----------|-----------|------------|
| Homepage | `/kenya` | `/uganda` |
| Insurance Landing | `/kenya/insurance` | `/uganda/insurance` |
| Motor Insurance | `/kenya/insurance/motor` | `/uganda/insurance/motor` |
| About Us (Shared) | `/kenya/about` | `/uganda/about` |
| Contact | `/kenya/contact` | `/uganda/contact` |
| Careers | `/kenya/careers` | `/uganda/careers` |

### Alternative URL Approaches (Not Recommended)

| Approach | Example | Pros | Cons |
|----------|---------|------|------|
| Subdomains | ke.acentriagroup.com | SEO independence | Higher maintenance, SSL per subdomain |
| ccTLD | acentriagroup.co.ke | Strong local presence | Expensive, requires separate domains |
| **Path-based** ✓ | acentriagroup.com/kenya | Single domain, easy management | Preferred approach |

---

## 2. Reference Site Analysis

### Old Mutual - How They Do It

Old Mutual operates separate **country-specific domains** for each market:

| Country | Domain | Products |
|---------|--------|----------|
| South Africa | oldmutual.com | Investments, Assurance |
| Kenya | oldmutual.co.ke | General Insurance, Health, Life, Investments |
| Uganda | oldmutual.co.ug | Savings, Insure, Motor, Unit Trusts |

**Key Observations:**
- Each country has **completely different products** tailored to local markets
- Kenya offers "Afyaimara Family Cover" (health), Uganda offers "Serenicare"
- Kenya has "Lady Anchor" solution for women - not available in Uganda
- Same branding but **localized content and products**
- Contact numbers, offices, and support are country-specific
- Footer links differ per country

### Minet Group - How They Do It

Minet uses a **Group site with country selector**:

| Feature | Implementation |
|---------|----------------|
| Main URL | minet.com (Group site) |
| Country Selector | Dropdown with: Botswana, Kenya, Lesotho, Malawi, Mozambique, Namibia, Tanzania, Uganda, Zambia |
| Language Toggle | EN / PT (Portuguese for Mozambique) |
| Contact Page | Tabs for each country with local addresses |

**Key Observations:**
- Single domain with country switching
- Products/Services page is **universal** (pan-African)
- About section is **shared** (Group-level)
- Contact information is **country-specific** (tabs per country)
- Careers are **shared** but locations vary
- News/Media is **shared** across regions

### Equity Group Holdings - How They Do It

Equity uses a **path-based structure** similar to our recommendation:

```
equitygroupholdings.com/ke  → Kenya
equitygroupholdings.com/ug  → Uganda  
equitygroupholdings.com/tz  → Tanzania
equitygroupholdings.com/rw  → Rwanda
equitygroupholdings.com/ss  → South Sudan
equitygroupholdings.com/cd  → DR Congo
```

**Key Observations:**
- Path-based country routing (recommended for Acentria)
- Each country has tailored banking products
- Group information is shared
- Country detection likely based on IP

---

## 3. Content Classification

Based on analysis of the current Acentria website structure, content falls into three categories:

### 🌍 GLOBAL (Shared Across All Countries)

These pages contain group-level information that applies universally:

| Category | Pages |
|----------|-------|
| **About Acentria Group** | Who We Are, Our Journey, Vision/Mission/Values, Corporate Culture, Our Brand, Leadership & Governance, Board |
| **ESG & Sustainability** | ESG, CSR, Sustainability Policies, Our Communities |
| **Legal & Compliance** | Privacy Policy, Cookie Policy, Terms & Conditions, Ethics & Compliance, Whistle Blowing |
| **News & Insights** | Acentria News and Blogs, Awards |
| **Technology** | Technology services (if same platform across countries) |

### 🏠 COUNTRY-SPECIFIC (Different Per Country)

These pages need to be created/modified for each country:

| Category | Why Country-Specific |
|----------|---------------------|
| **Insurance Products** | Different regulators, products, underwriters, pricing per country |
| **Reinsurance Services** | Market-specific solutions, local cedants, regulatory requirements |
| **Actuarial Services** | Country-specific consulting, local IFRS implementations |
| **Investment Products** | Different fund structures, regulatory requirements |
| **Contact Information** | Different offices, phone numbers, addresses, emails |
| **Careers/Vacancies** | Location-specific job openings |
| **Claims** | Different processes, local adjusters |

### 🔀 HYBRID (Shared Template, Localized Content)

These pages share the same design but content varies:

| Category | What's Shared | What's Localized |
|----------|---------------|------------------|
| **Homepage** | Layout, branding | Hero images, featured products, news |
| **Product Landing Pages** | Page structure | Available products list, pricing |
| **Contact Forms** | Form design | Recipient emails, office options |
| **Team Pages** | Template | Staff photos, names, titles |

---

## 4. Shared vs Country-Specific Pages

### Current Site Structure Analysis

Based on the existing website, here is a detailed breakdown:

#### ✅ SHARED PAGES (Keep Same Across Countries)

```
📁 About Section
├── about-acentria-group.vue
├── about-us/who-we-are.vue
├── about-us/our-journey.vue
├── about-us/our-vision-mission-values.vue
├── about-us/our-purpose.vue
├── about-us/how-we-work.vue
├── about-us/commitments.vue
├── about-us/our-risk-management.vue
├── corporate-culture.vue
├── corporate-governance.vue
├── our-brand.vue
└── meet-the-team.vue (Board/Leadership only)

📁 Legal & Compliance
├── privacy-policy.vue
├── cookie-policy.vue
├── tnc.vue
├── ethics-and-compliance.vue
└── whistle-blowing.vue

📁 ESG & Sustainability
├── esg.vue
├── csr.vue
├── about-us/our-communities.vue
└── about-us/sustainability-policies.vue

📁 News & Media
├── acentria-news-and-blogs.vue
├── blog/[slug].vue
├── awards.vue
└── our-insights.vue

📁 Technology (If Same Platform)
├── cyber-security.vue
├── cyber-risk-management.vue
└── diy.vue
```

#### 🏠 COUNTRY-SPECIFIC PAGES (Create Per Country)

```
📁 Insurance (Different products per country)
├── acentria-group-insurance.vue ❌ Needs country version
├── insurance/motor-insurance.vue
├── insurance/health-insurance.vue
├── insurance/life-insurance.vue
├── insurance/travel-insurance.vue
├── insurance/home-insurance.vue
├── insurance/[all other covers].vue
├── insurance/health-plans/...
├── insurance/life-plans/...
├── insurance/motor-plans/...
└── insurance/travel-plans/...

📁 Reinsurance (Different solutions per market)
├── acentria-group-reinsurance.vue ❌ Needs country version
├── reinsurance/treaty-solutions.vue
├── reinsurance/facultative-solution.vue
├── reinsurance/catastrophic-modelling.vue
├── reinsurance/claims-management.vue
└── reinsurance/[all other services].vue

📁 Actuarial (Localized consulting)
├── acentria-group-actuarial.vue ❌ Needs country version
├── actuarial/insurance-consulting.vue
├── actuarial/reinsurance-consulting.vue
├── actuarial/ifrs-17-implementation.vue
└── actuarial/[all other services].vue

📁 Investment (Country-specific funds)
├── acentria-group-investment.vue ❌ Needs country version
└── [investment products per country]

📁 Contact & Support
├── contact-acentria-group.vue ❌ Needs country version
├── agent-assistance.vue
├── feedback.vue
├── about-us/complaint.vue
└── about-us/customer-feedback-dispute-resolution.vue

📁 Careers (Location-specific)
├── acentria-group-careers.vue ❌ Needs country version
├── join-our-team.vue
└── vacancies.vue

📁 Claims (Country-specific process)
├── claims/car-claims.vue
├── launch-claim.vue
├── report-claim.vue
├── claims-management.vue
└── Insurance-claims.vue

📁 Industry Solutions (May vary by market)
├── products/agriculture.vue
├── products/aviation.vue
├── products/construction.vue
├── products/education.vue
├── products/energy-and-mining.vue
├── products/financial-services.vue
├── products/health-care.vue
├── products/hotel-and-tourism.vue
└── products/manufacturing.vue
```

---

## 5. Country Selector & Auto-Detection

### User Experience Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                      User Visits acentriagroup.com               │
└──────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌──────────────────────────────────────────────────────────────────┐
│              Auto-Detect User's Country (by IP)                  │
│              Using services like: ipapi, MaxMind, etc.           │
└──────────────────────────────────────────────────────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    ▼                              ▼
        ┌─────────────────────┐        ┌─────────────────────┐
        │  Known Country?     │        │  Unknown Country?   │
        │  (Kenya, Uganda,    │        │  Show country       │
        │   Tanzania, Zambia) │        │  selection page     │
        └─────────────────────┘        └─────────────────────┘
                    │                              │
                    ▼                              ▼
        ┌─────────────────────┐        ┌─────────────────────┐
        │  Show Welcome Modal │        │  Country Selection  │
        │  "We detected you're│        │  Landing Page with  │
        │   in Kenya. Visit   │        │  Map of Africa      │
        │   Kenya site?"      │        │  + Country Cards    │
        └─────────────────────┘        └─────────────────────┘
                    │                              │
         ┌────────┴────────┐                      │
         ▼                  ▼                      ▼
    ┌─────────┐      ┌──────────┐          ┌─────────────┐
    │ Yes     │      │ No/Other │          │ User Clicks │
    │ (Auto   │      │ Country  │          │ Country     │
    │ redirect│      │          │          │             │
    └─────────┘      └──────────┘          └─────────────┘
         │                  │                      │
         ▼                  ▼                      ▼
┌──────────────────────────────────────────────────────────────────┐
│           Redirect to: acentriagroup.com/{country}               │
│           Set cookie to remember preference                      │
└──────────────────────────────────────────────────────────────────┘
```

### Country Selector Component Design

The country selector should appear in **two places**:

1. **Header Navigation** (persistent)
   - Small dropdown with flag + country name
   - Visible on all pages
   - Example: 🇰🇪 Kenya ▼

2. **Landing Page** (for direct visitors)
   - Full-page or modal selection
   - Map of Africa with clickable regions
   - Cards for each country

### Example Country Selector (Header)

```
┌─────────────────────────────────────────────────────────────────┐
│  🏠 ACENTRIA  │ About │ Insurance │ ... │  🇰🇪 Kenya ▼  │ Login │
└─────────────────────────────────────────────────────────────────┘
                                              │
                                              ▼
                                    ┌─────────────────┐
                                    │ 🇰🇪 Kenya       │
                                    │ 🇺🇬 Uganda      │
                                    │ 🇹🇿 Tanzania    │
                                    │ 🇿🇲 Zambia      │
                                    │ ─────────────── │
                                    │ 🌍 Group Site   │
                                    └─────────────────┘
```

---

## 6. Implementation Approach Options

### Option A: Dynamic Routing (Recommended for Nuxt)

**How it works:** 
Use Nuxt's file-based routing with dynamic country parameter.

**New Folder Structure:**
```
pages/
├── index.vue                    → Country selector landing
├── [country]/                   → Dynamic country segment
│   ├── index.vue               → Country homepage
│   ├── insurance/
│   │   ├── index.vue          → Insurance landing
│   │   ├── motor.vue          → Motor insurance
│   │   └── ...
│   ├── reinsurance/
│   ├── actuarial/
│   ├── contact.vue
│   └── careers.vue
├── about/                       → Shared about pages (no country prefix)
│   ├── who-we-are.vue
│   ├── our-journey.vue
│   └── ...
├── legal/                       → Shared legal pages
│   ├── privacy-policy.vue
│   └── ...
└── news/                        → Shared news pages
    └── ...
```

**Advantages:**
- Single codebase
- Easy to add new countries
- Content can be loaded from configuration/database
- SEO-friendly URLs

### Option B: Separate Builds Per Country

**How it works:**
Deploy separate Nuxt applications for each country.

```
kenya.acentriagroup.com    → Separate Nuxt app
uganda.acentriagroup.com   → Separate Nuxt app
```

**Advantages:**
- Complete independence per country
- Country teams can manage their own site

**Disadvantages:**
- Higher maintenance overhead
- Harder to keep branding consistent
- More expensive to host

### Option C: Hybrid Approach

**How it works:**
- Single Nuxt app with country routing
- Country-specific content stored in CMS (like Sanity, Strapi, Contentful)
- Shared components pull from country config

**Advantages:**
- Best of both worlds
- Non-technical users can manage content
- Easy to scale to new countries

---

## 7. Content Management Strategy

### Recommended: Headless CMS Integration

For managing multi-country content efficiently, integrate a headless CMS:

| CMS Option | Best For | Pricing |
|------------|----------|---------|
| **Sanity** | Flexibility, real-time collaboration | Free tier + pay as you grow |
| **Strapi** | Self-hosted, open source | Free (self-hosted) |
| **Contentful** | Enterprise, large teams | Paid |
| **Storyblok** | Visual editing | Free tier available |

### Content Model Structure

```yaml
Country:
  - code: "ke"
  - name: "Kenya"
  - flag: "🇰🇪"
  - phone: "+254 705 200 222"
  - email: "kenya@acentriagroup.com"
  - address: "West Park Towers, Nairobi"
  - products: [references to products]
  - team: [references to team members]

Product:
  - name: "Motor Insurance"
  - slug: "motor-insurance"
  - countries: ["ke", "ug", "tz"]  # Available in which countries
  - content_ke: "Kenya-specific description..."
  - content_ug: "Uganda-specific description..."
  - pricing_varies: true
  
TeamMember:
  - name: "John Doe"
  - title: "Country Manager"
  - country: "ke"
  - image: "..."
```

---

## 8. Navigation Changes

### Current Navigation Structure

```
About | Insurance | Reinsurance | Actuarial | Technology | Investment
```

### Proposed Navigation for Multi-Country

**Top Bar (above main nav):**
```
🇰🇪 Kenya | Contact: +254 705 200 222 | Login
```

**Main Navigation (country-aware):**
```
Home | About ▼ | Insurance ▼ | Reinsurance ▼ | Actuarial | Technology | Investment
```

When user is on `/kenya/*`:
- "Insurance" links go to `/kenya/insurance`
- "About" dropdown shows shared pages (no country prefix)
- "Contact" goes to `/kenya/contact`

### Navigation Configuration Per Country

```javascript
const countryConfig = {
  ke: {
    name: "Kenya",
    flag: "🇰🇪",
    phone: "+254 705 200 222",
    services: ["insurance", "reinsurance", "actuarial", "investment"],
    insuranceProducts: ["motor", "health", "life", "travel", "home", ...],
    reinsuranceProducts: ["treaty", "facultative", ...],
  },
  ug: {
    name: "Uganda",
    flag: "🇺🇬", 
    phone: "+256 XXX XXX XXX",
    services: ["insurance", "reinsurance", "actuarial"],  // No investment yet
    insuranceProducts: ["motor", "health", "life"],  // Fewer products initially
    reinsuranceProducts: ["treaty"],
  },
  // ... more countries
}
```

---

## 9. Recommended Rollout Plan

### Phase 1: Foundation (Weeks 1-4)

1. **Setup country routing structure**
   - Implement `[country]` dynamic routing in Nuxt
   - Create country configuration file
   - Build country selector component

2. **Migrate Kenya content**
   - Move current site content to `/kenya/*` structure
   - Set up redirect from old URLs

3. **Build shared pages**
   - About section (no country prefix)
   - Legal pages
   - News/Blog

4. **Implement geo-detection**
   - Integrate IP geolocation service
   - Build welcome modal/country detection

### Phase 2: Uganda Launch (Weeks 5-8)

1. **Content preparation**
   - Gather Uganda-specific products
   - Collect contact information
   - Get local team photos

2. **Create Uganda pages**
   - Duplicate Kenya product pages
   - Update content for Uganda market
   - Add Uganda contact details

3. **Testing**
   - Test country switching
   - Verify all links work correctly
   - Test geo-detection

### Phase 3: Tanzania & Zambia (Weeks 9-12)

- Repeat Phase 2 process for additional countries
- Refine based on learnings

### Phase 4: CMS Integration (Weeks 13-16)

- Integrate headless CMS for content management
- Train country teams on content updates
- Build admin dashboard for multi-country management

---

## 10. Key Considerations

### SEO Implications

| Consideration | Recommendation |
|---------------|----------------|
| **Hreflang tags** | Implement for each country version |
| **Sitemap** | Generate per-country sitemaps |
| **Meta tags** | Country-specific titles and descriptions |
| **Canonical URLs** | Set properly to avoid duplicate content |
| **Local keywords** | Optimize for country-specific search terms |

### Legal & Regulatory

| Country | Key Regulatory Body | Considerations |
|---------|---------------------|----------------|
| Kenya | IRA Kenya | Local insurance regulations |
| Uganda | IRA Uganda | Different compliance requirements |
| Tanzania | TIRA | Specific disclosure requirements |
| Zambia | PIA | Local licensing needed |

### Currency & Pricing

- Display prices in local currency (KES, UGX, TZS, ZMW)
- Consider regional pricing differences
- Payment gateway integration per country

### Language Considerations

| Country | Primary Language | Secondary |
|---------|------------------|-----------|
| Kenya | English | Swahili |
| Uganda | English | - |
| Tanzania | Swahili | English |
| Zambia | English | - |

Consider future translation needs, especially for Tanzania.

### Contact & Support

Each country needs:
- [ ] Local phone number
- [ ] Local email address
- [ ] Physical office address
- [ ] Local support hours
- [ ] Country-specific chatbot/support

---

## Summary

### Quick Reference: What's Shared vs. Localized

| Content Type | Shared | Localized |
|--------------|--------|-----------|
| Branding & Design | ✅ | |
| About/History | ✅ | |
| Mission/Vision/Values | ✅ | |
| ESG/CSR | ✅ | |
| Legal Pages | ✅ | |
| News/Blog | ✅ | |
| Insurance Products | | ✅ |
| Reinsurance Services | | ✅ |
| Actuarial Services | | ✅ |
| Investment Products | | ✅ |
| Contact Information | | ✅ |
| Careers/Vacancies | | ✅ |
| Claims Process | | ✅ |
| Pricing/Quotes | | ✅ |

### Next Steps

1. **Client Decision:** Choose implementation approach (Recommended: Option A with CMS)
2. **Content Audit:** List all products/services per country
3. **Design:** Create country selector mockups
4. **Development:** Begin Phase 1 implementation
5. **Content Collection:** Gather country-specific information

---

## Appendix

### A. Current Page Inventory

**Total Pages in Current Site:** 80+ pages

**Pages Directory Structure:**
- Root pages: 35+
- `/about-us/`: 22 pages
- `/insurance/`: 25+ pages (including sub-plans)
- `/reinsurance/`: 18 pages
- `/actuarial/`: 6 pages
- `/products/`: 9 pages (industry solutions)
- `/claims/`: 1 page
- `/blog/`: Dynamic (slug-based)

### B. Component Inventory

Key components that may need country-awareness:
- `Navigation.vue` - Add country selector
- `Footer.vue` - Update contact per country
- `ContactForm.vue` - Route to country-specific email
- `Hero.vue` / `Hero2.vue` - May need localized content
- Various form components - Country-specific recipients

### C. Reference Sites URLs

- **Old Mutual Group:** https://oldmutual.com
- **Old Mutual Kenya:** https://oldmutual.co.ke
- **Old Mutual Uganda:** https://oldmutual.co.ug
- **Minet Group:** https://www.minet.com
- **Equity Holdings:** https://equitygroupholdings.com

---

*Document prepared for Acentria Group*  
*Date: February 2026*  
*Version: 1.0*
