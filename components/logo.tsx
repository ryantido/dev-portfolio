import { VscTerminalBash } from "react-icons/vsc";
import Link from "next/link";

export const AppBrand = () => {
  return (
    <Link href="/">
      <section
        className="inline-flex items-center gap-2"
        aria-label="Brand Section"
      >
        <VscTerminalBash className="size-5" />
        <span className="font-bold text-lg font-outfit">Ryan Dev</span>
      </section>
    </Link>
  );
};
