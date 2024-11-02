import Image from "next/image";

const card = ({ img, title, description }: any) => {
  return (
    <div className="card py-5 ">
      <Image
        src={img}
        alt={title}
        className="card-img sm:h-[230px] sm:w-[265px] md:h-[270px] md:w-[300px] xl:w-[380px] xl:h-[300px]"
      />
      <h2 className="text-xl mt-1 font-bold">{title}</h2>
      <p className="text-xs sm:w-[265px] w-80">{description}</p>
    </div>
  );
};

export default card;
