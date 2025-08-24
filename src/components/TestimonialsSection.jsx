import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    { quote: "Amazing platform!", name: "Priya Sharma", rating: 5 },
    { quote: "Helped me discover cool products.", name: "Rahul Verma", rating: 4 },
    { quote: "A one-stop destination for innovation.", name: "Anjali Mehta", rating: 5 },
  ];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-4 text-center bg-white" id="testimonials">
      <h2 className="text-2xl font-semibold mb-8 text-[#6b3e26]">
        What Our Users Say
      </h2>

      <div className="relative overflow-hidden max-w-xl mx-auto">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${slide * 100}%)` }}>
          {testimonials.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-full px-4">
              <div className="bg-gradient-to-r from-[#f5e5d8] to-[#fefaf6] p-8 rounded-lg shadow-md">
                <p className="text-gray-600 italic text-lg">"{t.quote}"</p>
                <p className="mt-4 font-semibold text-[#6b3e26]">{t.name}</p>
                <div className="mt-2 flex justify-center">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={20} className={idx < t.rating ? "text-yellow-500 fill-current" : "text-gray-300"} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
