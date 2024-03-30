import { VStack, Box, Button, Grid, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

interface IRoomProps{
    imageUrl:string;
    name:string;
    rating:number;
    city:string;
    country:string;
    price:number;
}

export default function Room({
    imageUrl, 
    name, 
    rating, 
    city, 
    country, 
    price
    }:IRoomProps){
    const textColor = useColorModeValue("gray.600", "gray.100");
    return(
        <VStack spacing={1} alignItems={"flex-start"}>
        <Box maxH="280" position={"relative"} overflow={"hidden"} rounded={"3xl"}>
            <Image 
            minH="280"
            src={imageUrl}
            />
            <Button variant={"unstyled"} position={"absolute"} top={5} right={5} color={"white"}>
                <FaRegHeart size="20px" />
            </Button>
        </Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text as={"b"} noOfLines={1} fontSize={"md"}>{name}</Text>
            <HStack _hover={{color:"red.500"}} color={"gray"} spacing={1}>
                <FaStar size={15}/>
                <Text>{rating}</Text>
            </HStack>
        </Grid>
        <Text fontSize={"sm"} color={textColor}>{city}, {country}</Text>
        <Text fontSize={"sm"} color={textColor}>
            <Text as={"b"}>${price}</Text> / night
        </Text>
    </VStack>
    )
}