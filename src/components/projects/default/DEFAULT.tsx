import styles from '../index.module.css';
import { Box, Button, Divider, Paper, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import FlipToBackIcon from '@mui/icons-material/FlipToBack';
import StorageIcon from '@mui/icons-material/Storage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import DefaultDialog from './DEFAULT-dialog';

//! 프로젝트 이미지 리스트
const images = [
    {
        url: "/projects/test/1.png",
        label: "1"
    },
    {
        url: "/projects/test/2.jpg",
        label: "2"
    },
    {
        url: "/projects/test/3.jpg",
        label: "3"
    },
    {
        url: "/projects/test/4.jpg",
        label: "4"
    },
    {
        url: "/projects/test/5.png",
        label: "5"
    },
] as const;

export default function ProjectDefault() {
    const [open, setOpen] = useState<boolean>(false);
    const handleCloseModal = () => setOpen(false);

    return (
        <Paper className={styles.inContainer} variant='outlined' sx={{ p: 2 }}>

            {/* TITLE SECTION START */}
            <Box display="flex" sx={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                {/* Project Main Title */}
                <Typography variant='h5' fontWeight={600} aria-label='project-name'>
                    Airbnb 클론 코딩
                </Typography>
                <Box display="flex" gap={1}>

                    {/* Project Type */}
                    <Typography variant='subtitle1' aria-label='project-type'>
                        개인 프로젝트
                    </Typography>
                    /

                    {/* Project Period */}
                    <Typography variant='subtitle1' color="GrayText" aria-label='project-period'>
                        2022년 11월
                    </Typography>
                </Box>

            </Box>
            {/* TITLE SECTION END */}

            <Divider sx={{ my: 2 }} />

            {/* IMAGE & DESCRIPTION SECTION START */}
            <Grid container spacing={2}>

                {/* IMAGE SECTION START */}
                <Grid xs={16} md={5.5}>
                    <Carousel
                        autoPlay={false}
                        next={(next, active) => {
                            console.log(`we left ${active}, and are now at ${next}`);
                        }}
                        prev={(prev, active) => {
                            console.log(`we left ${active}, and are now at ${prev}`);
                        }}
                        sx={{ width: "100%" }}
                    >
                        {images.map((item, i) => (
                            <Paper variant='outlined' sx={{ minHeight: 300, position: "relative" }}>
                                <img src={item.url} alt={item.label} style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, objectFit: "cover", borderRadius: "3px" }} loading="lazy" />
                            </Paper>
                        ))}
                    </Carousel>
                </Grid>
                {/* IMAGE SECTION END */}

                {/* SHORT DESCRIPTION START */}
                <Grid xs={16} md={6}>
                    <Typography aria-label='project-theme'>
                        현재 서비스중인 Airbnb를 클론 코딩한 프로젝트입니다.
                    </Typography>
                    <Typography mt={2} aria-label='project-outline'>
                        Next.js 프레임 워크 학습을 위해 진행했던 프로젝트이며 GoogleMaps, 주변 장소 검색 API와 Firebase Storage를 이용한 숙소 위치와 사진을 업로드하는 기능을 구현했습니다.
                    </Typography>
                </Grid>
                {/* SHORT DESCRIPTION END */}

                <Divider sx={{ my: 2, width: "100%" }} />

                {/* DETAIL DESCRIPTION START */}
                <Grid container spacing={2} >
                    <Grid xs={16} md={6} aria-label='project-main-function' sx={{ display: "block" }}>

                        {/* Project Main Functions */}
                        <Typography sx={{ fontWeight: 600 }}>
                            주요 기능
                        </Typography>
                        <Typography ml={2} sx={{}}>
                            NextAuth를 이용한 소셜 미디어 로그인, GoogleMaps를 이용한 위치 확인, 주변 장소 검색 API를 사용하여 숙소 위치 검색, 숙소 예약시 paypal로 결제하는 기능
                        </Typography>

                    </Grid>

                    <Grid xs={16} md={6} aria-label='project-etc'>

                        {/* GitHub URL */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <GitHubIcon />
                            GitHub
                        </Typography>
                        <Typography ml={2}>
                            깃헙 주소...
                        </Typography>

                        {/* Production URL */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <LinkIcon />
                            URL
                        </Typography>
                        <Typography ml={2}>
                            배포 주소...
                        </Typography>

                        {/* Frontend Stack */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <FlipToFrontIcon />
                            Frontend
                        </Typography>
                        <Typography ml={2}>
                            프론트엔드 사용 기술...
                        </Typography>

                        {/* Backend Stack */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <FlipToBackIcon />
                            Backend
                        </Typography>
                        <Typography ml={2}>
                            백엔드 사용 기술...
                        </Typography>

                        {/* Used Database */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <StorageIcon />
                            DB
                        </Typography>
                        <Typography ml={2}>
                            사용한 DB...
                        </Typography>

                        {/* Etc */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <MoreHorizIcon />
                            Etc
                        </Typography>
                        <Typography ml={2}>
                            Etc...
                        </Typography>

                    </Grid>
                </Grid>
                {/* DETAIL DESCRIPTION END */}

            </Grid>
            {/* IMAGE & DESCRIPTION SECTION END */}

            {/* OPEN PROJECT DETAIL MODAL */}
            <Button variant='outlined' fullWidth sx={{ mt: 3 }}
                onClick={() => setOpen(true)}
            >
                상세보기
            </Button>

            <DefaultDialog state={open} close={handleCloseModal} />
        </Paper >
    )
}