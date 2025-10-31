# Click Commerce Hub — Next.js Landing (Light Mode)

This repository scaffold contains a Next.js landing page (Light Mode, Navy accent) ready for deployment on Vercel. It uses Tailwind CSS for styling and includes SEO, meta tags, Amazon SPN highlights, contact form wiring (mailto demo), and WhatsApp CTA. Framer Motion is included for subtle animations.

## Project file tree

```
click-commerce-hub-next/
├─ package.json
├─ next.config.js
├─ postcss.config.js
├─ tailwind.config.js
├─ public/
│  └─ CCHLOGOSPARK.png
├─ pages/
│  ├─ _app.js
│  └─ index.js
├─ components/
│  ├─ Header.js
│  └─ Footer.js
├─ styles/
│  └─ globals.css
└─ .env.example
```

## How to use
1. Create a new directory and add the files below into the respective locations.
2. Run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.
4. Deploy to Vercel for best results.

## package.json

```json
{
  "name": "click-commerce-hub-next",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^10.12.16",
    "next": "14.3.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.23",
    "tailwindcss": "^3.5.2"
  }
}
```

## next.config.js

```js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}
module.exports = nextConfig
```

## postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

## tailwind.config.js

```js
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0D1B2A',
        accent1: '#0D3B66',
        accent2: '#274C77'
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

## pages/_app.js

```jsx
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }){
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
```

## components/Header.js

```jsx
import Link from 'next/link'

export default function Header(){
  return (
    <header className="w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <img src="/CCHLOGOSPARK.png" alt="Click Commerce Hub" className="w-14 h-14 object-contain rounded-md" />
        <div>
          <div className="font-heading font-semibold text-lg">Click Commerce Hub</div>
          <div className="text-sm text-gray-500">E-commerce Account Management & Digital Marketing</div>
        </div>
      </div>

      <nav className="flex items-center gap-6">
        <Link href="#overview" className="text-gray-600 hover:text-primary">Overview</Link>
        <Link href="#services" className="text-gray-600 hover:text-primary">Services</Link>
        <Link href="#amazon" className="text-gray-600 hover:text-primary">Amazon</Link>
        <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold">Get a Quote</a>
      </nav>
    </header>
  )
}
```

## components/Footer.js

```jsx
export default function Footer(){
  return (
    <footer className="w-full mt-12 py-8 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600">
        <div>{`© ${new Date().getFullYear()} Click Commerce Hub — All rights reserved.`}</div>
        <div className="text-sm">Authorized Amazon SPN • Seller Affiliate • <a href="#contact" className="text-primary">Get a Quote</a></div>
      </div>
    </footer>
  )
}
```

## pages/index.js

```jsx
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div>
      <Head>
        <title>Click Commerce Hub — Empowering Sellers</title>
        <meta name="description" content="Authorized Amazon SPN & Seller Affiliate Partner. Cataloging, Account Management, Reinstatement, Ads Optimization, SEO, SMM & Web Development for marketplace sellers." />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <Header />

        <section className="mt-8 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
            <h1 className="text-3xl font-heading font-semibold">Empowering Sellers to Scale on Every Marketplace</h1>
            <p className="mt-4 text-gray-600">Authorized Amazon SPN & Seller Affiliate Partner. We provide cataloging, account management, reinstatement, ad optimization and full-stack digital marketing to grow your sales and reduce operational friction.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold">Get Started</a>
              <a href="https://wa.me/916200017130?text=Hi%20Click%20Commerce%20Hub%2C%20I%27m%20interested" className="px-4 py-2 rounded-md border border-gray-200 text-gray-700">Chat on WhatsApp</a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="inline-flex items-center gap-3 px-3 py-2 rounded-full border bg-white shadow-sm">
                <img src="/CCHLOGOSPARK.png" alt="logo" className="w-8 h-8 rounded-sm" />
                <div>
                  <div className="font-semibold text-sm">Authorized Amazon SPN</div>
                  <div className="text-xs text-gray-500">Seller Affiliate Program Member</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">Now offering direct onboarding support for sellers.</div>
            </div>
          </motion.div>

          <motion.aside initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="bg-white rounded-xl p-6 shadow">
            <div className="font-semibold">Quick Contact</div>
            <div className="mt-3 text-sm text-gray-600">Email: <a href="mailto:management@clickcommercehub.in" className="text-primary">management@clickcommercehub.in</a></div>
            <div className="mt-2 text-sm text-gray-600">WhatsApp: <a href="tel:+916200017130" className="text-primary">+91 62000 17130</a></div>

            <div className="mt-4 flex gap-2">
              <a href="#contact" className="px-3 py-2 rounded-md bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold">Request Quote</a>
              <a href="#services" className="px-3 py-2 rounded-md border border-gray-100 text-gray-700">View Services</a>
            </div>
          </motion.aside>
        </section>

        <section id="overview" className="mt-10">
          <h2 className="text-xl font-semibold">Company Overview</h2>
          <div className="mt-3 bg-white rounded-xl p-6 shadow text-gray-600">Click Commerce Hub is a professional e-commerce account management and digital marketing service provider. We specialize in managing seller accounts on platforms such as Amazon, Flipkart, Meesho, Myntra, JioMart, Ajio, Etsy, and eBay while also offering SEO, social media marketing, graphics design, web development, and email marketing services.</div>
        </section>

        <section id="services" className="mt-10">
          <h2 className="text-xl font-semibold">Services Overview</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 shadow">
              <h3 className="font-semibold">Amazon Services (Featured)</h3>
              <p className="text-sm text-gray-600 mt-2">Complete Amazon support — from seller onboarding to ad optimization and account reinstatement. We are an authorized Amazon SPN & Seller Affiliate partner and can help you get onboarded quickly.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow">
              <h3 className="font-semibold">Marketplace Expansion</h3>
              <p className="text-sm text-gray-600 mt-2">Flipkart • Meesho • Myntra • JioMart • Ajio • Etsy • eBay • Snapdeal — listing, cataloging, and marketplace-specific performance optimization.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow">
              <h3 className="font-semibold">Digital Marketing</h3>
              <p className="text-sm text-gray-600 mt-2">SEO, Social Media Marketing, Graphics & Logo design, Web Development, Email Marketing and Brand-building services to grow your own channels and traffic.</p>
            </div>
          </div>
        </section>

        <section id="amazon" className="mt-10 grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Amazon Services — For Beginner Sellers & Growth-Stage Brands</h2>
            <p className="text-sm text-gray-600 mt-3"><strong>What is Amazon Account Management?</strong> Amazon Account Management includes listing creation, catalog optimization, inventory & pricing management, advertising, performance monitoring and handling customer communications. For beginners it means we take the heavy lifting so you can focus on product & sourcing.</p>

            <p className="text-sm text-gray-600 mt-3"><strong>Why it matters for beginner sellers:</strong> A correct setup prevents suspensions, improves discoverability, helps win the buy-box, and increases conversions.</p>

            <h3 className="mt-4 font-semibold">How Click Commerce Hub helps — step-by-step</h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              <div className="p-3 border rounded">
                <div className="font-semibold">1. Onboard Correctly</div>
                <div className="text-xs text-gray-500 mt-1">Document verification, GST & compliance, brand registry guidance and SPN-enabled flows for faster onboarding.</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-semibold">2. Listing & Cataloging</div>
                <div className="text-xs text-gray-500 mt-1">SEO titles, bullet points, category mapping, A+ content and image compliance to improve visibility.</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-semibold">3. Advertising & Growth</div>
                <div className="text-xs text-gray-500 mt-1">Sponsored Ads management, bid optimization, keyword harvesting and campaign scaling focused on profitable growth.</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-semibold">4. Account Health & Reinstatement</div>
                <div className="text-xs text-gray-500 mt-1">Policy compliance monitoring and expert POA creation for fast reinstatement if issues arise.</div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4"><strong>Deliverables:</strong> Onboarding checklist, optimized listing files (CSV/XML), A+ content drafts, ad campaign reports, performance dashboard and monthly review calls.</p>
          </div>

          <aside className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3">
              <img src="/CCHLOGOSPARK.png" alt="logo" className="w-14 h-14 rounded-md" />
              <div>
                <div className="font-semibold">Authorized Amazon SPN</div>
                <div className="text-xs text-gray-500">Official service provider & seller affiliate program member</div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <a href="#contact" className="px-3 py-2 rounded-md bg-gradient-to-r from-accent1 to-accent2 text-white text-center">Request Amazon Onboarding</a>
              <a href="https://wa.me/916200017130?text=Hi%20Click%20Commerce%20Hub%2C%20I%20need%20help%20with%20Amazon%20onboarding" className="px-3 py-2 rounded-md border text-center">Chat on WhatsApp</a>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              <strong>Why choose our SPN service?</strong>
              <ul className="mt-2 list-disc ml-4 text-gray-500">
                <li>Faster onboarding through SPN flows</li>
                <li>Direct support for seller-affiliate enrollments</li>
                <li>Dedicated account manager & reporting</li>
              </ul>
            </div>
          </aside>
        </section>

        <section id="process" className="mt-10">
          <h2 className="text-xl font-semibold">How We Work</h2>
          <div className="mt-4 grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-xl shadow text-center">Onboard<br/><span className="text-xs text-gray-500">Account setup & compliance</span></div>
            <div className="p-4 bg-white rounded-xl shadow text-center">Optimize<br/><span className="text-xs text-gray-500">Listing & Images</span></div>
            <div className="p-4 bg-white rounded-xl shadow text-center">Advertise<br/><span className="text-xs text-gray-500">CPC campaigns & promos</span></div>
            <div className="p-4 bg-white rounded-xl shadow text-center">Grow<br/><span className="text-xs text-gray-500">Reporting & scaling</span></div>
          </div>
        </section>

        <section id="testimonials" className="mt-10">
          <h2 className="text-xl font-semibold">Testimonials</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl shadow text-sm text-gray-600">"Click Commerce Hub helped us onboard to Amazon and improved visibility within weeks." — D2C Brand</div>
            <div className="p-4 bg-white rounded-xl shadow text-sm text-gray-600">"Fast responses and solid reporting. Our ad ACoS reduced after optimization." — Electronics Seller</div>
            <div className="p-4 bg-white rounded-xl shadow text-sm text-gray-600">"Professional team, step-by-step onboarding and great support." — FMCG Seller</div>
          </div>
        </section>

        <section id="contact" className="mt-10">
          <h2 className="text-xl font-semibold">Contact / Request a Quote</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600">Tell us about your store or requirement — we'll review and share a customised onboarding plan and rate card.</p>

              <form className="mt-4" onSubmit={(e)=>{e.preventDefault();
                const form=new FormData(e.target);
                const name=form.get('name');
                const business=form.get('business');
                const email=form.get('email');
                const phone=form.get('phone');
                const service=form.get('service');
                const message=form.get('message');
                const subject=`Lead: ${service} - ${business||name}`;
                const body=`Name: ${name}
Business: ${business}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}

--
Sent from Click Commerce Hub`;
                window.location.href=`mailto:management@clickcommercehub.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}>
                <input name="name" placeholder="Full name" required className="w-full p-3 border rounded mb-3" />
                <input name="business" placeholder="Business / Brand name" required className="w-full p-3 border rounded mb-3" />
                <input name="email" type="email" placeholder="Email" required className="w-full p-3 border rounded mb-3" />
                <input name="phone" placeholder="Phone / WhatsApp" required className="w-full p-3 border rounded mb-3" />
                <select name="service" className="w-full p-3 border rounded mb-3">
                  <option>Amazon Services</option>
                  <option>Flipkart</option>
                  <option>Multi-Marketplaces</option>
                  <option>Digital Marketing</option>
                </select>
                <textarea name="message" rows="4" placeholder="Brief about your requirement" className="w-full p-3 border rounded mb-3"></textarea>
                <div className="flex gap-3">
                  <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-accent1 to-accent2 text-white">Send Request</button>
                  <a href="https://wa.me/916200017130?text=Hi%20Click%20Commerce%20Hub%2C%20I%27m%20interested" className="px-4 py-2 rounded-md border">Chat on WhatsApp</a>
                </div>
              </form>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <div className="font-semibold">Contact Info</div>
              <div className="mt-3 text-sm text-gray-600">Email: management@clickcommercehub.in</div>
              <div className="mt-2 text-sm text-gray-600">WhatsApp: +91 62000 17130</div>
              <div className="mt-2 text-sm text-gray-600">Address: Saubaghya Sharma Path, Bailey Road, Patna, Bihar</div>

              <div className="mt-4 flex gap-2">
                <a href="mailto:management@clickcommercehub.in?subject=Request%20for%20Service%20Info" className="px-3 py-2 rounded-md bg-gradient-to-r from-accent1 to-accent2 text-white">Email Us</a>
                <a href="#process" className="px-3 py-2 rounded-md border">How we work</a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
```

## styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root{--primary:#0D1B2A;--accent1:#0D3B66;--accent2:#274C77}

html,body{background:linear-gradient(180deg,#ffffff,#f6f8fb);}

.font-heading{font-family:Poppins,Inter, sans-serif}
.text-primary{color:var(--primary)}

.card-shadow{box-shadow:0 10px 30px rgba(13,27,42,0.06)}
```

## public/CCHLOGOSPARK.png

Download the logo from your GitHub repo and place it at `public/CCHLOGOSPARK.png` for local development. The page references `/CCHLOGOSPARK.png`.

Original URL:
`https://raw.githubusercontent.com/sexyspy001/clickcommercehub_logo/main/CCHLOGOSPARK.png`

## .env.example

```
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=PIXEL_ID
EMAIL_FROM=management@clickcommercehub.in
```

## Deployment notes
- Deploy to Vercel for automatic Next.js support.
- Replace mailto handling with a serverless API or third-party form service for production lead capture.
- Add GA4 and Meta Pixel IDs to environment variables and integrate analytics when ready.

If you want, I can now:
1. Export this project as a downloadable ZIP and provide it here,
2. Create a GitHub repo structure and provide git commands with files to paste,
3. Generate additional dedicated service pages inside the same Next.js app.

Tell me which option you want next.
