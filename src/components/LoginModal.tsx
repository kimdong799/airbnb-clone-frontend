import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, InputGroup, InputLeftElement, Input, Button } from "@chakra-ui/react";
import { FaUserNinja } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import SocialLogin from "./SocialLogin";

interface LoginModalProps{
    isOpen:boolean;
    onClose:() => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps){
    return(
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
                </VStack>
                <Button mt={3} colorScheme="red" w="100%">Log in</Button>
                <SocialLogin />
            </ModalBody>
        </ModalContent>
    </Modal>
    );
}