import React from "react";
import { Facebook, Instagram, Github, Send, Grid3x3, ArrowUp, Search, MapPin, Mountain, Heart, Leaf, Backpack, CheckCircle } from "lucide-react";
import heroMountains from "../images/planeMountain.png";
import campfire from "../images/campfire.jpg";
import backpackingImg from "../images/backpacking.png";
import couplesTripImg from "../images/couplesTrip.png";
import luxuriousTripsImg from "../images/luxuriousTrip.png";
import soloTravelImg from "../images/soloTravel.png";
import coTravelImg from "../images/coTravel.png";
import trekkingImg from "../images/trekking.png";
import traveella from "../images/traveellaSignup.png";


const AfterLoggedInPage = () => {
  const offerings = [
    { title: "Backpacking", image: backpackingImg, className: "col-span-1 row-span-2" },
    { title: "Couples Trip", image: couplesTripImg, className: "col-span-1 row-span-1" },
    { title: "Luxurious Trips", image: luxuriousTripsImg, className: "col-span-2 row-span-1" },
    { title: "Solo Travel", image: soloTravelImg, className: "col-span-1 row-span-1" },
    { title: "Co-Travel\nwith others", image: coTravelImg, className: "col-span-1 row-span-1" },
    { title: "Trekking", image: trekkingImg, className: "col-span-1 row-span-1" },
  ];

  const tourCards = [
    {
      image: backpackingImg,
      duration: "4 days",
      title: "Cartagena Tour - Guided Arizona",
      subtitle: "Desert Tour by ATV",
      price: "$1,249",
    },
    {
      image: luxuriousTripsImg,
      duration: "4 days",
      title: "Cartagena Tour - Guided Arizona",
      subtitle: "Desert Tour by ATV",
      price: "$1,249",
    },
    {
      image: coTravelImg,
      duration: "4 days",
      title: "Cartagena Tour - Guided Arizona",
      subtitle: "Desert Tour by ATV",
      price: "$1,249",
    },
    {
      image: trekkingImg,
      duration: "4 days",
      title: "Cartagena Tour - Guided Arizona",
      subtitle: "Desert Tour by ATV",
      price: "$1,249",
    },
  ];

  const TourCard = ({ card }) => (
    <div className="group relative flex-shrink-0 w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
      <img 
        src={card.image} 
        alt={card.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
        {card.duration}
      </div>
      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
        <Heart className="w-5 h-5 text-foreground" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-lg font-bold mb-1">{card.title}</h3>
        <p className="text-sm text-white/90 mb-2">{card.subtitle}</p>
        <p className="text-xl font-bold">{card.price}</p>
      </div>
    </div>
  );

  const AirplanePath = ({ reverse = false }) => (
    <div className={`relative w-full h-32 flex items-center ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex-1 relative">
        <svg className="w-full h-full" viewBox="0 0 800 100" preserveAspectRatio="none">
          <path
            d={reverse ? "M 800 50 Q 600 10, 400 50 T 0 50" : "M 0 50 Q 200 10, 400 50 T 800 50"}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10,10"
            className="text-muted-foreground opacity-40"
          />
        </svg>
      </div>
      <div className={`absolute ${reverse ? 'left-8' : 'right-8'} animate-float`}>
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none"
          className={`text-foreground ${reverse ? 'rotate-[225deg]' : 'rotate-45'}`}
        >
          <path 
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );

   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-background text-foreground overflow-y-auto">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground">
            <path d="M20 5 L25 15 L20 10 L15 15 Z" fill="currentColor" />
            <rect x="18" y="15" width="4" height="15" fill="currentColor" />
            <ellipse cx="20" cy="32" rx="8" ry="3" fill="currentColor" opacity="0.3" />
          </svg>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">TRAVEELLA</h1>
            <p className="text-[10px] text-accent uppercase tracking-widest">Travel Your Dreams Without Overthinking</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-primary text-primary-foreground px-6 py-3 rounded-full">
          <button className="px-6 py-2 rounded-full hover:bg-primary-foreground/10 transition-colors font-medium">
            Home
          </button>
          <button className="px-6 py-2 rounded-full hover:bg-primary-foreground/10 transition-colors font-medium">
            Discovery
          </button>
          <button className="px-6 py-2 rounded-full hover:bg-primary-foreground/10 transition-colors font-medium">
            About Us
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 relative">
        <MapPin className="absolute left-12 top-8 w-16 h-16 text-foreground/10 animate-pulse" style={{ animationDuration: "3s" }} />
        <Mountain className="absolute right-12 top-12 w-20 h-20 text-foreground/10 animate-pulse" style={{ animationDuration: "4s" }} />
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            FIND MORE, CHOOSE<br />SMARTER, WANDER FREELY
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            At Travella, we believe adventures don't need to be expensive. Discover breathtaking destinations, connect with like-minded travelers, and plan journeys that fit perfectly within your budget.
          </p>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex items-center gap-4 bg-card border-2 border-border rounded-full px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Search For Your Favorite Location"
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button className="bg-primary text-primary-foreground px-8 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl md:text-4xl font-bold">Our Offerings</h3>
          <button className="text-accent hover:underline font-medium">See all</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`${offering.className} relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl md:text-2xl font-bold whitespace-pre-line">{offering.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Horizontal Scroll Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {["Backpacking", "Luxurious Travel", "CO-Travel"].map((sectionTitle, idx) => (
          <section key={idx}>
            <h2 className="text-4xl font-bold mb-8">{sectionTitle}</h2>
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                {tourCards.map((card, i) => (
                  <TourCard key={`${sectionTitle}-${i}`} card={card} />
                ))}
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
            {idx < 2 && <AirplanePath reverse={idx % 2 === 1} />}
          </section>
        ))}
      </div>

      <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-16">
          Why choose Travella ?
        </h1>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left side - Illustration */}
          <div className="bg-black rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden min-h-[400px]">
            <img 
              src={heroMountains} 
              alt="Mountain landscape with traveler" 
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Right side - Campfire Image */}
          <div className="rounded-[3rem] overflow-hidden min-h-[400px]">
            <img 
              src={campfire} 
              alt="Group of travelers around campfire" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Budget-Friendly Card */}
          <div className="border-2 border-foreground rounded-[2.5rem] p-8 relative">
            <div className="absolute top-8 left-8">
              <Leaf className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-4">Budget-Friendly</h2>
              <p className="text-sm leading-relaxed opacity-90">
                Unlock adventures without breaking the bank. Enjoy group discounts, 
                shared costs, and smart packages that keep every trip affordable and 
                unforgettable.
              </p>
            </div>
          </div>

          {/* Travel Together Card */}
          <div className="border-2 border-foreground rounded-[2.5rem] p-8 relative">
            <div className="absolute top-8 right-8">
              <Backpack className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-4">Travel Together</h2>
              <p className="text-sm leading-relaxed opacity-90">
                Meet like-minded explorers, build lasting friendships, and share 
                unforgettable journeys that turn every trip into a story worth telling.
              </p>
            </div>
          </div>

          {/* Trusted Agents Card */}
          <div className="border-2 border-foreground rounded-[2.5rem] p-8 relative">
            <div className="absolute top-8 left-8">
              <CheckCircle className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-4">Trusted Agents</h2>
              <p className="text-sm leading-relaxed opacity-90">
                Book with confidence through our network of verified and reliable 
                partners, ensuring safe, seamless, and worry-free travel every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>






       <footer className="relative bg-background border-t-4 border-secondary">
  {/* Main Footer Content */}
  <div className="bg-background py-12 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <div>
            <img 
              src={traveella} 
              alt="Traveella Logo" 
              className="w-40 h-auto" 
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Travel made simple, affordable, and connected.
          </p>
        </div>

        {/* Social Icons and Contact */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a href="#" className="text-foreground hover:text-secondary transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-colors" aria-label="Github">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-colors" aria-label="Telegram">
              <Send className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-colors" aria-label="Grid">
              <Grid3x3 className="w-5 h-5" />
            </a>
          </div>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-2 font-medium">
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <nav className="flex flex-wrap gap-6 text-sm border-t pt-6">
        <a href="#" className="text-foreground hover:text-secondary transition-colors">Privacy Policy</a>
        <a href="#" className="text-foreground hover:text-secondary transition-colors">Terms of Use</a>
        <a href="#" className="text-foreground hover:text-secondary transition-colors">Sales and Refunds</a>
        <a href="#" className="text-foreground hover:text-secondary transition-colors">Legal</a>
        <a href="#" className="text-foreground hover:text-secondary transition-colors">Site Map</a>
      </nav>
    </div>
  </div>

  {/* Wave Section */}
  <div className="relative h-64 overflow-hidden">
    <svg viewBox="0 0 1440 320" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      <path
        fill="hsl(var(--wave-gray))"
        fillOpacity="0.3"
        d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
      <path
        fill="hsl(var(--footer-bg))"
        fillOpacity="0.5"
        d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,165.3C672,171,768,213,864,213.3C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
      <path
        fill="hsl(var(--footer-dark))"
        d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,218.7C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>

    {/* Copyright and Scroll to Top */}
    <div className="absolute bottom-6 left-0 right-0 px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto">
      <p className="text-white text-sm">© 2021 All Rights Reserved</p>
      <button
        onClick={scrollToTop}
        className="rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:text-white p-2"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  </div>
</footer>





      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AfterLoggedInPage;
