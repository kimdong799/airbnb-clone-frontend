import { Box, HStack, IconButton, Button, useDisclosure, useColorMode, LightMode, useColorModeValue, Stack, Avatar, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import useUser from "../lib/useUser";
import { logOut } from "../routes/api";
import { useQueryClient } from "@tanstack/react-query";

export default function Header(){
    const { userLoading, isLoggedIn, user } = useUser();
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
    const toast = useToast();
    const queryClient = useQueryClient();
    const onLogOut = async() => {
        const toastId = toast({
            title: "Login out...",
            description: "Sad to see you go...",
            status: "loading",
            position: "bottom-right"
        })
        const data = await logOut();
        queryClient.refetchQueries({
            queryKey:['me']
        });
        toast.update(toastId, {
                title: "Log out",
                status: "success",
                description: "See you later!"
            });
        // for test
        // setTimeout(() => {toast.update(toastId, {
        //     title: "Log out",
        //     status: "success",
        //     description: "See you later!"
        // });
        // }, 5000);
    }
    return(
        <Stack 
            justifyContent={"space-between"} 
            py={5} 
            px={40}
            direction={{
                sm:"column",
                md:"row",
            }}
            spacing={{
                sm:4,
                md:0
            }}
            borderBottomWidth={1}
        >
            <Box color={logoColor}>
                <FaAirbnb size={48} />
            </Box>
            <HStack spacing={2}>
                <IconButton onClick={toggleColorMode} variant={"ghost"} aria-label="Toggle dark mode" icon={ <Icon /> }/>
                {!userLoading && !isLoggedIn ? (
                <>
                <Button onClick={onLoginOpen}>Log in</Button>
                <LightMode>
                    <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign up</Button>
                </LightMode>
                </>
            ) : (
                <Menu>
                    <MenuButton>
                        <Avatar name={user?.name} src={user?.avatar} size={"md"} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={onLogOut}>Log out</MenuItem>
                    </MenuList>
                </Menu>
            )}
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </Stack>
    )
};