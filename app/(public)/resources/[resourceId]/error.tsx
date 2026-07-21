'use client'
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h2>Something went Wrong!</h2>
      <p>{error.message}</p>

      <button onClick={()=> reset()}>
        Try Again
      </button>
    </>
  );
}
