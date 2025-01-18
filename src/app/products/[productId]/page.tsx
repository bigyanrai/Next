import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });
  return {
    title: { absolute: `Product ${title}` },
  };
};

export default function ProductDetails({ params }: Props) {
  return <div>Details about the product {params.productId}</div>;
}

type Props = {
  params: { productId: string };
};
