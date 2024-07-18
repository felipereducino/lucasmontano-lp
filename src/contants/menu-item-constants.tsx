import {
  IconBrandDiscord,
  IconBrandYoutube,
  IconCode,
  IconInfoSquareRounded,
  IconSos,
  IconUrgent,
} from "@tabler/icons-react";

type MenuItemConstants = {
  icon: React.ReactNode;
  path: string;
  title: string;
};

const menuItemContent: MenuItemConstants[] = [
  {
    icon: <IconSos />,
    path: "/help",
    title: "Ajuda - RS",
  },
  {
    icon: <IconUrgent />,
    path: "/suggestions",
    title: "Sugestões",
  },
  {
    icon: <IconCode />,
    path: "/classes",
    title: "Aulas comigo",
  },
  {
    icon: <IconBrandDiscord />,
    path: "/community",
    title: "Comunidade Discord",
  },
  {
    icon: <IconInfoSquareRounded />,
    path: "/curation",
    title: "Curadoria",
  },
  {
    icon: <IconInfoSquareRounded />,
    path: "/remote-work",
    title: "Trabalha remoto para os 🇺🇸?",
  },
  {
    icon: <IconBrandYoutube />,
    path: "/videos",
    title: "Vídeos",
  },
];

export default menuItemContent;
