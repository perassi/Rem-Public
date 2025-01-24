import Image from "next/image";
import OverviewPreview from "public/assets/images/overview-preview.png";
import { Container } from "@/components/common/Container";

export function HomeBanner() {
  return (
    <section className='flex relative justify-center lg:pb-48 pb-36'>
      <Container className='relative z-10'>
        <div className='relative flex justify-center translate-y-[100%] xs:translate-y-[70%] sm:translate-y-[61%] md:translate-y-[50%] lg:translate-y-[50%]'>
          <div className='  '><OverviewImg/></div>
        </div>
      </Container>
    </section>
  );
}
function OverviewImg() {
  return (
    <div className="flex items-center justify-center">
      {" "}
      <div className='absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-10 rounded-[20px] backdrop-blur-sm bg-beige-400/20 border-[1px] border-white/20' />
      <Image
        src={OverviewPreview}
        alt='OverviewPreview'
        className='relative z-10 w-auto '
      />
    </div>
  );
}

// import Image from "next/image";
// import OverviewPreview from "public/assets/images/overview-preview.png";
// import { Container } from "@/components/common/Container";

// export function HomeBanner() {
//   return (
//     <section className="flex relative justify-center pb-16 sm:pb-24 md:pb-32 lg:pb-48">
//       <Container className="relative z-10">
//         <div className="relative flex justify-center translate-y-[20%] md:translate-y-[30%] lg:translate-y-[40%]">
//           <div className="">
//             {/* Blur Background */}
//             <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-10 rounded-[20px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] backdrop-blur-sm bg-beige-400/20 border-[1px] border-white/20" />

//             {/* Image */}
//             <Image
//               src={OverviewPreview}
//               alt="OverviewPreview"
//               className="relative z-10 w-full sm:w-[90%] md:w-[80%] lg:w-auto"
//             />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
