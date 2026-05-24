const SKELETON_COUNT = 6;

const ProductSkeleton = () => (
  <div
    className="relative flex h-115 w-75 flex-col gap-1 rounded-2xl bg-gray-200 p-3 shadow-md"
    aria-hidden="true"
  >
    <div className="absolute -top-1 right-2 mt-4 h-9 w-16 animate-pulse rounded-2xl bg-blue-300/70" />

    <div className="mx-auto mb-5 mt-5 flex flex-1 items-center justify-center">
      <div className="h-60 w-full max-w-[220px] animate-pulse rounded-xl bg-gray-300" />
    </div>

    <div className="flex flex-1 flex-col gap-2">
      <div className="h-6 w-full animate-pulse rounded-lg bg-gray-300" />
      <div className="h-6 w-4/5 animate-pulse rounded-lg bg-gray-300" />
      <div className="h-4 w-full animate-pulse rounded bg-gray-300/90" />
      <div className="h-4 w-full animate-pulse rounded bg-gray-300/90" />
      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-300/90" />
    </div>
  </div>
);

const Loader = () => {
  return (
    <div
      className="flex max-w-3/4 flex-wrap gap-5"
      role="status"
      aria-live="polite"
      aria-label="Loading products"
    >
      {Array.from({ length: SKELETON_COUNT }, (_, index) => (
        <ProductSkeleton key={index} />
      ))}
      <span className="sr-only">Loading products...</span>
    </div>
  );
};

export default Loader;
