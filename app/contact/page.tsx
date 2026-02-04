import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { social_links } from "@/constants";
import { FaEnvelope } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function ContactPage() {
  return (
    <section
      className="py-2 md:py-6 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6 place-content-center min-h-[calc(100dvh-4rem)]"
      aria-label="Contact section"
    >
      <section aria-label="Contact description">
        <header className="flex flex-col md:items-center lg:items-start text-left gap-4 lg:gap-6">
          <div
            role="status"
            className="hidden lg:inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-green-600 dark:text-green-400">
              Open to work
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-black tracking-tight max-md:leading-8 text-[#111318] dark:text-white text-[32px] lg:text-6xl"
          >
            Let's build something{" "}
            <span className="text-primary">extraordinary</span>.
          </h1>

          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed md:max-w-lg lg:max-w-xl mb-4">
            Have a project in mind or just want to say hi? I'm always open to
            discussing new projects, creative ideas or opportunities to be part
            of your visions.
          </p>

          <div className="flex w-full max-w-lg flex-col gap-4">
            <a
              href="mailto:ryantido34@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Item variant="outline">
                <ItemActions>
                  <Button
                    className="bg-[#252a33] hover:bg-[#252a33] cursor-default"
                    size="icon-lg"
                  >
                    <FaEnvelope className="text-primary" />
                  </Button>
                </ItemActions>
                <ItemContent className="gap-px font-sora">
                  <ItemTitle>Email me at</ItemTitle>
                  <ItemDescription>ryantido34@gmail.com</ItemDescription>
                </ItemContent>
              </Item>
            </a>
            <span className="max-[415px]:inline-flex hidden mt-2 gap-x-px -translate-x-2">
              {social_links.map(({ name, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="link"
                    size="sm"
                    className="text-muted-foreground"
                  >
                    {name}
                    <MdOutlineArrowOutward />
                  </Button>
                </a>
              ))}
            </span>
            <Item variant="outline" className="hidden min-[415px]:flex">
              <ItemActions>
                <Button
                  className="bg-[#252a33] hover:bg-[#252a33] cursor-default"
                  size="icon-lg"
                >
                  <IoMdShare className="text-primary size-6" />
                </Button>
              </ItemActions>
              <ItemContent className="gap-px font-sora translate-y-1.5 ">
                <ItemTitle className="font-sora">Follow my work</ItemTitle>
                <ItemDescription className="-translate-y-1">
                  <span className="inline-flex gap-x-px -translate-x-2">
                    {social_links.map(({ name, link }) => (
                      <a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="link"
                          size="sm"
                          className="text-muted-foreground"
                        >
                          {name}
                          <MdOutlineArrowOutward />
                        </Button>
                      </a>
                    ))}
                  </span>
                </ItemDescription>
              </ItemContent>
            </Item>
          </div>
        </header>
      </section>
      <section aria-label="Contact form">
        <ContactForm />
      </section>
    </section>
  );
}
