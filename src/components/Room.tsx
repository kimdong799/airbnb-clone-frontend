import { VStack, Box, Button, Grid, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room(){
    const textColor = useColorModeValue("gray.600", "gray.100");
    return(
        <VStack spacing={1} alignItems={"flex-start"}>
        <Box position={"relative"} overflow={"hidden"} rounded={"3xl"}>
            <Image 
            minH="280"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/cc3a98b7-d83e-4684-bb03-2b2ce6dd480d.jpeg?im_w=720" 
            />
            <Button variant={"unstyled"} position={"absolute"} top={5} right={5} color={"white"}>
                <FaRegHeart size="20px" />
            </Button>
        </Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text as={"b"} noOfLines={1} fontSize={"md"}>Namsan-myeon, Chuncheon, 한국의 집 전체ddsadasdsss</Text>
            <HStack spacing={1}>
                <FaStar size={15}/>
                <Text>5.0</Text>
            </HStack>
        </Grid>
        <Text fontSize={"sm"} color={textColor}>Seoul, S. Korea</Text>
        <Text fontSize={"sm"} color={textColor}>
            <Text as={"b"}>$72</Text> / night
        </Text>
    </VStack>
    )
}