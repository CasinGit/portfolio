import { Box, Button } from "@mui/material";
import { useState, useEffect, useContext, useRef } from "react";
import TocContext from "../../contexts/toc-context";
import { getIntersectionObserver } from "../../lib/observer";

export default function Toc() {
    // const TocCtx = useContext(TocContext)!;
    const [currentId, setCurrentId] = useState<string>("");
    const [headingEls, setHeadingEls] = useState<Element[]>([]);
    const [scrollPos, setScrollPos] = useState<number>(0);

    const TocCtx = useContext(TocContext)!;
    const { pos } = TocCtx;
    const test = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const onScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = document.documentElement.clientHeight;
            setScrollPos(scrollTop);
            // console.log(scrollHeight); //! 현재문서의 높이(창 사이즈에 따라 달라짐)
            // console.log(scrollTop) //! 현재 스크롤탑의 값
            // console.log(document.documentElement.clientHeight) //! 현재 화면 높이 값

            if (scrollTop < pos.AboutMe && scrollTop < (pos.AboutMe * 0.4)) return TocCtx.setActive(0);

            if (((pos.Careers - pos.Projects) + pos.Careers) * 0.6 <= scrollTop || (scrollTop + clientHeight) === scrollHeight) return TocCtx.setActive(4);

            if (((pos.Projects - pos.Skills) + pos.Projects) * 0.7 <= scrollTop && scrollTop < pos.Careers) return TocCtx.setActive(3);

            if (((pos.Skills - pos.AboutMe) + pos.Skills) * 0.6 <= scrollTop && scrollTop < pos.Projects) return TocCtx.setActive(2);

            if ((pos.AboutMe * 0.4) <= scrollTop && scrollTop < pos.Skills) return TocCtx.setActive(1);

        };

        if (pos.AboutMe !== 0 && pos.Skills !== 0 && pos.Projects !== 0 && pos.Careers !== 0) {
            window.addEventListener("scroll", onScroll);
        }

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [TocCtx, pos]);


    useEffect(() => {
        const observer = getIntersectionObserver(setCurrentId);
        const headingElements = Array.from(document.querySelectorAll("h1, h2"));
        setHeadingEls(headingElements);
        headingElements.map((header) => {
            return observer.observe(header);
        })
    }, [])

    //! 현재 Markdown 값 가져오기
    // console.log(headingEls);
    //! 스크롤시 헤더 값
    // console.log(currentId);
    //! 스크롤시 헤더 pos
    // console.log(TocCtx.active);

    return (
        <>
            <style jsx>{`
                .active {
                    color: dodgerblue !important;
                    font-weight: 600;
                    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white !important;
                    text-decoration: underline dodgerblue solid 2px;
                    text-underline-offset: 5px;
                }   
                .toc {
                    color: white;
                    width: 100%;
                    border-radius: 10px;
                    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
                }
                .toc:hover{
                    color: rgb(0, 108, 216) !important;
                    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white !important;
                    text-decoration: underline rgb(0, 108, 216) solid 2px;
                    text-underline-offset: 5px;
                }
            `}</style>

            {headingEls.length !== 0 &&
                <Box sx={{ textAlign: "center" }} ref={test} >
                    {/* {scrollPos} */}
                    {headingEls.map((one, idx) => (
                        <Button href={`#${one.id}`} key={one.id}
                            className={idx === TocCtx.active ? "toc active" : "toc"}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(`#${one.id}`)?.scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            {one.id}
                        </Button>
                    ))}
                </Box>
            }
        </>
    )
}

// https://se9round.dev/post/React%EC%97%90%EC%84%9C%20Intersection%20Observer%EB%A1%9C%20TOC%20%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0