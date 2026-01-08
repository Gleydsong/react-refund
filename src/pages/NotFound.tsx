export function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">
          404 - Page Not Found
        </h1>
        <a
          href="/"
          className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}
