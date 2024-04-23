import fs from "fs";
export default function ServerComponentTwo() {
  fs.readFileSync("src/app/_components/server-component-two.tsx", "utf-8");
  return <h1>Server Component Two</h1>;
}
