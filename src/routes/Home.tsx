import { Box, VStack, HStack, Grid, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function Home(){
    return (
    <Grid mt={10} px={40} columnGap={4} rowGap={8} templateColumns={"repeat(5, 1fr)"}>
        <VStack spacing={1} alignItems={"flex-start"}>
            <Box overflow={"hidden"} rounded={"3xl"}>
                <Image 
                h="280"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720" />
            </Box>
            <Grid gap={2} templateColumns={"6fr 1fr"}>
                <Text as={"b"} noOfLines={1} fontSize={"md"}>Namsan-myeon, Chuncheon, 한국의 집 전체ddsadasdsss</Text>
                <HStack spacing={1}>
                    <FaStar size={15}/>
                    <Text>5.0</Text>
                </HStack>
            </Grid>
            <Text fontSize={"sm"} color={"gray.600"}>Seoul, S. Korea</Text>
            <Text fontSize={"sm"} color={"gray.600"}>
                <Text as={"b"}>$72</Text> / night
            </Text>
        </VStack>
    </Grid>
    )
};