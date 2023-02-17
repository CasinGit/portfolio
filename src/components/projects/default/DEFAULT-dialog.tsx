import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, Paper, Link, Backdrop, Unstable_Grid2 as Grid } from '@mui/material';
import type { imagesType } from './default';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DefaultDialog(
    { state, close, images }: { state: boolean, close: () => void, images: imagesType }
) {
    const [backdrop, setBackdrop] = React.useState<boolean>(false);
    const [backdropImg, setBackdropImg] = React.useState<string>("");
    const handleClose = () => {
        setBackdrop(false);
        setBackdropImg("");
    };
    const handleOpen = (url: string) => {
        setBackdropImg(url);
        setBackdrop(true);
    };

    return (
        <Dialog
            fullScreen
            open={state}
            onClose={close}
            TransitionComponent={Transition}
        >
            {/* TITLE SECTION START */}
            <AppBar sx={{ position: 'sticky', backgroundColor: "#222222" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={close}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        프로젝트 제목
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* TITLE SECTION END */}

            {/* IMAGE & DESCRIPTION SECTION START */}
            <Box sx={{ display: "flex", px: { xs: 5, sm: 7, md: 10 }, py: 3, flexDirection: "column", gap: 3, width: "100%", alignItems: "center" }}>
                <Box>
                    {/* Project Main Title */}
                    <Typography variant='h4'>
                        프로젝트 제목
                    </Typography>
                    {/* Project Type, Period */}
                    <Typography variant='body2'>
                        개인 프로젝트 or 팀 프로젝트 / 20**년 *월 ~ 20**년 *월
                    </Typography>
                </Box>

                {/* PROJECT DESCRIPTION START */}
                <Box sx={{ width: { xs: "90%", sm: "85%", md: "80%" } }}>
                    <Typography>
                        프로젝트 간단 설명
                    </Typography>
                </Box>
                <Box sx={{ width: { xs: "90%", sm: "85%", md: "80%" } }} >
                    <Typography>
                        프로젝트 상세 설명
                    </Typography>
                </Box>
                {/* PROJECT DESCRIPTION END */}

                <Divider sx={{ width: "100%" }} />

                {/* PROJECT MAIN FUNCTIONS START */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: { xs: "90%", sm: "85%", md: "80%" } }}>
                    <Typography variant='h5' mb={1}>
                        - 주요 기능 -
                    </Typography>
                    <Box>
                        <Typography component="li">
                            프로젝트 주요 기능 1
                        </Typography>
                        <Typography component="li">
                            프로젝트 주요 기능 2
                        </Typography>
                    </Box>
                </Box>
                {/* PROJECT MAIN FUNCTIONS END */}

                <Divider sx={{ width: "100%" }} />

                {/* PROJECT SKILL STACK START */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, width: { xs: "90%", sm: "85%", md: "80%" } }}>
                    <Typography variant='h5'>
                        - 사용 기술 -
                    </Typography>
                    <Box>
                        <Typography component="li">
                            Frontend : -
                        </Typography>
                        <Typography component="li">
                            Backend : -
                        </Typography>
                        <Typography component="li">
                            Database : -
                        </Typography>
                        <Typography component="li">
                            Deployment : -
                        </Typography>
                    </Box>
                </Box>
                {/* PROJECT SKILL STACK END */}

                <Divider sx={{ width: "100%" }} />

                {/* PROJECT URL START */}
                <Box sx={{ display: "flex", gap: 4 }}>
                    <Link href='#' target="_blank" sx={{ color: "black" }}>
                        <Typography gap={0.5} sx={{ display: "flex", fontWeight: 600 }}>
                            <GitHubIcon />
                            GitHub
                        </Typography>
                    </Link>
                    <Link href='#' target="_blank" sx={{ color: "black" }}>
                        <Typography gap={0.5} sx={{ display: "flex", fontWeight: 600 }}>
                            <LinkIcon />
                            URL
                        </Typography>
                    </Link>
                </Box>
                {/* PROJECT URL END */}

                <Divider sx={{ width: "100%" }} />

                <Grid container spacing={2} sx={{ width: "100%" }}>
                    {images.map((item, i) => (
                        <Grid xs={16} md={6} key={item.label} >
                            <Paper onClick={() => {
                                handleOpen(item.url)
                            }}
                                sx={{
                                    minHeight: 300, width: "auto", position: "relative", transition: "all 0.2s linear !important",
                                    ":hover": { boxShadow: "1px 1px 3px 1px", transform: "scale(1.02)" }
                                }}
                                key={i}
                            >
                                <img src={item.url} alt={item.label} style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, objectFit: "contain", borderRadius: "3px" }} loading="lazy" />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* IMAGE & DESCRIPTION SECTION END */}

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdrop}
                onClick={handleClose}
            >
                <img src={backdropImg} alt={backdropImg} style={{ position: "absolute", width: "80%", height: "80%", objectFit: "contain" }} loading="lazy" />
            </Backdrop>
        </Dialog>
    );
}