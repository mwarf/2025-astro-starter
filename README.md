# Astro + Tailwind + ShadCN + Framer Motion + React 18 Starter

A comprehensive starter template combining modern web technologies for building fast, interactive websites.

## ✨ Features

- **Astro** - Modern static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Beautifully designed components
- **Framer Motion** - Production-ready motion library
- **React 18** - Interactive UI components

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

## 📅 Feature Roadmap

### Phase 1: Core Functionality
- [x] Astro + Tailwind integration
- [x] ShadCN UI components setup
- [x] Framer Motion integration
- [x] React 18 support

### Phase 2: Enhanced Features
- [ ] Authentication system
- [ ] API routes example
- [ ] Blog template
- [ ] E-commerce template

### Phase 3: Optimization
- [ ] Image optimization
- [ ] Performance benchmarks
- [ ] Accessibility improvements

## 🎨 Usage Examples

### Using ShadCN Components
```tsx
import { Button } from '@/components/ui/button';

export default function MyComponent() {
  return (
    <Button variant="outline">
      Click Me
    </Button>
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

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
