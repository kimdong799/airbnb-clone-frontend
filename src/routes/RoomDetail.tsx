import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "./api";
import { IRoomDetail } from "../type";
import { Box, Grid, GridItem, Heading, Skeleton, Image } from "@chakra-ui/react";

export default function RoomDetail() {
    // useParams는 URL에 있는 모든 변수를 가져온다
    // router에서 받고싶은 것을 파라미터로 특정한다 (:roomPK)
    const { roomPk } = useParams();
    const { isLoading, data } = useQuery<IRoomDetail>(
        {
            queryKey:[`rooms`, roomPk], 
            queryFn:getRoom
        }
    );
    return (
        <Box
            mt={10}
            px={{
                base: 10,
                lg: 40,
            }}
        >
            {/* Loading인 경우에만 출력 */}
            <Skeleton h={"43"} w={"40%"} isLoaded={!isLoading}>
            {/* data가 null인 경우 예외처리 */}
            <Heading>{data? data.name : "Undefined"}</Heading>
            </Skeleton>
            <Grid
                mt={8}
                gap={3}
                rounded="xl"
                overflow="hidden"
                height="60vh"
                templateColumns={"repeat(4, 1fr)"}
                templateRows={"1fr 1fr"}
            >
                {[0, 1, 2, 3, 4].map((index) => (
                <GridItem 
                // 첫번째 이미지인 경우 2개의 행, 1개의 열 차지 
                    colSpan={index=== 0? 2 : 1}
                    rowSpan={index=== 0 ? 2 : 1}
                    overflow="hidden"
                    key={data?.photos[index].pk}
                >
                    <Skeleton isLoaded={!isLoading} h="100%"w="100%">
                    <Image w="100%" h="100%" objectFit={"cover"} src={data?.photos[index].file} />
                    </Skeleton>
                </GridItem>
                ))}
            </Grid>
        </Box>
    );
}