import styles from './index.module.css';
import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import FlipToBackIcon from '@mui/icons-material/FlipToBack';
import StorageIcon from '@mui/icons-material/Storage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useContext, useEffect, useRef } from 'react';
import TocContext from '../../contexts/toc-context';
import ProjectAirbnb from './airbnb/airbnb';

export default function ProjectsComp() {
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

    return (
        <Box className={styles.container} ref={element} id="Projects">
            <Typography component="h2" className={styles.typo_title} id='Projects'>
                Projects
            </Typography>

            {/* 에어 비앤비 클론 코딩 */}
            <ProjectAirbnb />
        </Box >
    )
}