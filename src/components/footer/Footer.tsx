const Footer = () => {
  return (
    <div className=" mt-[80px] w-full bg-[#004581] text-white">
      <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="footerText p-[60px]">
          <h2 className="font-bold text-[17px] sm:text-2xl">About Us</h2>
          <p className="font-light text-[14px] pl-1 ">Fresh Food</p>
          <p className="font-light text-[14px] pl-1 ">Quality</p>
          <p className="font-light text-[14px] pl-1 ">Aforable</p>
          <p className="font-light text-[14px] pl-1 ">Best Price</p>
        </div>
        <div className="footerText p-[60px]">
          <h2 className="font-bold text-[17px] sm:text-2xl">Top Dishes</h2>
          <p className="font-light text-[14px] pl-1 ">Paneer</p>
          <p className="font-light text-[14px] pl-1 ">Tikka</p>
          <p className="font-light text-[14px] pl-1 ">Pizza</p>
          <p className="font-light text-[14px] pl-1 ">Burger</p>
        </div>
        <div className="footerText p-[60px]">
          <h2 className="font-bold text-[17px] sm:text-2xl">Offers</h2>
          <p className="font-light text-[14px] pl-1 ">50% OFF</p>
          <p className="font-light text-[14px] pl-1 ">Bulk Order</p>
          <p className="font-light text-[14px] pl-1 ">Order Now</p>
          <p className="font-light text-[14px] pl-1 ">Coupons</p>
        </div>
        <div className="footerText p-[60px]">
          <h2 className="font-bold text-[17px] sm:text-2xl">Contact On</h2>
          <p className="font-light text-[14px] pl-1 ">Twitter</p>
          <p className="font-light text-[14px] pl-1 ">FaceBook</p>
          <p className="font-light text-[14px] pl-1 ">Instagram</p>
          <p className="font-light text-[14px] pl-1 ">LinkDin</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
