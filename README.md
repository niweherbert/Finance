# Personal Finance App

![Full-Stack Personal Finance Application](./preview.png)

<img src="https://img.shields.io/badge/stack-Next.js%20%7C%20TypeScript%20%7C%20TailwindCSS-000?logo=next.js&logoColor=white&labelColor=000000&color=007ACC" alt="Tech Stack" width="250" />

## Overview

A comprehensive full-stack personal finance application built with **Next.js 15**, TypeScript, TailwindCSS, and Prisma ORM over PostgreSQL, enabling users to track budgets, manage saving pots, record transactions, and monitor recurring bills in a centralized dashboard.

💰 **Key Features:**

- **Dynamic Dashboard:** Overview of financial health with at-a-glance metrics
- **Transaction Management:** Complete transaction tracking with advanced filters
- **Budget System:** Create and monitor budget targets with progress visualization
- **Saving Pots:** Track progress toward financial goals with deposit/withdrawal
- **Recurring Bills:** Monitor monthly obligations with status tracking
- **User Authentication:** Secure account system with OAuth and credentials
- **Fully Responsive:** Optimized experience across all devices


---

## 🛠 Built With

- **Next.js 15** - Full-stack React framework with App Router
- **TypeScript** - Static typing for improved code quality
- **Auth.js** - Authentication with multiple providers
- **Prisma** - Type-safe ORM for database operations
- **PostgreSQL (NeonDB)** - Cloud-hosted database
- **TailwindCSS** - Utility-first CSS framework
- **ShadCn/UI** - High-quality component library
- **React Hook Form** - Form validation and handling
- **Zod** - Schema validation
- **Recharts** - Data visualization components
- **Cloudinary** - Image storage and optimization
- **bcryptjs** - Password encryption
- **react-hot-toast** - Toast notifications
- **lucide-react** - Modern icon set
- **UUID** - Unique identifier generation

---

## 📈 Next.js Features Utilized

- **App Router** - Modern file-based routing system
- **Server Components** - Reduced client-side JavaScript
- **Server Actions** - Form submissions without API endpoints
- **TypeScript Integration** - Enhanced developer experience
- **Image Optimization** - Automatic image processing and delivery
- **Edge Runtime** - Fast, global performance
- **API Routes** - Backend functionality when needed

---

## 🚀 Live Demo

🔗 [Personal Finance App](https://personal-finance-xi-umber.vercel.app/auth)

Test credentials:

- Email: johndoe@finance.org
- Password: pass1234

---

## 📦 Installation

Get started with these simple steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/juliengDev/personal_finance
   cd personal_finance
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file with your credentials:

   ```
   # Database
   DATABASE_URL="postgresql://username:password@hostname:port/database"

   # Auth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret"

   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Set up the database**

   ```bash
   npx prisma db push
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Build for production**

   ```bash
   npm run build
   ```

---

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

The project uses Jest for unit and integration testing.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author
- 🏆 **GitHub** - [@Niwe Herbert](https://github.com/niweherbert)
---

🎯 _Feel free to reach out if you have any questions or suggestions!_ 🚀
