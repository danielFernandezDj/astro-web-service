import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Colors } from "@/config/colors";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 " style={{ backgroundColor: Colors.background }}>
      {/* Left */}
      <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10 md:pl-16">
        <div className="inline-block max-w-xl justify-center">
          <span className={title({class: ""})}>
            The Digital Face of Your Restaurant.
          </span>

          <div className={subtitle({ class: "mt-4" })}>
            Transform your restaurant's online presence with professional
            photography, optimized menus, and a website that converts visitors
            into customers.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>

      {/* Right */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl items-center justify-center">
          <Image
            src={"/hero-img.png"}
            alt="Hero Image"
            className="rounded-lg border-4"
            priority
            width={500}
            height={500}
          />
        </div>
      </section>
    </main>
  );
}
