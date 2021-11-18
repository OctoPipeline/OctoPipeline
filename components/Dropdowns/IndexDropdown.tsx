import React from "react";
import Link from "next/link";
import { createPopper, VirtualElement } from "@popperjs/core";

const IndexDropdown = () => {
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
        <a
          className="hover:text-blueGray-700 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        >
          Account
        </a>
      </Link>
    </>
  );
};

export default IndexDropdown;
