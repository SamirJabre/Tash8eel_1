import { DarkModeSwitch } from "react-toggle-dark-mode";

function Header({setDarkMode , isDarkMode}) {

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    console.log(isDarkMode);
    
  };
  return (
    <header className="w-screen h-36 flex items-center justify-around mb-10">
      <div className="h-10 w-10"></div>
      <h1 className={`text-black text-3xl tracking-[8px] font-[600] ${isDarkMode ? 'text-white' : 'text-black'}`}>
        COUNTIFY
      </h1>
      <div className="h-10 w-10">
        <DarkModeSwitch
          checked={!isDarkMode}
          onChange={toggleDarkMode}
          moonColor="#100f2c"
          sunColor="#f59e0b"
          size="100%"
        />
      </div>
    </header>
  );
}

export default Header;
