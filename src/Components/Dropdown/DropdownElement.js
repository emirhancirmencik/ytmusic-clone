import React from "react";
import { Icon } from "../../image/Icons";

function DropdownElement() {
  return (
    <div>
      <a
        className={`hover:bg-whitealpha4 flex items-center w-full`}
        href="/account-settings"
      >
        <span className="py-3 pl-3">
          <Icon name="settings" sizex="24px" />
        </span>
        <span className="mx-2 text-sm"></span>Shuffle Play
      </a>
    </div>
  );
}

export default DropdownElement;
