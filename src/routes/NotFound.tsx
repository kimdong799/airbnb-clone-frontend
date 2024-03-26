import { Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return (
    <VStack justifyContent={"center"} minH="100vh">
        <Heading>Page not found</Heading>
        <Text>It seems that you're lost.</Text>
        <Link to="/">
            <Button colorScheme={"twitter"} variant={"solid"}>Go home &rarr;</Button>
        </Link>
    </VStack>
    );
}