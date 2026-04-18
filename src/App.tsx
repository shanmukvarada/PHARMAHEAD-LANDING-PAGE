import React, { useEffect, useState } from 'react';
import { 
  Building2, Truck, Store, UserCircle2, ShieldCheck, 
  ShoppingCart, CreditCard, Package, Check, X,
  FileText, Banknote, RefreshCw, Zap, TrendingUp,
  Cpu, Database, MessageSquare, Monitor, Smartphone,
  Minus, Plus, Shield, ShieldAlert, ArrowRight, Activity,
  ShoppingBag, Wallet, LayoutGrid, Briefcase, Moon, Sun
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-1.5 sm:gap-2">
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-ph2 flex items-center justify-center text-white font-heading font-black text-xs sm:text-sm tracking-tighter">
      PH
    </div>
    <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-txt flex items-center shrink-0">
      Pharma<span className="text-ph-lt">Head</span>
    </span>
  </div>
);

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
      <Logo />
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-txt2 hover:*:text-txt transition-colors">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#compare">Compare</a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <button onClick={toggleTheme} className="p-1 sm:p-2 text-txt2 hover:text-txt transition-colors shrink-0" aria-label="Toggle theme">
          {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
        </button>
        <a href="https://www.pharmahead.app/#/login" className="text-sm font-medium text-txt2 hover:text-txt hidden sm:block">Login</a>
        <a href="https://www.pharmahead.app/#/login" className="bg-ph2 text-white text-xs sm:text-sm font-semibold px-3 py-2 sm:px-6 sm:py-3 rounded-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] whitespace-nowrap shrink-0">
          Get Started
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-[72px] md:pt-32 pb-4 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center text-center fade-up z-10 min-h-[100vh] md:min-h-0 justify-start md:justify-center overflow-x-hidden md:overflow-visible">
    <div className="inline-flex items-center gap-2 px-3 py-1 md:py-1.5 rounded-[20px] bg-ph2/10 text-ph-lt border border-ph2 text-[clamp(0.65rem,2vw,0.75rem)] md:text-xs font-semibold mb-3 md:mb-8 shrink-0">
      B2B SaaS for Pharma Distributors in India
    </div>
    <h1 className="text-[clamp(1.75rem,7vw,3.75rem)] md:text-6xl font-heading font-bold text-txt mb-2 md:mb-6 leading-[1.1] md:leading-[1.1] tracking-tight text-balance shrink-0">
      Your entire pharma business, <span className="text-transparent bg-clip-text bg-gradient-to-r from-ph-lt to-[#A5B4FC]">digitized.</span>
    </h1>
    <p className="text-[clamp(0.85rem,3.5vw,1rem)] md:text-base text-txt2 max-w-3xl mb-4 md:mb-8 leading-[1.4] md:leading-[1.6] shrink-0 px-2 lg:px-0">
      The complete operating platform for Indian pharma distributors and retailers — orders, inventory, GST, collections, and field sales. All connected. All automatic.
    </p>
    <div className="flex flex-row items-center justify-center gap-2 md:gap-4 mb-6 md:mb-16 w-full shrink-0 px-2 lg:px-0">
      <a href="https://www.pharmahead.app/#/login" className="flex-1 sm:flex-none w-[auto] bg-ph2 hover:bg-ph-lt text-white px-3 py-2.5 md:px-8 md:py-3.5 rounded-lg text-[clamp(0.8rem,3vw,1rem)] md:text-base font-semibold transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center gap-1.5 whitespace-nowrap">
        Get Started Free <ArrowRight size={16} />
      </a>
      <a href="#features" className="flex-1 sm:flex-none w-[auto] bg-transparent text-txt border border-ph-border px-3 py-2.5 md:px-8 md:py-3.5 rounded-lg text-[clamp(0.8rem,3vw,1rem)] md:text-base font-semibold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap">
        See How It Works
      </a>
    </div>

    {/* Product Display Section */}
    <div className="w-full max-w-7xl mx-auto mt-auto md:mt-16 flex flex-nowrap lg:grid lg:grid-cols-12 gap-4 lg:gap-12 items-stretch lg:items-center text-left overflow-x-auto hide-scrollbar snap-x pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 md:overflow-visible min-h-[250px]">
      
      {/* 3D Laptop Mockup - Card 1 on mobile */}
      <div className="flex-none w-[85vw] lg:w-auto lg:col-span-8 relative z-20 group cursor-pointer order-1 lg:order-2 snap-center flex items-center justify-center" style={{ perspective: '2000px' }}>
      
      <div className="animate-laptop-3d mx-auto w-full max-w-[500px] lg:max-w-none">
        {/* Screen / Lid */}
        <div 
          className="relative mx-auto w-[92%] md:w-[96%] bg-[#1A1A1A] rounded-t-2xl md:rounded-t-[2rem] border-t-8 border-x-8 border-[#2A2A2A] shadow-2xl p-1.5 md:p-2.5 rounded-b-none z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-x-0"
          style={{ transform: 'rotateX(5deg)', transformOrigin: 'bottom' }}
        >
          {/* Webcam */}
          <div className="absolute top-1.5 md:top-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#050505] rounded-full ring-1 ring-white/10"></div>
          
          {/* Inner Screen */}
          <div className="relative bg-[#0A0A0A] rounded-md md:rounded-xl overflow-hidden aspect-[16/10] ring-1 ring-white/10 mt-2 md:mt-4">
            <img 
              src="/dashboard.png.png" 
              alt="PharmaHead Sub-Wholesale OS Dashboard" 
              className="w-full h-full object-cover object-left-top transition-transform duration-1000 group-hover:scale-[1.02]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.dataset.retried) {
                  target.dataset.retried = 'true';
                  target.src = '/dashboard.png';
                } else if (!target.dataset.finalFallback) {
                  target.dataset.finalFallback = 'true';
                  target.src = 'https://images.unsplash.com/photo-1542382103-f0a9ea0a221f?q=80&w=2670&auto=format&fit=crop';
                }
              }}
            />
            {/* Subtle reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.05] pointer-events-none"></div>
          </div>
        </div>

        {/* Keyboard Base */}
        <div 
          className="relative mx-auto w-[96%] md:w-[102%] h-4 md:h-6 bg-gradient-to-b from-[#444] to-[#111] rounded-b-xl md:rounded-b-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-20 flex justify-center border-t border-[#555] -mt-[1px] transition-transform duration-700 ease-out group-hover:translate-y-1 group-hover:rotate-x-10"
          style={{ transform: 'rotateX(20deg)', transformOrigin: 'top' }}
        >
          {/* Trackpad notch */}
          <div className="w-16 md:w-24 h-1.5 md:h-2 bg-[#0A0A0A] rounded-b-md md:rounded-b-lg shadow-inner mt-0"></div>
          {/* Base lip reflection */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-white/20"></div>
        </div>
      </div>
      
      {/* Bottom Shadow Glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-ph2/20 blur-[50px] rounded-[100%] z-0 group-hover:bg-ph2/30 transition-colors duration-700"></div>
      </div>

      {/* Description Side - Card 2 on mobile */}
      <div className="flex-none w-[85vw] lg:w-auto lg:col-span-4 space-y-2 md:space-y-6 order-2 lg:order-1 bg-dark2 lg:bg-transparent border border-border2 lg:border-none p-5 lg:p-0 rounded-2xl lg:rounded-none snap-center flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[20px] bg-ph2/10 text-ph-lt border border-ph-border text-[10px] md:text-xs font-semibold mb-2 lg:mb-0 w-max">
          Platform Overview
        </div>
        <h3 className="text-[clamp(1.1rem,4vw,1.5rem)] md:text-2xl lg:text-4xl font-heading font-bold text-txt tracking-tight leading-tight lg:mt-6 mb-2 lg:mb-0">
          Control your supply chain from one screen.
        </h3>
        <p className="text-txt2 text-[clamp(0.8rem,3vw,1rem)] md:text-lg lg:mt-6">
          The Sub-Wholesale dashboard gives you an incredible bird's-eye view into every operation. Monitor live revenue, manage retailers, and track orders at a single glance.
        </p>
        <ul className="space-y-2 md:space-y-4 pt-2 lg:pt-4">
          <li className="flex items-center gap-3 text-txt text-[clamp(0.8rem,3vw,1rem)] md:text-base">
             <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center shrink-0">
               <span className="text-[#10B981] text-[10px] md:text-xs">✓</span>
             </div>
             Real-time sales & collection metrics
          </li>
          <li className="flex items-center gap-3 text-txt text-[clamp(0.8rem,3vw,1rem)] md:text-base">
             <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center shrink-0">
               <span className="text-[#10B981] text-[10px] md:text-xs">✓</span>
             </div>
             Instant pending order alerts
          </li>
          <li className="flex items-center gap-3 text-txt text-[clamp(0.8rem,3vw,1rem)] md:text-base">
             <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center shrink-0">
               <span className="text-[#10B981] text-[10px] md:text-xs">✓</span>
             </div>
             Unified retailer activity feed
          </li>
        </ul>
      </div>

    </div>
  </section>
);

const TrustStrip = () => (
  <section className="py-6 md:py-10 border-y border-ph-border/50 bg-overlay overflow-hidden fade-up">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <p className="text-center text-txt3 text-[clamp(0.6rem,2vw,0.875rem)] font-semibold uppercase tracking-widest mb-4 md:mb-6">Trusted across Andhra Pradesh, Telangana & beyond</p>
      <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-center gap-6 md:gap-16 opacity-60 overflow-x-auto hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-2 text-txt font-bold text-[clamp(0.9rem,3vw,1.125rem)] whitespace-nowrap shrink-0"><Building2 size={24} className="w-5 h-5 md:w-6 md:h-6" /> Super Stockists</div>
        <div className="flex items-center gap-2 text-txt font-bold text-[clamp(0.9rem,3vw,1.125rem)] whitespace-nowrap shrink-0"><Truck size={24} className="w-5 h-5 md:w-6 md:h-6" /> Distributors</div>
        <div className="flex items-center gap-2 text-txt font-bold text-[clamp(0.9rem,3vw,1.125rem)] whitespace-nowrap shrink-0"><Store size={24} className="w-5 h-5 md:w-6 md:h-6" /> Retail Pharmacies</div>
        <div className="flex items-center gap-2 text-txt font-bold text-[clamp(0.9rem,3vw,1.125rem)] whitespace-nowrap shrink-0"><Briefcase size={24} className="w-5 h-5 md:w-6 md:h-6" /> Field Sales Teams</div>
        <div className="flex items-center gap-2 text-txt font-bold text-[clamp(0.9rem,3vw,1.125rem)] whitespace-nowrap shrink-0"><Smartphone size={24} className="w-5 h-5 md:w-6 md:h-6" /> Mobile Retailers</div>
      </div>
    </div>
  </section>
);

const ProblemSolution = () => (
  <section className="py-8 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-border2 fade-up">
    <div className="flex flex-nowrap lg:grid lg:grid-cols-2 gap-4 lg:gap-16 items-stretch overflow-x-auto hide-scrollbar snap-x pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
      
      {/* Old Way Card */}
      <div className="flex-none w-[90vw] lg:w-auto snap-center bg-dark2 lg:bg-transparent border border-border2 lg:border-none p-6 lg:p-0 rounded-2xl lg:rounded-none">
        <h2 className="text-[clamp(1.25rem,4vw,1.875rem)] lg:text-3xl font-heading mb-4 md:mb-8 text-balance">The old way is holding you back.</h2>
        <div className="space-y-3 md:space-y-6">
          {[
            "Paper order books — errors, lost orders, no traceability",
            "WhatsApp ordering — zero automation, nothing syncs",
            "Manual ledgers — reconciliation delays at month-end",
            "Spreadsheet stock — breaks when business grows",
            "Phone-based collections — slow, inconsistent, forgettable",
            "Disconnected GST tools — compliance risk every quarter"
          ].map((pain, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="mt-1 bg-[#EF4444]/10 p-1 rounded text-[#EF4444] border border-[#EF4444]/20 shrink-0">
                <X size={16} className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={3} />
              </div>
              <p className="text-txt2 text-[clamp(0.85rem,3vw,1.125rem)] leading-snug">{pain}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Card */}
      <div className="flex-none w-[90vw] lg:w-auto snap-center bg-dark2 border border-ph-border rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(79,70,229,0.1)] relative group hover:border-ph-lt/50 transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-ph2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        <h3 className="text-[clamp(1.15rem,3.5vw,1.5rem)] font-heading text-txt mb-4 md:mb-8 relative z-10 flex items-center gap-2 md:gap-3 leading-snug">
          <span className="text-ph-lt">✦</span> PharmaHead eliminates this
        </h3>
        <div className="space-y-3 md:space-y-5 relative z-10">
          {[
            "One platform — order, stock, billing, GST, collections",
            "Ledger updates automatically when an order is delivered",
            "WhatsApp + UPI payment reminders sent automatically",
            "AI reads supplier invoices — import 500 items in seconds",
            "GSTR-1, GSTR-2B, e-invoice — all built in, not add-ons",
            "Works on web, mobile, and desktop — even offline"
          ].map((solution, i) => (
            <div key={i} className="flex gap-3 md:gap-4 items-start">
              <div className="mt-1 flex-shrink-0 bg-[#10B981]/10 p-1 rounded text-[#10B981] border border-[#10B981]/20">
                <Check size={14} className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={3} />
              </div>
              <p className="text-txt text-[clamp(0.8rem,3vw,1rem)] font-medium leading-snug">{solution}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

const Features = () => {
  const [activeTab, setActiveTab] = useState('marketplace');

  const tabs = [
    { id: 'marketplace', label: 'Marketplace', icon: <ShoppingBag size={18} /> },
    { id: 'ledger', label: 'Ledger', icon: <Wallet size={18} /> },
    { id: 'gst', label: 'GST', icon: <FileText size={18} /> },
    { id: 'supply', label: 'Supply Chain', icon: <Activity size={18} /> },
    { id: 'inventory', label: 'Inventory', icon: <Package size={18} /> }
  ];

  const content: Record<string, any> = {
    marketplace: {
      heading: "Retailer Marketplace & Cart",
      desc: "Retailers browse your full medicine catalogue with search by name, salt, or therapeutic class. They add to cart, see GST breakdowns, and place orders — no phone call needed.",
      bullets: [
        "2,000+ Indian medicines with full details",
        "Search by name, composition, or therapeutic class",
        "Cart with per-item GST breakdown and discount",
        "One-tap repeat previous orders"
      ],
      cardTitle: "Marketplace",
      rows: [
        { dot: "bg-[#10B981]", left: "Paracetamol 500mg", right: "₹120 × 50 strips" },
        { dot: "bg-[#10B981]", left: "Amoxicillin 250mg", right: "₹340 × 20 strips" },
        { dot: "bg-[#10B981]", left: "Cetirizine 10mg", right: "₹85 × 100 tabs" }
      ],
      footerLeft: "Total", footerRight: "₹15,300"
    },
    ledger: {
      heading: "Double-Entry Credit Ledger",
      desc: "Every order auto-debits and every payment auto-credits the retailer's running balance. Full debit/credit timeline with zero manual entry.",
      bullets: [
        "Auto-updates on every order and payment",
        "Per-retailer transaction history",
        "Credit limit alerts before overdue",
        "Export ledger as PDF or CSV"
      ],
      cardTitle: "Credit Ledger — Ravi Medical",
      rows: [
        { dot: "bg-[#EF4444]", left: "Order #1042 (Debit)", right: "+₹45,200" },
        { dot: "bg-[#10B981]", left: "UPI Payment (Credit)", right: "-₹20,000" },
        { dot: "bg-[#EF4444]", left: "Order #1048 (Debit)", right: "+₹12,800" }
      ],
      footerLeft: "Total", footerRight: "Balance: ₹38,000"
    },
    gst: {
      heading: "GST Compliance & Reports",
      desc: "Auto-generated GSTR-1, GSTR-3B, and HSN summary reports from delivered orders. Export-ready data with buyer-wise tax breakdowns. GST filing prep in minutes.",
      bullets: [
        "GSTR-1 outward supplies register",
        "GSTR-3B monthly return summary",
        "HSN-wise tax summary",
        "Buyer-wise GST breakdown with PDF export"
      ],
      cardTitle: "GST Dashboard — March 2026",
      rows: [
        { dot: "bg-[#10B981]", left: "Total Taxable Value", right: "₹12,45,000" },
        { dot: "bg-[#F59E0B]", left: "CGST (9%)", right: "₹56,025" },
        { dot: "bg-[#F59E0B]", left: "SGST (9%)", right: "₹56,025" }
      ],
      footerLeft: "Total", footerRight: "Total Tax: ₹1,12,050"
    },
    supply: {
      heading: "Multi-Tier Supply Chain",
      desc: "Complete procurement workflow — create purchase orders to Main Wholesalers, receive goods with GRNs, manage supply orders, and track batch-level inventory.",
      bullets: [
        "Purchase Orders with auto-numbering",
        "Goods Receipt Notes (GRN) with batch tracking",
        "Supply order management (MW \u2192 Wholesaler)",
        "FIFO stock deduction by expiry date"
      ],
      cardTitle: "Purchase Order #PO-260314-001",
      rows: [
        { dot: "bg-[#10B981]", left: "Sent to MW", right: "10:30 AM" },
        { dot: "bg-[#F59E0B]", left: "Partially Received", right: "2:15 PM" },
        { dot: "bg-[#10B981]", left: "GRN Created", right: "3:45 PM" }
      ],
      footerLeft: "Total", footerRight: "₹2,45,000 — 45 items"
    },
    inventory: {
      heading: "Medicine Inventory Management",
      desc: "Manage your full catalogue — add products manually or bulk-import from the bundled 2,000+ Indian medicines dataset. Track stock, MRP, GST, and expiry.",
      bullets: [
        "Bulk import from A–Z Indian medicines database",
        "Track stock levels, MRP, and GST per item",
        "Expiry date alerts and low-stock warnings",
        "Manage manufacturer, composition, and pack size"
      ],
      cardTitle: "Inventory",
      rows: [
        { dot: "bg-[#10B981]", left: "Paracetamol 500mg", right: "320 in stock" },
        { dot: "bg-[#F59E0B]", left: "Amoxicillin 250mg", right: "18 in stock" },
        { dot: "bg-[#EF4444]", left: "Metformin 500mg", right: "0 in stock" }
      ],
      footerLeft: "Total", footerRight: "1,847 products listed"
    }
  };

  const activeData = content[activeTab];

  return (
    <section id="features" className="py-8 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-border2">
      <div className="text-center mb-6 md:mb-16 fade-up">
        <p className="text-ph-lt text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 md:mb-4">Features</p>
        <h2 className="text-[clamp(1.25rem,4vw,1.875rem)] md:text-5xl font-heading mb-2 md:mb-4 text-txt text-balance">Everything a sub-wholesaler needs</h2>
        <p className="text-txt2 text-[clamp(0.85rem,3vw,1.125rem)] md:text-lg max-w-2xl mx-auto">Built to solve the specific problems of the Indian pharma supply chain.</p>
      </div>

      <div className="flex justify-center mb-6 md:mb-16 fade-up w-full">
        <div className="bg-dark3 border border-border2 p-1 md:p-1.5 rounded-full inline-flex overflow-x-auto max-w-full hide-scrollbar snap-x">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 md:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap snap-center shrink-0 ${
                  isActive 
                    ? 'bg-ph2 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' 
                    : 'text-txt3 hover:text-txt hover:bg-overlay'
                }`}
              >
                {React.cloneElement(tab.icon, { size: 14, className: "md:w-[18px] md:h-[18px]" })} {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-dark2 border border-ph-border/50 rounded-2xl p-4 md:p-12 fade-up relative overflow-hidden mx-auto">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ph2/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 lg:gap-20 items-center relative z-10">
          
          <div className="order-2 md:order-1 flex-1">
            <h3 className="text-[clamp(1.15rem,3.5vw,1.5rem)] md:text-3xl font-heading font-bold text-txt mb-2 md:mb-4 tracking-tight">{activeData.heading}</h3>
            <p className="text-[clamp(0.85rem,3vw,1rem)] md:text-[15px] text-txt2 leading-[1.6] mb-4 md:mb-8">{activeData.desc}</p>
            <div className="space-y-2 md:space-y-4">
              {activeData.bullets.map((bullet: string, i: number) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="mt-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shrink-0 border border-[#10B981]/20">
                    <Check size={10} className="md:w-3 md:h-3" strokeWidth={3} />
                  </div>
                  <p className="text-txt text-[clamp(0.8rem,3vw,0.875rem)] md:text-sm font-medium leading-snug">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-full bg-dark3 border border-border2 rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="h-12 bg-overlay border-b border-border2 flex items-center px-4 justify-between">
                <div className="text-txt text-sm font-semibold">{activeData.cardTitle}</div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
                </div>
              </div>
              <div className="p-4 space-y-3 bg-dark">
                {activeData.rows.map((row: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-3.5 bg-overlay border border-border2/50 rounded-lg hover:bg-overlay-hover transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${row.dot}`}></div>
                      <span className="text-txt text-sm font-medium">{row.left}</span>
                    </div>
                    <span className="text-txt text-sm font-bold font-mono">{row.right}</span>
                  </div>
                ))}
              </div>
              <div className="px-4 py-4 border-t border-border2 bg-overlay flex justify-between items-center text-sm font-semibold">
                <span className="text-txt3">{activeData.footerLeft}</span>
                <span className="text-ph-lt font-bold">{activeData.footerRight}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Roles = () => {
  const roles = [
    { icon: <Building2/>, title: "Main Wholesaler", desc: "Manage catalog, supply orders, network visibility" },
    { icon: <Truck/>, title: "Distributor", desc: "Orders, inventory, billing, collections, GST, field team" },
    { icon: <Store/>, title: "Retailer", desc: "Browse catalog, order, ledger, payments, returns" },
    { icon: <Briefcase/>, title: "Salesman", desc: "Beat visits, order capture, call reports, collections" }
  ];
  
  return (
    <section className="py-8 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-border2 fade-up">
      <h2 className="text-[clamp(1.25rem,4vw,1.875rem)] md:text-3xl font-heading text-center mb-6 md:mb-16 text-balance">One integrated platform, 4 native experiences.</h2>
      <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center overflow-x-auto hide-scrollbar snap-x gap-3 md:gap-4 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
        {roles.map((r, i) => (
          <div key={i} className="flex-none w-[75vw] md:flex-1 md:min-w-[200px] max-w-[280px] bg-dark2 border border-border2 p-4 md:p-6 rounded-xl hover:border-ph-border transition-colors snap-center">
            <div className="text-txt mb-3 md:mb-4 opacity-80">{React.cloneElement(r.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}</div>
            <h4 className="text-txt text-sm md:text-base font-bold mb-1.5 md:mb-2">{r.title}</h4>
            <p className="text-[11px] md:text-xs text-txt3 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const platformFeatures = [
    {
      icon: <ShoppingBag size={22} />,
      color: "bg-[#4F46E5] text-white", // Indigo
      title: "Retailer Marketplace",
      desc: "Retailers browse your full catalogue, search by medicine name or salt, add to cart, and place orders with GST breakdowns — all from their phone."
    },
    {
      icon: <Wallet size={22} />,
      color: "bg-[#10B981] text-white", // Emerald 
      title: "Real-Time Credit Ledger",
      desc: "Every order debits and every payment credits — automatically. Double-entry ledger per retailer with full transaction history. No diary needed."
    },
    {
      icon: <LayoutGrid size={22} />,
      color: "bg-[#0EA5E9] text-white", // Sky Blue
      title: "GST Compliance Dashboard",
      desc: "Auto-generated GSTR-1, GSTR-3B, and HSN summary reports. Export-ready GST data with buyer-wise breakdowns. Filing prep in minutes, not hours."
    },
    {
      icon: <Smartphone size={22} />,
      color: "bg-[#F59E0B] text-white", // Amber/Orange
      title: "Order Lifecycle Management",
      desc: "Accept → Dispatch → Deliver. Generate PDF invoices and delivery receipts at each stage. Retailers see live status updates via real-time notifications."
    },
    {
      icon: <Zap size={22} />,
      color: "bg-[#8B5CF6] text-white", // Purple
      title: "Multi-Tier Supply Chain",
      desc: "Complete supply chain from Main Wholesaler → Sub-Wholesaler → Retailer. Purchase orders, GRNs, supply orders, and scheme management across tiers."
    }
  ];

  return (
    <section id="how-it-works" className="py-8 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto fade-up">
      <div className="text-center mb-6 md:mb-16">
        <p className="text-ph-lt text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 md:mb-4">The Platform</p>
        <h2 className="text-[clamp(1.25rem,4vw,1.875rem)] md:text-5xl font-heading text-txt">One platform for your entire operation</h2>
      </div>
      <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto hide-scrollbar snap-x gap-3 md:gap-6 justify-start md:justify-center pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
        {platformFeatures.map((f, i) => (
          <div key={i} className="flex-none w-[80vw] sm:w-[320px] md:w-auto bg-dark2 border border-border2 p-5 md:p-8 rounded-xl md:rounded-2xl hover:border-ph-border hover:bg-dark2/80 transition-all duration-300 snap-center">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg ${f.color}`}>
              {React.cloneElement(f.icon, { className: "w-5 h-5 md:w-[22px] md:h-[22px]" })}
            </div>
            <h3 className="text-[clamp(1rem,3vw,1.25rem)] md:text-xl font-bold text-txt mb-2 md:mb-3 tracking-tight">{f.title}</h3>
            <p className="text-[12px] md:text-sm text-txt3 leading-snug md:leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const StatsBanner = () => (
  <section className="py-12 bg-ph2 relative overflow-hidden fade-up">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-30"></div>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 hover:gap-x-6 relative z-10 lg:divide-x lg:divide-white/10">
      {[ {v:"102+", l:"App routes"}, {v:"274", l:"API handlers"}, {v:"56", l:"Data models"}, {v:"4", l:"User roles"}, {v:"5", l:"App surfaces"}, {v:"₹499/mo", l:"Starting price"} ].map((s, i) => (
        <div key={i} className="text-center px-2">
          <p className="text-3xl font-black text-txt mb-1 font-heading">{s.v}</p>
          <p className="text-xs font-medium text-txt/70 uppercase tracking-widest leading-relaxed">{s.l}</p>
        </div>
      ))}
    </div>
  </section>
);

const Pricing = () => {
  const plans = [
    {
      name: "Billing",
      price: "₹499",
      period: "/month",
      desc: "Billing-first plan for GST invoice and collections.",
      badge: "Retailer ordering disabled",
      features: ["GST invoice creation", "Billing management", "Ledger", "Payment tracking", "Collection tracking"],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Basic",
      price: "₹999",
      period: "/month",
      desc: "Core operational suite for growing sub-wholesalers.",
      badge: "Up to 50 retailers",
      features: ["Order management", "Retailer management", "Billing and finance tools", "Inventory management", "Purchase orders", "Scheme management", "Support tickets"],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Pro",
      price: "₹1,499",
      period: "/month",
      desc: "Most popular for advanced operations with rack control.",
      badge: "Up to 100 retailers",
      features: ["Everything in Basic", "Rack Manager", "Personal / Priority Support"],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Superior",
      price: "₹1,999",
      period: "/month",
      desc: "Full suite with sales team enablement and unlimited scale.",
      badge: "Unlimited retailers",
      features: ["Everything in Pro", "Rack Manager", "Sales Team Management", "Personal Support"],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-8 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-border2 fade-up">
      <div className="text-center mb-6 md:mb-10">
        <p className="text-ph-lt text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 md:mb-4">Pricing</p>
        <h2 className="text-[clamp(1.25rem,4vw,1.875rem)] md:text-5xl font-heading mb-2 md:mb-4 text-txt">Simple, transparent pricing</h2>
        <p className="text-txt2 text-[clamp(0.85rem,3vw,1.125rem)] md:text-lg max-w-2xl mx-auto text-balance">Sub-Wholesaler plans for billing to full operations.</p>
      </div>

      <div className="flex justify-center mb-6 md:mb-16">
        <div className="bg-dark3 border border-border2 p-1 md:p-1.5 rounded-full inline-flex items-center">
          <button className="bg-ph2 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[11px] md:text-sm font-semibold shadow-[0_0_15px_rgba(79,70,229,0.4)]">Monthly</button>
          <button className="text-txt3 px-4 py-2 md:px-6 md:py-2 rounded-full text-[11px] md:text-sm font-semibold hover:text-txt flex items-center gap-1.5">
            Yearly <span className="bg-[#10B981]/15 text-[#10B981] text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#10B981]/20 hidden sm:inline-block">SAVE BIG</span>
          </button>
        </div>
      </div>

      <div className="flex flex-nowrap lg:grid lg:grid-cols-4 overflow-x-auto hide-scrollbar snap-x gap-3 md:gap-6 mb-8 md:mb-12 pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
        {plans.map((p, i) => (
          <div key={i} className={`flex-none w-[75vw] sm:w-[320px] lg:w-auto bg-dark2 rounded-xl md:rounded-2xl p-5 md:p-8 border transition-all duration-300 relative snap-center ${p.popular ? 'border-ph-lt shadow-[0_0_40px_rgba(79,70,229,0.2)]' : 'border-border2 hover:border-ph-border'}`}>
            {p.popular && <div className="absolute -top-2.5 md:-top-3 left-1/2 -translate-x-1/2 bg-[#efebff] text-ph2 text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-ph-lt/30 tracking-wide whitespace-nowrap">Most Popular</div>}
            
            <h3 className="text-[clamp(1rem,3vw,1.25rem)] md:text-xl font-bold text-txt mb-1 md:mb-2">{p.name}</h3>
            <p className="text-[11px] md:text-sm text-txt3 h-8 md:h-10 mb-4 md:mb-6 leading-tight">{p.desc}</p>
            
            <div className="mb-4 md:mb-6"><span className="text-2xl md:text-4xl font-black text-txt">{p.price}</span><span className="text-txt3 font-medium text-xs md:text-sm">{p.period}</span></div>
            
            <div className={`text-center py-2 rounded-md md:rounded-lg text-[10px] md:text-sm font-semibold mb-4 md:mb-8 border ${p.popular ? 'bg-ph-lt/10 text-ph-lt border-ph-lt/20' : 'bg-overlay text-txt2 border-white/5'} whitespace-nowrap px-1`}>
              {p.badge}
            </div>

            <ul className="space-y-2 md:space-y-4 mb-6 md:mb-8">
              {p.features.map((f, j) => (
                <li key={j} className="flex gap-2.5 text-[11px] md:text-sm text-txt items-start">
                   <div className="mt-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] w-3.5 h-3.5 md:w-4 md:h-4 flex items-center justify-center shrink-0 border border-[#10B981]/20">
                    <Check size={8} className="md:w-[10px] md:h-[10px]" strokeWidth={3} />
                  </div>
                  <span className="leading-snug">{f}</span>
                </li>
              ))}
            </ul>
            
            <a href="https://www.pharmahead.app/#/login" className={`block text-center w-full py-2.5 md:py-3.5 rounded-lg text-xs md:text-base font-bold transition-colors ${p.popular ? 'bg-ph2 hover:bg-ph-lt text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]' : 'bg-overlay hover:bg-overlay-hover text-txt border border-border2'}`}>
              {p.buttonText}
            </a>
          </div>
        ))}
      </div>

      {/* Wholesaler Plans */}
      <div className="flex flex-nowrap md:grid md:grid-cols-1 overflow-x-auto hide-scrollbar snap-x gap-3 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex-none w-[85vw] md:w-auto bg-dark3 border border-border2 rounded-xl p-5 md:p-8 max-w-4xl mx-auto hover:border-ph-border transition-colors duration-300 snap-center">
          <h3 className="text-lg md:text-xl font-bold text-txt mb-1 md:mb-2">Wholesaler Plans</h3>
          <p className="text-txt2 text-[11px] md:text-sm mb-4 md:mb-6">For Main Wholesaler accounts managing sub-wholesaler networks.</p>
          
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-dark2 border border-border2 p-4 md:p-5 rounded-lg hover:bg-overlay transition-colors">
              <h4 className="font-bold text-txt text-sm md:text-base mb-1 md:mb-2">Free Plan</h4>
              <p className="text-[11px] md:text-sm text-txt3">₹0/month • Up to 10 sub-wholesalers • Standard support</p>
            </div>
            <div className="bg-ph-lt/10 border border-ph-border/50 p-4 md:p-5 rounded-lg">
              <h4 className="font-bold text-txt text-sm md:text-base mb-1 md:mb-2">Unlimited Plan</h4>
              <p className="text-[11px] md:text-sm text-txt3">₹999/month or ₹9,999/year • Unlimited sub-wholesalers • Priority support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  const rows = [
    { f: "Built for Indian pharma chain", ph: ["✓ Yes", "green"], gp: ["✗ Generic", "red"], pe: ["Partial", "amber"] },
    { f: "Role-specific interfaces (4 roles)", ph: ["✓ Full", "green"], gp: ["✗ No", "red"], pe: ["Partial", "amber"] },
    { f: "Retailer mobile ordering app", ph: ["✓ Android", "green"], gp: ["✗ No", "red"], pe: ["✗ Rare", "red"] },
    { f: "Desktop + Cloud + Mobile", ph: ["✓ All three", "green"], gp: ["Cloud only", "txt2"], pe: ["Desktop only", "txt2"] },
    { f: "AI-powered invoice import", ph: ["✓ Gemini+Claude", "green"], gp: ["✗ No", "red"], pe: ["✗ No", "red"] },
    { f: "Auto ledger on order change", ph: ["✓ Automatic", "green"], gp: ["Manual entry", "txt2"], pe: ["Manual entry", "txt2"] },
    { f: "WhatsApp reminders + UPI", ph: ["✓ Built-in", "green"], gp: ["✗ No", "red"], pe: ["✗ No", "red"] },
    { f: "GSTR-2B reconciliation", ph: ["✓ Built-in", "green"], gp: ["✗ No", "red"], pe: ["Add-on", "amber"] },
    { f: "E-Invoice (IRN) generation", ph: ["✓ Built-in", "green"], gp: ["Partial", "amber"], pe: ["Add-on", "amber"] },
    { f: "SaaS pricing starting at", ph: ["✓ ₹499/mo", "green"], gp: ["Varies", "txt2"], pe: ["₹10,000+/mo", "txt2"] },
  ];

  const getColor = (colorStr: string) => {
    switch(colorStr) {
      case 'green': return 'text-[#10B981]';
      case 'red': return 'text-[#EF4444]';
      case 'amber': return 'text-[#F59E0B]';
      default: return 'text-txt3';
    }
  };

  return (
    <section id="compare" className="py-8 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-b border-border2 fade-up">
      <h2 className="text-[clamp(1.25rem,4vw,1.875rem)] lg:text-4xl font-heading text-center mb-6 md:mb-16 text-balance">Why PharmaHead wins.</h2>
      <div className="overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        <table className="w-full text-left border-collapse min-w-[500px] md:min-w-[700px]">
          <thead>
            <tr>
              <th className="p-2 md:p-4 border-b border-border2 text-[10px] md:text-txt3 font-semibold w-1/3">Feature</th>
              <th className="p-2 md:p-4 border border-x-ph-border border-t-ph-border border-b-ph-border bg-ph-border/30 text-txt text-[11px] md:text-sm font-bold rounded-t-xl text-center w-1/4 relative">PharmaHead
               <div className="absolute top-0 left-0 right-0 h-[2px] bg-ph-lt"></div>
              </th>
              <th className="p-2 md:p-4 border-b border-border2 text-[10px] md:text-txt3 font-semibold text-center w-1/5">Generic Billing</th>
              <th className="p-2 md:p-4 border-b border-border2 text-[10px] md:text-txt3 font-semibold text-center w-1/5">Pharma ERPs</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-overlay transition-colors">
                <td className="p-2 md:p-4 border-b border-border2 text-[11px] md:text-sm text-txt font-medium leading-tight">{r.f}</td>
                <td className={`p-2 md:p-4 border-x border-b border-ph-border bg-ph-border/10 text-center text-[11px] md:text-sm font-bold ${getColor(r.ph[1])}`}>{r.ph[0]}</td>
                <td className={`p-2 md:p-4 border-b border-border2 text-center text-[11px] md:text-sm ${getColor(r.gp[1])}`}>{r.gp[0]}</td>
                <td className={`p-2 md:p-4 border-b border-border2 text-center text-[11px] md:text-sm ${getColor(r.pe[1])}`}>{r.pe[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-8 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto flex justify-center fade-up">
    <div className="bg-gradient-to-br from-dark2 to-dark3 border border-ph-lt/50 rounded-[20px] md:rounded-3xl p-5 md:p-16 text-center shadow-[0_0_100px_rgba(79,70,229,0.15)] relative overflow-hidden group w-full max-w-4xl">
      <div className="absolute inset-0 bg-ph-lt/10 blur-[100px] z-0 transition-opacity duration-1000 group-hover:opacity-100 opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-[clamp(1.25rem,4vw,2.5rem)] md:text-5xl font-heading text-txt mb-3 md:mb-6 tracking-tight text-balance leading-tight">Ready to digitize your pharma business?</h2>
        <p className="text-[clamp(0.85rem,3vw,1.125rem)] md:text-lg text-txt2 mb-6 md:mb-10 max-w-2xl mx-auto leading-snug">Join distributors and retailers across India already running on PharmaHead. Start free — no credit card required.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2.5 md:gap-4">
          <a href="https://www.pharmahead.app/#/login" className="w-[85vw] sm:w-auto bg-ph2 hover:bg-ph-lt text-white px-4 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base font-bold transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_50px_rgba(79,70,229,0.6)] flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0">
            Get Started Free <ArrowRight size={16} className="md:w-5 md:h-5" />
          </a>
          <a href="https://www.pharmahead.app/#/login" className="block text-center w-[85vw] sm:w-auto bg-overlay hover:bg-overlay-hover text-txt border border-border2 px-4 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base font-bold transition-all whitespace-nowrap shrink-0">
            Talk to Sales
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border2 bg-dark py-8 md:py-16 px-4 sm:px-6 fade-up">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-nowrap md:grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12 mb-8 md:mb-16 overflow-x-auto hide-scrollbar snap-x pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex-none w-[75vw] sm:w-auto snap-center sm:col-span-2 lg:col-span-1 border border-border2 md:border-none p-4 md:p-0 rounded-xl md:rounded-none">
          <Logo />
          <p className="text-txt3 text-[11px] md:text-sm mt-3 md:mt-4 font-medium mb-6 md:mb-8">Your entire pharma business, digitized.</p>
          
          <div className="pt-2">
            <p className="text-txt3 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 md:mb-3">Built & Maintained By</p>
            <a href="https://leevonlabs.tech" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col gap-1 group">
              <div className="flex items-center gap-2 md:gap-3">
                <svg viewBox="0 0 100 100" className="w-6 h-6 md:w-8 md:h-8 text-txt group-hover:text-ph-lt transition-colors fill-current" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Left Wedge shape */}
                  <polygon points="10,90 35,10 50,10" />
                  {/* Inner Right Cut-out shape forming lightning "L" */}
                  <polygon points="38,50 98,50 20.4,85.3" />
                </svg>
                <span className="text-txt group-hover:text-ph-lt font-sans transition-colors font-black tracking-[0.12em] text-sm md:text-lg mt-0.5">
                  LEEVON LABS
                </span>
              </div>
              <span className="text-txt3 group-hover:text-txt transition-colors text-[10px] md:text-xs font-semibold ml-8 md:ml-11">
                leevonlabs.tech
              </span>
            </a>
          </div>
        </div>
        <div className="flex-none w-[60vw] sm:w-auto snap-center border border-border2 md:border-none p-4 md:p-0 rounded-xl md:rounded-none">
          <h4 className="text-txt text-sm md:text-base font-bold mb-3 md:mb-4">Product</h4>
          <ul className="space-y-2 md:space-y-3 text-[11px] md:text-sm text-txt3">
            <li><a href="#" className="hover:text-ph-lt transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-ph-lt transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-ph-lt transition-colors">Desktop App</a></li>
            <li><a href="#" className="hover:text-ph-lt transition-colors">Mobile App</a></li>
            <li><a href="#" className="hover:text-ph-lt transition-colors">Migration</a></li>
          </ul>
        </div>
        <div className="flex-none w-[60vw] sm:w-auto snap-center border border-border2 md:border-none p-4 md:p-0 rounded-xl md:rounded-none">
          <h4 className="text-txt text-sm md:text-base font-bold mb-3 md:mb-4">For</h4>
          <ul className="space-y-2 md:space-y-3 text-[11px] md:text-sm text-txt3">
            <li><a href="#" className="hover:text-ph-lt transition-colors">Super Stockists</a></li>
            <li><a href="#" className="hover:text-ph-lt transition-colors">Distributors</a></li>
            <li><a href="#" className="hover:text-ph-lt transition-colors">Retail Pharmacies</a></li>
            <li><a href="#" className="hover:text-ph-lt transition-colors">Field Sales Teams</a></li>
          </ul>
        </div>
        <div className="flex-none w-[60vw] sm:w-auto snap-center border border-border2 md:border-none p-4 md:p-0 rounded-xl md:rounded-none">
          <h4 className="text-txt text-sm md:text-base font-bold mb-3 md:mb-4">Company</h4>
          <ul className="space-y-2 md:space-y-3 text-[11px] md:text-sm text-txt3">
            <li><a href="#" className="hover:text-ph-lt transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-ph-lt transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-ph-lt transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        <div className="flex-none w-[75vw] sm:w-auto snap-center sm:col-span-2 lg:col-span-1 border border-border2 md:border-none p-4 md:p-0 rounded-xl md:rounded-none">
          <h4 className="text-txt text-sm md:text-base font-bold mb-3 md:mb-4">Contact</h4>
          <ul className="space-y-2 md:space-y-3 text-[11px] md:text-sm text-txt3">
            <li><a href="mailto:admin@pharmahead.app" className="hover:text-ph-lt transition-colors break-words">admin@pharmahead.app</a></li>
            <li>Admin + Support: +91 9398958886</li>
            <li>Sales + Support: +91 7780763121</li>
            <li>Mon – Sat, 9am – 6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border2 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[10px] md:text-xs text-txt3">
        <p className="text-center md:text-left">© 2026 <a href="https://leevonlabs.tech" target="_blank" rel="noopener noreferrer" className="hover:text-txt transition-colors">Leevon Labs Private Limited</a>. All rights reserved.</p>
        <p>pharmahead.app · Made in India 🇮🇳</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Apply theme class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative selection:bg-ph2 selection:text-white pb-0 overflow-x-hidden">
      {/* Background glow orb */}
      <div className="fixed -top-[10%] -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,transparent_70%)] blur-[80px] -z-10 pointer-events-none transition-opacity duration-300"></div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <Features />
      <Roles />
      <HowItWorks />
      <StatsBanner />
      <Pricing />
      <Comparison />
      <FinalCTA />
      <Footer />
    </div>
  );
}
