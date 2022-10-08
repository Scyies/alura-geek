import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Lupa from "../assets/Lupa.svg";
import Button from "./Button";
import Input from "./Input";
import classNames from "classnames";
import cLogo from "../assets/control_logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  return (
    <header className="m-4 md:mx-8 flex items-center justify-between">
      <Link to={"/"}>
        <img
          src={openSearch ? cLogo : Logo}
          alt=""
          className={classNames("max-w-[100px] order-1", {
            "max-w-[40px]": openSearch === true,
          })}
        />
      </Link>
      <div
        className={classNames("order-2 md:order-3", {
          "hidden md:flex": openSearch === true,
        })}
      >
        <Link to={"/login"}>
          <Button variant="primary">Login</Button>
        </Link>
      </div>
      <div
        className={classNames("flex order-3 md:order-2 items-center", {
          "md:rounded-full md:bg-black/10 md:shadow-md":
            openSearch === false,
          "rounded-full bg-black/10 shadow-md my-1 self-end":
            openSearch === true,
        })}
      >
        <Input
          className={classNames(
            "bg-black/0 outline-none self-center rounded-full py-2 px-3",
            {
              "w-0 md:w-full": openSearch === false,
            }
          )}
          placeholder="O que deseja encontrar?"
        />
        <img
          src={Lupa}
          alt=""
          className="h-6 w-6 md:pointer-events-none mr-2"
          onClick={() => setOpenSearch(!openSearch)}
        />
      </div>
    </header>
  );
}
