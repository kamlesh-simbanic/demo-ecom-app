import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999, // Ensure splash screen is on top
        }}
      >
        <h1 style={{ color: "#fff" }}>E commerce Shop</h1>

        <Link href={"/home"} className="text-decoration-none">
          Home
        </Link>
      </div>
    </>
  );
}
