import "./App.css";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Button,
  Text,
  HStack,
  chakra,
  useMediaQuery,
  IconButton,
  VStack,
  Slide,
  useDisclosure,
  Link,
  keyframes,
} from "@chakra-ui/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EmailIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { useState } from "react";

import { theme } from "./theme/index";
import "./theme/styles.css";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectList } from "./data/ProjectList";
import { CyberContainer } from "./components/CyberContainer";
import { GitHubIcon } from "./components/Icons";

const title: String = "Hi, I´m Stefan,\n  Front-End Developer";
const flicker = keyframes`0% {
  opacity:0.1;
  
}

2% {
  opacity:1;
  
}
8% {
  opacity:0.1;
  
}
9% {
  opacity:1;
  
}
12% {
  opacity:0.1;
  
}
15% {
  opactity: 1;
}
20% {
  opacity:1;
  
}
25% {
  opacity:0.3;
  
}
28% {
  opacity:1;
  
}

70% {
  opacity:1;
 
}

72% {
  opacity:0.2;
  
}
74% {
  opacity: 1;
}

77% {
  opacity:.9;
  
}
100% {
  opacity:.9;
  
}
`;

export function App() {
  const [index, setIndex] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile] = useMediaQuery("(min-width: 990px)");

  function scrollTo(element: string) {
    const component = document.getElementById(element);
    window.scrollTo({ top: component?.offsetTop, behavior: "smooth" });
  }

  return (
    <ChakraProvider theme={theme}>
      {isMobile ? (
        <Flex
          position={"fixed"}
          justifyContent={"space-evenly"}
          direction={"row"}
          right={"2rem"}
          padding={"3rem"}
          color={"white"}
          w={"fit-content"}
          zIndex="999"
        >
          <HStack spacing={"3rem"} fontSize={"3xl"}>
            <chakra.a
              _hover={{
                cursor: "pointer",
                color: `${theme.colors.design.project}`,
                transition: "all .2s ease-in",
              }}
              onClick={() => scrollTo("project-heading")}
              transition="all .2s ease-in"
            >
              Projects
            </chakra.a>
            <chakra.a
              _hover={{
                cursor: "pointer",
                color: `${theme.colors.design.pink}`,
              }}
              onClick={() => scrollTo("aboutMe")}
              transition="all .2s ease-in"
            >
              About Me
            </chakra.a>
            <chakra.a
              _hover={{
                cursor: "pointer",
                color: `${theme.colors.design.pink}`,
              }}
              onClick={() => scrollTo("contact")}
              transition="all .2s ease-in"
            >
              Contact
            </chakra.a>
          </HStack>
        </Flex>
      ) : (
        <Flex right={"2rem"} position={"fixed"} marginTop={"2rem"} zIndex="999">
          <IconButton
            zIndex="9999"
            aria-label="Mobile-Menu-Button"
            icon={<HamburgerIcon color={`${theme.colors.design.project}`} />}
            variant={"ghost"}
            size={"lg"}
            fontSize={"40px"}
            colorScheme={"yellow"}
            onClick={() => {
              onToggle();
            }}
          />

          <Slide direction="right" in={isOpen}>
            <Box
              inset={"0 0 0 30%"}
              height="full"
              bgColor={"black"}
              position="fixed"
              opacity=".9"
              padding={"5rem 0 0 0"}
            >
              <VStack
                color={"white"}
                fontSize="24px"
                spacing={"30px"}
                marginTop="10rem"
              >
                <chakra.a
                  onClick={() => {
                    scrollTo("project-heading");
                    onToggle();
                  }}
                  transition="all .2s ease-in"
                >
                  Projects
                </chakra.a>
                <chakra.a
                  onClick={() => {
                    scrollTo("aboutMe");
                    onToggle();
                  }}
                  transition="all .2s ease-in"
                >
                  About Me
                </chakra.a>
                <chakra.a
                  onClick={() => {
                    scrollTo("contact");
                    onToggle();
                  }}
                  transition="all .2s ease-in"
                >
                  Contact
                </chakra.a>
              </VStack>
            </Box>
          </Slide>
        </Flex>
      )}
      <Flex
        alignItems={"center"}
        h={"100vh"}
        marginLeft={{ base: "1rem", lg: "10rem" }}
        direction={{ base: "column", lg: "row" }}
        marginTop={{ base: "5rem", lg: "0" }}
        gap={{ base: "4rem", lg: "0" }}
      >
        <Heading
          position={"relative"}
          color={"white"}
          whiteSpace={"pre-wrap"}
          fontSize={"7xl"}
          textShadow={`0 0 15px ${theme.colors.design.tertiary}`}
          _after={{
            content: `""`,
            position: "absolute",
            zIndex: -1,
            color: `${theme.colors.design.tertiary}`,
            filter: "auto",
            blur: "15px",
          }}
          _before={{
            content: `""`,
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: -2,
            background: `${theme.colors.design.tertiary}`,
            opacity: 0.4,
            filter: "auto",
            blur: "70px",
          }}
        >
          {title}
        </Heading>
        <div
          data-augmented-ui="all-hexangle-up border"
          className="reticle"
        ></div>
      </Flex>
      <Flex
        alignItems={"center"}
        marginLeft={{ base: "1rem", sm: "2rem", lg: "10rem" }}
        marginTop={"2rem"}
      >
        <Heading
          id="project-heading"
          position={"relative"}
          color={"white"}
          whiteSpace={"pre-wrap"}
          fontSize={"7xl"}
          textShadow={`0 0 10px ${theme.colors.design.project}`}
          animation={`${flicker} 5s infinite linear`}
          _after={{
            content: `""`,
            position: "absolute",
            zIndex: -1,
            color: `${theme.colors.design.project}`,
            filter: "auto",
            blur: "15px",
          }}
          _before={{
            content: `""`,
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: -2,
            background: `${theme.colors.design.project}`,
            opacity: 0.4,
            filter: "auto",
            blur: "70px",
          }}
        >
          Projects
        </Heading>
      </Flex>
      <Flex
        justifyContent={"space-evenly"}
        m={"100px"}
        alignItems={"center"}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Button
          margin={{ base: "1rem", lg: "0" }}
          fontSize={"2xl"}
          variant="outline"
          leftIcon={<ArrowLeftIcon />}
          color={`${theme.colors.design.project}`}
          borderRadius={4}
          borderColor={`${theme.colors.design.project}`}
          textShadow={"0 0 1em currentColor"}
          boxShadow={`inset 0 0 .5em ${theme.colors.design.project} ,0 0 .5em 0 ${theme.colors.design.project}`}
          _hover={{ bg: `${theme.colors.design.project}`, color: "black" }}
          onClick={() => {
            if (index > 0) setIndex(index - 1);
          }}
          isDisabled={index <= 0}
        >
          Previos Project
        </Button>
        <ProjectCard name={ProjectList[index].title} />
        <Button
          margin={{ base: "1rem", lg: "0" }}
          fontSize={"2xl"}
          variant="outline"
          rightIcon={<ArrowRightIcon />}
          color={`${theme.colors.design.project}`}
          borderRadius={4}
          borderColor={`${theme.colors.design.project}`}
          textShadow={"0 0 1em currentColor"}
          boxShadow={`inset 0 0 .5em ${theme.colors.design.project} ,0 0 .5em 0 ${theme.colors.design.project}`}
          _hover={{ bg: `${theme.colors.design.project}`, color: "black" }}
          onClick={() => {
            if (index < ProjectList.length - 1) setIndex(index + 1);
          }}
          isDisabled={index >= ProjectList.length - 1}
        >
          Next Project
        </Button>
      </Flex>
      <Flex
        alignItems={"center"}
        marginLeft={{ base: "1rem", sm: "2rem", lg: "10rem" }}
        marginTop={"20rem"}
      >
        <Heading
          id="aboutMe"
          position={"relative"}
          color={"white"}
          whiteSpace={"pre-wrap"}
          fontSize={"7xl"}
          textShadow={`0 0 15px ${theme.colors.design.pink}`}
          _after={{
            content: `""`,
            position: "absolute",
            zIndex: -1,
            color: `${theme.colors.design.pink}`,
            filter: "auto",
            blur: "15px",
          }}
          _before={{
            content: `""`,
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: -2,
            background: `${theme.colors.design.pink}`,
            opacity: 0.4,
            filter: "auto",
            blur: "70px",
          }}
        >
          About Me
        </Heading>
      </Flex>
      <Flex margin={"10rem"} justifyContent="center">
        <CyberContainer>
          <Text padding={"2rem"} lineHeight={"1.6"} fontSize="18px">
            Mein Techstack: <br />
            Flutter | Dart | HTML | CSS | JavaScript | TypeScript | ReactJS |
            Git
            <br />
            <br />
            Ich liebe es etwas zu erschaffen, ob es jetzt Software, Stories oder
            andere Ideen sind. Etwas in die Welt zu setzen und zu sehen wie
            andere es benutzen oder damit interagieren, ist immer eine große
            Freude für mich. Dabei ist es mir persönlich wichtig neue Dinge zu
            lernen, aber auch sich in schon vorhandenen Fähigkeiten stetig zu
            verbessern.
            <br />
            Ich bin eine lösungsorientierte Person in jeglicher Hinsicht und
            dabei ist die Kommuikation auschlaggebend. Ob das kleinste Detail
            oder das große Ganze, ich habe immer eine objektive Perspektive
            auf die Dinge, bin mir aber auch bewusst die Dinge aus
            verschiedenen Perspektiven zu sehen.
            <br/>
            <br/>
            Interessen:
            <br/>
            Gaming | Dungeons and Dragons | Sport 
          </Text>
        </CyberContainer>
      </Flex>
      <Flex id="contact" justify={"center"} gap="2rem" margin={"2rem"}>
        <Link
          href="https://github.com/Stomni"
          target={"_blank"}
          rel="noreferrer"
        >
          <GitHubIcon />
        </Link>
        <Link href="mailto:jackisch.stefan@gmail.com">
          <EmailIcon
            boxSize={10}
            marginTop="1rem"
            transition={".2s"}
            _hover={{
              color: `${theme.colors.design.pink}`,
              transition: "all .2s ease-in-out",
            }}
          />
        </Link>
      </Flex>
    </ChakraProvider>
  );
}
