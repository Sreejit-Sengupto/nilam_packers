import CustomButton from "@/components/CustomButton";
import { HeroScroll } from "@/components/homepage/HeroScroll";
import { NavbarDemo } from "@/components/NavbarDemo";
import Sparkles from "@/components/homepage/Sparkles";
import TextReveal from "@/components/homepage/TextReveal";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import Link from "next/link";
import HorizontalLine from "@/components/HorizontalLine";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Sparkles />

        <CustomButton>
          <Link href={"/contact-us"} className="p-4">
            Start your packaging journey
          </Link>
        </CustomButton>
      </div>

      <HorizontalLine />
      
      <HeroScroll />
    </>
  );
}
