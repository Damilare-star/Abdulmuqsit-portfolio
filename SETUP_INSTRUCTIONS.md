# Setup Instructions for Abdulmuqsit's Portfolio

## Quick Start

1. **Install Dependencies**
\`\`\`bash
npm install
\`\`\`

2. **Start Development Server**
\`\`\`bash
npm run dev
\`\`\`

The site will open at http://localhost:3000

## EmailJS Configuration (Required for Contact Form)

The contact form uses EmailJS to send emails. Follow these steps:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

### Step 2: Create Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Message from {{name}}

**Content:**
\`\`\`
From: {{name}}
Email: {{email}}

Message:
{{message}}
\`\`\`

4. Save and copy your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Code
Open \`src/components/Contact.jsx\` and replace:

\`\`\`javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
\`\`\`

## Customization Guide

### 1. Personal Information

**Update Name & Title** - \`src/components/Hero.jsx\`
\`\`\`javascript
<span className="gradient-text">
  Your Name Here
</span>
\`\`\`

**Update About Section** - \`src/components/About.jsx\`
- Change profile image URL
- Update bio text
- Update location, email, experience

**Update Social Links** - \`src/components/Footer.jsx\` and \`src/components/Contact.jsx\`
\`\`\`javascript
const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  // ... update URLs
];
\`\`\`

### 2. Projects

Edit \`src/data/projects.js\`:

\`\`\`javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Project description",
  image: "https://your-image-url.com/image.jpg",
  tech: ["React", "Tailwind CSS"],
  liveDemo: "https://your-demo-link.com",
  github: "https://github.com/yourusername/project"
}
\`\`\`

### 3. Skills

Edit \`src/data/skills.js\`:

\`\`\`javascript
{
  name: "Skill Name",
  icon: IconComponent,
  level: 90, // 0-100
  color: "#hexcolor"
}
\`\`\`

### 4. Add Your CV

1. Place your CV file in the \`public\` folder
2. Name it \`cv.pdf\`
3. The download button in About section will work automatically

### 5. Update SEO

Edit \`index.html\`:

\`\`\`html
<meta name="description" content="Your description" />
<meta name="keywords" content="Your, Keywords" />
<meta property="og:title" content="Your Name - Title" />
\`\`\`

## Build for Production

\`\`\`bash
npm run build
\`\`\`

The production files will be in the \`dist\` folder.

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Netlify
1. Run \`npm run build\`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the \`dist\` folder

### GitHub Pages
1. Install gh-pages: \`npm install --save-dev gh-pages\`
2. Add to package.json:
\`\`\`json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
\`\`\`
3. Run: \`npm run deploy\`

## Troubleshooting

### Issue: Contact form not working
- Check EmailJS credentials are correct
- Check browser console for errors
- Verify EmailJS service is active

### Issue: Images not loading
- Check image URLs are valid
- Use absolute URLs for external images
- For local images, place in \`public\` folder

### Issue: 3D background not showing
- Check Three.js dependencies installed
- Try refreshing the page
- Check browser console for WebGL errors

## Support

For issues or questions:
- Check the README.md
- Review the code comments
- Open an issue on GitHub

---

Happy coding! 🚀
