import { useState } from "react";

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Dashboard",
      src: "https://github.com/Sridhar-C-25/sidebar_reactTailwind/blob/main/src/assets/Chart_fill.png?raw=true",
    },
    {
      title: "Inbox",
      src: "https://github.com/Sridhar-C-25/sidebar_reactTailwind/blob/main/src/assets/Chat.png?raw=true",
    },
    {
      title: "Accounts",
      src: "https://github.com/Sridhar-C-25/sidebar_reactTailwind/blob/main/src/assets/User.png?raw=true",
      gap: true,
    },
    {
      title: "Schedule ",
      src: "https://github.com/Sridhar-C-25/sidebar_reactTailwind/blob/main/src/assets/Calendar.png?raw=true",
    },
    {
      title: "Search",
      src: "https://github.com/Sridhar-C-25/sidebar_reactTailwind/blob/main/src/assets/Search.png?raw=true",
    },
    {
      title: "Analytics",
      src: "https://github.com/Sridhar-C-25/sidebar_reactTailwind/blob/main/src/assets/Chart.png?raw=true",
    },
    {
      title: "Files ",
      src: "https://github.com/Sridhar-C-25/sidebar_reactTailwind/blob/main/src/assets/Setting.png?raw=true",
      gap: true,
    },
    {
      title: "Setting",
      src: "https://github.com/Sridhar-C-25/sidebar_reactTailwind/blob/main/src/assets/Setting.png?raw=true",
    },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } bg-dark-green h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/circled-left-2.png"
          alt="circled-left-2"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-green
           border-2 rounded-full ${!open && "transform rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            width="38"
            height="38"
            src="https://img.icons8.com/color/48/old-vmware-logo.png"
            alt="old-vmware-logo"
            className={`cursor-pointer duration-500 ${
              open && "transform rotate-180"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "hidden"
            } ${open && "scale-1"}`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`${menu.src}.png`} alt="menu" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 h-screen p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
};
export default SideNav;