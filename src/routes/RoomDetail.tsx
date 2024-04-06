import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "./api";
import { IRoomDetail } from "../types"
import { Box, Grid, GridItem, Heading, Image, Skeleton } from "@chakra-ui/react";

export default function RoomDetail() {
    // useParams는 URL에 있는 모든 변수를 가져온다
    // router에서 받고싶은 것을 파라미터로 특정한다 (:roomPK)
    const { roomPk } = useParams();
    const { isLoading, data } = useQuery<IRoomDetail>({queryKey:[`room:${roomPk}`], queryFn:getRoom})
    console.log(data);
    return (
        <Box
            mt={10} 
            px={{
                base:10,
                lg:40
            }}>
            <Skeleton height={"43px"} width={"30%"} isLoaded={!isLoading}>
                <Heading>{data?.name}</Heading>
            </Skeleton>
            <Grid
                mt={8}
                gap={3}
                rounded={"xl"}
                overflow={"hidden"}
                height={"60vh"}
                // 이미지 사진 균일하게 설정
                // 첫번째 이미지면 rowspan, columnspan을 2씩 차지하도록 설정
                templateRows={"1fr 1fr"}
                templateColumns={"repeat(4, 1fr)"}>
                {[0, 1, 2, 3, 4].map((index) => (
                    <GridItem 
                        colSpan={index === 0 ? 2 : 1} 
                        rowSpan={index === 0 ? 2 : 1} 
                        overflow={"hidden"} 
                        key={index}>
                        <Skeleton isLoaded={!isLoading} height={"100%"} width={"100%"}>
                            <Image 
                                objectFit={"cover"} 
                                width={"100%"} 
                                height={"100%"} 
                                src={data?.photos[index].file}/>
                        </Skeleton>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
}