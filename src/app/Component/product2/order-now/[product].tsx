// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { products } from '@/Data/products';
// import { NavBar } from '@/app/Component/Navbar';

// const OrderNowPage = () => {
//   const router = useRouter();
//   const { product } = router.query;

//   const selectedProduct = products.find(
//     (item) => item.name.toLowerCase().replace(/\s+/g, '-') === product
//   );

//   if (!selectedProduct) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <div className="relative bg-gray-50 min-h-screen">
//       <NavBar bgColor="bg-[#FFFFFF]" />

//       <div className="relative top-[100px] w-[1440px] h-[820px] mx-auto bg-gray-50">
//         <div className="absolute w-[76px] h-[416px] top-[266px] left-[99px]">
//           {[
//             "Outdoor sofa set 1.png",
//             "Outdoor sofa set_3.png",
//             "Stuart sofa 1.png",
//             "Maya sofa three seater (1) 1.png",
//           ].map((img, i) => (
//             <div key={i} className="w-[66px] h-[70px] mb-[15px] bg-[#FFF9E5]">
//               <Image
//                 src={`/${img}`}
//                 alt={`Sofa ${i + 1}`}
//                 width={66}
//                 height={70}
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="absolute w-[1241px] h-auto top-[246px] left-[197px] flex gap-[20px]">
//           <div className="relative w-[553px] h-[500px]">
//             <div className="absolute w-[423px] h-[500px] bg-[#FFF9E5] rounded-tl-[10px]"></div>
//             <div className="absolute w-[391px] h-[391px] top-[55px] left-[25px]">
//               <Image
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 width={391}
//                 height={391}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           <div className="relative w-[606px] h-auto">
//             <h1 className="text-[42px] font-poppins font-light leading-[63px] text-black mb-[20px]">
//               {selectedProduct.name}
//             </h1>
//             <p className="text-[24px] font-medium text-[#9F9F9F] mb-[10px]">
//               {selectedProduct.price}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderNowPage;