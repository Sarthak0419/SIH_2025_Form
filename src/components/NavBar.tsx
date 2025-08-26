const NavBar = () => {
  const navlinks = [
    { name: "SIH 2025", path: "https://sih.gov.in/" },
    { name: "Problem Statements", path: "https://sih.gov.in/sih2025PS" },
  ];
  return (
    <div className="flex mt-2.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-white p-4 relative top-0 w-[26rem] max-sm:w-full max-sm:mt-0 max-sm:rounded-none max-sm:text-sm justify-self-center justify-center z-5 overflow-hidden">
      <span className="absolute bg-[#093e98] rounded-full h-8 w-full blur-xl mt-2 top-9"></span>
      <img
        src="src/assets/logo.webp"
        alt="Logo"
        className="h-8 right-[2rem] relative w-8 rounded-2xl object-center mr-2"
      />

      <nav className="flex justify-center items-center">
        <ul className="flex space-x-4 list-none">
          {navlinks.map((link) => (
            <li className="text-white" key={link.name}>
              <a
                href="#"
                className="px-2.5 py-2.5 rounded-3xl transition-colors duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:border "
                onClick={() => {
                  if (link.name === "SIH 2025") {
                    window.open("https://sih.gov.in/", "_blank");
                  } else if (link.name === "Problem Statements") {
                    window.open("https://sih.gov.in/sih2025PS", "_blank");
                  }
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
