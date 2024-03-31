import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "./api";

export default function RoomDetail() {
    // useParams는 URL에 있는 모든 변수를 가져온다
    // router에서 받고싶은 것을 파라미터로 특정한다 (:roomPK)
    const { roomPk } = useParams();
    const { isLoading, data } = useQuery({queryKey:[`room:${roomPk}`], queryFn:getRoom})
    console.log(data);
    return <h1>Hello</h1>;
}