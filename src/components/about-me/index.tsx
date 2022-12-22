import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import styles from './index.module.css';
import ImageArea from './image-area';
import IntroductionArea from './introduction-area';
import { Grow } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import TocContext from '../../contexts/toc-context';

export default function AboutMeComp() {
    const TocCtx = useContext(TocContext)!;
    const element = useRef<Element>(null);

    useEffect(() => {
        if (!element.current) return;
        const rect = element.current.getBoundingClientRect();
        TocCtx.setPos((pos) => ({
            ...pos,
            [element.current?.id as string]: rect.top + window.scrollY,
        }));
    }, [TocCtx.setPos])

    const [show, setShow] = useState<boolean>(false);
    useEffect(() => {
        const target = document.querySelector("#AboutMe-GrowAction");
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
        <Box className={styles.container} ref={element} id='AboutMe' >
            <Typography component="h2" className={styles.typo_title} id='AboutMe'>
                About Me
            </Typography>
            <Box className={styles.inContainer}>
                <Grid container spacing={2} id='AboutMe-GrowAction' >
                    <Grow
                        in={show}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(show ? { timeout: 1000 } : {})}
                    >
                        <Grid xs={12} md={4} lg={4} sx={{ width: "fit-content !important" }}>
                            <ImageArea />
                        </Grid>
                    </Grow>

                    <Grow
                        in={show}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(show ? { timeout: 1000 } : {})}
                    >
                        <Grid xs={12} md={4} lg={4} sx={{ width: "fit-content !important" }}>
                            <IntroductionArea />
                        </Grid>
                    </Grow>
                </Grid>
            </Box>
        </Box>
    )
}