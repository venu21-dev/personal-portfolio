import Image from "next/image";
import Logo3 from "../../public/assets/portfolio_logo3.svg";
import Link from "next/link";

/* Arrays für die Links */
const navLinksMobile = [
  { name: "Projects", href: "/projects" },
  { name: "UI/ UX", href: "/ui-ux" },
  { name: "About", href: "/about" },
];

const navLinksDesktop = [
  { name: "Projects", href: "/projects" },
  { name: "UI/ UX", href: "/ui-ux" },
  { name: "Product Design", href: "/3d-design" },
  { name: "Photography", href: "/photography" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  return (
    <nav className="bg-[#E0E0E0] border-2 border-[#CFCFCF] rounded-[50px] mx-2 my-4 bg-opacity-50 backdrop-blur-md fixed top-0 left-0 right-0 z-50 lg:mx-[400px] lg:my-5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo mit Link */}
          <Link href="/" className="ml-2">
            <Image 
              src={Logo3} 
              alt="Portfolio logo" 
              className="transition-transform duration-500 ease-out hover:rotate-180"
            />
          </Link>

          {/* Mobile Links (sichtbar unter sm: Breakpoint) */}
          <div className="flex space-x-6 mr-2 sm:hidden group">
            {navLinksMobile.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-[#333232] transition-all duration-300 group-hover:opacity-70 group-hover:blur-[1px] hover:!opacity-100 hover:!blur-none hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Links (sichtbar ab sm: Breakpoint) */}
          <div className="hidden sm:flex space-x-6 mr-2 group">
            {navLinksDesktop.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-[#333232] transition-all duration-300 group-hover:opacity-70 group-hover:blur-[2px] hover:!opacity-100 hover:!blur-none hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}