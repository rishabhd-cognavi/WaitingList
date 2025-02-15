/**
 * Displays the current tailwind viewport size
 */
export function TWResponsiveIndicator() {
  // Hidden except developement mode
  if (import.meta.env.MODE !== "development") {
    return null;
  }

  return (
    <div className="fixed right-2 bottom-2 z-50 w-16 rounded-full bg-blue-100 py-1 text-center text-sm font-medium text-blue-700">
      <span className="block sm:hidden">_</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="hidden 2xl:block">2xl</span>
    </div>
  );
}
