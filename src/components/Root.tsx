import { Box, Button, HStack, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaAirbnb, FaMoon, FaUserNinja } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Root(){
    const{ isOpen, onClose, onOpen } = useDisclosure();
    return (
    <Box>
        <HStack justifyContent={"space-between"} py={5} px={10} borderBottomWidth={1}>
            <Box color="red.500">
                <FaAirbnb size={48} />
            </Box>
            <HStack spacing={2}>
                <IconButton variant={"ghost"} aria-label="Toggle dark mode" icon={<FaMoon />}/>
                <Button onClick={onOpen}>Log in</Button>
                <Button colorScheme={"red"}>Sign up</Button>
            </HStack>
            <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Log in</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <InputGroup>
                                <InputLeftElement children={
                                    <Box color="gray.500">
                                        <FaUserNinja />
                                    </Box>
                                    } />
                                <Input variant={"filled"} placeholder="username" />
                            </InputGroup>
                            <InputGroup>
                                <Input variant={"filled"} placeholder="password" />
                                <InputLeftElement children={
                                    <Box color="gray.500">
                                        <RiLockPasswordFill />
                                    </Box>
                                    } />
                            </InputGroup>
                            <Button m={3} colorScheme="red" w="100%">Log in</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </HStack>
        <Outlet />
    </Box>
    );
}