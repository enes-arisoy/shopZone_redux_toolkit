import { IoAlertCircleOutline } from "react-icons/io5";

const Error = ({
  message = "We couldn't load the products. Please check your connection and try again.",
  onRetry,
}) => {
  return (
    <div
      className="flex max-md:w-full w-3/4 min-h-[280px] items-center justify-center p-4"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-2xl bg-gray-200 p-8 text-center shadow-md">
        <div className="w-full rounded-2xl bg-blue-300 px-4 py-2">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
            Something went wrong
          </h2>
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-400/15 text-red-500">
          <IoAlertCircleOutline size={40} aria-hidden="true" />
        </div>

        <p className="text-sm leading-relaxed text-gray-700 md:text-base">
          {message}
        </p>

        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="mt-2 cursor-pointer rounded-full bg-red-400 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-500 hover:shadow-lg active:scale-[0.98]"
          >
            Try again
          </button>
        )}
      </div>
    </div>
  );
};

export default Error;
