import styles from './index.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useRef, useState } from 'react';
import TocContext from '../../contexts/toc-context';
import ProjectAirbnb from './airbnb/airbnb';
import { Fade } from '@mui/material';

export default function ProjectsComp() {
    const TocCtx = useContext(TocContext)!;
    const element = useRef<Element>(null);

    useEffect(() => {
        if (!element.current) return;
        const rect = element.current.getBoundingClientRect();
        console.log(rect.top, window.scrollY);
        TocCtx.setPos((pos) => ({
            ...pos,
            [element.current?.id as string]: Math.floor(rect.top + window.scrollY),
        }));
    }, [TocCtx.setPos, element.current?.getBoundingClientRect().height])

    const [show, setShow] = useState<boolean>(false);
    useEffect(() => {
        const target = document.querySelector("#Projects-FadeAction");
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // entry.target.classList.add("fadeIn");
                    setShow(true);
                }
            })
        }
        const options = {};
        const myObserver = new IntersectionObserver(callback, options);
        myObserver.observe(target as Element);
    }, [])


    return (
        <Box className={styles.container} ref={element} id="Projects">
            <Typography component="h2" className={styles.typo_title} id='Projects'>
                Projects
            </Typography>

            {/* 에어 비앤비 클론 코딩 */}
            <Fade in={show} style={{ transitionDelay: show ? "200ms" : "0ms" }}
                {...(show ? { timeout: 1000 } : {})}
            >
                <Box id="Projects-FadeAction" gap={3} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <ProjectAirbnb />
                    <ProjectAirbnb />
                </Box>
            </Fade>
        </Box >
    )
}