import { useState, useEffect } from "react";
import { getIntersectionObserver } from "../../lib/observer";

export default function Toc() {
    const [currentId, setCurrentId] = useState<string>("");
    const [headingEls, setHeadingEls] = useState<Element[]>([]);

    useEffect(() => {
        const observer = getIntersectionObserver(setCurrentId);
        const headingElements = Array.from(document.querySelectorAll("h2, h3"));
        setHeadingEls(headingElements);
        headingElements.map((header) => {
            observer.observe(header);
        })
    }, [])

    return (
        <>
            {headingEls}
        </>
    )
}

// https://se9round.dev/post/React%EC%97%90%EC%84%9C%20Intersection%20Observer%EB%A1%9C%20TOC%20%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0