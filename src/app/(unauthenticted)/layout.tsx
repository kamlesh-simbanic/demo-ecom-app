import { redirect } from "next/navigation";

import { auth } from "@/app/_helpers/server";
import { Alert } from "@/app/_components";
import NavbarComponent from "@/app/_components/layout/navbar";
import { Container } from "react-bootstrap";

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
      <main className="p-5">
        <Container className="mt-5">{children}</Container>
      </main>
    </>
  );
}
