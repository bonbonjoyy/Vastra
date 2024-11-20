import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false); // Galeri dropdown state
    const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false); // Profil dropdown state
    const [isSearchVisible, setSearchVisible] = useState(false);
    const dropdownRef = useRef(null);
    const profileDropdownRef = useRef(null); // Ref for Profil dropdown
    const searchRef = useRef(null);

    const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setProfileDropdownOpen(false); // Close Profil dropdown when opening Galeri
    };

    const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
    setDropdownOpen(false); // Close Galeri dropdown when opening Profil
    };

    const toggleSearchForm = () => {
    setSearchVisible(!isSearchVisible);
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    }, []);

    return (
    <header
        {...props}
        className={`${props.className} flex justify-center items-center py-[18px] bg-white border-b-2 border-b-black`}
    >
        <div className="container-xs flex items-center justify-between gap-5 px-5 w-full">
        < div className="flex items-center pl-[120px]">
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
                            className="text-[18px] font-normal text-blk hover:bg-black hover:text-white px-4 py-2"
                        >
                            Harian
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/Formal"
                            className="text-[18px] font-normal text-blk hover:bg-black hover:text-white px-4 py-2"
                        >
                            Formal
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/Khusus"
                            className="text-[18px] font-normal text-blk hover:bg-black hover:text-white px-4 py-2"
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
                <Link to="/Tips-Bahan" className="text-[18px] font-normal text-blk hover:bg-black hover:text-white px-4 py-2">
                Tips
                </Link>
            </li>
            <li>
                <Link to="/Kreasi" className="text-[18px] font-normal text-blk hover:bg-black hover:text-white px-4 py-2">
                Kreasi
                </Link>
            </li>
            <li>
                <Link to="/Produk-Kami/Kaos" className="text-[18px] font-normal text-blk hover:bg-black hover:text-white px-4 py-2">
                Produk Kami
                </Link>
            </li>
            </ul>
        </div>

        <div className="mr-2.5 flex gap-7 md:mr-0 pr-12 relative">
            <a
            id="profile-button"
            href="#"
            onClick={toggleProfileDropdown}
            >
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

            <a href="#" onClick={toggleSearchForm} >
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
                    <Link to="/CheckoutKeranjang" className="pr-[65px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 56 56">
                            <path fill="currentColor" d="M14.559 51.953h27.586c4.218 0 6.656-2.437 6.656-7.266V20.43c0-4.828-2.461-7.266-7.36-7.266h-3.726c-.14-4.922-4.406-9.117-9.703-9.117c-5.32 0-9.586 4.195-9.727 9.117H14.56c-4.875 0-7.36 2.414-7.36 7.266v24.258c0 4.851 2.485 7.265 7.36 7.265M28.012 7.61c3.304 0 5.812 2.485 5.93 5.555h-11.86c.094-3.07 2.602-5.555 5.93-5.555M14.629 48.18c-2.344 0-3.656-1.242-3.656-3.679V20.617c0-2.437 1.312-3.68 3.656-3.68h26.766c2.296 0 3.632 1.243 3.632 3.68V44.5c0 2.438 -1.336 3.68-2.953 3.68Z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}