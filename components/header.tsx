import { Button } from "@/components/ui/button";
import { BoxReveal } from "./ui/box-reveal";

const Header = () => {
  return (
    <div className="size-full max-w-lg text-white items-center justify-center overflow-hidden pt-8">
   
  
    <div className="size-full max-w-lg text-white items-center justify-center overflow-hidden pt-8">
  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
    <p className="text-[3.5rem] max-md:text-xl font-semibold ">
      Music AI<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent ">.</span>
    </p>
  </BoxReveal>

  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
    <h2 className="mt-[.5rem] text-[1rem]">
      Discover personalized music with{" "}
      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent ">
        AI-powered Genre Prediction
      </span>
    </h2>
  </BoxReveal>

  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
    <div className="mt-6 max-md:hidden">
      <p>
        -&gt; Enter your{" "}
        <span className="font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent ">
          age
        </span>{" "}
        and{" "}
        <span className="font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent ">
          favorite genre
        </span>{" "}
        in the form on the right to start your music journey. <br />
        -&gt; Powered by cutting-edge technologies:{" "}
        <span className="font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent ">
          React
        </span>
        ,{" "}
        <span className="font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent ">
          Nextjs
        </span>
        ,{" "}
        <span className="font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent ">
          Django Rest Framework
        </span>
        , and{" "}
        <span className="font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-transparent ">
          Framer Motion
        </span>
        . <br />
        -&gt; Fully customizable and open-source.
      </p>
    </div>
  </BoxReveal>

  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
    <Button className="mt-[1.6rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-md:hidden">
      Try Now {"-> "}
    </Button>
  </BoxReveal>
</div>

  </div>
  
  );
}

export default Header;