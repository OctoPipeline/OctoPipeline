import React from "react";
import Link from "next/link";
import { createPopper, VirtualElement } from "@popperjs/core";

const userDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<HTMLAnchorElement>();
  const popoverDropdownRef = React.createRef<HTMLDivElement>();
  const openDropdownPopover = () => {
    createPopper(
      btnDropdownRef.current as VirtualElement,
      popoverDropdownRef.current as HTMLElement,
      {
        placement: "bottom-start",
      }
    );
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <Link href="/profile">
      <button
                    className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <a
                      target="_blank"
                      href="https://discord.gg/Zy8GeCx"
                      rel="noreferrer noopener"
                    >
                      <i className="fab fa-discord"></i> Help
                    </a>
                  </button>
      </Link>
    </>
  );
};

export default userDropdown;