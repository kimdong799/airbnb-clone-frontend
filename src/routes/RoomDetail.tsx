import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom, getRoomReviews } from "./api";
import { IReview, IRoomDetail } from "../types"
import { Box, Text, Grid, GridItem, HStack, Heading, Image, Skeleton, VStack, Avatar, SkeletonCircle } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function RoomDetail() {
    // useParams는 URL에 있는 모든 변수를 가져온다
    // router에서 받고싶은 것을 파라미터로 특정한다 (:roomPK)
    const { roomPk } = useParams();
    const { isLoading, data } = useQuery<IRoomDetail>({queryKey:[`rooms`, roomPk], queryFn:getRoom});
    const { data:reviewsData, isLoading:isReviewsLoading } = useQuery<IReview[]>(
        {queryKey:[`rooms`, roomPk, `reviews`],
         queryFn:getRoomReviews}
         );
    
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
                            {data?.photos && data.photos.length > 4 ? (
                            <Image 
                                objectFit={"cover"} 
                                width={"100%"} 
                                height={"100%"} 
                                src={data?.photos[index].file}/>
                                ) : null
                            }
                        </Skeleton>
                    </GridItem>
                ))}
            </Grid>
            <HStack w={"50%"} mt={10} justifyContent={"space-between"}>
                <VStack alignItems={"flex-start"}>
                    <Skeleton isLoaded={!isLoading}>
                        <Heading fontSize={"2xl"}>
                            House hosted by {data?.owner.name}
                        </Heading>
                    </Skeleton>
                    <HStack w={"100%"} justifyContent={"flex-start"}>
                        <Skeleton isLoaded={!isLoading}>
                            <HStack>
                                <Text>{data?.toilets} toilet{data?.toilets===1 ? "" : "s"}</Text>
                                <Text>•</Text>
                                <Text>{data?.rooms} room{data?.toilets===1 ? "" : "s"}</Text>
                            </HStack>
                        </Skeleton>
                    </HStack>
                </VStack>
                {/* 이미지 로드 실패 시 host 철자 노출 */}
                <SkeletonCircle isLoaded={!isLoading} size={"base"}>
                    <Avatar size={"xl"} name={data?.owner.name} src={data?.owner.avatar}/>
                </SkeletonCircle>
            </HStack>
            <Box mt={10}>
                <Heading fontSize={"2xl"}>
                    <HStack>
                        <FaStar />
                        <Text>{data?.rating}</Text>
                        •
                        <Text>{reviewsData?.length} review{reviewsData?.length===0 ? "" : "s"}</Text>
                    </HStack>
                </Heading>
            </Box>
        </Box>
    );
}