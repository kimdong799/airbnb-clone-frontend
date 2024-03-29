import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
import Room from "../components/Room";
import { useEffect, useState } from "react";
import RoomSkeleton from "../components/RoomSkeleton";

export default function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [rooms, setRooms] = useState();
    const fetchRooms = async() => {
        const response = await fetch("http://127.0.0.1:8000/api/v1/rooms/");
        const json = await response.json();
        setRooms(json);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchRooms();
    }, []);
    return (
    <Grid 
        mt={10} 
        px={{
            base:10,
            lg:40
        }} 
        columnGap={4} 
        rowGap={8} 
        templateColumns={{
            sm:"1fr",
            md:"1fr 1fr",
            lg:"1fr 1fr 1fr",
            xl:"repeat(4, 1fr)",
            "2xl":"repeat(5, 1fr)"
        }}
    >   
            {isLoading ? (
            <>
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            <RoomSkeleton />
            </>
            ) : null}
    </Grid>
    )
};