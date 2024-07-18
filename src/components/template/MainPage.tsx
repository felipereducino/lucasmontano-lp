import Footer from "./Footer";
import Header from "./Header";
import MainMenu from "./MainMenu";

interface MainPage {
  children: React.ReactNode;
}

export default function MainPage(props: MainPage) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex">
        <MainMenu />
        <div className="flex flex-col flex-1">
          <main className="p-7 flex-1">{props.children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
