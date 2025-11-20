import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 mb-6">
          <Sparkles className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Elevate your look at our modern hair studio
        </h1>
        <p className="mt-4 text-blue-100/90 text-lg max-w-2xl mx-auto">
          Expert stylists, premium products, and a relaxing vibe. Book an appointment in seconds.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#booking" className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
            Book Now
          </a>
          <a href="#services" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur transition-colors">
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
