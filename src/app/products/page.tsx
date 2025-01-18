import Link from "next/link";
export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product lists</h1>
      <div>
        <Link href="products/1">product 1</Link>
      </div>
      <div>
        <Link href="products/2">product 2</Link>
      </div>
      <div>
        <Link href="products/3">product 3</Link>
      </div>
      <div>
        <Link href={`products/${productId}`}>product 100</Link>
      </div>
    </>
  );
}
