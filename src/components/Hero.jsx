import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
    >
      <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] py-[6px] px-4">
        <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount For
          <span className="text-white"> 1 Month</span> Account
        </p>
      </div>

      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="flex-1 font-poppins text-lg font-semibold leading-[75px] text-white ss:text-xl ss:leading-[100px]">
          The Next <br className="hidden sm:block" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="mr-0 hidden ss:flex md:mr-4">
          <GetStarted />
        </div>
      </div>
      <h1 className="w-full font-poppins text-lg font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100px]">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
  </section>
);

export default Hero;
