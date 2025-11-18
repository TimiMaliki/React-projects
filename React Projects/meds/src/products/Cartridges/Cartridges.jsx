import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { ToggleThemeContext } from "../../context/ToggleThemeContext";
import { CartContext } from "../../context/CartContext";
import { cartridgeData } from "../../constant/index";
import CartridgesInfoSection from "./CartridgesInfoSection";
import {Plus, Minus } from "lucide-react";

const FlavorSlider = ({ flavors }) => {
  const { addOneToCart, removeOneFromCart, items } = useContext(CartContext);

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.3}
      breakpoints={{
        640: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3.5 },
      }}
      grabCursor
      freeMode
    >
      {flavors &&
        flavors.map((item) => {
          const cartItem = items.find((cart) => cart.id === item.id); // ✅ FIXED

          return (
            <SwiperSlide key={item.id}>
              <div className="
                group relative overflow-hidden rounded-2xl 
                bg-black/40 backdrop-blur-xl 
                border border-white/20 shadow-xl
                hover:shadow-2xl hover:bg-black/50 
                transition duration-300
              ">
                
                {/* Image */}
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-t-2xl 
                      transform group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.target.src =
                        'https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Product+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent"></div>
                </div>

                {/* Text & Controls */}
                <div className="p-4 space-y-1 absolute bottom-0 w-full">

                  <h3 className="text-xl font-bold text-white drop-shadow">
                    {item.name}
                  </h3>

                  <div className="flex justify-between items-center">
                    <p className="text-yellow-300 font-semibold">{item.type}</p>
                    <p className="text-yellow-300 font-semibold">{item.strain}</p>
                    <p className="text-yellow-300 font-semibold">{item.size}</p>
                  </div>

                  {item.price && (
                    <p className="text-green-300 font-extrabold text-lg drop-shadow">
                      {item.price}
                    </p>
                  )}

                  {/* Quantity Controls */}
                  <div className="flex justify-between align-middle items-center space-x-3 rounded-lg p-1  bg-white/50">
                    
                    {/* Minus */}
                    <button
                      onClick={() => removeOneFromCart(item.id)}
                      className="p-1 rounded-full  cursor-pointer"
                      disabled={!cartItem || cartItem.quantity <= 1}
                    >
                      <Minus size={24} className="text-black"/>
                    </button>

                    {/* Display */}
                    <span className="font-semibold min-w-[30px] text-center text-black text-xl">
                      {cartItem ? cartItem.quantity : 0}
                    </span>

                    {/* Plus */}
                    <button
                      onClick={() => addOneToCart(item)}
                      className="p-1 rounded-full  cursor-pointer"
                    >
                      <Plus size={24} className="text-black" />
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={() => addOneToCart(item)}
                    className="
                      w-full py-2 mt-2 rounded-lg 
                      bg-yellow-500 font-bold text-black
                      hover:bg-yellow-600 
                      transition duration-300 shadow-md
                      cursor-pointer
                    "
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

const CartridgeSection = () => {
  const { isLight, videoTheme, videoUi, videoBg } =
    useContext(ToggleThemeContext);

  const videoStyle = isLight ? videoBg : videoUi;
  const videoSrc = isLight ? videoTheme.sourceOne : videoTheme.sourceTwo;

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: videoStyle.bg,
        color: videoStyle.ui,
      }}
    >
      <div className="relative z-10 py-14 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-wide text-white uppercase drop-shadow-lg"
          style={{ color: videoStyle.ui }}
        >
          OUR CARTRIDGE LINEUP
        </h1>
      </div>

      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">MELTED DIAMONDS</h2>
        <FlavorSlider flavors={cartridgeData.meltedDiamonds} />
      </div>

      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-white">DISTILLATE</h2>
        <FlavorSlider flavors={cartridgeData.distillate} />
      </div>

      <CartridgesInfoSection />
    </section>
  );
};


export default CartridgeSection;