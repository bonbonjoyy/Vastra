import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

export default function Header({ ...props }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const searchRef = useRef(null);
  const cartRef = useRef(null);
  const navigate = useNavigate();

  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
    setDropdownOpen(false);
  };

  const toggleSearchForm = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest("#galeri-button")
      ) {
        setDropdownOpen(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target) &&
        !event.target.closest("#profile-button")
      ) {
        setProfileDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-[18px] bg-gray-300`}
    >
      <div className="container-xs flex items-center justify-between gap-5 px-5 w-full">
        <div className="flex items-center pl-[120px]">
          <Link to="/">
            <img
              src="/asset/image/logo-new.svg"
              alt="Logo"
              className="w-[138px] h-[70px] object-contain"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="flex flex-wrap gap-7">
            <li>
              <div className="relative">
                <button
                  id="galeri-button"
                  className="text-[18px] font-normal text-blk hover:bg-black hover:text-white px-4 py-2"
                  onClick={toggleDropdown}
                >
                  Galeri
                </button>
                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10"
                  >
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/Harian"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Harian
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Formal"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Formal
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Khusus"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Khusus
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link
                to="/Tips-Bahan"
                className="text-[18px] font-normal text-blk hover:bg-black hover:text-white px-4 py-2"
              >
                Tips
              </Link>
            </li>
            <li>
              <Link
                to="/Kreasi"
                className="text-[18px] font-normal text-blk hover:bg-black hover:text-white px-4 py-2"
              >
                Kreasi
              </Link>
            </li>
            <li>
              <Link
                to="/Produk-Kami/Kaos"
                className="text-[18px] font-normal text-blk hover:bg-black hover:text-white px-4 py-2"
              >
                Produk Kami
              </Link>
            </li>
          </ul>
        </div>
        <div className="mr-2.5 flex gap-7 md:mr-0 pr-12 relative">
          {/* Profile Button */}
          <a id="profile-button" href="#" onClick={toggleProfileDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx={12} cy={7} r={4}></circle>
              </g>
            </svg>
          </a>

          {/* Profile Dropdown */}
          {isProfileDropdownOpen && (
            <div
              ref={profileDropdownRef}
              className="absolute right-24 mt-10 w-48 bg-white border border-gray-300 rounded shadow-lg z-10"
            >
              <ul className="py-2">
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Profil
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Keluar
                  </a>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                  >
                    Masuk
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Search Button */}
          <a href="#" onClick={toggleSearchForm}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="currentColor"
                  d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"
                ></path>
              </g>
            </svg>
          </a>

          {/* Search Form */}
          {isSearchVisible && (
            <form
              ref={searchRef}
              className="absolute right-0 mt-8 mr-24 w-48 bg-white border border-gray-300 rounded shadow-lg z-10"
            >
              <input
                type="text"
                placeholder="Cari..."
                className="block w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              />
            </form>
          )}

          {/* Cart Button */}
          <a href="#" onClick={toggleCart} className="pr-[65px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 56 56"
            >
              <path
                fill="currentColor"
                d="M14.559 51.953h27.586c4.218 0 6.656-2.437 6.656-7.266V20.43c0-4.828-2.461-7.266-7.36-7.266h-3.726c-.14-4.922-4.406-9.117-9.703-9.117c-5.32 0-9.586 4.195-9.727 9.117H14.56c-4.875 0-7.36 2.414-7.36 7.266v24.258c0 4.851 2.485 7.265 7.36 7.265M28.012 7.61c3.304 0 5.812 2.485 5.93 5.555h-11.86c.094-3.07 2.602-5.555 5.93-5.555M14.629 48.18c-2.344 0-3.656-1.242-3.656-3.679V20.617c0-2.437 1.312-3.68 3.656-3.68h26.766c2.296 0 3.632 1.243 3.632 3.68V44.5c0 2.438-1.336 3.68-2.953 3.68Z"
              />
            </svg>
          </a>

          {/* Cart Sidebar */}
          <div
            ref={cartRef}
            className={`fixed top-0 right-0 h-full w-[577px] bg-white transform transition-transform duration-300 ease-in-out ${
              isCartOpen ? "translate-x-0" : "translate-x-full"
            } shadow-lg z-50 border-l border-black`}
          >
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-black">
                <h2 className="text-lg font-bold text-center">Keranjang</h2>
              </div>

              <div className="flex-1 overflow-y-auto">
                {cartItems.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Keranjang masih kosong</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="border-b border-black"
                    >
                      <div className="flex">
                        <div className="w-[127px] h-[127px] border-r border-black">
                          <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full h-full ${
                              item.category === "aksesoris"
                                ? "object-cover object-[50%_100%]"
                                : "object-cover"
                            }`}
                          />
                        </div>
                        <div className="flex-1 px-8 py-2">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-xl font-bold">
                                {item.title}
                              </h3>
                              {item.category !== "aksesoris" && (
                                <p className="text-sm mt-1">
                                  Ukuran: {item.size}
                                </p>
                              )}
                              <p className="text-lg font-bold text-gray-600">
                                Rp {item.price.toLocaleString()}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id, item.size)}
                              className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors mt-3 -mr-2 font-extrabold"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                className="font-extrabold"
                              >
                                <path
                                  fill="currentColor"
                                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="flex items-center mt-1">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                              className="w-6 h-6 border border-black rounded-full flex items-center justify-center font-bold text-sm"
                            >
                              -
                            </button>
                            <span className="mx-2 text-sm font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              className="w-6 h-6 border border-black rounded-full flex items-center justify-center font-bold text-sm"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-auto">
                <div className="p-4">
                  <button
                    onClick={toggleCart}
                    className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="border-2 border-black mx-4 mb-4">
                  <div className="p-4 flex justify-between items-center">
                    <p className="text-lg font-bold">
                      Total: Rp {getCartTotal().toLocaleString()}
                    </p>
                    {cartItems.length > 0 && (
                      <button
                        onClick={() => {
                          navigate("/pembayaran");
                          toggleCart();
                        }}
                        className="px-8 py-3 bg-black text-white font-bold rounded hover:bg-gray-800"
                      >
                        Bayar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay when cart is open */}
          {isCartOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleCart}
            />
          )}
        </div>
      </div>
    </header>
  );
}
