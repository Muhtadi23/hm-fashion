// app/page.jsx or pages/index.jsx
import Categories from "@/components/ui/Categories/Categories";
import CategoryBanner from "@/components/ui/CategoryBanner/CategoryBanner";
import ProductGrid from "@/components/ui/ProductCard/ProductGrid";
import Slider from "@/components/ui/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Categories />

      {/* Women's Section */}
      <div className="mt-10">
        <CategoryBanner
          imageSrc="/women_sBanner-removebg-preview.png"
          bannerContent="Women's Collection"
        />
        <ProductGrid title="Women's Best Sellers" category="Women" limit={8} />
      </div>

      {/* New Arrivals */}
      <div className="mt-16">
        <ProductGrid title="New Arrivals" limit={8} />
      </div>

      {/* Kids Section */}
      <div className="mt-16">
        <CategoryBanner
          bannerContent="Kid's Collection"
          imageSrc="/kids.jpg"
        />
        <ProductGrid title="Cute & Comfy for Kids" category="Kids" limit={8} />
      </div>

      {/* Sale Section */}
      <div className="mt-16 bg-red-50 dark:bg-red-950/20 py-10">
        <ProductGrid
          title="Flash Sale – Up to 70% Off!"
          limit={8}
        // You can add a "onSale: true" filter later
        />
      </div>
    </div>
  );
}