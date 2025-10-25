# 📧 Serverless Email API

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js)
![Serverless](https://img.shields.io/badge/Serverless-4.x-red?style=for-the-badge&logo=serverless)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

**A modern, scalable REST API for sending emails built with Serverless Framework**

</div>

---

## 🌟 Overview

<div style="background-color: #f6f8fa; padding: 15px; border-radius: 6px; border-left: 4px solid #0366d6;">

This project implements a production-ready serverless email API that allows you to send emails through a simple REST endpoint. Built with modern technologies and best practices, it features comprehensive error handling, input validation, structured logging, and a beautiful HTML interface for testing.

</div>

---

## ✨ Features

<div style="padding: 10px;">

- ✅ **RESTful API** - Clean POST endpoint for sending emails
- ✅ **Email Validation** - Robust input validation for all fields
- ✅ **Error Handling** - Comprehensive error handling with appropriate HTTP status codes
- ✅ **Structured Logging** - JSON-formatted logs for easy debugging
- ✅ **HTML Frontend** - Beautiful web interface for testing the API
- ✅ **Serverless Offline** - Local development without cloud deployment
- ✅ **Environment Configuration** - Secure credential management with dotenv
- ✅ **SMTP Support** - Works with Gmail, Outlook, or any SMTP provider

</div>

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| **Serverless Framework v4** | Infrastructure & deployment |
| **Node.js 18.x** | Runtime environment |
| **Nodemailer** | Email sending service |
| **Express.js** | HTTP server (via serverless-offline) |
| **Dotenv** | Environment variable management |
| **HTML/CSS/JavaScript** | Frontend interface |

</div>

---

## 📁 Project Structure

email-api/
├── src/
│ ├── handlers/
│ │ ├── emailHandler.js # Email sending Lambda function
│ │ └── webHandler.js # HTML frontend Lambda function
│ ├── services/
│ │ └── emailService.js # Email service logic with Nodemailer
│ ├── utils/
│ │ ├── validator.js # Input validation utilities
│ │ ├── logger.js # Structured logging utility
│ │ └── response.js # Standardized API responses
│ └── config/
│ └── emailConfig.js # Email configuration
├── public/
│ └── index.html # Web interface
├── .env # Environment variables (not in repo)
├── .gitignore # Git ignore rules
├── serverless.yml # Serverless configuration
├── package.json # Dependencies
└── README.md # This file

text

---

## 🚀 Getting Started

<div style="background-color: #fff5b1; padding: 15px; border-radius: 6px; border-left: 4px solid #ffd33d;">

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Gmail account with App Password (or other SMTP provider)

</div>

### Installation

**1. Clone the repository**
git clone https://github.com/NirmalSumukh/Serverless-Email-API.git
cd Serverless-Email-API

text

**2. Install dependencies**
npm install

text

**3. Set up environment variables**

Create a `.env` file in the root directory:

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password

text

> **Note:** For Gmail, you need to generate an App Password at https://myaccount.google.com/apppasswords

**4. Start the development server**
npm start

text

The API will be available at `http://localhost:3000`

---

## 📡 API Documentation

<div style="background-color: #f1f8ff; padding: 15px; border-radius: 6px; border-left: 4px solid #0366d6;">

### Send Email Endpoint

**URL:** `POST /dev/send-email`

**Request Body:**
{
"receiver_email": "recipient@example.com",
"subject": "Your subject here",
"body_text": "Your email message here"
}

text

**Success Response (200):**
{
"success": true,
"data": {
"message": "Email sent successfully",
"messageId": "unique-id@mail.gmail.com",
"recipient": "recipient@example.com",
"subject": "Your subject here"
}
}

text

**Error Response (400 - Validation Error):**
{
"success": false,
"error": "Validation failed",
"details": [
"receiver_email is required",
"subject cannot be empty"
]
}

text

**Error Response (500 - Server Error):**
{
"success": false,
"error": "Failed to send email. Please try again later."
}

text

</div>

---

## 🖥️ Using the Web Interface

<div align="center">

Simply open your browser and navigate to:

**`http://localhost:3000`**

Fill in the form with:
- **Receiver Email** - Recipient's email address
- **Subject** - Email subject line
- **Message** - Email body content

Click **Send Email** and watch the magic happen! ✨

</div>

---

## 🧪 Testing with Postman

1. Open Postman
2. Create a new **POST** request
3. Set URL to: `http://localhost:3000/dev/send-email`
4. Add header: `Content-Type: application/json`
5. Add JSON body with the required fields
6. Click **Send**

---

## 🔒 Security Features

<div style="background-color: #fff5f5; padding: 15px; border-radius: 6px; border-left: 4px solid #d73a49;">

- ✅ Environment variables for sensitive credentials
- ✅ `.gitignore` prevents `.env` from being committed
- ✅ Input validation prevents injection attacks
- ✅ CORS enabled for controlled access
- ✅ Structured error messages (no sensitive data exposure)

</div>

---

## 📝 HTTP Status Codes

| Code | Description |
|------|-------------|
| `200` | Email sent successfully |
| `400` | Validation error (missing/invalid fields) |
| `500` | Internal server error |
| `503` | Email service unavailable |

---

## 🔧 Configuration

### SMTP Providers

<div style="padding: 10px;">

**Gmail**
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587

text

**Outlook**
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587

text

**Custom SMTP**
EMAIL_HOST=your-smtp-host.com
EMAIL_PORT=587

text

</div>

---

## 🐛 Troubleshooting

<div style="background-color: #f6f8fa; padding: 15px; border-radius: 6px;">

**Issue:** "Invalid login" error  
**Solution:** Make sure you're using Gmail App Password, not your regular password

**Issue:** "ECONNREFUSED"  
**Solution:** Check your SMTP host and port settings

**Issue:** Server not starting  
**Solution:** Ensure all dependencies are installed with `npm install`

</div>

---

## 📦 Scripts

npm start # Start serverless offline
npm run deploy # Deploy to AWS (requires AWS credentials)

text

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

<div style="background-color: #f6f8fa; padding: 15px; border-radius: 6px;">

- **Serverless Framework** - For the amazing serverless infrastructure
- **Nodemailer** - For reliable email sending capabilities
- **The open-source community** - For inspiration and support

</div>

---

<div align="center">

**Built with ❤️ using Serverless Framework**

⭐ Star this repository if you find it helpful!

</div>
