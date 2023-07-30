import { Tilt } from "react-tilt";

const ProductCard = ({
  index,
  name,
  description,
  category,
  href,
  imageSrc,
  imageAlt,
  price,
  discountPercentage,
}) => {
  let newprice = price;
  newprice -= price * (discountPercentage / 100);
  return (
    <Tilt
      options={{
        max: 10,
        scale: 1,
        speed: 450,
      }}
      className="p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full ">
        <div className="w-full h-[360px] sm:h-[360px] overflow-hidden rounded-2xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        {discountPercentage !== 0 && (
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              className="bg-yellow w-12 h-12 p-7 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(href, "_blank")}
            >
              <p className="font-bold text-primary">
                {String(discountPercentage)}%
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center my-3">
        <h3 className="text-primary font-bold text-[24px]">{name}</h3>
        <div>
          {discountPercentage !== 0 && (
            <h3 className="text-gray text-center line-through  font-semibold text-[18px] ">
              {String(price)} TND
            </h3>
          )}

          <h3 className="text-green font-bold text-[20px] ">
            {String(newprice.toFixed(2))} TND
          </h3>
        </div>
      </div>
      <p className=" text-gray text-[14px]">{description}</p>
    </Tilt>
  );
};

export default ProductCard;
