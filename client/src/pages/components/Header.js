import {
  Flex,
  Heading,
  Image,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import dataContext from "../../utils/contextApi";
const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { isMobile, isTablet, isLaptop } = useContext(dataContext);

  return (
    <>
      <Box id="home"></Box>
      <Box
        m={
          isMobile
            ? "1em 2em"
            : isTablet
            ? "1em 4em"
            : isLaptop
            ? "1em 8em"
            : "1em 10em"
        }
        bgColor={"white"}
        boxShadow={"md"}
        p={"1em"}
        h={isMobile ? "2em" : isTablet ? "3em" : isLaptop ? "4em" : "5em"}
        borderRadius={"10px"}
        pos={"sticky"}
        top={"1em"}
        background={"white"}
        zIndex={"999"}
      >
        <Flex justify={"space-between"} align={"center"} h={"100%"}>
          <Flex align={"center"}>
            <Image
              w={isMobile ? "1em" : isTablet ? "2em" : isLaptop ? "3em" : "5em"}
              src="./hayvan.png"
            ></Image>
            <Heading
              fontSize={
                isMobile ? "xl" : isTablet ? "xl" : isLaptop ? "2xl" : "3xl"
              }
              fontWeight={"700"}
              letterSpacing={1}
            >
              Educa
            </Heading>
          </Flex>

          <Flex
            align={"center"}
            gap={
              isMobile
                ? "0.5em"
                : isTablet
                ? "0.75em"
                : isLaptop
                ? "1em"
                : "1.5em"
            }
          >
            <ChakraLink
              onClick={() => handleScroll("home")}
              fontSize={
                isMobile ? "sm" : isTablet ? "sm" : isLaptop ? "md" : "lg"
              }
              opacity={0.8}
              fontWeight={"500"}
              _hover={{ textDecoration: "none", opacity: 1, color: "black" }}
            >
              Home
            </ChakraLink>
            <ChakraLink
              onClick={() => handleScroll("about")}
              fontSize={
                isMobile ? "sm" : isTablet ? "sm" : isLaptop ? "md" : "lg"
              }
              opacity={0.8}
              fontWeight={"500"}
              _hover={{ textDecoration: "none", opacity: 1, color: "black" }}
            >
              About us
            </ChakraLink>
            <ChakraLink
              onClick={() => handleScroll("courses")}
              fontSize={
                isMobile ? "sm" : isTablet ? "sm" : isLaptop ? "md" : "lg"
              }
              opacity={0.8}
              fontWeight={"500"}
              _hover={{ textDecoration: "none", opacity: 1, color: "black" }}
            >
              Courses
            </ChakraLink>
            <ChakraLink
              onClick={() => handleScroll("instructors")}
              fontSize={
                isMobile ? "sm" : isTablet ? "sm" : isLaptop ? "md" : "lg"
              }
              opacity={0.8}
              fontWeight={"500"}
              _hover={{ textDecoration: "none", opacity: 1, color: "black" }}
            >
              Instructors
            </ChakraLink>
            <ChakraLink
              onClick={() => handleScroll("contact")}
              fontSize={
                isMobile ? "sm" : isTablet ? "sm" : isLaptop ? "md" : "lg"
              }
              opacity={0.8}
              fontWeight={"500"}
              _hover={{ textDecoration: "none", opacity: 1, color: "black" }}
            >
              Contact us
            </ChakraLink>
          </Flex>
          <Flex>
            <ChakraLink
              as={Link}
              to="/login"
              fontSize={
                isMobile ? "sm" : isTablet ? "sm" : isLaptop ? "md" : "lg"
              }
              fontWeight={"500"}
              padding={".5em 1em"}
              opacity={0.8}
              border={"1px solid transparent"}
              _hover={{ textDecoration: "none", opacity: 1, color: "black" }}
            >
              <Flex gap={"0.5em"} align={"center"}>
                <i
                  class="fi fi-rr-world"
                  style={{
                    position: "relative",
                    top: "3px",
                    fontSize: isMobile
                      ? "7px"
                      : isTablet
                      ? "10px"
                      : isLaptop
                      ? "15px"
                      : "20px",
                  }}
                ></i>
                Login
              </Flex>
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/signup"
              fontSize={
                isMobile ? "sm" : isTablet ? "sm" : isLaptop ? "md" : "lg"
              }
              position={"relative"}
              top={"2px"}
              color={"white"}
              padding={".5em 1.5em"}
              bgColor={"var(--primary-color)"}
              border={"1px solid transparent"}
              borderRadius={"30px"}
              fontWeight={"500"}
              transition={"all 0.5s ease"}
              _hover={{
                textDecoration: "none",
                opacity: 1,
                color: "black",
                bgColor: "white",
                border: "1px solid #007bff",
                transition: "all 0.5s ease",
              }}
            >
              Sign Up
            </ChakraLink>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
