import MainPage from "@/components/template/MainPage";

interface Layout {
  children: React.ReactNode;
}

export default function Layout({ children }: Layout) {
  return <MainPage>{children}</MainPage>;
}
