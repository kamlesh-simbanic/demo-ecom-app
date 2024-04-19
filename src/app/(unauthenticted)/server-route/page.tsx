import { serverSideSection } from "@/app/utils/server-utils";

export default function ServerRoutePage() {
  console.log("server route rendrred");

  const result = serverSideSection();
  return (
    <>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
    </>
  );
}
