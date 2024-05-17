import { Box, Button, Divider, HStack, VStack, Text } from "@chakra-ui/react";
import { FaGithub, FaComment } from "react-icons/fa";

export default function SocialLogin() {
    return (
        <Box mb={4}>
        <HStack my={8}>
            <Divider />
                <Text textTransform={"uppercase"} fontSize="xs" as="b" color="gray.400">
                    Or
                </Text>
            <Divider />
        </HStack>
        <VStack>
            <Button 
                as="a"
                href="https://github.com/login/oauth/authorize?client_id=Ov23lizjBzgSJPSlxXl5&scope=read:user,user:email" 
                w={"100%"} 
                leftIcon={<FaGithub />} 
                colorScheme="telegram"
            >
                Continue with Github
            </Button>
            <Button w={"100%"} leftIcon={<FaComment />} colorScheme="yellow">
                Continue with Kakao
            </Button>
        </VStack>
        </Box>
    );
}