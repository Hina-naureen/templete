// import { useParams } from 'next/navigation';
// import { products } from '@/Data/products';
// import { NavBar } from '../../Navbar';

// const ProductPage = () => {
//   const params = useParams();

//   // چیک کریں کہ params موجود ہے یا نہیں
//   if (!params) {
//     return <div>Invalid product URL</div>;
//   }

//   const productSlug = params.product;

//   // چیک کریں کہ slug موجود ہے یا نہیں
//   if (!productSlug) {
//     return <div>Product not found!</div>;
//   }

//   const selectedProduct = products.find((item) => item.name.toLowerCase().replace(/\s+/g, '-') === productSlug);

//   if (!selectedProduct) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <div className="relative bg-gray-50 min-h-screen">
//       {/* Navbar */}
//       <NavBar bgColor="bg-[#FFFFFF]" />

//       {/* Product Page Content */}
//       <div className="relative top-[100px] w-[1440px] h-[820px] mx-auto bg-gray-50">
//         {/* Product Details (same as before) */}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;