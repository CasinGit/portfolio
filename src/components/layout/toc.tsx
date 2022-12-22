import { Box, Button } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import TocContext from "../../contexts/toc-context";
import { getIntersectionObserver } from "../../lib/observer";

export default function Toc() {
    // const TocCtx = useContext(TocContext)!;
    const [currentId, setCurrentId] = useState<string>("");
    const [headingEls, setHeadingEls] = useState<Element[]>([]);

    const TocCtx = useContext(TocContext)!;
    const { pos } = TocCtx;
    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop < pos.AboutMe) return TocCtx.setActive(0);

            if (pos.AboutMe <= scrollTop && scrollTop < pos.Skills) return TocCtx.setActive(1);

            if (pos.Skills <= scrollTop && scrollTop < pos.Projects) return TocCtx.setActive(2);

            if (pos.Projects <= scrollTop && scrollTop < pos.Careers) return TocCtx.setActive(3);

            if (pos.Careers <= scrollTop) return TocCtx.setActive(4);
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
                <Box sx={{ textAlign: "center" }}>
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