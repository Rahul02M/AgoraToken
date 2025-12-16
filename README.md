# Agora RTC Token Backend

A **production-ready Node.js backend** for generating **Agora RTC tokens** securely for Flutter, Web, or mobile clients.

This backend keeps your **APP_ID** and **APP_CERT** safe on the server and exposes a secure API to generate RTC tokens.

---

## 🚀 Features

* Secure Agora RTC token generation
* POST API (safe for production)
* Environment-based configuration
* Flutter / Web compatible
* Ready for cloud deployment (Render, Railway, VPS)

---

## 🛠 Tech Stack

* Node.js
* Express.js
* Agora RTC SDK (`agora-access-token`)
* dotenv
* CORS

---

## 📁 Project Structure

```
agoraToken/
│── index.js
│── package.json
│── package-lock.json
│── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root (DO NOT commit it).

```env
APP_ID=your_agora_app_id
APP_CERT=your_agora_app_certificate
PORT=5000
```

A safe reference file is provided:

```
.env.example
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## ▶️ Run the Server

```bash
npm start
```

Server will start on:

```
http://localhost:5000
```

---

## 🔗 API Endpoint

### Generate RTC Token

**POST** `/rtcToken`

#### Request Body

```json
{
  "channelName": "testChannel"
}
```

#### Response

```json
{
  "uid": 123456789,
  "token": "007xxxxxxxxxxxxxxxx"
}
```

---



## 🚀 Deployment

This backend can be deployed to:

* Render
* Railway
* VPS (AWS / DigitalOcean)

### Start Command

```bash
npm start
```

### Build Command

```bash
npm install
```

Set environment variables in the hosting dashboard.

---

## 🔒 Security Best Practices

* Never expose APP_ID or APP_CERT in frontend
* Use HTTPS in production
* Add rate limiting for `/rtcToken`
* Restrict CORS origins if needed

---

## ❌ Do Not Commit

```
.env
node_modules/
```

---

## ✅ Production Ready

✔ Secure environment variables
✔ GitHub-safe configuration
✔ Flutter & Web compatible
✔ Cloud deployable

---

## 📄 License

MIT License
