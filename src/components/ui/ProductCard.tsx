import { MdFavoriteBorder } from 'react-icons/md';

export interface ProductCardProps {
  category: string;
  price: number;
  image: string;
  currency: string;
  discount_rate: number;
  branding?: string;
  colors?: string[];
}

export const ProductCard = ({
  category,
  price,
  image,
  branding = '',
  currency,
  colors = [],
  discount_rate,
}: ProductCardProps) => {
  return <div className="w-[18rem] aspect-3/4 flex flex-col gap-2">
    <div className="h-0">
      <p className="relative left-3 top-5 bg-red-700 rounded-xs font-['Helvetica'] w-[4rem] px-2 py-1 text-center text-white">-{discount_rate}%</p>
    </div>
    <img src={image} alt={`${category} image`}/>
    <div className="h-0">
      <p className={`relative rotate-90 ${branding.length < 6 ? 'top-16' : branding.length < 10 ? 'top-10' : 'top-5'} -right-32`}>{branding}</p>
    </div>
    <div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-red-700">{currency} ${price}</span>
          <span className="line-through mx-2">${price}</span>
        </div>
        <MdFavoriteBorder/>

      </div>
      <p className="font-['Helvetica_Light']">{category}</p>
      {colors.length > 0 ?
          (<div className="flex items-center gap-1 mt-2">
            <ColorBox />
            <ColorBox />
            <ColorBox />
            <ColorBox />
          </div>) : null
      }
    </div>

  </div>;
};

const ColorBox = ({Color = 'bg-red-500'} : {  Color?: string;} ) => {
  return <div className={`w-[1em] h-[1em] rounded-xs ${Color}`}></div>
}
