import { type ReactNode } from "react";
import { DashboardIcon } from "@/components/icons/DashboardIcon";
import { OrdersIcon } from "@/components/icons/OrdersIcon";
import { useLocation, useNavigate } from "react-router-dom";

type TabItem = {
  name: string;
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
        { name: "Dashboard", icon: <DashboardIcon /> },
        { name: "Orders", icon: <OrdersIcon /> },
        { name: "Performance", icon: <OrdersIcon /> },
        { name: "Reviews", icon: <OrdersIcon /> }
      ]
    },
    {
      id: "grow",
      title: "Grow your business",
      items: [
        { name: "Promotions", icon: <OrdersIcon /> }
      ]
    },
    {
      id: "manage",
      title: "Manage your business",
      items: [
        { name: "Payments", icon: <DashboardIcon /> },
        { name: "Menu", icon: <DashboardIcon /> },
        { name: "Opening Times", icon: <DashboardIcon /> },
        { name: "Settings", icon: <DashboardIcon /> }
      ]
    }
  ];

  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <aside className="flex flex-col items-start w-3xs sticky py-5 h-screen bg-whitebg border-r-1 border-brand-grey">

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

            <ul className="w-full flex flex-col font-semibold py-1 gap-1.5 text-lg text-brand-black">
              {section.items.map((item) => {
                const isActive = pathname === item.name;

                return (
                  <li
                    key={item.name}
                    onClick={() => navigate(item.name.toLocaleLowerCase())}
                    className={`flex gap-2 items-center cursor-pointer p-1 rounded-sm transition-colors ${
                      isActive
                        ? "bg-[#B9F4BB] text-dark-accent"
                        : "hover:bg-green-200"
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

    </aside>
  );
}

export default SideBar;