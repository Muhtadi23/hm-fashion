import Categories from "@/components/ui/Categories/Categories";
import CategoryBanner from "@/components/ui/CategoryBanner/CategoryBanner";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import Slider from "@/components/ui/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="">
        <Categories />
      </div>
      <div className="mt-4" >
        <CategoryBanner imageSrc={"/women_sBanner-removebg-preview.png"} bannerContent={"Women's Collection"} />
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-4'>
          <ProductCard image={"/productWoman4.webp"} image2={"/productWoman44.webp"} />
          <ProductCard image={"/productWoman1.webp"} image2={"/productWoman11.webp"} />
          <ProductCard image={"/productWoman2.webp"} image2={"/productWoman22.webp"} />
          <ProductCard image={"/productWoman3.webp"} image2={"/productWoman33.webp"} />
        </div>
      </div>
      <div className="mt-4" >
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-4'>
          <ProductCard image={"/img1r.png"} />
          <ProductCard image={"/img2.jpg"} />
          <ProductCard image={"/img3.jpg"} />
          <ProductCard image={"/img4.jpg"} />
        </div>
      </div>
      <div className="mt-4" >
        <CategoryBanner bannerContent={"Kid's Collection"} imageSrc={"/kids.jpg"} />
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-4'>
          <ProductCard image={"/kids1.webp"} />
          <ProductCard image={"/kids2.webp"} />
          <ProductCard image={"/kids3.webp"} />
          <ProductCard image={"/kids4.webp"} />
        </div>
      </div>

    </div>
  );
}
