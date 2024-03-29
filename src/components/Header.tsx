import { Box, HStack, IconButton, Button, useDisclosure, useColorMode, LightMode, useColorModeValue } from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header(){
    const { colorMode, toggleColorMode } = useColorMode();
    // LoginModal, SignUpModal 구분
    const{
        isOpen:isLoginOpen,
        onClose:onLoginClose,
        onOpen:onLoginOpen 
    } = useDisclosure();
    const{
        isOpen:isSignUpOpen,
        onClose:onSignUpClose,
        onOpen:onSignUpOpen
    } = useDisclosure();

    const logoColor = useColorModeValue("red.500", "red.200");
    const Icon = useColorModeValue(FaMoon, FaSun);
    return(
        <HStack justifyContent={"space-between"} py={5} px={40} borderBottomWidth={1}>
        <Box color={logoColor}>
            <FaAirbnb size={48} />
        </Box>
        <HStack spacing={2}>
            <IconButton onClick={toggleColorMode} variant={"ghost"} aria-label="Toggle dark mode" icon={ <Icon /> }/>
            <Button onClick={onLoginOpen}>Log in</Button>
            <LightMode>
                <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign up</Button>
            </LightMode>
        </HStack>
    <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
    <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
    )
};