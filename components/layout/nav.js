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
      case "/projects":
      case "/projects/[slug]":
        setActiveTab("/projects");
        break;
      case "/career":
      case "/career[slug]":
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
          <StyledA>{"John Chambers"}</StyledA>
        </Link>
      </StyledContaingDiv>
      <StyledContaingDiv>
        <Link href={"/projects"} passHref>
          <StyledA className={activeTab === "/projects" && "active"}>
            {"Projects"}
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
