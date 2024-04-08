import { redirect } from "next/navigation";

import { auth } from "@/app/_helpers/server";
import { Alert } from "@/app/_components";
import NavbarComponent from "../components/layout/navbar";

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
  // if logged in redirect to home page
  const isAuthenticated = auth.isAuthenticated();

  if (auth.isAuthenticated()) {
    redirect("/app");
  }

  return (
    <>
      <NavbarComponent isAuthenticated={isAuthenticated} />
      <Alert />
      <div className="col-md-6 offset-md-3 mt-5">{children}</div>
    </>
  );
}
