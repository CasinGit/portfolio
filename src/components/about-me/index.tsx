import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import styles from './index.module.css';
import ImageArea from './image-area';
import IntroductionArea from './introduction-area';

export default function AboutMeComp() {
    return (
        <Box className={styles.container}>
            <Typography component="h2" className={styles.typo_title} id='AboutMe'>
                About Me
            </Typography>
            <Box className={styles.inContainer}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={4} lg={4} sx={{ width: "fit-content !important" }}>
                        <ImageArea />
                    </Grid>
                    <Grid xs={12} md={4} lg={4} sx={{ width: "fit-content !important" }}>
                        <IntroductionArea />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}