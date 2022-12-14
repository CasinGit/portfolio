import styles from './index.module.css';
import { Button, MobileStepper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ProjectsComp() {
    return (
        <Box className={styles.container}>
            <Typography component="h2" className={styles.typo_title} id='Projects'>
                Projects
            </Typography>

            <Paper className={styles.inContainer} variant='outlined' sx={{ p: 2 }}>
                {/* Title */}
                <Box display="flex" sx={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant='h5' fontWeight={600}>
                        Airbnb 클론 코딩
                    </Typography>
                    <Box display="flex" gap={1}>
                        <Typography variant='subtitle1'>
                            개인 프로젝트
                        </Typography>
                        /
                        <Typography variant='subtitle1' color="GrayText">
                            2022년 11월
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ my: 1 }} />

                {/* Main */}
                <Box>
                    <Grid container spacing={3}>
                        <Grid xs="auto">
                            https://www.npmjs.com/package/react-material-ui-carousel
                        </Grid>
                        <Grid xs={8}>
                            <>xs=6</>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

        </Box>
    )
}