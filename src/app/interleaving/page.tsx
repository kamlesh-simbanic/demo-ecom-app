import ClientComponentOne from "../_components/client-component-one";
import ServerComponentOne from "../_components/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>InterleavingPage</h1>

      <ClientComponentOne>
        {" "}
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
