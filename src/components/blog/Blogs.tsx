import img1 from "@/assets/fd1.jpg";
import img2 from "@/assets/fd5.jpg";
import BlogCard from "./BlogCard";

const BlogCardData: {
  title: string;
  description: string;
  img: any;
  btnContent: string;
}[] = [
  {
    title: "Read New Offers",
    description:
      "Enjoy a variety of delicious dishes made from high-quality ingredients, crafted to satisfy every taste.",
    img: img2,
    btnContent: "Read More",
  },
  {
    title: "Read New Blogs Offers",
    description:
      "crafted to satisfy every taste. From mouthwatering burgers to flavorful sides, we serve it all with passion and perfection.",
    img: img1,
    btnContent: "Read More",
  },
];

const Blogs = () => {
  return (
    <div className="sm:px-[20px] md:p-[40px]">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pt-40">Our Blogs</h1>
      <div className="flex flex-col gap-4 p-2  lg:flex-row justify-start items-center pt-[89px]">
        {BlogCardData.map((cardData) => (
          <BlogCard
            key={cardData.id}
            title={cardData.title}
            description={cardData.description}
            img={cardData.img}
            btnContent={cardData.btnContent}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
