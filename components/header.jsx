import React from "react";

import {
  Show,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0">
      <Show when="signed-out">
        <SignInButton />
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
};

export default Header;