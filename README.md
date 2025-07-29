# BrokerConnect Frontend

A verified, trust-first platform empowering real estate brokers with digital profiles, lead management, and professional networking tools.

## 🏗️ Project Overview

BrokerConnect is a comprehensive real estate platform built with modern web technologies, designed to help brokers build verified profiles, capture leads, and grow their business through transparent and trustworthy interactions.

### Key Features

- ✅ **Verified Broker Profiles** - Complete KYC verification with license validation
- 📊 **Advanced Analytics** - Real-time metrics and insights dashboard
- 🎯 **Smart Lead Capture** - Advanced forms with management dashboard
- 🏠 **Listings Showcase** - Professional property portfolio display
- 💬 **Broker Wall** - Social feed for updates and engagement
- ⭐ **Reviews & Testimonials** - Trust-building through client feedback
- 🏆 **Gamification** - Badges, tiers, and recognition system
- 📱 **Mobile-First Design** - Responsive PWA with offline capabilities
- 🔐 **Trust & Security** - GDPR-compliant with end-to-end encryption

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Docker & Docker Compose (optional)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brokerconnect-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Development

1. **Start with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **View logs**
   ```bash
   docker-compose logs -f frontend
   ```

3. **Stop services**
   ```bash
   docker-compose down
   ```

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form management
- **Zustand** - State management
- **React Query** - Server state management

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **TypeScript** - Static type checking

### Infrastructure
- **Docker** - Containerization
- **Vercel/Netlify** - Deployment platforms
- **GitHub Actions** - CI/CD pipelines

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # Reusable UI components
│   ├── landing/           # Landing page sections
│   ├── layout/            # Layout components
│   ├── broker/            # Broker-specific components
│   ├── dashboard/         # Dashboard components
│   └── ui/                # Base UI components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── store/                 # State management
└── utils/                 # Helper functions
```

## 🎨 Design System

### Colors
- **Primary**: Blue theme for main actions and branding
- **Secondary**: Gray theme for secondary content
- **Success**: Green for positive actions and success states
- **Warning**: Yellow for warnings and highlights
- **Danger**: Red for errors and destructive actions

### Typography
- **Display Font**: Poppins (headings and hero text)
- **Body Font**: Inter (body text and UI elements)

### Components
The project uses a custom component system built on Tailwind CSS with:
- Buttons (primary, secondary, outline, ghost)
- Cards with consistent styling
- Form inputs with validation states
- Badges for status indicators
- Modal and dialog components

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow the established naming conventions
- Write descriptive commit messages
- Add comments for complex logic

### Component Guidelines
- Use functional components with hooks
- Implement proper TypeScript types
- Follow the single responsibility principle
- Use composition over inheritance

### State Management
- Use Zustand for client-side state
- Use React Query for server state
- Keep state as local as possible
- Use proper TypeScript types for state

## 📱 Responsive Design

The application follows a mobile-first approach:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

All components are designed to work seamlessly across all device sizes.

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Type checking
npm run type-check
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Environment Variables
Set the following variables in your production environment:
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_APP_URL` - Frontend application URL

### Docker Production
```bash
docker build -t brokerconnect-frontend .
docker run -p 3000:3000 brokerconnect-frontend
```

## 🛡️ Security

- All forms include CSRF protection
- Input validation on client and server
- Secure headers configured in Next.js
- Environment variables for sensitive data
- Regular dependency updates

## 📊 Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Bundle analysis with webpack-bundle-analyzer
- Lighthouse performance monitoring
- Core Web Vitals optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🆘 Support

If you encounter any issues or have questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation wiki

## 🗺️ Roadmap

### Phase 1 (Current)
- [x] Landing page and core layouts
- [x] Responsive design system
- [x] Basic component library
- [ ] Broker profile components
- [ ] Lead capture system

### Phase 2 (Next)
- [ ] Analytics dashboard
- [ ] Listings showcase
- [ ] Reviews and testimonials
- [ ] QR code generation
- [ ] Gamification elements

### Phase 3 (Future)
- [ ] Mobile application
- [ ] Advanced notifications
- [ ] Multi-language support
- [ ] Integration APIs
- [ ] Advanced analytics

---

Built with ❤️ by the BrokerConnect team