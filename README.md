# Maria Kishore's Professional Portfolio

A modern, animated, and professional portfolio website built with HTML5, CSS3, and JavaScript.

## 🎨 Features

### Design & Aesthetics
- **Modern Gradient Design**: Professional color scheme with purple, indigo, and pink gradients
- **Dark Theme**: Easy on the eyes with a sleek dark background
- **Responsive Layout**: Fully responsive design that works on all devices
- **Professional Typography**: Clean, readable fonts with proper hierarchy

### Animations & Interactions
- ✨ **Smooth Scroll Animations**: Elements fade in as you scroll
- 🎯 **Hover Effects**: Interactive elements respond to user interaction
- 🌟 **Floating Elements**: Cards with subtle floating animations
- 💫 **Loading Animations**: Progress bars and counter animations
- 🎪 **Parallax Effects**: Dynamic parallax scrolling
- 📊 **Progress Bars**: Animated proficiency level indicators
- 🎬 **Ripple Effects**: Button click animations

### Sections Included
1. **Navigation Bar**: Sticky navigation with smooth scrolling
2. **Hero Section**: Eye-catching landing area with call-to-action buttons
3. **About Me**: Personal introduction with statistics
4. **Skills**: Technical skills categorized with proficiency levels
5. **Experience**: Timeline view of career progression
6. **Projects**: Featured projects with descriptions and tech stacks
7. **Contact**: Contact form and social media links
8. **Footer**: Professional footer with copyright

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS with animations
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🚀 How to Use

1. **Open in Browser**: Simply open `index.html` in your web browser
2. **No Server Required**: This is a static website, works offline
3. **Customize Content**: Edit `index.html` to add your own information

## 🎯 Customization Guide

### Update Personal Information

Open `index.html` and update:

**Hero Section** (Lines 48-54):
```html
<h1 class="hero-title">Hi, I'm <span class="gradient-text">Your Name</span></h1>
<p class="hero-subtitle">Your Title | Your Skills</p>
<p class="hero-description">Your professional summary</p>
```

**About Section** (Lines 109-112):
```html
<p>Update your about text here...</p>
```

**Skills** (Lines 134-162):
Replace skill tags with your actual skills:
```html
<span class="skill-tag">Your Skill</span>
```

**Experience** (Lines 207-241):
Update job titles, companies, and descriptions:
```html
<h3>Your Job Title</h3>
<p class="timeline-company">Your Company</p>
```

**Projects** (Lines 273-343):
Update project cards with your actual projects:
```html
<h3>Your Project Name</h3>
<p>Your project description</p>
```

**Contact** (Lines 369-376):
Update your contact information:
```html
<p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
<p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
```

**Social Links** (Lines 398-403):
Update your social media URLs:
```html
<a href="https://github.com/yourprofile" class="social-icon" title="GitHub">
<a href="https://linkedin.com/in/yourprofile" class="social-icon" title="LinkedIn">
```

### Customize Colors

Edit the CSS variables in `styles.css` (Lines 7-14):

```css
:root {
    --primary-color: #6366f1;        /* Main color */
    --secondary-color: #8b5cf6;      /* Secondary color */
    --accent-color: #ec4899;         /* Accent color */
    --dark-bg: #0f172a;              /* Dark background */
    --dark-card: #1e293b;            /* Card background */
}
```

### Change Gradient Colors

Update project card gradients in `index.html` (Lines 297-319):

```html
<div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
```

Or update the CSS gradient variables:

```css
--gradient-1: linear-gradient(135deg, #YOUR-COLOR-1 0%, #YOUR-COLOR-2 100%);
```

### Add/Remove Sections

1. **Copy a section HTML** from `index.html`
2. **Paste and modify** with your content
3. **Update navigation link** in the navbar
4. The CSS is already optimized for all sections

### Profile Picture

Replace the placeholder image URL in the About section (Line 142):

```html
<img src="https://via.placeholder.com/300x300?text=Maria+Kishore" alt="Your Name">
```

With your own image:
```html
<img src="path/to/your/image.jpg" alt="Your Name">
```

## 🎨 Color Schemes

### Professional Blue-Purple (Default)
```css
Primary: #6366f1 (Indigo)
Secondary: #8b5cf6 (Violet)
Accent: #ec4899 (Pink)
```

### Teal-Orange Alternative
```css
Primary: #06b6d4 (Cyan)
Secondary: #0891b2 (Teal)
Accent: #f97316 (Orange)
```

### Green-Blue Alternative
```css
Primary: #10b981 (Emerald)
Secondary: #0ea5e9 (Sky)
Accent: #f59e0b (Amber)
```

## ⚙️ Browser Compatibility

- ✅ Chrome/Chromium (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

All animations and layouts automatically adjust for smaller screens.

## 🔧 Features Breakdown

### JavaScript Features Included

1. **Smooth Navigation**: Click nav links for smooth scrolling
2. **Active Section Highlighting**: Nav links highlight current section
3. **Contact Form**: Interactive form with success feedback
4. **Hamburger Menu**: Mobile-friendly menu toggle
5. **Parallax Effects**: Dynamic parallax on scroll
6. **Counter Animations**: Animated stat counters
7. **Scroll Progress**: Visual scroll progress bar
8. **Button Ripple Effects**: Material Design ripple animation
9. **Intersection Observer**: Efficient scroll animations

### CSS Animation Effects

1. **Fade In/Up**: Elements fade in as they enter viewport
2. **Float Animation**: Subtle floating motion on elements
3. **Gradient Shift**: Animated gradient color shifts
4. **Pulse Animation**: Timeline markers pulse effect
5. **Expand Width**: Progress bars animate to full width
6. **Rotate Gradient**: Border gradient rotates continuously
7. **Heartbeat**: Social media icons heartbeat on hover
8. **Bounce**: Scroll indicator bounces

## 🎬 Animation Timing

- **Page Load**: 0.6s fade in
- **Section Transitions**: 0.8s ease out
- **Hover Effects**: 0.3s smooth transition
- **Floating Elements**: 6s infinite animation
- **Progress Bars**: 1.5s expand animation

## 📊 Performance Optimizations

- Minimal file sizes
- CSS animations use GPU acceleration
- Lazy loading ready for images
- Debounced scroll events
- Optimized intersection observers
- No external dependencies (except Font Awesome icons)

## 🌐 Deployment

### Deploy on GitHub Pages
1. Create a GitHub repository named `username.github.io`
2. Upload `index.html`, `styles.css`, and `script.js`
3. Your portfolio will be live at `https://username.github.io`

### Deploy on Netlify
1. Drag and drop your portfolio folder to Netlify
2. Get a live URL automatically

### Deploy on Vercel
1. Upload to Vercel
2. Get instant deployment with custom domain support

## 📝 SEO Optimization Tips

Add meta tags to `index.html` head:

```html
<meta name="description" content="Maria Kishore - Full Stack Developer Portfolio">
<meta name="keywords" content="Developer, Web Development, MERN, Full Stack">
<meta name="author" content="Maria Kishore">
<meta property="og:title" content="Maria Kishore - Portfolio">
<meta property="og:description" content="Full Stack Developer specializing in modern web technologies">
```

## 🎓 Learning Resources

- **HTML/CSS**: [MDN Web Docs](https://developer.mozilla.org)
- **JavaScript**: [JavaScript.info](https://javascript.info)
- **Animations**: [CSS-Tricks](https://css-tricks.com)
- **Design**: [Dribbble](https://dribbble.com)

## 🤝 Support & Feedback

For improvements or customizations, feel free to modify the code. The codebase is well-commented and organized for easy understanding and modification.

## 📄 License

This portfolio template is free to use and modify for personal use.

---

**Created with ❤️ for aspiring developers**

Enjoy building your professional portfolio! 🚀
