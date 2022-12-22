import styles from './index.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useRef } from 'react';
import TocContext from '../../contexts/toc-context';
import ProjectAirbnb from './airbnb/airbnb';

export default function ProjectsComp() {
    const TocCtx = useContext(TocContext)!;
    const element = useRef<Element>(null);

    useEffect(() => {
        if (!element.current) return;
        const rect = element.current.getBoundingClientRect();
        console.log(rect.top, window.scrollY);
        TocCtx.setPos((pos) => ({
            ...pos,
            [element.current?.id as string]: rect.top + window.scrollY,
        }));
    }, [TocCtx.setPos, element.current?.getBoundingClientRect().height])


    return (<>
        <Box></Box>
        <Box className={styles.container} ref={element} id="Projects">
            <Typography component="h2" className={styles.typo_title} id='Projects'>
                Projects
            </Typography>

            {/* 에어 비앤비 클론 코딩 */}
            <ProjectAirbnb />
        </Box >
    </>
    )
}