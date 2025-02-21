# BrainMuffin AI Consulting Website

The official website for BrainMuffin, a leading AI consulting firm specializing in:
- AI Strategy Development
- Machine Learning Implementation
- Data Science Solutions
- AI-powered Business Transformation

Built with modern web technologies for optimal performance and maintainability.

## ✨ Features

### Business Features
- **AI Service Showcase**
- **Client Success Stories**
- **Interactive AI Demos**
- **Expert Team Profiles**
- **AI Insights Blog**
- **Contact & Consultation Forms**

### Technical Features
- **Astro v5.1.2** - Modern static site generator
- **Tailwind CSS v3.4.17** - Utility-first CSS framework
- **ShadCN UI** - Beautifully designed components (using Radix UI v1.2.2+)
- **Framer Motion v11.15.0** - Production-ready motion library
- **React v18.2.0** - Interactive UI components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended)

### Installation
1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

## 🛠️ Technology Integration

### Tailwind CSS
- Pre-configured with ShadCN UI
- Customizable through `tailwind.config.mjs`
- Includes dark mode support

### ShadCN UI
- Pre-configured components in `src/components/ui`
- Easily customizable through `components.json`
- Includes:
  - Accordion
  - Button
  - Dropdown Menu
  - Navigation Menu
  - Sheet
  - Mode Toggle

### Framer Motion
- Pre-configured for React components
- Example animations in `src/components/ui`
- Documentation: [Framer Motion Docs](https://www.framer.com/motion/)

### React 18
- Integrated with Astro's React integration
- Example components in `src/components`
- Supports React Server Components

## 📅 Development Roadmap

### Phase 1: Core Website
- [x] AI Service Pages
- [x] Team Profiles
- [ ] Client Case Studies

### Phase 2: AI Integration
- [ ] Interactive AI Demos
- [ ] AI Blog Integration
- [ ] AI-powered Contact Forms

### Phase 3: Advanced Features
- [ ] AI Chatbot Integration
- [ ] Predictive Analytics Dashboard
- [ ] AI Resource Library

## 🎨 Component Usage

### AI Service Card
```tsx
import { ServiceCard } from '@/components/ui/service-card';

export default function AIServices() {
  return (
    <ServiceCard 
      title="AI Strategy"
      description="Transform your business with AI"
      icon="brain"
    />
  );
}
```

### Adding Framer Motion Animations
```tsx
import { motion } from 'framer-motion';

export default function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello World
    </motion.div>
  );
}
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📚 Documentation Links

### AI Resources
- [AI Ethics Guidelines](https://ai-ethics.org)
- [Machine Learning Best Practices](https://ml-best-practices.com)
- [AI Implementation Frameworks](https://ai-frameworks.io)

### Technical Documentation
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
