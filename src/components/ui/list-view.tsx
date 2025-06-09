import {ProductCard, type ProductCardProps} from "./ProductCard.tsx";
import 'react-indiana-drag-scroll/dist/style.css';
import ScrollContainer from "react-indiana-drag-scroll";

interface Props {
  item: ProductCardProps[];
}

export const ListView = ({ item = [] }: Props) => {

  return <ScrollContainer horizontal vertical={false} className="flex gap-6">
      {item.map((product, index) => (
          <div key={index} >
            <ProductCard {...product} />
          </div>
      ))}
  </ScrollContainer>
};
