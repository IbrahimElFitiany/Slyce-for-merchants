import { type ReactNode } from "react";
import { DashboardIcon } from "@/components/icons/DashboardIcon";
import { OrdersIcon } from "@/components/icons/OrdersIcon";
import { useLocation, NavLink } from "react-router-dom";
import { PerformanceIcon } from "@/components/icons/PerformanceIcon";
import { ChatIcon } from "@/components/icons/ChatIcon";
import { GearIcon } from "@/components/icons/GearIcon";
import { DiscountIcon } from "@/components/icons/DiscountIcon";
import { WalletIcon } from "@/components/icons/WalletIcon";
import { BookOpenIcon } from "@/components/icons/BookOpenIcon";
import { ClockIcon } from "@/components/icons/ClockIcon";

type TabItem = {
  name: string;
  path: string;
  icon: ReactNode;
};

type SidebarSection = {
  id: string;
  title: string;
  items: TabItem[];
};

export function SideBar() {

  const sections: SidebarSection[] = [
    {
      id: "monitor",
      title: "Monitor your performance",
      items: [
        { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon size={23} /> },
        { name: "Orders", path: "/orders", icon: <OrdersIcon size={20} className="ml-0.5" /> },
        { name: "Performance", path: "/performance", icon: <PerformanceIcon size={26} className="-ml-1" /> },
        { name: "Reviews", path: "/reviews", icon: <ChatIcon size={27} className="-ml-1" /> }
      ]
    },
    {
      id: "grow",
      title: "Grow your business",
      items: [
        { name: "Promotions", path: "/promotions", icon: <DiscountIcon size={23} /> }
      ]
    },
    {
      id: "manage",
      title: "Manage your business",
      items: [
        { name: "Payments", path: "/payments", icon: <WalletIcon /> },
        { name: "Menu", path: "/menu", icon: <BookOpenIcon /> },
        { name: "Opening-Times", path: "/opening-times", icon: <ClockIcon /> },
        { name: "Settings", path: "/settings", icon: <GearIcon /> }
      ]
    }
  ];

  const {pathname} = useLocation();

  return (
    <aside className="flex flex-col items-start w-3xs sticky top-0 py-5 h-screen bg-whitebg border-r-1 border-brand-grey">

      <div id="Logo" className="flex justify-center items-center">
        <img src="/images/greenLogo.png" alt="logo" className="w-15 h-15" />
        <p className="font-medium text-xl tracking-tight text-accent">for Merchant</p>
      </div>

      <div id="sections" className="w-full flex flex-col my-10 px-2 gap-5 tracking-tight">
        {sections.map((section) => (

          <section key={section.id}>

            <h5 className="text-text-grey text-xs font-semibold mb-2 px-2">
              {section.title}
            </h5>

            <div className="w-full flex flex-col font-semibold py-1 gap-1.5 text-lg text-brand-black">
              {section.items.map((item) => {
                const isActive = pathname.toLowerCase().replaceAll("/","") === item.name.toLowerCase();

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={`cursor-pointer flex gap-x-1 items-center p-1 font-semibold rounded-md text-base transition-colors ${
                      isActive
                        ? "bg-[#B9F4BB] text-dark-accent"
                        : "hover:bg-[#B9F4BB] hover:text-dark-accent"
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </section>
        ))}
      </div>

    </aside>
  );
}

export default SideBar;