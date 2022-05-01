import {
  Button,
  Flex,
  Heading,
  keyframes,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  Image,
  HStack,
  IconButton,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { theme } from "../theme/index";

import { ProjectList } from "../data/ProjectList";
import { CyberContainerCard } from "./CyberContainer";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

const move = keyframes`0% {background-position: top center} 100% {background-position: bottom center}`;
const pseudoEle = {
  content: `""`,
  width: "102%",
  height: "102%",
  position: "absolute",
  zIndex: -1,
  bgGradient: `linear(to-b, ${theme.colors.design.project}, #ff0490)`,
  backgroundSize: "100% 300%",
  top: "-1%",
  left: "-1%",
  borderRadius: 15,
  animation: `${move} 2500ms infinite alternate linear`,
};
const afterPropertys = { filter: "auto", blur: "100px", opacity: ".5" };
const afterElement = { ...pseudoEle, ...afterPropertys };

export function ProjectCard({ name }: { name: String }) {
  const [index, setIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 990px)")
  const project = ProjectList.find((e) => e.title === name);
  return (
    <>
      <Flex
        bgColor={"black"}
        h={"600px"}
        w={{
          base: "300px",
          sm: "350px",
          md: "400px",
          lg: "400px",
          xl: "500px",
        }}
        direction="column"
        borderRadius={10}
        position="relative"
        padding={"5px 10px"}
        _after={afterElement}
        _before={pseudoEle}
      >
        <Heading textAlign={"center"} marginBottom={"1rem"}>
          {project?.title}
        </Heading>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <List spacing={"5"} whiteSpace={"pre-wrap"} textAlign="center">
            <ListItem fontSize={"22px"}>
              <CyberContainerCard>
                {"Type:\n" + project?.type}
              </CyberContainerCard>
            </ListItem>
            <ListItem fontSize={"22px"}>
              <CyberContainerCard>
                {"Techstack:\n" + project?.techStack}
              </CyberContainerCard>
            </ListItem>
            <ListItem fontSize={"22px"}>
              <CyberContainerCard>
                {"About:\n" + project?.desc}
              </CyberContainerCard>
            </ListItem>
            <ListItem
              fontSize={"18px"}
              transition="all .2s ease-in"
              _hover={{
                color: `${theme.colors.design.pink}`,
                transition: "all .2s ease-in-out",
              }}
            >
              <a href={project?.link} target="_blank" rel="noreferrer">
                Visit Project
              </a>
            </ListItem>
            <ListItem
              fontSize={"18px"}
              transition="all .2s ease-in"
              _hover={{
                color: `${theme.colors.design.pink}`,
                transition: "all .2s ease-in",
              }}
            >
              <a href={project?.sourceCode} target={"_blank"} rel="noreferrer">
                View Sourcecode
              </a>
            </ListItem>
          </List>
        </Flex>
        <Button color={"black"} bg={"white"} onClick={onOpen} margin={"1rem"}>
          Details
        </Button>
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          size={"full"}
          scrollBehavior="inside"
        >
          <ModalOverlay
            bg={"none"}
            backdropFilter="auto"
            backdropBlur={"12px"}
            backdropInvert="15%"
          />
          <ModalContent bgColor={"#080A0C"}>
            <ModalHeader alignSelf={"center"} fontSize="40px">
              {project?.title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction={!isMobile ? "row" : "column-reverse"}>
                <HStack spacing={".5rem"} justifyContent="center" width={"50%"}>
                  <IconButton
                    aria-label="previous"
                    icon={<ArrowLeftIcon />}
                    variant="ghost"
                    disabled={index === 0 && true}
                    onClick={() => {
                      if (index >= 1) {
                        setIndex(index - 1);
                      }
                    }}
                  ></IconButton>
                  <Image width={"60%"}  src={project?.imgList[index]} borderRadius="12px"/>
                  <IconButton
                    aria-label="next"
                    icon={<ArrowRightIcon />}
                    variant="ghost"
                    disabled={index === project?.imgList.length! - 1 && true}
                    onClick={() => {
                      if (index < project?.imgList.length! - 1) {
                        setIndex(index + 1);
                      }
                    }}
                  ></IconButton>
                </HStack>
                <VStack width={isMobile ? "100%" : "50%"} justifyContent={isMobile ? "center" : ""} alignItems={isMobile ? "center": ""} margin={isMobile ? "2rem 0 5rem 0" : ""}>
                  <Heading>About</Heading>
                  <Text whiteSpace={"pre-wrap"} paddingRight=".5rem">{project?.about}</Text>
                </VStack>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}
