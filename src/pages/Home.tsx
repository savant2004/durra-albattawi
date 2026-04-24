import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Ship, Car, ShieldCheck, Phone, ChevronRight, Instagram, Facebook, ArrowRight, MapPin, Mail, Anchor, FileCheck2, Handshake } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "9647876003001";
const WHATSAPP_DISPLAY = "+964 787 600 3001";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/dura.albattawi?igsh=MTc5aDFwbjkwNnp6eA==",
  tiktok: "https://www.tiktok.com/@alialbatawi5?_r=1&_t=ZS-95oDyVZuPm0",
  facebook: "https://www.facebook.com/share/17QRq6fcCc/?mibextid=wwXIfr",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", message: "" });

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      "Durrat Al-Battawi — Vehicle Inquiry",
      "",
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Vehicle: ${form.vehicle || "—"}`,
    ];
    if (form.message.trim()) {
      lines.push("", "Details:", form.message.trim());
    }
    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  };
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wider text-secondary">Durrat Al-Battawi</span>
            <span className="font-arabic-serif text-sm text-primary" dir="rtl">درة البطاوي</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide text-muted-foreground">
            <a href="#process" className="hover:text-primary transition-colors">Process</a>
            <a href="#auctions" className="hover:text-primary transition-colors">Auctions</a>
            <a href="#trust" className="hover:text-primary transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 pr-2 border-r border-white/10 mr-1">
              <a aria-label="Instagram" href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a aria-label="TikTok" href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTiktok className="w-[18px] h-[18px]" />
              </a>
              <a aria-label="Facebook" href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a aria-label="WhatsApp Business" href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
            <Button className="font-serif tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <motion.img 
            style={{ y: y1 }}
            src="/images/hero.png" 
            alt="Luxury American SUV at shipping port" 
            className="w-full h-[120%] object-cover object-center opacity-70"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col items-center text-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-arabic-serif text-5xl md:text-7xl lg:text-8xl text-secondary drop-shadow-2xl font-bold" dir="rtl">
                درة البطاوي
              </h2>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-secondary tracking-tight drop-shadow-xl">
                Durrat Al-Battawi
              </h1>
            </div>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light tracking-wide leading-relaxed">
              The Pearl of Al-Battawi. Premium American vehicle imports from Copart & IAAI to Iraq. A trusted family business delivering quality, transparency, and auction-direct pricing.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif tracking-wider rounded-none h-14 px-8 text-lg group w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Importing
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-secondary hover:bg-white/5 font-serif tracking-wider rounded-none h-14 px-8 text-lg w-full sm:w-auto" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>
                View Process
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: opacity1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background relative z-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4 items-start">
            <Anchor className="w-8 h-8 text-primary" />
            <h4 className="font-serif text-xl text-secondary">Ocean Freight</h4>
            <p className="text-muted-foreground font-light leading-relaxed">Secured RORO and container shipping from all major US ports directly to Umm Qasr, ensuring your vehicle arrives safely.</p>
            <p className="font-arabic-sans text-primary text-sm" dir="rtl">شحن بحري آمن</p>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <FileCheck2 className="w-8 h-8 text-primary" />
            <h4 className="font-serif text-xl text-secondary">Customs & Clearance</h4>
            <p className="text-muted-foreground font-light leading-relaxed">Full handling of export documentation in the US and import clearance in Iraq. No hidden fees or surprise paperwork.</p>
            <p className="font-arabic-sans text-primary text-sm" dir="rtl">تخليص كمركي متكامل</p>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <Handshake className="w-8 h-8 text-primary" />
            <h4 className="font-serif text-xl text-secondary">Auction Access</h4>
            <p className="text-muted-foreground font-light leading-relaxed">Licensed broker access allowing you to bid alongside dealers. Full transparency on condition reports and auction fees.</p>
            <p className="font-arabic-sans text-primary text-sm" dir="rtl">دخول مباشر للمزادات</p>
          </div>
        </div>
      </section>

      {/* Auctions Section */}
      <section id="auctions" className="py-32 relative bg-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-3xl md:text-4xl text-secondary mb-6">Direct from US Auctions to Iraq</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                We bridge the gap between America's largest auto auctions and the Iraqi market. Through our established partnerships with Copart and IAAI, we provide exclusive access to thousands of premium vehicles daily.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-background/50 border border-white/5 flex flex-col items-start gap-4 hover:border-primary/50 transition-colors">
                  <div className="h-12 flex items-center">
                    <span className="font-serif text-2xl tracking-widest text-primary">COPART</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Access to premier clean title and salvage vehicles nationwide.</p>
                </div>
                <div className="p-6 bg-background/50 border border-white/5 flex flex-col items-start gap-4 hover:border-primary/50 transition-colors">
                  <div className="h-12 flex items-center">
                    <span className="font-serif text-2xl tracking-widest text-primary">IAAI</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Insurance auto auctions offering high-value late model cars and SUVs.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] w-full"
            >
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img 
                src="/images/auction.png" 
                alt="Premium cars at auction lot" 
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-6 border border-white/10 shadow-xl z-20 max-w-[200px]">
                <p className="font-arabic-serif text-xl text-primary mb-2" dir="rtl">ثقة ومصداقية</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Verified Purchases</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h3 className="font-serif text-3xl md:text-5xl text-secondary mb-6">A Seamless Journey</h3>
            <p className="text-muted-foreground text-lg font-light">From the auction block in America to your driveway in Iraq. We handle the complexity so you don't have to.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />
            
            {[
              {
                icon: Car,
                title: "Source & Bid",
                desc: "We help you select the right vehicle from Copart or IAAI and bid strategically on your behalf.",
                arabic: "اختيار ومزايدة"
              },
              {
                icon: Ship,
                title: "Secure Shipping",
                desc: "Professional inland transport to US ports, followed by secure ocean freight to Iraq.",
                arabic: "شحن آمن"
              },
              {
                icon: ShieldCheck,
                title: "Clearance & Delivery",
                desc: "We manage all customs paperwork and arrange final delivery directly to you or your dealership.",
                arabic: "تخليص وتسليم"
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative z-10 bg-card/80 backdrop-blur-sm p-8 border border-white/5 hover:border-primary/30 transition-colors group"
              >
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-xl text-secondary mb-2">{step.title}</h4>
                <p className="font-arabic-sans text-sm text-primary mb-4" dir="rtl">{step.arabic}</p>
                <p className="text-muted-foreground font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ship Highlight Section */}
      <section className="h-[60vh] relative border-y border-white/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-background/50 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-20" />
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            src="/images/ship.png" 
            alt="Cargo ship crossing ocean" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-6">
          <h2 className="font-serif text-4xl md:text-6xl text-secondary mb-4 tracking-wider">Global Reach. Local Trust.</h2>
          <p className="text-xl text-primary font-arabic-serif" dir="rtl">من موانئ أمريكا إلى موانئ العراق</p>
        </div>
      </section>

      {/* Pearl Abstract / Trust Section */}
      <section id="trust" className="py-32 relative border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pearl-abstract.png" 
            alt="Abstract pearl background" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-background/80 z-10" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-arabic-serif text-4xl md:text-5xl text-primary mb-6" dir="rtl">
            عائلة واحدة، ثقة واحدة
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl text-secondary mb-8">
            The Pearl Standard of Trust
          </h3>
          <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
            Importing a car is a significant investment. At Durrat Al-Battawi, you're not dealing with a faceless corporation. You are working with a bilingual Iraqi-American team that understands your needs, speaks your language, and protects your investment as if it were our own.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-card relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-3xl md:text-5xl text-secondary mb-4">Let's Find Your Car</h3>
            <p className="text-muted-foreground font-light text-lg mb-8">
              Looking for a specific model from Copart or IAAI? Need a quote for shipping to Iraq? Reach out to our team today.
            </p>

            <div className="border-l-2 border-primary/40 pl-6 mb-12" dir="rtl">
              <h4 className="font-arabic-serif text-3xl md:text-4xl text-secondary mb-3">
                لنجد سيارتك المثالية
              </h4>
              <p className="font-arabic-sans text-lg text-muted-foreground leading-relaxed">
                تبحث عن موديل معيّن من كوبارت أو IAAI؟ تحتاج تسعيرة شحن إلى العراق؟ تواصل مع فريقنا اليوم وسنرد عليك في أقرب وقت.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <FaWhatsapp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp Business / واتساب</p>
                  <span className="text-lg text-secondary group-hover:text-primary transition-colors">{WHATSAPP_DISPLAY}</span>
                </div>
              </a>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us / اتصل بنا</p>
                  <span className="text-lg text-secondary group-hover:text-primary transition-colors">{WHATSAPP_DISPLAY}</span>
                </div>
              </a>
              <a href="mailto:info@durratalbattawi.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email / البريد الإلكتروني</p>
                  <span className="text-lg text-secondary group-hover:text-primary transition-colors">info@durratalbattawi.com</span>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-background border border-white/5 p-8 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="flex items-start justify-between gap-4 mb-2">
              <h4 className="font-serif text-2xl text-secondary">Request a Quote</h4>
              <h4 className="font-arabic-serif text-2xl text-primary" dir="rtl">اطلب تسعيرة</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Sends your inquiry directly to our WhatsApp Business.
              <span className="block font-arabic-sans text-right mt-1" dir="rtl">يُرسل طلبك مباشرةً إلى واتساب الأعمال الخاص بنا.</span>
            </p>
            <form className="space-y-6" onSubmit={handleQuoteSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-muted-foreground flex items-center justify-between">
                    <span>Full Name</span>
                    <span className="font-arabic-sans text-primary/80" dir="rtl">الاسم الكامل</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="John Doe"
                    className="bg-card border-white/10 rounded-none focus-visible:ring-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-muted-foreground flex items-center justify-between">
                    <span>Phone Number</span>
                    <span className="font-arabic-sans text-primary/80" dir="rtl">رقم الهاتف</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="+964..."
                    className="bg-card border-white/10 rounded-none focus-visible:ring-primary h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicle" className="text-muted-foreground flex items-center justify-between">
                  <span>Vehicle Interest (Make/Model/Year)</span>
                  <span className="font-arabic-sans text-primary/80" dir="rtl">السيارة المطلوبة (الماركة/الموديل/السنة)</span>
                </Label>
                <Input
                  id="vehicle"
                  required
                  value={form.vehicle}
                  onChange={(e) => setForm((f) => ({ ...f, vehicle: e.target.value }))}
                  placeholder="e.g. 2022 Toyota Land Cruiser"
                  className="bg-card border-white/10 rounded-none focus-visible:ring-primary h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-muted-foreground flex items-center justify-between">
                  <span>Additional Details (Optional)</span>
                  <span className="font-arabic-sans text-primary/80" dir="rtl">تفاصيل إضافية (اختياري)</span>
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Provide auction link or specific requirements..."
                  className="bg-card border-white/10 rounded-none focus-visible:ring-primary min-h-[120px] resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-serif tracking-wider rounded-none h-14 text-lg group">
                <FaWhatsapp className="mr-2 w-5 h-5" />
                Send via WhatsApp
                <span className="font-arabic-sans mx-2 opacity-70" dir="rtl">/ إرسال</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex flex-col mb-6">
                <span className="font-serif text-2xl tracking-wider text-secondary">Durrat Al-Battawi</span>
                <span className="font-arabic-serif text-lg text-primary" dir="rtl">درة البطاوي</span>
              </div>
              <p className="text-muted-foreground font-light max-w-sm">
                Your premier partner for importing high-quality American vehicles to Iraq. Trusted, transparent, and dedicated to excellence.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg text-secondary mb-6">Quick Links</h4>
              <div className="flex flex-col gap-4 text-muted-foreground font-light">
                <a href="#process" className="hover:text-primary transition-colors">How it Works</a>
                <a href="#auctions" className="hover:text-primary transition-colors">Copart & IAAI</a>
                <a href="#trust" className="hover:text-primary transition-colors">Our Standard</a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg text-secondary mb-6">Connect</h4>
              <div className="flex flex-col gap-4">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-light">Instagram</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <FaTiktok className="w-[18px] h-[18px]" />
                  <span className="font-light">TikTok</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="font-light">Facebook</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span className="font-light">WhatsApp Business</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60">
            <p>© {new Date().getFullYear()} Durrat Al-Battawi. All rights reserved.</p>
            <p className="font-arabic-sans text-lg text-muted-foreground" dir="rtl">جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
