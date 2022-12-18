import styles from './index.module.css';
import Box from '@mui/material/Box';
import { Paper, Stack, Typography } from '@mui/material';

export default function CareersComp() {
    return (
        <Box className={styles.container}>
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