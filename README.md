# Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## 🔗 Live Demo

Visit the website at [kartikparekh.com](https://kartikparekh.com) (Replace with your custom domain once set up)

![Portfolio Screenshot](screenshot.png)

## ✨ Features

- Responsive design that works on all devices
- Clean and modern UI with smooth animations and transitions
- Interactive sections: About, Education, Skills, Contact
- Contact form using Formspree integration
- Social media links integration
- Optimized performance with hardware-accelerated animations

## 🛠️ Technologies Used

- HTML5
- CSS3 (with custom animations)
- Vanilla JavaScript
- BoxIcons for icons
- Formspree for contact form handling

## 🚀 Setup and Deployment

### Local Development

1. Clone this repository:
   ```
   git clone https://github.com/Kartik478/Portfolio.git
   cd Portfolio
   ```

2. Open `index.html` in your browser to view the website locally.

3. Make changes to the code and refresh your browser to see the updates.

### Deployment Options

#### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Set the source branch to `main` and folder to `/ (root)`
4. GitHub will provide you with a URL for your published site

#### Netlify / Vercel

1. Sign up for [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)
2. Connect your GitHub repository
3. Configure build settings (not required for static sites)
4. Deploy

## 🌐 Setting Up Custom Domain

### 1. Purchase a Domain

Purchase a domain from providers like:
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### 2. Configure DNS Settings

#### For GitHub Pages:

1. In your GitHub repository, go to Settings > Pages
2. Enter your custom domain name and save
3. In your domain registrar's DNS settings, add the following records:
   - Type: A
   - Host: @
   - Value: 185.199.108.153
   - Value: 185.199.109.153
   - Value: 185.199.110.153
   - Value: 185.199.111.153
   - TTL: 1 hour (or 3600 seconds)
4. Add a CNAME record:
   - Type: CNAME
   - Host: www
   - Value: yourusername.github.io
   - TTL: 1 hour

#### For Netlify:

1. In Netlify, go to Site settings > Domain management > Add custom domain
2. Enter your domain name
3. Follow Netlify's instructions to update your DNS settings or let Netlify manage your DNS

#### For Vercel:

1. In your Vercel project, go to Settings > Domains
2. Add your domain name
3. Follow the instructions to configure your DNS settings

### 3. SSL Certificate

Most platforms offer free SSL certificates:
- GitHub Pages: Automatically enforces HTTPS
- Netlify: Automatically provisions Let's Encrypt certificates
- Vercel: Automatically issues certificates

### 4. Verify Setup

After DNS propagation (usually 24-48 hours):
1. Visit your domain to ensure it works
2. Check that HTTPS is working properly
3. Test on different devices and browsers

## 🔧 Customization

- Replace content in `index.html` with your personal information
- Modify styles in `style.css` to match your preferred color scheme
- Update images in the root directory with your own photos
- Adjust animations and transitions in both CSS and JavaScript

## 📝 Performance Optimization

This website has been optimized for performance:
- Hardware-accelerated animations using transform and opacity
- Debounced scroll events for smooth scrolling
- Lazy loading of elements as they enter the viewport
- Optimized image sizes for faster loading

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or feedback, feel free to reach out:
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]
