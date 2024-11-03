import Card from "@/components/foods/Card";
import img1 from "@/assets/fd1.jpg";
import img2 from "@/assets/fd2.jpg";
import img3 from "@/assets/fd3.jpg";
import img4 from "@/assets/fd4.jpg";
import img5 from "@/assets/fd5.jpg";
import img6 from "@/assets/fd6.jpg";
import Footer from "@/components/footer/Footer";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FoodCard: { title: string; description: string; img: any }[] = [
  {
    img: img1,
    title: "Juicy Beef Burger",
    description: "Freshly grilled with special sauce, available with 40% OFF!",
  },
  {
    img: img2,
    title: "Double Delight Burger",
    description:
      "Satisfy your cravings with a double treat, up to 35% OFF today!",
  },
  {
    img: img3,
    title: "Cheesy Italian Pizza",
    description: "Overflowing with cheese and toppings, enjoy it at 30% OFF!",
  },
  {
    img: img4,
    title: "Classic Margherita",
    description: "A timeless favorite with fresh tomatoes and basil, 25% OFF!",
  },
  {
    img: img5,
    title: "Chocolate Brownies",
    description: "Indulge in rich, fudgy brownies, now available with 45% OFF!",
  },
  {
    img: img6,
    title: "Cookies & Cream Shake",
    description: "A delightful mix of cookies and cream, up to 50% OFF!",
  },
];

const food = () => {
  return (
    <>
      <div className="w-[100%] p-2 sm:px-[20px] md:p-[40px]">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pt-8">
          Our Foods
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center pt-[80px]">
          {FoodCard.map((eachCard) => (
            <Card
              key={eachCard.title}
              title={eachCard.title}
              description={eachCard.description}
              img={eachCard.img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default food;
