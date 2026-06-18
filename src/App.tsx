import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Brush,
  ChevronDown,
  Code2,
  GalleryHorizontalEnd,
  Megaphone,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  Palette,
  PenLine,
  Phone,
  Search,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  X,
  Zap,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Service = {
  name: string;
  slug: string;
  icon: typeof Palette;
  description: string;
  proof: string;
};

type ProjectCategory = {
  name: string;
  projects: Array<{ title: string; summary: string }>;
};

const phoneNumber = '+020 4578 9677';
const whatsappNumber = '02045789677';

const services: Service[] = [
  {
    name: 'Logo Design',
    slug: 'logo-design',
    icon: Palette,
    description: 'Distinctive identity marks built for recognition, recall, and confident launch moments.',
    proof: 'Identity systems, symbol suites, usage guides',
  },
  {
    name: 'Website Development',
    slug: 'website-development',
    icon: Code2,
    description: 'Fast, conversion-focused websites engineered with clean interfaces and durable front-end foundations.',
    proof: 'Responsive builds, CMS-ready pages, performance checks',
  },
  {
    name: 'Ecommerce Web Solutions',
    slug: 'ecommerce-web-solutions',
    icon: ShoppingCart,
    description: 'Online storefronts shaped around product discovery, frictionless checkout, and repeat purchase behavior.',
    proof: 'Catalog UX, checkout flows, retention journeys',
  },
  {
    name: 'Motion Graphics',
    slug: 'motion-graphics',
    icon: Zap,
    description: 'Animated brand moments that make campaigns, launch films, and interface stories feel memorable.',
    proof: 'Explainers, loops, social motion assets',
  },
  {
    name: 'App Design',
    slug: 'app-design',
    icon: MonitorSmartphone,
    description: 'Mobile and product interfaces mapped for clarity, habit formation, and polished daily use.',
    proof: 'User flows, design systems, clickable prototypes',
  },
  {
    name: 'Creative Copywriting',
    slug: 'creative-copywriting',
    icon: PenLine,
    description: 'Brand language that makes offers sharper, pages easier to scan, and campaigns easier to trust.',
    proof: 'Web copy, launch narratives, conversion messaging',
  },
  {
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: Megaphone,
    description: 'Integrated campaign planning for visibility, qualified traffic, and measurable commercial traction.',
    proof: 'Paid social, funnel strategy, creative testing',
  },
  {
    name: 'Illustration Design',
    slug: 'illustration-design',
    icon: Brush,
    description: 'Custom visual systems that give complex products, services, and stories an ownable look.',
    proof: 'Editorial art, product scenes, character systems',
  },
  {
    name: 'Marketing Collateral',
    slug: 'marketing-collateral',
    icon: GalleryHorizontalEnd,
    description: 'Sales and campaign materials that keep every touchpoint consistent, persuasive, and launch-ready.',
    proof: 'Decks, brochures, pitch assets, event kits',
  },
  {
    name: 'SEO Services',
    slug: 'seo-services',
    icon: Search,
    description: 'Search-led site improvements that help strong design earn discovery, traffic, and durable authority.',
    proof: 'Technical audits, content maps, launch optimization',
  },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Packages', href: '/packages' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

const achievements = [
  { label: 'Satisfied Customers', value: '1,250+', icon: BadgeCheck },
  { label: 'Projects Completed', value: '2,800+', icon: PackageCheck },
  { label: 'Launched Products', value: '420+', icon: Boxes },
  { label: 'Daily Visits Generated', value: '95K+', icon: BarChart3 },
];

const projectCategories: ProjectCategory[] = [
  {
    name: 'Logo Design',
    projects: [
      { title: 'NexaMark Identity', summary: 'A flexible wordmark and symbol set for a venture-backed SaaS launch.' },
      { title: 'Orion Table', summary: 'Hospitality branding built around premium dining cues and strong signage.' },
    ],
  },
  {
    name: 'Web Design',
    projects: [
      { title: 'Atlas Ledger', summary: 'A high-trust fintech website with product education and gated lead capture.' },
      { title: 'Lumina Clinic', summary: 'A calm healthcare experience with simplified services and booking paths.' },
    ],
  },
  {
    name: 'Motion Graphics',
    projects: [
      { title: 'Pulse Launch Film', summary: 'A cinematic feature reveal for an AI operations platform.' },
      { title: 'Kinetic Social Kit', summary: 'Short-form motion templates designed for multi-channel brand campaigns.' },
    ],
  },
  {
    name: 'Branding',
    projects: [
      { title: 'Harbor Nine', summary: 'A complete strategic identity for a premium real estate advisory firm.' },
      { title: 'Verda Labs', summary: 'A science-led visual system for climate technology communications.' },
    ],
  },
  {
    name: 'Illustration',
    projects: [
      { title: 'Cobalt Cloud Scenes', summary: 'A set of product illustrations for onboarding, empty states, and sales pages.' },
      { title: 'Finch Editorial System', summary: 'Custom art direction for a research publication and newsletter.' },
    ],
  },
  {
    name: 'Mobile Apps',
    projects: [
      { title: 'Motive Habit App', summary: 'A retention-focused wellness app interface with guided progress loops.' },
      { title: 'CargoPilot Mobile', summary: 'A logistics dashboard redesigned for quick decisions in the field.' },
    ],
  },
];

const testimonials = [
  {
    quote:
      'Artistry Design translated a vague product idea into a website our sales team can confidently send to enterprise buyers.',
    author: 'Maya Ellison',
    role: 'Founder, Northline AI',
  },
  {
    quote:
      'The new storefront made our catalogue easier to explore and gave the brand a level of polish we had been missing.',
    author: 'Rehan Malik',
    role: 'Director, Craft & Case',
  },
  {
    quote:
      'Their designers understood the commercial goal first, then shaped a visual system that made every page feel intentional.',
    author: 'Claire Benton',
    role: 'Marketing Lead, Aeris Health',
  },
  {
    quote:
      'From copy to motion assets, the team delivered a launch package that felt cohesive across web, email, and social.',
    author: 'Jonas Feld',
    role: 'Product Manager, ScaleDock',
  },
];

const landingPages: Record<string, { title: string; eyebrow: string; description: string; cta: string }> = {
  about: {
    eyebrow: 'About Artistry Design',
    title: 'A creative technology partner for brands that need sharper digital presence.',
    description:
      'We blend research, design craft, content strategy, and front-end execution to help ambitious teams present themselves with clarity and momentum.',
    cta: 'Plan a Brand Session',
  },
  packages: {
    eyebrow: 'Packages',
    title: 'Flexible design and development packages built around real launch goals.',
    description:
      'Choose focused identity, website, ecommerce, and growth support tracks with clear deliverables, practical timelines, and room for custom scope.',
    cta: 'Compare Packages',
  },
  reviews: {
    eyebrow: 'Reviews',
    title: 'Client feedback shaped by measurable launches and dependable collaboration.',
    description:
      'Explore how startups, service businesses, and established teams describe our process, communication, and finished digital experiences.',
    cta: 'Read Client Stories',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Tell us what you are building and we will map the strongest next move.',
    description:
      'Book a conversation with our team to discuss your website, brand identity, marketing assets, or full digital launch plan.',
    cta: 'Start the Conversation',
  },
};

const serviceLandingCopy: Record<string, { title: string; eyebrow: string; description: string; cta: string }> = {
  'logo-design': {
    eyebrow: 'Logo Design',
    title: 'Memorable logo systems for brands preparing to be seen everywhere.',
    description:
      'Shape a mark, lockup, and visual foundation that works across websites, packaging, pitch decks, signage, and social channels without losing recognition.',
    cta: 'Plan a Logo Project',
  },
  'website-development': {
    eyebrow: 'Website Development',
    title: 'Websites engineered for credibility, speed, and conversion-ready journeys.',
    description:
      'Turn your digital presence into a polished platform with clear content paths, responsive layouts, performance-minded builds, and launch support.',
    cta: 'Scope a Website Build',
  },
  'ecommerce-web-solutions': {
    eyebrow: 'Ecommerce Web Solutions',
    title: 'Commerce experiences that make product discovery feel effortless.',
    description:
      'Create a storefront that guides visitors from browsing to checkout with stronger product storytelling, cleaner navigation, and practical retention flows.',
    cta: 'Improve My Store',
  },
  'motion-graphics': {
    eyebrow: 'Motion Graphics',
    title: 'Motion assets that give launches, campaigns, and products momentum.',
    description:
      'Build animated visual systems for explainers, social rollouts, interface reveals, and brand moments that need more energy than static design can carry.',
    cta: 'Create Motion Assets',
  },
  'app-design': {
    eyebrow: 'App Design',
    title: 'App interfaces planned around clarity, habit, and everyday use.',
    description:
      'Design mobile and product experiences with mapped flows, polished screens, consistent components, and prototypes that make decisions easier.',
    cta: 'Design an App Flow',
  },
  'creative-copywriting': {
    eyebrow: 'Creative Copywriting',
    title: 'Conversion-aware language for brands that need sharper messaging.',
    description:
      'Develop page copy, campaign narratives, offer positioning, and launch messaging that sounds specific to your business instead of interchangeable.',
    cta: 'Refine My Copy',
  },
  'digital-marketing': {
    eyebrow: 'Digital Marketing',
    title: 'Campaign strategy that connects creative output to measurable demand.',
    description:
      'Plan and optimize digital marketing activity with channel priorities, audience angles, creative testing, and reporting that keeps growth visible.',
    cta: 'Map a Campaign',
  },
  'illustration-design': {
    eyebrow: 'Illustration Design',
    title: 'Custom illustrations that make complex ideas easier to remember.',
    description:
      'Create ownable visual scenes, editorial artwork, product graphics, and icon-led systems that add character without weakening clarity.',
    cta: 'Commission Illustration',
  },
  'marketing-collateral': {
    eyebrow: 'Marketing Collateral',
    title: 'Sales and campaign materials that keep every touchpoint aligned.',
    description:
      'Prepare brochures, pitch decks, one-pagers, event graphics, and presentation assets that help teams sell with consistency and confidence.',
    cta: 'Build Collateral',
  },
  'seo-services': {
    eyebrow: 'SEO Services',
    title: 'Search improvements that help strong websites earn qualified traffic.',
    description:
      'Strengthen technical foundations, content architecture, keyword focus, and launch optimization so your site can be discovered after it goes live.',
    cta: 'Audit My SEO',
  },
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function FixedVideoBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <video
        muted
        playsInline
        preload="auto"
        className="site-video absolute inset-0 h-full w-full object-cover object-center lg:object-[58%_center]"
      >
        <source src="/videos/veldara-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-[#2A1207]/58 to-black/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/36 to-black/62" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(226,139,57,0.22),transparent_34%),radial-gradient(circle_at_18%_70%,rgba(120,52,23,0.32),transparent_30%)]" />
    </div>
  );
}

function useCurrentPath() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (href: string) => {
    if (href.startsWith('tel:') || href.startsWith('https://')) {
      window.location.href = href;
      return;
    }

    window.history.pushState({}, '', href);
    setPath(window.location.pathname);
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  return { path, navigate };
}

function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let animationFrame = 0;
    let particles: Array<{ x: number; y: number; size: number; opacity: number; vx: number; vy: number }> = [];

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      particles = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        return {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: 0.5 + Math.random() * 1.5,
          opacity: 0.18 + Math.random() * 0.45,
          vx: Math.cos(angle) * 0.3,
          vy: Math.sin(angle) * 0.3,
        };
      });
    };

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        context.fill();
      });
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[3] pointer-events-none" />;
}

function LinkButton({
  href,
  children,
  className = '',
  navigate,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  navigate: (href: string) => void;
}) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        navigate(href);
      }}
      className={className}
    >
      {children}
    </a>
  );
}

function Navbar({ navigate }: { navigate: (href: string) => void }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [compressed, setCompressed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompressed(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const context = gsap.context(() => {
      gsap.to('.desktop-nav-links', {
        autoAlpha: compressed ? 0 : 1,
        y: compressed ? -10 : 0,
        duration: 0.25,
        ease: 'power2.out',
      });
      gsap.fromTo(
        '.menu-toggle-line',
        { scaleX: 0.7 },
        { scaleX: 1, duration: 0.22, stagger: 0.04, ease: 'power2.out' },
      );
    });
    return () => context.revert();
  }, [compressed]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen);
    return () => document.body.classList.remove('menu-open');
  }, [mobileOpen]);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const context = gsap.context(() => {
      if (mobileOpen) {
        gsap.to('.fullscreen-menu', {
          clipPath: 'inset(0 0 0% 0)',
          autoAlpha: 1,
          duration: 0.6,
          ease: 'power4.inOut',
        });
        gsap.fromTo(
          '.fullscreen-menu-link',
          { y: 72, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.72, stagger: 0.07, delay: 0.2, ease: 'power4.out' },
        );
        gsap.fromTo(
          '.fullscreen-menu-meta',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, delay: 0.45, ease: 'power3.out' },
        );
      } else {
        const lines = gsap.utils.toArray('.menu-toggle-line');
        gsap.to(lines[0], {
          y: 0,
          rotation: 0,
          duration: 0.22,
          ease: 'power2.out',
        });
        gsap.to(lines[1], {
          opacity: 1,
          scaleX: 1,
          duration: 0.22,
          ease: 'power2.out',
        });
        gsap.to(lines[2], {
          y: 0,
          rotation: 0,
          duration: 0.22,
          ease: 'power2.out',
        });
        gsap.to('.fullscreen-menu-link', {
          opacity: 0,
          y: 40,
          duration: 0.25,
          stagger: 0.03,
          ease: 'power3.in',
        });
        gsap.to('.fullscreen-menu-meta', {
          opacity: 0,
          y: 15,
          duration: 0.25,
          ease: 'power3.in',
        });
        gsap.to('.fullscreen-menu', {
          clipPath: 'inset(0 0 100% 0)',
          autoAlpha: 0,
          duration: 0.45,
          delay: 0.15,
          ease: 'power4.inOut',
        });
      }
    });
    return () => context.revert();
  }, [mobileOpen]);

  const closeAndNavigate = (href: string) => {
    setMobileOpen(false);
    navigate(href);
  };

  return (
    <>
      <nav className={`nav fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${compressed ? 'bg-transparent py-6' : 'bg-black/25 py-4 backdrop-blur-sm'} px-4 sm:px-6 lg:px-8`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <LinkButton href="/" navigate={navigate} className={`shrink-0 transition-all duration-500 ${compressed ? 'scale-90 opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <img src="/white-logo.png" alt="Artistry Design" className="h-9 w-auto sm:h-11" />
        </LinkButton>

        <div className={`desktop-nav-links hidden items-center gap-6 lg:flex ${compressed ? 'pointer-events-none' : ''}`}>
          {quickLinks.slice(0, 2).map((link) => (
            <LinkButton key={link.name} href={link.href} navigate={navigate} className="nav-link">
              {link.name}
            </LinkButton>
          ))}

          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="nav-link inline-flex items-center gap-1"
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {open && (
              <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4">
                <div className="grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-[#080808]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <LinkButton
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        navigate={navigate}
                        className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                      >
                        <Icon className="h-4 w-4 text-[#F3A35C]" />
                        {service.name}
                      </LinkButton>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {quickLinks.slice(2).map((link) => (
            <LinkButton key={link.name} href={link.href} navigate={navigate} className="nav-link">
              {link.name}
            </LinkButton>
          ))}
        </div>

        <div className={`items-center gap-3 ${compressed ? 'hidden' : 'hidden lg:flex'}`}>
          <LinkButton href="/contact" navigate={navigate} className="primary-button px-5 py-3 text-sm">
            Get a Free Quote
          </LinkButton>
        </div>

        <button
          type="button"
          className={`relative rounded-full border border-[#F3A35C]/30 bg-black/30 p-3 text-white transition-all duration-500 hover:border-[#F3A35C]/70 ${compressed ? 'lg:block translate-x-0' : 'lg:hidden'}`}
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <span className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
            <span className={`menu-toggle-line h-0.5 w-6 origin-center rounded-full bg-white transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`menu-toggle-line h-0.5 w-6 origin-center rounded-full bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`menu-toggle-line h-0.5 w-6 origin-center rounded-full bg-white transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>
      </nav>

      <div className="fullscreen-menu invisible fixed inset-0 z-[80] overflow-hidden bg-[#0D0D0D] px-4 py-4 opacity-0 sm:px-8" style={{ clipPath: 'inset(0 0 100% 0)' }}>
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
          className="absolute right-5 top-5 z-[90] text-white transition hover:text-[#F3A35C] sm:right-8 sm:top-8"
        >
          <X className="h-9 w-9 stroke-[1.5]" />
        </button>

        <div className="grid h-full grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Expertises', href: '/services/website-development' },
              { name: 'Works', href: '/packages' },
              { name: 'Reviews', href: '/reviews' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <LinkButton
                key={item.name}
                href={item.href}
                navigate={closeAndNavigate}
                className="fullscreen-menu-link block w-fit text-[4.2rem] font-light uppercase leading-[0.9] tracking-tight text-gray-300 transition hover:translate-x-2 hover:text-white sm:text-[5.8rem] lg:text-[6.7rem] xl:text-[7rem]"
              >
                {item.name}
              </LinkButton>
            ))}
          </div>

          <div className="fullscreen-menu-meta flex flex-col justify-end gap-9 pb-8 lg:items-start lg:pb-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">Let&apos;s Connect</p>
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="mt-8 block text-sm uppercase tracking-[0.25em] text-gray-300 hover:text-[#F3A35C]">
                {phoneNumber}
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} className="mt-4 block text-sm uppercase tracking-[0.25em] text-gray-300 hover:text-[#F3A35C]">
                WhatsApp Project Chat
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-3">
              {services.slice(0, 8).map((service) => (
                <LinkButton
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  navigate={closeAndNavigate}
                  className="text-xs uppercase tracking-[0.2em] text-gray-300 transition hover:text-[#F3A35C]"
                >
                  {service.name}
                </LinkButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Hero({ navigate }: { navigate: (href: string) => void }) {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <ParticlesCanvas />

      <div className="relative z-[4] mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-12 pt-28 sm:px-6 md:pb-16 lg:px-8">
        <div className="hero-copy max-w-xl">
          <p className="eyebrow mb-4">Creative Web Studio</p>
          <h1 className="hero-heading text-4xl font-semibold uppercase leading-[0.98] tracking-tight text-white sm:text-5xl md:text-5xl xl:text-6xl">
            REFINING THE ULTIMATE WEB EXPERIENCE
          </h1>
          <p className="hero-subtitle mt-5 max-w-xl text-sm leading-7 text-gray-200 sm:text-base">
            We create customer-centric website solutions that give your business the boost it deserves.
            Our web designers for hire have years of experience in designing beautiful websites that help
            you attract the right audience.
          </p>
          <LinkButton href="/contact" navigate={navigate} className="primary-button mt-8 inline-flex px-7 py-4 text-sm">
            Let&apos;s Talk <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ navigate }: { navigate: (href: string) => void }) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || prefersReducedMotion()) return undefined;

    const context = gsap.context(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 1024px)': () => {
          const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            pin: '.services-pin',
            start: 'top top+=92',
            end: 'bottom bottom',
            pinSpacing: false,
          });
          return () => trigger.kill();
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="services-scroll-section section-shell pb-24 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="services-pin section-reveal self-start lg:min-h-[70vh] lg:pt-12">
          <p className="eyebrow">Services</p>
          <h2 className="section-title mt-4">WE BUILD<br />IMPECCABLE BRANDS</h2>
          <p className="mt-6 text-base leading-8 text-gray-200">
            We at Artistry Design will ensure that your business is widely recognized and grab the
            attention of your target audience with a professional and striking web design. Our
            first-class digital solutions possess the power of transforming your business. Hire web
            designers from Artistry Design and leave it up to them to do the rest of the work.
          </p>
        </div>

        <div className="services-list grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <LinkButton
                key={service.slug}
                href={`/services/${service.slug}`}
                navigate={navigate}
                className={`service-card section-reveal group ${index === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                    <Icon className="h-6 w-6 text-[#F3A35C]" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#F3A35C]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-200">{service.description}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#F3A35C]">{service.proof}</p>
              </LinkButton>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WebDevelopmentSection({ navigate }: { navigate: (href: string) => void }) {
  return (
    <section className="section-shell border-y border-[#F3A35C]/10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div className="section-reveal">
          <p className="eyebrow">Digital build partner</p>
          <h2 className="section-title mt-4">Innovative Web Designs<br />&amp; Development Services</h2>
          <p className="mt-3 text-lg text-[#F3A35C]">For Businesses Across the World</p>
          <p className="mt-6 text-base leading-8 text-gray-300">
            You no longer need to search, "best web designers near me." Artistry Design is a
            trustworthy name in the industry of web development and has so far helped numerous brands
            in establishing their brand identity. We have expertise in developing a promising brand
            image for your business that engages your customers and keeps you ahead of the
            competition. Our web designers for hire are extremely talented and always manages to come
            up with unique and impressive designs in order to help your website stand apart. If you
            are looking for a professional company to work with, then you've found us. We'll be with
            you from the start till the end.
          </p>
          <LinkButton href="/contact" navigate={navigate} className="primary-button mt-8 inline-flex px-7 py-4 text-sm">
            Get Started <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>

        <div className="section-reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#B86B34]/25 blur-3xl" />
          <div className="relative grid gap-4">
            {['Discovery', 'Experience Mapping', 'Interface Design', 'Launch Optimization'].map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B86B34] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{step}</h3>
                  <p className="text-sm text-gray-300">Structured work that keeps scope clear and quality visible.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="py-14">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="section-reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <Icon className="h-7 w-7 text-[#F3A35C]" />
              <p className="stat-value mt-6 text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#F3A35C]">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [active, setActive] = useState(projectCategories[0].name);
  const activeCategory = projectCategories.find((category) => category.name === active) ?? projectCategories[0];

  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="section-reveal">
            <p className="eyebrow">Recent Projects</p>
            <h2 className="section-title mt-4">A Glimpse of Recent Projects</h2>
          </div>
          <p className="section-reveal text-base leading-8 text-gray-300">
            Artistry Design is home to unparalleled digital solutions. We have successfully catered to
            a number of projects of potential startups and multinational companies. When you trust us
            with your project, our web designers go to all lengths to ensure that your design is
            flawless. Our years of web designing experience have led us to deliver exceptional
            result-driven websites. We begin with analysis, and once we have a clear idea about your
            requirements, we move on to the next step, which is creating your website. Our team
            utilizes the best SEO strategies to make sure your website is fully optimized at launch.
            Hire web designers from Artistry Design today and achieve your digital milestones. To get
            an idea of our work, we would suggest you to take a look at some of our recent projects.
          </p>
        </div>

        <div className="section-reveal mt-10 flex flex-wrap gap-3">
          {projectCategories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setActive(category.name)}
              className={`rounded-full border px-5 py-3 text-sm transition ${
                active === category.name
                  ? 'border-[#F3A35C] bg-[#B86B34] text-white'
                  : 'border-white/10 bg-white/[0.04] text-[#F3A35C] hover:border-white/30 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {activeCategory.projects.map((project) => (
            <article key={project.title} className="section-reveal overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
              <div className="h-48 bg-[radial-gradient(circle_at_30%_30%,rgba(243,163,92,0.46),transparent_28%),linear-gradient(135deg,#251109,#050505_55%,#5B2D18)]" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#F3A35C]">{activeCategory.name}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section className="section-shell">
      <div className="section-reveal mx-auto max-w-5xl rounded-[2rem] border border-[#F3A35C]/15 bg-[linear-gradient(135deg,rgba(184,107,52,0.28),rgba(255,255,255,0.04))] p-8 text-center sm:p-12">
        <p className="eyebrow">Ready to Work With Us</p>
        <h2 className="section-title mt-4">Contact Us to Get Started</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="secondary-button whitespace-nowrap">
            <Phone className="h-4 w-4" /> Reach Us Anytime at {phoneNumber}
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="primary-button whitespace-nowrap px-6 py-4 text-sm"
          >
            <MessageCircle className="h-4 w-4" /> Chat to Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden border-y border-[#F3A35C]/10 py-20">
      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow">Testimonials</p>
        <h2 className="section-title mt-4">Trusted by ambitious teams</h2>
      </div>
      <div className="testimonial-track flex w-max gap-5">
        {loopItems.map((item, index) => (
          <article key={`${item.author}-${index}`} className="w-[330px] rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:w-[430px]">
            <div className="flex gap-1 text-[#F3A35C]">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-gray-300">&quot;{item.quote}&quot;</p>
            <div className="mt-6">
              <p className="font-semibold text-white">{item.author}</p>
              <p className="text-sm text-[#F3A35C]">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer({ navigate }: { navigate: (href: string) => void }) {
  return (
    <footer className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 rounded-[2rem] border border-[#F3A35C]/20 bg-gradient-to-br from-[#B86B34]/20 to-transparent p-8 text-center sm:p-14">
          <p className="eyebrow">Consultancy</p>
          <h2 className="section-title mt-4">Get Free Consultancy</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-[#F3A35C]">Call Us</p>
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="mt-2 block text-xl font-semibold text-white hover:text-[#F3A35C] sm:text-2xl">
                {phoneNumber}
              </a>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-[#F3A35C]">Email Us</p>
              <a href="mailto:info@artistrydesign.co.uk" className="mt-2 block text-xl font-semibold text-white hover:text-[#F3A35C] sm:text-2xl">
                info@artistrydesign.co.uk
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <img src="/white-logo.png" alt="Artistry Design" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
              Digital design, web development, brand systems, and campaign assets for businesses that
              need a sharper public face.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">Quick Links</h3>
            <div className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <LinkButton key={link.name} href={link.href} navigate={navigate} className="text-sm text-[#F3A35C] hover:text-white">
                  {link.name}
                </LinkButton>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">Services</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {services.map((service) => (
                <LinkButton
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  navigate={navigate}
                  className="text-sm text-[#F3A35C] hover:text-white"
                >
                  {service.name}
                </LinkButton>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-300 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Artistry Design. All rights reserved.</p>
          <div className="flex gap-3">
            <LinkButton href="/privacy-policy" navigate={navigate} className="hover:text-white">
              Privacy Policy
            </LinkButton>
            <span>|</span>
            <LinkButton href="/terms-conditions" navigate={navigate} className="hover:text-white">
              Terms &amp; Conditions
            </LinkButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ navigate }: { navigate: (href: string) => void }) {
  return (
    <>
      <Hero navigate={navigate} />
      <ServicesSection navigate={navigate} />
      <WebDevelopmentSection navigate={navigate} />
      <AchievementsSection />
      <ProjectsSection />
      <ContactBand />
      <TestimonialsSection />
      <Footer navigate={navigate} />
    </>
  );
}

function ContactFormInner() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#D48746]/40 bg-black/60 p-8 text-center section-reveal">
        <Sparkles className="mx-auto h-12 w-12 text-[#F3A35C]" />
        <h3 className="mt-4 text-2xl font-semibold text-white">Thank you, {formState.name}!</h3>
        <p className="mt-3 text-base text-gray-300">Your message has been sent successfully. We will map the strongest next move and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-[#F3A35C]/15 bg-black/60 p-8 shadow-2xl section-reveal space-y-6">
      <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#F3A35C] mb-2">Your Name</label>
          <input
            type="text"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder="John Doe"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#F3A35C] focus:outline-none focus:ring-1 focus:ring-[#F3A35C] transition"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#F3A35C] mb-2">Email Address</label>
          <input
            type="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#F3A35C] focus:outline-none focus:ring-1 focus:ring-[#F3A35C] transition"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#F3A35C] mb-2">Subject</label>
        <input
          type="text"
          required
          value={formState.subject}
          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
          placeholder="Project Scope Discussion"
          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#F3A35C] focus:outline-none focus:ring-1 focus:ring-[#F3A35C] transition"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#F3A35C] mb-2">Message</label>
        <textarea
          required
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder="Tell us about what you are building..."
          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#F3A35C] focus:outline-none focus:ring-1 focus:ring-[#F3A35C] transition resize-none"
        />
      </div>
      <button type="submit" className="primary-button w-full py-4 text-sm font-bold uppercase tracking-wider">
        Submit Inquiry
      </button>
    </form>
  );
}

function PageSpecificSections({ pageKey, navigate }: { pageKey: string; navigate: (href: string) => void }) {
  const serviceSlug = pageKey.startsWith('services/') ? pageKey.replace('services/', '') : '';
  const activeService = services.find((service) => service.slug === serviceSlug);

  if (activeService) {
    const Icon = activeService.icon;
    return (
      <>
        <section className="section-shell">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="section-reveal">
              <p className="eyebrow">Service Detail</p>
              <h2 className="section-title mt-4">Built around outcomes, not decoration</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Discovery brief', 'Creative direction', 'Production system', 'Launch handover'].map((item, index) => (
                <article key={item} className="section-reveal rounded-3xl border border-[#F3A35C]/12 bg-black/45 p-6">
                  <Icon className="h-7 w-7 text-[#F3A35C]" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {activeService.name} work is planned with clear checkpoints, polished presentation, and practical files your team can keep using.
                  </p>
                  <span className="mt-5 block text-xs uppercase tracking-[0.22em] text-[#F3A35C]">
                    Phase {String(index + 1).padStart(2, '0')}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ProjectsSection />
        <ContactBand />
      </>
    );
  }

  if (pageKey === 'about') {
    return (
      <>
        <section className="section-shell">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {[
              ['Strategy first', 'We clarify audience, offer, positioning, and technical constraints before visual production starts.'],
              ['Design with intent', 'Every interface, motion cue, and content block is shaped to support user confidence and action.'],
              ['Launch discipline', 'We prepare responsive assets, performance checks, SEO foundations, and handover notes before release.'],
            ].map(([title, copy]) => (
              <article key={title} className="section-reveal rounded-3xl border border-[#F3A35C]/12 bg-black/45 p-7">
                <Sparkles className="h-7 w-7 text-[#F3A35C]" />
                <h2 className="mt-5 text-2xl font-semibold text-white">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-gray-300">{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <AchievementsSection />
        <ContactBand />
      </>
    );
  }

  if (pageKey === 'packages') {
    return (
      <>
        <section className="section-shell">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {[
              ['Starter Presence', 'Logo refinement, landing page direction, core web copy, and launch-ready brand essentials.'],
              ['Growth Website', 'Multi-page web design, responsive development, service architecture, SEO setup, and conversion paths.'],
              ['Market Expansion', 'Ecommerce, campaign collateral, motion graphics, marketing strategy, and ongoing creative support.'],
            ].map(([title, copy]) => (
              <article key={title} className="section-reveal rounded-3xl border border-[#F3A35C]/12 bg-black/45 p-7">
                <PackageCheck className="h-7 w-7 text-[#F3A35C]" />
                <h2 className="mt-5 text-2xl font-semibold text-white">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-gray-300">{copy}</p>
                <LinkButton href="/contact" navigate={navigate} className="secondary-button mt-6">
                  Request Pricing
                </LinkButton>
              </article>
            ))}
          </div>
        </section>
        <ContactBand />
      </>
    );
  }

  if (pageKey === 'reviews') {
    return (
      <>
        <TestimonialsSection />
        <AchievementsSection />
        <ContactBand />
      </>
    );
  }

  if (pageKey === 'contact') {
    return (
      <>
        <ContactBand />
        <section className="section-shell">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              {[
                ['Project briefs', 'Send scope, references, goals, and launch timing so we can recommend the right route.'],
                ['Live consultation', 'Talk through design gaps, technical needs, campaign ideas, or website performance concerns.'],
                ['Proposal planning', 'Receive a practical scope with deliverables, milestones, and the next production steps.'],
              ].map(([title, copy]) => (
                <article key={title} className="section-reveal rounded-3xl border border-[#F3A35C]/12 bg-black/45 p-7">
                  <MessageCircle className="h-7 w-7 text-[#F3A35C]" />
                  <h2 className="mt-5 text-2xl font-semibold text-white">{title}</h2>
                  <p className="mt-4 text-sm leading-7 text-gray-300">{copy}</p>
                </article>
              ))}
            </div>
            <div>
              <ContactFormInner />
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="section-shell">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="section-reveal text-base leading-8 text-gray-300">
            This page outlines how Artistry Design structures project communication, responsibilities,
            and expectations so each collaboration remains clear from briefing through launch.
          </p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

function LandingPage({
  page,
  pageKey,
  navigate,
}: {
  page: { title: string; eyebrow: string; description: string; cta: string };
  pageKey: string;
  navigate: (href: string) => void;
}) {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-28">
        <ParticlesCanvas />
        <div className="relative z-[4] mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold uppercase leading-tight text-white sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">{page.description}</p>
            <LinkButton href="/contact" navigate={navigate} className="primary-button mt-8 inline-flex px-7 py-4 text-sm">
              {page.cta} <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>
      </section>
      <PageSpecificSections pageKey={pageKey} navigate={navigate} />
      <Footer navigate={navigate} />
    </>
  );
}

function App() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const { path, navigate } = useCurrentPath();
  const pageKey = path.replace(/^\/+/, '').replace(/\/$/, '');

  const page = useMemo(() => {
    const cleaned = pageKey;
    if (!cleaned) return null;
    if (cleaned.startsWith('services/')) return serviceLandingCopy[cleaned.replace('services/', '')] ?? null;
    if (cleaned === 'privacy-policy') {
      return {
        eyebrow: 'Privacy Policy',
        title: 'A clear view of how project information is handled during collaboration.',
        description:
          'Artistry Design uses client details, project briefs, and communication records only to scope, deliver, support, and improve our creative technology services.',
        cta: 'Ask a Privacy Question',
      };
    }
    if (cleaned === 'terms-conditions') {
      return {
        eyebrow: 'Terms & Conditions',
        title: 'Straightforward terms for design, development, and digital production work.',
        description:
          'Our engagements are structured around approved scopes, agreed milestones, content responsibilities, payment schedules, and launch handover expectations.',
        cta: 'Discuss Terms',
      };
    }
    return landingPages[cleaned] ?? landingPages.contact;
  }, [pageKey]);

  useEffect(() => {
    const isHome = !page;
    document.title = isHome ? 'Artistry Design | Web Design, Branding & Digital Growth' : `${page.eyebrow} | Artistry Design`;
    const description = isHome
      ? 'Artistry Design creates customer-centric websites, brand systems, ecommerce experiences, motion graphics, and SEO-ready digital platforms.'
      : page.description;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [page]);

  useLayoutEffect(() => {
    if (!rootRef.current || prefersReducedMotion()) return undefined;

    const context = gsap.context(() => {
      gsap.from('.nav', { y: -18, opacity: 0, duration: 0.7, ease: 'power3.out' });
      gsap.to('.site-video', {
        scale: 1.1,
        yPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      });
      gsap.from('.hero-copy > *', {
        y: 34,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      });
      gsap.to('.hero-heading', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-heading',
          start: 'top 20%',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.utils.toArray<HTMLElement>('.section-reveal').forEach((element) => {
        gsap.from(element, {
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
            once: true,
          },
        });
      });
      gsap.utils.toArray<HTMLElement>('.section-title').forEach((element) => {
        gsap.fromTo(
          element,
          { letterSpacing: '0.08em', opacity: 0.72 },
          {
            letterSpacing: '0em',
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 92%',
              end: 'top 45%',
              scrub: true,
            },
          },
        );
      });
      gsap.utils.toArray<HTMLElement>('.service-card, article').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 48, scale: 0.96, opacity: 0.68 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 96%',
              end: 'top 62%',
              scrub: true,
            },
          },
        );
      });
      gsap.utils.toArray<HTMLElement>('.stat-value').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 18, opacity: 0.45 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
      gsap.to('.testimonial-track', {
        xPercent: -50,
        duration: 48,
        repeat: -1,
        ease: 'none',
      });
    }, rootRef);

    ScrollTrigger.refresh();
    return () => {
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [path]);

  return (
    <div ref={rootRef} className="relative min-h-screen bg-black text-white">
      <FixedVideoBackdrop />
      <Navbar navigate={navigate} />
      <div className="relative z-[2]">
        {page ? <LandingPage page={page} pageKey={pageKey} navigate={navigate} /> : <HomePage navigate={navigate} />}
      </div>
    </div>
  );
}

export default App;
