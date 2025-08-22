# Mani Shankar S - Professional Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF)](https://vitejs.dev/)

Welcome to my professional portfolio website! This modern, responsive portfolio showcases my work as a Senior Frontend Developer, built with cutting-edge technologies and best practices in web development.

🔗 [View Live Demo](https://manishankar23.github.io/Portfolio)

![Portfolio Preview](./public/profile.jpg)

## ✨ Features

- **📱 Responsive Design**
  - Mobile-first approach
  - Fluid layouts and flexible grids
  - Optimized for all device sizes (320px to 4K)
  - Touch-friendly navigation

- **🎨 Modern UI/UX**
  - Dark/Light mode with system preference detection
  - Smooth scroll behaviors
  - Elegant animations and transitions
  - Micro-interactions for better user engagement
  - Custom cursor effects

- **⚡ Performance Optimized**
  - Lazy loading of images and components
  - Code splitting for faster initial load
  - Optimized asset delivery
  - Efficient state management
  - 90+ Lighthouse score

- **♿ Accessibility**
  - WCAG 2.1 AA compliant
  - Proper heading hierarchy
  - ARIA labels and roles
  - Keyboard navigation support
  - Screen reader friendly

- **📨 Interactive Features**
  - Real-time form validation
  - EmailJS powered contact form
  - Social media integration
  - Downloadable resume
  - Project showcase with live demos

- **🔍 SEO Optimized**
  - Semantic HTML structure
  - Rich meta tags
  - Schema.org structured data
  - Open Graph and Twitter Card support
  - XML sitemap

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.2.0 with TypeScript 4.9.5
- **Styling**: Tailwind CSS 3.3.0
- **Build Tool**: Vite 4.4.0
- **State Management**: React Context API
- **Animations**: Framer Motion

### Development Tools
- **Package Manager**: npm
- **Version Control**: Git
- **Code Quality**: ESLint, Prettier
- **Type Checking**: TypeScript

### Key Libraries
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Form Handling**: React Hook Form
- **Date Formatting**: Day.js

### Infrastructure
- **Hosting**: Netlify/Vercel
- **CI/CD**: GitHub Actions
- **Analytics**: Google Analytics 4
- **Monitoring**: Sentry

## � Getting Started

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/manishankar23/Portfolio.git
cd Portfolio
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure Environment Variables**
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_GA_TRACKING_ID=your_ga_tracking_id
```

4. **Configure EmailJS**
- Sign up at [EmailJS](https://www.emailjs.com/)
- Create a service and email template
- Update environment variables with your credentials

5. **Start Development Server**
```bash
npm run dev
# or
yarn dev
```

Your site should now be running at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## 🔧 EmailJS Setup

### Template Variables
Your EmailJS template should include these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message content
- `{{to_name}}` - Recipient name (optional)

### Example Template
```
Subject: New Contact Form Submission: {{subject}}

Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up environment variables if needed

### Vercel
1. Connect your repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── About.tsx      # About section
│   ├── Contact.tsx    # Contact form
│   ├── Hero.tsx       # Hero section
│   └── ...
├── contexts/          # React contexts
│   └── ThemeContext.tsx
├── hooks/             # Custom React hooks
│   └── useActiveSection.ts
├── utils/             # Utility functions
│   └── emailjs.ts
└── App.tsx           # Main app component

public/              # Static assets
├── favicon.png
├── profile.jpg
└── ...
```

## 🎨 Design System

### Colors
- **Primary**: `#3B82F6` - Brand blue
- **Secondary**: `#10B981` - Accent green
- **Background**: 
  - Light: `#FFFFFF`
  - Dark: `#1F2937`
- **Text**: 
  - Light: `#1F2937`
  - Dark: `#F9FAFB`

### Typography
- **Headings**: Inter
- **Body**: Inter
- **Code**: Fira Code

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Mani Shankar S - [LinkedIn](https://linkedin.com/in/manishankar) - email@example.com

Project Link: [https://github.com/manishankar23/Portfolio](https://github.com/manishankar23/Portfolio)

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [EmailJS](https://www.emailjs.com/)
- [Lucide Icons](https://lucide.dev/)
- **Secondary**: Teal (#14B8A6)
- **Accent**: Orange (#F97316)
- **Neutrals**: Gray scale

### Typography
- **Headings**: System font stack
- **Body**: System font stack
- **Line Height**: 150% for body, 120% for headings

### Spacing
- **Grid System**: 8px base unit
- **Touch Targets**: Minimum 44px

## 🔍 Performance

- **Lighthouse Scores**: 90+ for Performance, Accessibility, SEO
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Optimized with code splitting and lazy loading

## 📧 Contact Form Features

- **Real-time Validation**: Client-side form validation
- **Error Handling**: User-friendly error messages
- **Success States**: Confirmation feedback
- **Email Integration**: Powered by EmailJS
- **Accessibility**: Full keyboard navigation and screen reader support

## 🧪 Testing

Run the linter:
```bash
npm run lint
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).

---

Built with ❤️ and lots of coffee ☕