interface Props{
    label : string;
    image: string;
}

export const CategoryCard = ({label, image} : Props) => {
   return <div>
       // image
       <img className="image" src={image}/>

       // label
       <div className="absolute">
           <div className="relative">
              <p>{label}</p>
           </div>
       </div>
   </div>
}