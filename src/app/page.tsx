import Hero from "@/components/Hero";
import Blogs from "@/components/blog/Blogs";
import GallarySection from "@/components/foodGallary/GallarySection";
import Food from "@/components/foods/Food";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <>
      <main className="container w-full h-screen ">
        <Hero />
        <Food />
        <GallarySection />
        <Blogs />
        <Footer />
      </main>
    </>
  );
};

export default page;
