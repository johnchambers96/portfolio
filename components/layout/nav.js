import { useRouter } from "next/router";
import Link from "next/link";
import {
  StyledNavBar,
  StyledA,
  StyledContaingDiv,
  StyledIcon,
} from "../../styles/nav";
import { useState, useEffect } from "react";
import { themeTypes } from "../../constants";

const NavBar = ({ toggleTheme, theme }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    switch (router.pathname) {
      case "/about":
      case "/about/[slug]":
        setActiveTab("/about");
        break;
      case "/career":
      case "/career/[slug]":
        setActiveTab("/career");
        break;
      default:
        setActiveTab("/");
        break;
    }
  }, [router.pathname]);

  return (
    <StyledNavBar>
      <StyledContaingDiv>
        <Link href={"/"} passHref>
          <StyledA>{"Share My 11"}</StyledA>
        </Link>
      </StyledContaingDiv>
      <StyledContaingDiv>
        <Link href={"/about"} passHref>
          <StyledA className={activeTab === "/about" && "active"}>
            {"About"}
          </StyledA>
        </Link>
        <Link href={"/career"} passHref>
          <StyledA className={activeTab === "/career" && "active"}>
            {"Career"}
          </StyledA>
        </Link>
        {theme === themeTypes.LIGHT ? (
          <StyledIcon src="/moon.svg" onClick={toggleTheme} alt="Moon Image" />
        ) : (
          <StyledIcon src="/sun.svg" onClick={toggleTheme} alt="Sun Image" />
        )}
      </StyledContaingDiv>
    </StyledNavBar>
  );
};

export default NavBar;
