import { useContext, useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";
import { DiaryDispatchContext } from "../App";


const New = () => {

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0]
        titleElement.innerHTML = `감정 일기장 - 새 일기`
    }, [])

    return <div>
        <DiaryEditor />
    </div>
}

export default New;