import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/app/_helpers/server";
import { Alert } from "@/app/_components";
import { Container } from "react-bootstrap";
import NavbarComponent from "@/app/_components/layout/navbar";
import DeleteModal from "@/app/_components/DeleteModal";
import Snackbar from "@/app/_components/SnackBar";

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
  // if not logged in redirect to login page
  const isAuthenticated = auth.isAuthenticated();

  if (!isAuthenticated) {
    const returnUrl = encodeURIComponent(
      headers().get("x-invoke-path") || "/home"
    );
    redirect(`/signin?returnUrl=${returnUrl}`);
  }

  return (
    <div className=" bg-light">
      <header>
        <NavbarComponent isAuthenticated={isAuthenticated} />
      </header>
      <Alert />
      <main className="p-5">
        <DeleteModal />
        <Snackbar />
        <Container fluid className="mt-5">
          {children}
        </Container>
      </main>
    </div>
  );
}
