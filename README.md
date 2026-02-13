# AI Ad Factory: Zero-Prompt Vertical AI Ad Agency

**Complete Application Prompt for Emergent Labs**

## Project Overview

Build a **WhatsApp-first AI advertising autopilot platform** targeting Indian MSMEs (Micro, Small, and Medium Enterprises). The platform eliminates traditional prompt engineering by using intelligent **zero-prompt AI** that autonomously generates, manages, and optimizes advertising campaigns across **Meta (Facebook/Instagram)**, **Google Ads**, and **WhatsApp Business** channels.

### Core Concept: Zero-Prompt AI

Unlike traditional AI tools requiring detailed prompts, AI Ad Factory operates on a **"set-and-forget"** model:

- **Zero manual prompt writing** — Business owners provide minimal business context once
- **Autonomous creative generation** — AI automatically creates ad variants, copy, and visuals
- **Self-optimizing campaigns** — AI continuously learns and adjusts based on performance data
- **Conversational onboarding** — Simple WhatsApp-based setup replacing complex forms

---

## Target Market

- **Primary:** Indian MSMEs (₹10L–₹50Cr annual revenue)
- **Sectors:** Retail, D2C brands, Local services, Restaurants, Beauty/Wellness, Professional services
- **Pain Points:** Limited marketing budgets, no in-house expertise, intimidated by complex ad platforms, need Hindi/regional language support

---

## Platform Architecture

### 1. WhatsApp Business API Integration (Primary Interface)

**Onboarding Flow:**

- Business profile collection via conversational chat (no forms)
- Multi-language support (English, Hindi, + 4 regional languages)
- Voice note transcription for non-technical users
- Automatic brand asset extraction from shared images/documents
- Industry-specific template suggestions

**Ongoing Management:**

- Daily performance summaries delivered as WhatsApp messages
- Approval workflow for new ad creatives (with visual previews)
- Budget alerts and optimization suggestions
- Campaign start/stop via simple chat commands
- Invoice and payment links sent automatically

**Technical Requirements:**

- Meta BSP verified WhatsApp Business API
- Webhook handling for real-time message processing
- Media handling (images, videos, PDFs up to 16MB)
- Template message management system
- Conversation session tracking (24-hour window compliance)

---

### 2. AI Agent Orchestration System

**Brand Intelligence Agent:**

- Extract brand voice from website scraping, social media analysis
- Generate brand guidelines automatically (colors, fonts, tone)
- Create customer persona profiles from industry + business inputs
- Build product/service catalog from minimal inputs

**Creative Generation Agent:**

- Multi-modal ad creation (image + copy + video)
- Platform-specific optimization (Meta specs, Google responsive ads)
- A/B variant generation (5–10 variants per campaign)
- Industry-template customization (not generic)
- Seasonal and trend-aware creative updates

**Campaign Strategy Agent:**

- Budget allocation across platforms based on industry benchmarks
- Audience targeting recommendations (lookalike, interests, demographics)
- Bidding strategy selection (CPC, CPM, CPA optimization)
- Campaign calendar planning (weekly/monthly)
- Competitive analysis and positioning

**Performance Optimization Agent:**

- Real-time bid adjustments (15-minute intervals)
- Creative rotation based on fatigue metrics
- Audience segment performance tracking
- Budget reallocation between top performers
- Anomaly detection (sudden drops, fraud patterns)
- ROI forecasting and predictive analytics

---

### 3. Multi-Platform Ad Automation

**Meta Ads Integration:**

- Facebook + Instagram campaign management
- Advantage+ Shopping integration
- Dynamic product ads for e-commerce
- Lead generation forms with auto-follow-up
- Click-to-WhatsApp ads with conversation tracking

**Google Ads Integration:**

- Search, Display, Performance Max campaigns
- Smart bidding with profit margin consideration
- Responsive search ads auto-generation
- Shopping campaigns for product catalogs
- Local service ads for brick-and-mortar

**WhatsApp Commerce:**

- Catalog integration with auto-sync
- Conversational commerce flows
- Abandoned cart recovery sequences
- Order tracking and customer support automation
- Payment link generation

---

### 4. Zero-Prompt Intelligence System

**Context Extraction Engine:**

*Input:* "I run a boutique in Mumbai selling ethnic wear"

*Auto-Generated:*

- Business Category: Fashion Retail > Ethnic Wear
- Location: Mumbai (local targeting radius)
- Potential Products: Sarees, Kurtis, Lehengas
- Target Audience: Women 25–45, Indian traditional wear enthusiasts
- Competitors: FabIndia, Biba, local boutiques
- Budget Range: ₹15,000–50,000/month
- Campaign Goals: Store visits + WhatsApp inquiries

**Autonomous Decision Framework:**

- Industry-specific best practices database (500+ business types)
- Historical performance data from similar businesses
- Real-time market trend analysis
- Automated compliance checks (ad policies, legal requirements)
- Smart defaults that work 80% of the time

**Continuous Learning Loop:**

- Campaign performance feeds back into AI models
- User approval/rejection patterns train preference models
- Industry benchmarks updated weekly
- Seasonal pattern recognition
- Local market trend adaptation

---

### 5. Dashboard & Analytics

**Web Dashboard Features:**

- Real-time campaign performance metrics
- Visual spend vs. revenue tracking
- Creative performance comparison
- Audience insights visualization
- Downloadable reports (PDF/Excel)
- Multi-client management for agencies

**Mobile-First Design:**

- Progressive Web App (PWA)
- WhatsApp mini-app integration
- Quick actions (pause/resume campaigns)
- Push notifications for critical alerts

**Key Metrics Displayed:**

- ROAS (Return on Ad Spend)
- Cost per lead/sale
- Impressions, Clicks, Conversions
- Budget utilization %
- Top performing creatives
- Audience demographics

---

### 6. Pricing & Billing

**Transparent Pricing Model:**

| Tier    | Price/month   | Ad spend cap   |
|---------|---------------|----------------|
| Starter | ₹2,999/month  | up to ₹25K     |
| Growth  | ₹5,999/month | up to ₹1L      |
| Pro     | ₹11,999/month | unlimited      |

- Platform fee = 12–15% of monthly ad spend **OR** flat fee (whichever is lower)

**Payment Integration:**

- Razorpay for Indian payments
- UPI auto-debit setup
- Ad wallet system (pre-loaded credits)
- Automated invoicing
- Payment failure alerts via WhatsApp

---

## User Defined Namespaces

- [Leave blank — user populates]
