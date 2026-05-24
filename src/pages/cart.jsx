import {
  IoArrowBack,
  IoAddOutline,
  IoRemoveOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const cartItem = cartData.carts;
  const formatNumber = (value) =>
    new Intl.NumberFormat("en-EN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value) || 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-6 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold transition hover:bg-blue-200"
      >
        <IoArrowBack size={20} />
        <span className="text-sm">Home</span>
      </Link>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-0 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Shopping Cart</h1>
            <p className="mt-1 text-sm text-slate-500">
              {cartItem.length} item{cartItem.length !== 1 ? "s" : ""} in cart
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="rounded-3xl bg-slate-50 px-5 py-4 text-right shadow-sm sm:text-right">
              <p className="text-sm text-slate-500">Total amount</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                $ {formatNumber(cartData.totalAmount)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => dispatch(clearCart())}
              disabled={cartItem.length === 0}
              className="inline-flex items-center justify-center rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-red-300"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {cartItem.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
            Your cart is empty.
          </div>
        ) : (
          <div className="space-y-4">
            {cartItem.map((item, id) => {
              const itemTotal = Number(item.quantity) * Number(item.price);
              return (
                <article
                  key={id}
                  className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 rounded-3xl bg-white p-3 object-contain"
                  />

                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-slate-900 line-clamp-1">
                      {item.title}
                    </h2>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1 text-sm text-slate-700 shadow-sm">
                      <button
                        type="button"
                        onClick={() =>
                          dispatch(
                            updateCart({
                              id: item.id,
                              quantity: item.quantity - 1,
                            }),
                          )
                        }
                        disabled={item.quantity === 1}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:bg-slate-300"
                        aria-label="Decrease quantity"
                      >
                        <IoRemoveOutline size={18} />
                      </button>
                      <span className="min-w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          dispatch(
                            updateCart({
                              id: item.id,
                              quantity: item.quantity + 1,
                            }),
                          )
                        }
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                        aria-label="Increase quantity"
                      >
                        <IoAddOutline size={18} />
                      </button>
                    </div>
                    <p className="text-sm text-slate-600">
                      Unit price: $ {formatNumber(item.price)}
                    </p>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-1 text-right sm:items-end">
                    <span className="text-sm text-slate-500">Subtotal</span>
                    <p className="text-xl font-semibold text-slate-900">
                      $ {formatNumber(itemTotal)}
                    </p>

                    <button
                      type="button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600 hover:bg-red-200"
                      aria-label={`Remove ${item.title}`}
                    >
                      <IoTrashOutline size={16} />
                      Remove
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
