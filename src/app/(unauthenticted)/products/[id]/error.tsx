"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <p className="text-danger"> {error.message}</p>
    </div>
  );
}
