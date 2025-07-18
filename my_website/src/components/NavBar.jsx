import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavItem({ text, to }) {
  return (
    <Link
      to={to}
      className="justify-center py-2 cursor-pointer hover:text-blue-600 transition-colors"
      >
        {text}
      </Link>
  );
}

function HarmonyNav({downloadVisible=false}) {
  const [navItems, setNavItems] = useState([
    { text: "Home", to: "/" },
    { text: "Gradient", to: "/gradient" },
  ]);
  // const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fetch navigation items from backend
    async function fetchNavItems() {
      try {
        const response = await fetch("/api/navItems");
        const data = await response.json();
        setNavItems(
          data.map((item) => ({
            ...item,
            onClick: () => alert(`Navigate to ${item.text}`),
          })),
        );
      } catch (error) {
        console.error("Failed to fetch navigation items", error);
      }
    }

    // fetchNavItems(); TODO enable this when backend is ready
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex gap-5 justify-between items-center py-1.5 px-6 rounded-3xl backdrop-blur-[17.5px] bg-opacity-80 w-full max-w-full flex-wrap sm:flex-nowrap sm:py-4 sm:px-10 bg-[#ffffffff]">
        <div className="flex gap-2 justify-between items-center py-1.5 my-auto w-full sm:w-auto">
          <div className="flex justify-center items-center px-0.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96ed444f12f2297ccd4006841bd1831940e6f23d36396492d16831d2cdf15c29?apiKey=5b7d47d822c447fbbf3f0faf7f51790e&"
              className="aspect-[1.14] w-[41px]"
              alt="Logo"
            />
          </div>
          <div className="my-auto uppercase font-extrabold text-lg text-zinc-950">
            Harmony
          </div>
        </div>
        <nav className="flex sm:flex-row flex-col gap-5 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-light w-full sm:w-auto">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item.text} to={item.to} />
          ))}
        </nav>
        {downloadVisible && (
          <button
            className="justify-center self-stretch sm:self-auto px-6 py-5 text-base leading-6 text-center text-white rounded-2xl bg-neutral-900 max-md:px-5 font-light w-full sm:w-auto"
            onClick={() => alert("Download Now button clicked")}
          >
            Download Now
          </button>
        )}
      </div>
    </div>
  );
}

export default HarmonyNav;
