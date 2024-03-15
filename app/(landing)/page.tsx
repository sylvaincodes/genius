import { LayoutOne } from "@/components/layouts/layout-one";
import { HeroOne } from "@/components/wrappers/hero/hero-one";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
      <LayoutOne>
        <HeroOne/>
      </LayoutOne>
    );
  }
  