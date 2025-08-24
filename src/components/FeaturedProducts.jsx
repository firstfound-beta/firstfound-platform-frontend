// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Fetch products
//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_BACKEND_URL}/products`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.slice(0, 6)); // only 6 featured
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error:", err);
//         setError("Failed to load products.");
//         setLoading(false);
//       });
//   }, []);

//   // Navigation handlers
//   const nextSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === Math.ceil(products.length / 3) - 1 ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? Math.ceil(products.length / 3) - 1 : prev - 1
//     );
//   };

//   return (
//     <section
//       className="py-12 px-4 max-w-7xl mx-auto bg-[#fefaf6]"
//       id="featured-products"
//     >
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold text-[#6b3e26]">
//           Featured Products
//         </h2>
//         {products.length > 3 && (
//           <div className="flex space-x-2">
//             <button
//               onClick={prevSlide}
//               className="p-2 bg-[#6b3e26] text-white rounded-full hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-110"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="p-2 bg-[#6b3e26] text-white rounded-full hover:bg-[#8b5c3c] transition-all duration-300 hover:scale-110"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Loading */}
//       {loading && (
//         <div className="flex justify-center items-center py-12">
//           <div className="loading-spinner"></div>
//           <span className="ml-4 text-[#6b3e26]">Loading products...</span>
//         </div>
//       )}

//       {/* Error */}
//       {error && (
//         <div className="text-center py-12">
//           <p className="text-red-600 mb-4">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="bg-[#6b3e26] text-white px-4 py-2 rounded hover:bg-[#8b5c3c] transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       {/* Empty */}
//       {!loading && !error && products.length === 0 && (
//         <div className="text-center py-12">
//           <p className="text-gray-600">No products available at the moment.</p>
//         </div>
//       )}

//       {/* Carousel */}
//       {!loading && !error && products.length > 0 && (
//         <>
//           <div className="relative overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {Array.from({ length: Math.ceil(products.length / 3) }).map(
//                 (_, slideIndex) => (
//                   <div key={slideIndex} className="w-full flex-shrink-0">
//                     <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//                       {products
//                         .slice(slideIndex * 3, slideIndex * 3 + 3)
//                         .map((p) => (
//                           <div
//                             key={p.id}
//                             className="bg-white shadow-md rounded-lg p-6 card-hover"
//                           >
//                             <h3 className="font-bold text-lg mb-2 text-[#4a2e19]">
//                               {p.name}
//                             </h3>
//                             <p className="text-gray-600">{p.description}</p>
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Dots */}
//           {products.length > 3 && (
//             <div className="flex justify-center mt-6 space-x-2">
//               {Array.from({ length: Math.ceil(products.length / 3) }).map(
//                 (_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       currentSlide === index
//                         ? "bg-[#6b3e26] scale-125"
//                         : "bg-gray-300 hover:bg-gray-400"
//                     }`}
//                   />
//                 )
//               )}
//             </div>
//           )}
//         </>
//       )}
//     </section>
//   );
// }
