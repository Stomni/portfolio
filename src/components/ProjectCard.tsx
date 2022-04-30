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
} from "@chakra-ui/react";
import { theme } from "../theme/index";

import { ProjectList } from "../data/ProjectList";
import { CyberContainerCard } from "./CyberContainer";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <a href={project?.link} target="_blank">
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
              <a href={project?.sourceCode} target={"_blank"}>
                View Sourcecode
              </a>
            </ListItem>
          </List>
        </Flex>
        <Button color={"black"} bg={"white"} onClick={onOpen} margin={"2rem"}>
          Details
        </Button>
        <Modal onClose={onClose} isOpen={isOpen} size={"full"}>
          <ModalOverlay />
          <ModalContent bgColor={"#080A0C"}>
            <ModalHeader alignSelf={"center"}>{project?.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}
