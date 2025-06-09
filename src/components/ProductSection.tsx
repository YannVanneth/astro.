import {ListView} from "@/components/ui/list-view.tsx";
import {DATA} from "@/data/data.ts";
import type {ProductCardProps} from "@/components/ui/ProductCard.tsx";


interface ProductSectionProps {
  item: ProductCardProps[];
  label?: string;
  has_shop_more? : boolean;
}

export const ProductSections = () => {
  return <section className="w-[72.5%] mx-auto overflow-hidden">
    <ProductListSection item={DATA.productItem} />
    <ProductListSection item={DATA.productItem} label={"Deals of the Season - Women!"} has_shop_more/>
    <ProductListSection item={DATA.productItem} label={"Limited-Time Shoe Deals!"} has_shop_more/>
  </section>;
};


const ProductListSection = ({item, label, has_shop_more} : ProductSectionProps) => {
  return <div className="space-y-2">
    <div className="flex items-center justify-between">
      <p className="mt-5 text-2xl">{label ?? 'Up to 70% Off - Men!'}</p>
      {has_shop_more ? (
          <p className="mt-5 text-lg">Shop More</p>
      ) : null}
    </div>
    <ListView item={item}/>
  </div>;
}
