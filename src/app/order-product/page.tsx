"use client";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  function handleOrder() {
    alert("Order placed successfully");
    router.push("/");
  }

  return (
    <>
      <h1>Order the product</h1>
      <button
        className="bg-red-200 px-2 py-2 rounded-md text-gray-500 font-bold"
        onClick={handleOrder}
      >
        Order
      </button>
    </>
  );
}
