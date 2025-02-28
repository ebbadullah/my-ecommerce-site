import React from "react";
import { Drawer, IconButton } from "@material-tailwind/react";
import { AiOutlineMenuFold, AiOutlineDashboard } from "react-icons/ai";
import { BiCategory, BiReceipt, BiBarChartSquare } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Images } from "../assets"; 
import { useLocation } from "react-router-dom";

export function DrawerDefault() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  let location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <AiOutlineDashboard />, path: "/dashboard" },
    { name: "Reports", icon: <BiBarChartSquare />, path: "/reports" },
    { name: "Orders", icon: <BiReceipt />, path: "/orders" },
    { name: "Categories", icon: <BiCategory />, path: "/categories" },
    { name: "Users", icon: <AiOutlineMenuFold />, path: "/users" },
    { name: "Settings", icon: <AiOutlineMenuFold />, path: "/settings" },
  ];

  return (
    <>
      <AiOutlineMenuFold size={30} className="cursor-pointer" onClick={openDrawer} />
      <Drawer open={open} onClose={closeDrawer} className="p-4 w-72">
        <div className="mb-6 flex items-center justify-between">
          <img src={Images.logo} alt="Logo" className="w-40" />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </IconButton>
        </div>
        <p className="text-sm ml-5 font-bold text-[#424242]">Main Home</p>
        {menuItems.map((item) => (
          <Link to={item.path} key={item.name} className="block">
            <button onClick={closeDrawer} className="flex items-center bg-transparent gap-3 ml-4 mt-4 text-[#424242] w-full justify-start">
              <span className="text-xl">{item.icon}</span>
              <span className="ml-2">{item.name}</span>
            </button>
          </Link>
        ))}
      </Drawer>
    </>
  );
}
