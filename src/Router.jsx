import {
  Home,
  About,
  ContactUs,
  PageNotFound,
  Users,
} from "./components/pages";
import { Routes, Route } from "react-router-dom";
import TextProvider from "./contexts/text-context";
import UsersProvider from "./contexts/users-context";

export default function Router() {
  return (
    <TextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route
          path="users"
          element={
            <UsersProvider>
              <Users />
            </UsersProvider>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </TextProvider>
  );
}
