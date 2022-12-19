import styles from './index.module.css';
import Box from '@mui/material/Box';
import { Paper, Stack, Typography } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import TocContext from '../../contexts/toc-context';

export default function CareersComp() {
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
        <Box className={styles.container} ref={element} id="Careers">
            <Typography component="h2" className={styles.typo_title} id='Careers'>
                Careers
            </Typography>
            <Stack spacing={2}>
                <Paper sx={{ p: 1 }}>Paper 1</Paper>
                <Paper sx={{ p: 1 }}>Paper 2</Paper>
                <Paper sx={{ p: 1 }}>Paper 3</Paper>
            </Stack>
        </Box >
    )
}