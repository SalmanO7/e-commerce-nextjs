import Image from "next/image";
import img1 from "@/assets/g2.jpg";
import img2 from "@/assets/g3.jpg";
import img3 from "@/assets/fd2.jpg";
import img4 from "@/assets/fd5.jpg";
import img5 from "@/assets/g3.jpg";
import img6 from "@/assets/g4.jpg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FoodGallaryData: { id: any; img: any }[] = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
];

const GallarySection = () => {
  return (
    <div className="p-2 sm:px-[20px] md:p-[40px]">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-24">
        Food Gallery
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center pt-[80px]">
        {FoodGallaryData.map((eachFoodCard) => (
          <div key={eachFoodCard.id} className="">
            <Image
              className="card-img sm:h-[230px] sm:w-[265px] md:h-[270px] md:w-[300px] xl:w-[380px] xl:h-[270px] my-2"
              src={eachFoodCard.img}
              alt={eachFoodCard.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallarySection;
