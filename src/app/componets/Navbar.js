import { TrophyIcon } from "@heroicons/react/24/solid";

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Interest",
    href: "/interest",
  },
  {
    title: "School",
    href: "/school",
  },
  {
    title: "Goals",
    href: "/goals",
  },
];

export default function Navbar() {
  return (
    <div className="flex justify-between gap-6 m-12 items-center">
      <TrophyIcon className="h-12 w-12 text-gray-300" />
      <div className="flex gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 bg-white text-black
            shadow-md rounded-md text-lg transition-all hover:bg-gray-200 active:bg-gray-300"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
