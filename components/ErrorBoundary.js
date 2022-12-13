import { useState } from "react";

export default function ErrorBoundary() {
  const { error, onReset } = useState();
  return (
    <section role="alert">
      <p>An unexpected error has occurred: {error.message}.</p>
      <button onClick={onReset}>Reset</button>
    </section>
  );
}
