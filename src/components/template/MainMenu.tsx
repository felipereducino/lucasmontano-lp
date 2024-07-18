import MenuItem from "./MenuItem";
import menuItemContent from "@/contants/menu-item-constants";

export default function MainMenu() {
  return (
    <aside className="w-80 bg-zinc-900">
      <nav className="flex flex-col p-5 gap-2">
        {menuItemContent.map((item, index) => (
          <MenuItem path={item.path} key={index}>
            {item.icon}
            <span>{item.title}</span>
          </MenuItem>
        ))}
      </nav>
    </aside>
  );
}
