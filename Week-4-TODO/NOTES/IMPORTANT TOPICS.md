
### IP ADDRESS ASSIGNING



### 1. **IP Address**
When you deploy your website on **Vercel**, the IP address is assigned by **Vercel’s infrastructure** (which runs on cloud providers like AWS, Google Cloud, etc.).

- Your website will be hosted on Vercel’s servers, and they manage the **public IP addresses** of those servers.
- When someone accesses your site (e.g., `https://your-site.vercel.app`), DNS resolves that domain name to one of Vercel's **load balancer IP addresses**.
- You can view these IPs if you use tools like `nslookup`, `dig`, or `ping` on your domain.

So to be clear:
> **Vercel assigns the IP address**, not you.

---

### 2. **MAC Address**
This part is a little different.

- MAC (Media Access Control) addresses are **hardware-level identifiers** assigned to **network interfaces**.
- They exist only at the **data link layer (Layer 2)** and are **not exposed or relevant on the public internet**.
- When you're using a service like Vercel, you **never deal with the MAC address** of their servers.

> So in short: **MAC address doesn’t apply** to websites or cloud deployments in any meaningful way.

---

### Summary:
| Resource        | Assigned By         | Notes |
|----------------|---------------------|-------|
| IP Address      | Vercel              | Public IP for routing traffic to your site |
| MAC Address     | Not relevant        | Internal to Vercel’s hardware; not exposed or needed |

Let me know if you want to dig deeper into DNS, custom domains, or how traffic routing works with Vercel!

## DNS RESOLUTION

Nice! This is a foundational concept for the web. Let's break it down simply:

---

### 💡 **What is DNS?**

**DNS** stands for **Domain Name System**.

It’s like the **phonebook of the internet**. Instead of remembering IP addresses like `104.21.23.150`, you type in easy names like `google.com` or `mycoolsite.vercel.app`.

So DNS is the system that translates **human-friendly domain names** into **machine-readable IP addresses**.

---

### 🔄 **What is DNS Resolution?**

**DNS Resolution** is the **process** of converting a domain name into an IP address. It's what happens behind the scenes when you type a URL in your browser.

---

### 🧭 How DNS Resolution Works (step-by-step):

1. **You type a domain** (like `chat.openai.com`) into your browser.

2. **Browser checks its cache**  
   If it recently visited this site, it may already know the IP.

3. **If not found**, it asks the **Operating System (OS)**, which may also check its cache.

4. If still not found, the OS sends a request to a **DNS Resolver** (usually run by your ISP or services like Google DNS `8.8.8.8` or Cloudflare `1.1.1.1`).

5. The resolver does the work:
   - It queries a **Root DNS Server** → “Where are the servers for `.com` domains?”
   - It then queries a **TLD DNS Server** → “Where is `openai.com`?”
   - It then queries an **Authoritative DNS Server** → “What's the IP for `chat.openai.com`?”

6. Once the IP is found (e.g., `104.18.12.213`), it's returned to your browser.

7. **Browser connects to the IP**, and you see the website.

All this happens in milliseconds ⚡

---

### 🎯 Simple Analogy:
Think of **DNS** like asking a friend for someone's contact:
- You: “Hey, what’s John's number?”
- Friend (DNS): “Here you go: 123-4567.”

---

Let me know if you want a visual diagram or want to go deeper into stuff like **A records, CNAMEs, TTL, or DNS propagation**!


## COOKIES

Great question again — cookies are one of those behind-the-scenes web things that are super important but kinda mysterious at first. Let’s break it down in a chill way:

---

### 🍪 **What Are Cookies (on the Web)?**

**Cookies** are **small text files** that a website stores on your browser when you visit it.

They're used to **remember things** about you — like whether you’re logged in, what’s in your shopping cart, or even what theme (dark/light) you like.

> Think of cookies as little notes your browser keeps for each website.

---

### 🛠️ What Do Cookies Do?

Here are some common uses:

1. **Authentication**  
   Remember you're logged in so you don’t have to log in every time.

2. **User Preferences**  
   Save your language, theme, or layout preferences.

3. **Shopping Carts**  
   Keep track of items you’ve added — even if you refresh or leave the site.

4. **Analytics & Tracking**  
   Know if you've visited before, which pages you looked at, how long you stayed, etc.

5. **Advertising**  
   Help show you targeted ads based on your behavior (this is the part people often dislike 👀).

---

### 🧱 Types of Cookies

| Type              | What It Means |
|------------------|----------------|
| **Session Cookies** | Temporary, deleted when you close the browser |
| **Persistent Cookies** | Stay on your browser for a set time (e.g., days, months) |
| **First-party Cookies** | Set by the site you're visiting |
| **Third-party Cookies** | Set by other domains (e.g., advertisers embedded in the page) |

---

### 🧠 Example:

When you log into a website:
1. You enter your username/password.
2. The site verifies it, then sets a **cookie** like:  
   ```
   session_id=abc123xyz
   ```
3. That cookie is sent back to the server with every request — so the site knows it’s **you**.

---

### 🔐 Are Cookies Safe?

Mostly yes — but it depends:
- They **can’t run code** or access files on your computer.
- But if poorly handled, they can lead to **security issues** (like session hijacking).
- That's why sites use things like **HTTPOnly** and **Secure** flags.

---

Let me know if you want to see how to create cookies in JavaScript, or how they’re sent in HTTP headers — we can get hands-on if you like 🔧