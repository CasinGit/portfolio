import { Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect, useContext, useRef } from "react";
import TocContext from "../../contexts/toc-context";
import { getIntersectionObserver } from "../../lib/observer";

export default function Toc() {
    // const TocCtx = useContext(TocContext)!;
    const [currentId, setCurrentId] = useState<string>("");
    const [headingEls, setHeadingEls] = useState<Element[]>([]);
    const [scrollPos, setScrollPos] = useState<number>(0);

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const TocCtx = useContext(TocContext)!;
    const { pos } = TocCtx;
    const test = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const targetHeader = document.getElementById("inner_Header");
        // console.log(targetHeader);
        const onScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = document.documentElement.clientHeight;
            setScrollPos(scrollTop);
            // console.log(scrollHeight); //! 현재문서의 높이(창 사이즈에 따라 달라짐)
            // console.log(scrollTop) //! 현재 스크롤탑의 값
            // console.log(document.documentElement.clientHeight) //! 현재 화면 높이 값

            if (scrollTop > 100) {
                targetHeader?.classList.add("header_background");
            } else {
                targetHeader?.classList.remove("header_background");
            }

            if (scrollTop < pos.AboutMe && scrollTop < (pos.AboutMe * 0.4)) return TocCtx.setActive(0);

            if (((pos.Careers - pos.Projects) + pos.Careers) * 0.6 <= scrollTop || (scrollTop + clientHeight) === scrollHeight) return TocCtx.setActive(4);

            if (((pos.Projects - pos.Skills) + pos.Projects) * 0.6 <= scrollTop && scrollTop < pos.Careers) return TocCtx.setActive(3);

            if (((pos.Skills - pos.AboutMe) + pos.Skills) * 0.6 <= scrollTop && scrollTop < pos.Projects) return TocCtx.setActive(2);

            if ((pos.AboutMe * 0.4) <= scrollTop && scrollTop < pos.Skills) return TocCtx.setActive(1);

        };


        if (pos.AboutMe !== 0 && pos.Skills !== 0 && pos.Projects !== 0 && pos.Careers !== 0) {
            window.addEventListener("scroll", onScroll);

            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                targetHeader?.classList.add("header_background");
            } else {
                targetHeader?.classList.remove("header_background");
            }
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
                    text-shadow: 2px 2px 2px #222222 !important;
                    text-decoration: underline dodgerblue solid 2px;
                    text-underline-offset: 5px;
                }   
                .toc {
                    color: white;
                    font-weight: 600;
                    width: 100%;
                    height: fit-content;
                    border-radius: 10px;
                    text-shadow: 2px 2px 2px #222222;
                    mix-blend-mode: difference;
                    background-color: rgba(0, 0, 0, 0) !important;
                }
                .toc:hover{
                    color: rgb(0, 108, 216) !important;
                    text-shadow: -1px 0 1px #222222, 0 1px 1px #222222, 1px 0 1px #222222, 0 -1px 1px #222222 !important;
                    {/* text-decoration: underline rgb(0, 108, 216) solid 2px; */}
                    {/* text-underline-offset: 5px; */}
                }
            `}</style>

            {headingEls.length !== 0 &&
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 3 }} ref={test} >
                    {/* {scrollPos} */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' }, gap: 1 }}>
                        {headingEls.map((one, idx) => (
                            <Button href={`#${one.id}`} key={one.id}
                                className={idx === TocCtx.active ? "toc active" : "toc"}
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector(`#${one.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
                                }}
                            >
                                {one.id}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' }, gap: 1 }}
                        >
                            {headingEls.map((one, idx) => (
                                <MenuItem href={`#${one.id}`} key={one.id}
                                    className={idx === TocCtx.active ? "toc active" : "toc"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector(`#${one.id}`)?.scrollIntoView({ behavior: "smooth" });
                                        setTimeout(() => {
                                            setAnchorElNav(null);
                                        }, 1000);
                                    }}>
                                    <Typography textAlign="center">{one.id}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Box>
            }
        </>
    )
}