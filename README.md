# Ravikumar Gunti - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds
- **Responsive**: Mobile-first approach, works on all devices
- **Dark/Light Theme**: Toggle between themes with next-themes
- **Dynamic Routing**: Individual pages for each project
- **SEO Optimized**: Proper metadata and structure
- **Performance**: Optimized for speed and accessibility
- **Animations**: Smooth transitions with Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Ravikumar-2016/Portfolio2.O
   cd ravikumar-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

\`\`\`bash
npm run build
# or
yarn build
# or
pnpm build
\`\`\`

## 📁 Project Structure

\`\`\`
ravikumar-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── about.tsx
│   ├── contact.tsx
│   ├── education.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── project-card.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── data.ts
│   └── utils.ts
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
├── next.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
\`\`\`

## 🎨 Customization

### Adding New Projects

1. Open `lib/data.ts`
2. Add a new project object to the `projects` array:

\`\`\`typescript
{
  title: 'Your Project Name',
  slug: 'your-project-slug',
  category: 'Project Category',
  description: 'Brief description of your project',
  longDescription: 'Detailed description (optional)',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  github: 'https://github.com/your-username/repo',
  liveUrl: 'https://your-project-url.com'
}
\`\`\`

### Updating Personal Information

1. Edit the contact information in `components/contact.tsx`
2. Update social links in `components/hero.tsx` and `components/footer.tsx`
3. Modify the about section in `components/about.tsx`
4. Update skills in `components/skills.tsx`
5. Edit education details in `components/education.tsx`

### Changing Colors and Themes

1. Modify the color scheme in `tailwind.config.js`
2. Update CSS variables in `app/globals.css`
3. Customize gradient colors throughout the components

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure custom domain (optional)

### Deploy to GitHub Pages

1. Update `next.config.mjs` with your repository name
2. Build and export: `npm run build`
3. Deploy the `out` folder to GitHub Pages

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Focus indicators

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help with setup, feel free to reach out:

- Email: ravikumargunti837@gmail.com
- GitHub: [@Ravikumar-2016](https://github.com/Ravikumar-2016)
- LinkedIn: [Ravikumar Gunti](https://www.linkedin.com/in/ravikumar-gunti-8b360a2a8/)

---

**Built with ❤️ by Ravikumar Gunti**
