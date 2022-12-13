import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { getIntersectionObserver } from "../../lib/observer";

export default function Toc() {
    const [currentId, setCurrentId] = useState<string>("");
    const [headingEls, setHeadingEls] = useState<Element[]>([]);

    useEffect(() => {
        const observer = getIntersectionObserver(setCurrentId);
        const headingElements = Array.from(document.querySelectorAll("h1, h2"));
        setHeadingEls(headingElements);
        headingElements.map((header) => {
            observer.observe(header);
        })
    }, [])

    // 현재 Markdown 값 가져오기
    console.log(headingEls);
    // 스크롤시 헤더 값
    console.log(currentId);

    return (
        <>
            {headingEls.length !== 0 &&
                <Box>
                    {headingEls.map(one => (
                        <Button href={`#${one.id}`}>{one.id}</Button>
                    ))}
                </Box>
            }
        </>
    )
}

// https://se9round.dev/post/React%EC%97%90%EC%84%9C%20Intersection%20Observer%EB%A1%9C%20TOC%20%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0