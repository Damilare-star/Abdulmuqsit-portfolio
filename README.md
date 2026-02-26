# Abdulmuqsit Abdulquadri - Portfolio Website

A modern, high-end personal portfolio website built with React, Tailwind CSS, and cutting-edge web technologies.

## 🚀 Features

- **Modern Design**: Glassmorphism UI with gradient accents
- **3D Background**: Interactive Three.js animated background
- **Smooth Animations**: Framer Motion for seamless transitions
- **Fully Responsive**: Optimized for all devices
- **Dark Theme**: Professional dark mode by default
- **Working Contact Form**: EmailJS integration
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance**: Lazy loading and code splitting

## 🛠️ Technologies

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Three.js (@react-three/fiber & drei)
- EmailJS
- React Icons
- React Type Animation

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/abdulmuqsit/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Configure EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the credentials in \`src/components/Contact.jsx\`:
     - \`YOUR_SERVICE_ID\`
     - \`YOUR_TEMPLATE_ID\`
     - \`YOUR_PUBLIC_KEY\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Build for production:
\`\`\`bash
npm run build
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Contact.jsx
│   ├── ThreeBackground.jsx
│   └── Loader.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProjectsPage.jsx
│   ├── ContactPage.jsx
│   └── NotFound.jsx
├── data/
│   ├── projects.js
│   └── skills.js
├── App.jsx
├── main.jsx
└── index.css
\`\`\`

## 🎨 Customization

### Update Personal Information

1. **Name & Title**: Edit \`src/components/Hero.jsx\`
2. **About Section**: Edit \`src/components/About.jsx\`
3. **Projects**: Edit \`src/data/projects.js\`
4. **Skills**: Edit \`src/data/skills.js\`
5. **Social Links**: Edit \`src/components/Footer.jsx\` and \`src/components/Contact.jsx\`

### Add Your CV

Place your CV file in the \`public\` folder as \`cv.pdf\`

### Update Meta Tags

Edit \`index.html\` to update SEO meta tags

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: \`npm run build\`
2. Drag and drop the \`dist\` folder to [Netlify](https://netlify.com)

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Abdulmuqsit Abdulquadri**

- GitHub: [@abdulmuqsit](https://github.com/abdulmuqsit)
- LinkedIn: [Abdulmuqsit Abdulquadri](https://linkedin.com/in/abdulmuqsit-abdulquadri)
- Email: abdulmuqsit@example.com

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by Abdulmuqsit Abdulquadri
