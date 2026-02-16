# 🚀 Setup Guide: AI Customer Support Assistant (WhatsApp)

This workflow turns your WhatsApp Business account into an intelligent customer support agent that can read your website and answer your customers' questions 24/7.

---

## ✨ What This Workflow Does

- **AI Responses:** Uses OpenAI (GPT-4o-mini) to respond naturally to customers.
- **Knows Your Business:** Scrapes your website in real-time to find info (prices, stock, return policy, shipping, etc.).
- **Long-Term Memory:** Remembers past conversations using a PostgreSQL database.
- **WhatsApp Compliant:** Automatically handles Meta's 24-hour conversation window policy.
- **Clean Output:** Automatically strips Markdown formatting for a perfect WhatsApp display.

---

## 🗺️ Workflow Architecture

```
WhatsApp Trigger → AI Agent → Clean Answer → 24h Window Check → If within 24h
                     ↑                                             ├── ✅ YES → Send AI Answer
                ┌────┼────┐                                         └── ❌ NO  → Send Template
           OpenAI   Memory   Tools
           Model    Postgres  (list_links + get_page)
```

---

## 🛠️ Prerequisites

Before you start, make sure you have:

| # | Item | Where to get it | Cost |
|---|------|-----------------|------|
| 1 | **OpenAI account** with API key | [platform.openai.com](https://platform.openai.com) | ~$0.01/conversation |
| 2 | **Meta / WhatsApp Business API app** | [developers.facebook.com](https://developers.facebook.com) | Free |
| 3 | **PostgreSQL database** | [supabase.com](https://supabase.com) (recommended) | Free (Free plan) |
| 4 | **n8n instance** | [n8n.io](https://n8n.io) or self-hosted | Free (self-hosted) |

---

## 📥 Step 1: Import into n8n

1. Download the file `whatsapp-ai-assistant-EN.json`
2. Open n8n and create a **new workflow**
3. Click **⋮** (three dots) in the top-right → **"Import from File"**
4. Select the downloaded JSON file
5. ✅ You should see all nodes connected with wires

---

## 🔑 Step 2: Set Up Credentials

### 2.1 — OpenAI (AI Model)

1. Double-click on the **"OpenAI Chat Model"** node
2. Under "Credential for OpenAI API", click **"Create New"**
3. Paste your OpenAI API key (starts with `sk-...`)
4. Click **Save**

> 💡 **Tip:** The default model is `gpt-4o-mini` (cheapest and fastest). You can switch to `gpt-4o` for more advanced responses.

### 2.2 — WhatsApp (Meta Business)

**A. "WhatsApp Trigger" node:**
1. Double-click on the **"WhatsApp Trigger"** node
2. Create a new **"WhatsApp Trigger API"** credential
3. Fill in:
   - **Access Token:** Your permanent Meta token (see below)
   - **Phone Number ID:** Found in your Meta Developers dashboard
   - **Verify Token:** A secret phrase of your choice (e.g. `flow-ai-secret-2026`)
4. **⚠️ IMPORTANT:** Copy the **Webhook URL** displayed by n8n
5. Go to [Meta Developers](https://developers.facebook.com) → Your App → WhatsApp → Configuration → Webhook
6. Paste the URL and your Verify Token, then click **Verify**

**B. "Send AI Agent's Answer" and "Send Template" nodes:**
1. Double-click on each of these nodes
2. Connect the same **"WhatsApp API"** credential (not Trigger)
3. Replace `YOUR_PHONE_NUMBER_ID` with your Meta Phone Number ID

> 📖 **How to Get a Permanent Meta Token:**
> 1. Go to [developers.facebook.com](https://developers.facebook.com)
> 2. Your App → Settings → Basic → App Secret
> 3. Then: API Tools → Generate Token (select all WhatsApp permissions)

### 2.3 — PostgreSQL Database (Memory)

1. Double-click on the **"Postgres Users Memory"** node
2. Create a new **"PostgreSQL"** credential
3. Fill in your Supabase connection info:
   - **Host:** `db.xxxxxx.supabase.co`
   - **Database:** `postgres`
   - **User:** `postgres`
   - **Password:** Your Supabase password
   - **Port:** `5432`
   - **SSL:** Enabled ✅
4. The `message_history` table will be created automatically on the first message

> 💡 **Free Supabase:** Create an account at [supabase.com](https://supabase.com), create a project, and find connection info under Settings → Database.

---

## ⚙️ Step 3: Customize for Your Business

### 3.1 — AI Agent Prompt

1. Double-click on the **"AI Agent"** node
2. In the **"System Message"** field, replace:
   - `[Company Name]` → Your company name (e.g. `FlowTech`)
   - `[YOUR_WEBSITE_URL]` → Your website URL (e.g. `https://www.flowtech.com`)
3. Make sure both values are replaced **everywhere** in the text

### 3.2 — Scraping Tools (list_links & get_page)

1. Double-click on the **"list_links"** node
2. In the Body Parameters:
   - **url** → Replace `[YOUR_WEBSITE_URL]` with your root URL
   - **auth-token** → Replace `YOUR-AUTH-TOKEN` with your authentication key
3. Repeat the same for the **"get_page"** node

### 3.3 — WhatsApp Template (24h Window)

1. Double-click on the **"Send Template (Reopen Window)"** node
2. By default, it uses the `hello_world` template (Meta's test template)
3. **Recommended:** Create your own template in Meta Business Manager and replace the name here

---

## 🚀 Step 4: Launch!

1. Click the **"Active"** toggle (ON) in the top-right corner of the workflow
2. Send a WhatsApp message to your test number configured in Meta
3. Wait a few seconds... 🤖💬
4. **Watch the magic!** The AI will automatically scrape your site and respond

---

## 🔍 Troubleshooting

| Problem | Solution |
|---------|----------|
| No response | Check that the Webhook is properly configured in Meta |
| "401 Unauthorized" error | Your OpenAI API key is expired or invalid |
| "Non-subscribed user" error | The auth-token in the tools is incorrect |
| Response in wrong language | Edit the AI Agent's System Message to specify the language |
| 24h window expired | Normal! The template message will be sent automatically |
| Postgres connection error | Check the host, password, and make sure SSL is enabled |

---

## 💡 Pro Tips

- **Multilingual:** Add to the System Message: *"Always reply in the customer's language."*
- **Cost:** GPT-4o-mini costs about **$0.15 per 1,000 messages**. Very cost-effective.
- **Speed:** The agent makes 2-3 API calls per question (scraping + response), taking ~2-5 seconds.
- **Scale:** Even if your site has 500+ pages, the agent stays efficient by navigating smartly (max 8 pages per question).

---

## 📞 Support

Need help with setup or want a custom integration?
→ **Contact Flow AI** for personalized assistance.

---

*Workflow created by Flow AI · 2026*
