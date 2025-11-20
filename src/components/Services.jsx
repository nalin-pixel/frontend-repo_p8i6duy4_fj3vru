import { Scissors, Sparkle, SprayCan, Bath } from "lucide-react";

const services = [
  { icon: Scissors, title: "Haircut", desc: "Classic, fade, layers, and more.", price: "$35+" },
  { icon: Sparkle, title: "Coloring", desc: "Highlights, balayage, root touch-up.", price: "$75+" },
  { icon: SprayCan, title: "Styling", desc: "Blowouts, curls, updos for any event.", price: "$40+" },
  { icon: Bath, title: "Treatment", desc: "Deep conditioning & scalp care.", price: "$30+" },
];

function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, price }) => (
            <div key={title} className="bg-white/10 border border-white/10 rounded-2xl p-6 text-white backdrop-blur hover:bg-white/15 transition">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-blue-100 mt-1">{desc}</p>
              <p className="mt-4 font-semibold">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
