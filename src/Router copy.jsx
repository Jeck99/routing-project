import { Home, About, ContactUs } from "./components/pages";

  export default function Router({page}) {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <ContactUs />;
      default:
        break;
    }
  }