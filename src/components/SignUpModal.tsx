import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, InputGroup, InputLeftElement, Input, Button } from "@chakra-ui/react";
import { FaUserNinja, FaUserSecret, FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import SocialLogin from "./SocialLogin";

interface SignUpModalProps{
    isOpen:boolean;
    onClose:() => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps){
    return(
        <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack>
                    <InputGroup>
                        <InputLeftElement children={
                            <Box color="gray.500">
                                <FaUserSecret />
                            </Box>
                            } />
                        <Input variant={"filled"} placeholder="Name" />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement children={
                            <Box color="gray.500">
                                <FaEnvelope />
                            </Box>
                            } />
                        <Input variant={"filled"} placeholder="Email" />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement children={
                            <Box color="gray.500">
                                <FaUserNinja />
                            </Box>
                            } />
                        <Input variant={"filled"} placeholder="Username" />
                    </InputGroup>
                    <InputGroup>
                        <Input variant={"filled"} placeholder="Password" />
                        <InputLeftElement children={
                            <Box color="gray.500">
                                <RiLockPasswordFill />
                            </Box>
                            } />
                    </InputGroup>
                </VStack>
                <Button mt={3} colorScheme="red" w="100%">Sign up</Button>
                <SocialLogin />
            </ModalBody>
        </ModalContent>
    </Modal>
    );
}