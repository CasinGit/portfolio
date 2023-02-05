import styles from '../index.module.css';
import { Box, Button, Divider, Link, Paper, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import FlipToBackIcon from '@mui/icons-material/FlipToBack';
import StorageIcon from '@mui/icons-material/Storage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import AirbnbDialog from './airbnb-dialog';

//! 프로젝트 이미지 리스트
export type imagesType = Array<{ url: string, label: string }>
const images: imagesType = [
    {
        url: "/projects/airbnb/1_main.png",
        label: "1_main"
    }, {
        url: "/projects/airbnb/2_login.png",
        label: "2_login"
    }, {
        url: "/projects/airbnb/3_google_login.png",
        label: "3_google_login"
    }, {
        url: "/projects/airbnb/4_social_login_link.png",
        label: "4_social_login_link"
    }, {
        url: "/projects/airbnb/5_host_map_search.png",
        label: "5_host_map_search"
    }, {
        url: "/projects/airbnb/6_host_map_detail.png",
        label: "6_host_map_detail"
    }, {
        url: "/projects/airbnb/7_host_photos.png",
        label: "7_host_photos"
    }, {
        url: "/projects/airbnb/8_room_page.png",
        label: "8_room_page"
    }, {
        url: "/projects/airbnb/9_booking_page.png",
        label: "9_booking_page"
    }, {
        url: "/projects/airbnb/10_booking_paypal.png",
        label: "10_booking_paypal"
    }, {
        url: "/projects/airbnb/11_booking_confirm.png",
        label: "11_booking_confirm"
    },
];

export default function ProjectAirbnb() {
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
            <Grid container spacing={2} sx={{ width: "100%" }} >

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
                            <Paper variant='outlined' sx={{ minHeight: 300, position: "relative" }} key={i}>
                                <img src={item.url} alt={item.label} style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, objectFit: "contain", borderRadius: "3px" }} loading="lazy" />
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
                        <Typography ml={1} component="li">
                            NextAuth를 이용한 소셜 미디어 로그인
                        </Typography>
                        <Typography ml={1} component="li">
                            GoogleMaps와 Places API를 이용한 숙소 위치 찾기
                        </Typography>
                        <Typography ml={1} component="li">
                            PayPal Sandbox에서 숙소 예약 결제하는 기능
                        </Typography>
                        <Typography ml={1} component="li">
                            내가 예약한 숙소 리스트 보는 기능
                        </Typography>
                    </Grid>

                    <Grid xs={16} md={6} aria-label='project-etc'>

                        {/* GitHub URL */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <GitHubIcon />
                            GitHub
                        </Typography>
                        <Typography ml={2}>
                            <Link href='https://github.com/CasinGit/airbnb-ts' target="_blank" sx={{ color: "#0d6efd !important" }}>
                                github.com/CasinGit/airbnb-ts
                            </Link>
                            <Typography variant='caption' ml={0.5}>
                                (새창에서 열기)
                            </Typography>
                        </Typography>

                        {/* Production URL */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <LinkIcon />
                            URL
                        </Typography>
                        <Typography ml={2}>
                            <Link href='https://casin-projects-clone.vercel.app' target="_blank" sx={{ color: "#0d6efd !important" }}>
                                casin-projects-clone.vercel.app
                            </Link>
                            <Typography variant='caption' ml={0.5}>
                                (새창에서 열기)
                            </Typography>
                        </Typography>

                        {/* Frontend Stack */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <FlipToFrontIcon />
                            Frontend
                        </Typography>
                        <Typography ml={2}>
                            Next.js, TypeScript, Mui CSS
                        </Typography>

                        {/* Backend Stack */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <FlipToBackIcon />
                            Backend
                        </Typography>
                        <Typography ml={2}>
                            Next.js
                        </Typography>

                        {/* Used Database */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <StorageIcon />
                            DB
                        </Typography>
                        <Typography ml={2}>
                            MongoDB(+Mongoose)
                        </Typography>

                        {/* Etc */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <MoreHorizIcon />
                            Etc
                        </Typography>
                        <Typography ml={2}>
                            Vercel(배포), Firebase Storage, GoogleMaps(+Places API), PayPal Sandbox
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

            <AirbnbDialog state={open} close={handleCloseModal} images={images} />
        </Paper >
    )
}