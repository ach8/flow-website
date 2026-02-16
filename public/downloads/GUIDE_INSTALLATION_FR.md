# 🚀 Guide d'Installation : Assistant IA Support Client (WhatsApp)

Ce workflow transforme votre compte WhatsApp Business en un agent de support client intelligent, capable de lire votre site web et de répondre aux questions de vos clients 24/7.

---

## ✨ Ce que fait ce workflow

- **Réponses IA :** Utilise OpenAI (GPT-4o-mini) pour répondre naturellement aux clients.
- **Connaissance de votre Business :** Scanne votre site web en temps réel pour trouver les infos (prix, stocks, politique de retour, livraison, etc.).
- **Mémoire Longue Durée :** Se souvient des conversations passées grâce à une base de données PostgreSQL.
- **Conformité WhatsApp :** Gère automatiquement la fenêtre de conversation de 24h imposée par Meta.
- **Réponses Propres :** Nettoie automatiquement le formatage Markdown pour un rendu parfait sur WhatsApp.

---

## 🗺️ Architecture du Workflow

```
Déclencheur WhatsApp → Agent IA → Nettoyer la Réponse → Vérification 24h → Si dans les 24h
                         ↑                                                    ├── ✅ OUI → Envoyer Réponse IA
                    ┌────┼────┐                                                └── ❌ NON → Envoyer Template
              Modèle   Mémoire   Outils
              OpenAI   Postgres   (lister_liens + lire_page)
```

---

## 🛠️ Pré-requis

Avant de commencer, assurez-vous d'avoir :

| # | Élément | Où l'obtenir | Coût |
|---|---------|-------------|------|
| 1 | **Compte OpenAI** avec clé API | [platform.openai.com](https://platform.openai.com) | ~0.01€/conversation |
| 2 | **Application Meta / WhatsApp Business API** | [developers.facebook.com](https://developers.facebook.com) | Gratuit |
| 3 | **Base de données PostgreSQL** | [supabase.com](https://supabase.com) (recommandé) | Gratuit (plan Free) |
| 4 | **Instance n8n** | [n8n.io](https://n8n.io) ou auto-hébergé | Gratuit (self-hosted) |

---

## 📥 Étape 1 : Importation dans n8n

1. Téléchargez le fichier `whatsapp-ai-assistant-FR.json`
2. Ouvrez n8n et créez un **nouveau workflow**
3. Cliquez sur **⋮** (trois points) en haut à droite → **"Import from File"**
4. Sélectionnez le fichier JSON téléchargé
5. ✅ Vous devriez voir tous les nœuds connectés avec des fils

---

## 🔑 Étape 2 : Configuration des Identifiants (Credentials)

### 2.1 — OpenAI (Modèle IA)

1. Double-cliquez sur le nœud **"Modèle OpenAI"**
2. Dans "Credential for OpenAI API", cliquez sur **"Create New"**
3. Collez votre clé API OpenAI (commence par `sk-...`)
4. Cliquez sur **Save**

> 💡 **Astuce :** Le modèle par défaut est `gpt-4o-mini` (le moins cher et le plus rapide). Vous pouvez le changer pour `gpt-4o` si vous voulez des réponses plus poussées.

### 2.2 — WhatsApp (Meta Business)

**A. Nœud "Déclencheur WhatsApp" :**
1. Double-cliquez sur le nœud **"Déclencheur WhatsApp"**
2. Créez un nouveau credential **"WhatsApp Trigger API"**
3. Remplissez :
   - **Access Token :** Votre token permanent Meta (voir ci-dessous)
   - **Phone Number ID :** Trouvé dans le dashboard Meta Developers
   - **Verify Token :** Une phrase secrète de votre choix (ex: `flow-ai-secret-2026`)
4. **⚠️ IMPORTANT :** Copiez l'**URL du Webhook** affichée par n8n
5. Allez dans [Meta Developers](https://developers.facebook.com) → Votre App → WhatsApp → Configuration → Webhook
6. Collez l'URL et votre Verify Token, puis cliquez **Vérifier**

**B. Nœuds "Envoyer Réponse IA" et "Envoyer Template" :**
1. Double-cliquez sur chacun de ces nœuds
2. Connectez le même credential **"WhatsApp API"** (pas Trigger)
3. Remplacez `VOTRE_PHONE_NUMBER_ID` par votre Phone Number ID Meta

> 📖 **Comment obtenir un Token Permanent Meta :**
> 1. Allez dans [developers.facebook.com](https://developers.facebook.com)
> 2. Votre App → Paramètres → Basique → Clé secrète
> 3. Puis : Outils API → Générer un token (sélectionnez toutes les permissions WhatsApp)

### 2.3 — Base de Données PostgreSQL (Mémoire)

1. Double-cliquez sur le nœud **"Mémoire Postgres"**
2. Créez un nouveau credential **"PostgreSQL"**
3. Remplissez avec vos infos Supabase :
   - **Host :** `db.xxxxxx.supabase.co`
   - **Database :** `postgres`
   - **User :** `postgres`
   - **Password :** Votre mot de passe Supabase
   - **Port :** `5432`
   - **SSL :** Activé ✅
4. La table `message_history` sera créée automatiquement au premier message

> 💡 **Supabase gratuit :** Créez un compte sur [supabase.com](https://supabase.com), créez un projet, et récupérez les infos de connexion dans Settings → Database.

---

## ⚙️ Étape 3 : Personnalisation pour Votre Entreprise

### 3.1 — Le Prompt de l'Agent IA

1. Double-cliquez sur le nœud **"Agent IA"**
2. Dans le champ **"System Message"**, modifiez :
   - `[Nom de l'Entreprise]` → Le nom de votre entreprise (ex: `FlowTech`)
   - `[URL_DU_SITE]` → L'URL de votre site web (ex: `https://www.flowtech.com`)
3. Vérifiez que ces deux valeurs sont remplacées **partout** dans le texte

### 3.2 — Les Outils de Scraping (lister_liens & lire_page)

1. Double-cliquez sur le nœud **"lister_liens"**
2. Dans les paramètres du corps (Body Parameters) :
   - **url** → Remplacez `[URL_DU_SITE]` par votre URL racine
   - **auth-token** → Remplacez `VOTRE-CLÉ-AUTH` par votre clé d'authentification
3. Répétez la même chose pour le nœud **"lire_page"**

### 3.3 — Le Template WhatsApp (Fenêtre 24h)

1. Double-cliquez sur le nœud **"Envoyer Template (Rouvrir Fenêtre)"**
2. Par défaut, il utilise le template `hello_world` (template de test Meta)
3. **Recommandé :** Créez votre propre template dans Meta Business Manager et remplacez le nom ici

---

## 🚀 Étape 4 : Lancement !

1. Cliquez sur le bouton **"Active"** (toggle ON) en haut à droite du workflow
2. Envoyez un message WhatsApp au numéro de test configuré dans Meta
3. Attendez quelques secondes... 🤖💬
4. **Admirez la magie !** L'IA va automatiquement scanner votre site et répondre

---

## 🔍 Vérification & Debugging

| Problème | Solution |
|----------|----------|
| Pas de réponse | Vérifiez que le Webhook est bien configuré dans Meta |
| Erreur "401 Unauthorized" | Votre clé API OpenAI est expirée ou invalide |
| Erreur "Non-subscribed user" | La clé auth-token dans les outils est incorrecte |
| Réponse en anglais au lieu de français | Modifiez le System Message de l'Agent IA pour préciser la langue |
| Fenêtre 24h expirée | Normal ! Le template sera envoyé automatiquement |
| Erreur de connexion Postgres | Vérifiez l'hôte, le mot de passe et que SSL est activé |

---

## 💡 Astuces Pro

- **Multilingue :** Ajoutez dans le System Message : *"Réponds toujours dans la langue du client."*
- **Coût :** GPT-4o-mini coûte environ **0.15€ pour 1000 messages**. Très rentable.
- **Performance :** L'agent fait 2-3 appels API par question (scraping + réponse), soit ~2-5 secondes de réponse.
- **Limites :** Si votre site a +500 pages, l'agent restera efficace car il navigue intelligemment (max 8 pages par question).

---

## 📞 Support

Besoin d'aide pour l'installation ou d'une intégration sur mesure ?
→ **Contactez Flow AI** pour un accompagnement personnalisé.

---

*Workflow créé par Flow AI · 2026*
