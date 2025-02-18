// pages/product/[product-name].tsx
import { useRouter } from 'next/router';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { productName } = router.query;

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">
        Product: {productName ? productName.toString().replace('-', ' ') : 'Loading...'}
      </h1>
    </div>
  );
};

export default ProductPage;