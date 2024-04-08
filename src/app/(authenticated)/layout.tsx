import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/app/_helpers/server";
import { Alert, Nav } from "@/app/_components";

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
  // if not logged in redirect to login page
  if (!auth.isAuthenticated()) {
    const returnUrl = encodeURIComponent(headers().get("x-invoke-path") || "/");
    redirect(`/signin?returnUrl=${returnUrl}`);
  }

  return (
    <div className="app-container bg-light">
      {/* <Nav /> */}
      <Alert />
      <div className="p-4">
        <div className="container">{children}</div>
      </div>
    </div>
  );
}
