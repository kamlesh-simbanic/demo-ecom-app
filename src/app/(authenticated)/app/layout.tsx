import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/app/_helpers/server";
import { Alert } from "@/app/_components";
import { Container } from "react-bootstrap";
import NavbarComponent from "../../components/layout/navbar";

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
  // if not logged in redirect to login page
  const isAuthenticated = auth.isAuthenticated();

  if (!isAuthenticated) {
    const returnUrl = encodeURIComponent(headers().get("x-invoke-path") || "/");
    redirect(`/signin?returnUrl=${returnUrl}`);
  }

  return (
    <div className="app-container bg-light">
      <header>
        <NavbarComponent isAuthenticated={isAuthenticated} />
      </header>
      <Alert />
      <main className="p-5">
        <Container className="mt-4">{children}</Container>
      </main>
    </div>
  );
}
