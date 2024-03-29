import { Box, Skeleton, Grid, SkeletonText } from "@chakra-ui/react";
export default function RoomSkeleton(){
    return(
        <Box>
        <Skeleton height={280} rounded={"2xl"} mb={4} />
        <Grid templateColumns={"5fr 1fr"}>
        <SkeletonText w="70%" noOfLines={2} mb={5}/>
        <SkeletonText w="50%" noOfLines={1} ml={5}/>
        </Grid>
        <SkeletonText w="20%" noOfLines={1}/>
        </Box>
    )
}