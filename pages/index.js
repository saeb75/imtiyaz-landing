import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import * as animationData from "../public/pTxgjvDj6h.json";
import Lottie from "react-lottie";
import { TypeAnimation } from "react-type-animation";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <main className={"bg-[#06044B] h-screen w-screen overflow-x-hidden"}>
        <Lottie options={defaultOptions} height={400} width={400} />
        <div className="w-[320px] xs:w-[350px] sm:w-[600px] md:w-[700px] flex justify-center items-center mx-auto">
          <div className="w-full">
            <h1 className="text-center md:text-4xl text-2xl">
              Imtiyaz, tech with us
            </h1>
            <TypeAnimation
              sequence={[
                "Thank you for visiting Imtiyaz! We're currently hard at work coding the next generation of innovative and intelligent tech solutions for you. We're putting in the long hours, caffeine, and dedication necessary to create products that will make your tech experience truly transformative. Our team is committed to excellence, and we can't wait to launch soon and show you what we've been working on. Stay tuned for more updates on our progress, and thank you for your patience as we continue to code away!", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              speed={140}
              wrapper="p"
              cursor={true}
              style={{
                fontSize: "1.1em",
                Width: "100%",
                padding: "16px",
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
