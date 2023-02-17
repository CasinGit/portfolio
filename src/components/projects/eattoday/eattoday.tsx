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
import EatTodayDialog from './eattoday-dialog';

//! 프로젝트 이미지 리스트
export type imagesType = Array<{ url: string, label: string }>
const images: imagesType = [
    {
        url: "/portfolio/projects/eattoday/1_splash.png",
        label: "1_splash"
    }, {
        url: "/portfolio/projects/eattoday/2_main.png",
        label: "2_main"
    }, {
        url: "/portfolio/projects/eattoday/3_store_search.png",
        label: "3_store_search"
    }, {
        url: "/portfolio/projects/eattoday/4_login.png",
        label: "4_login"
    }, {
        url: "/portfolio/projects/eattoday/5_store_info.png",
        label: "5_store_info"
    }, {
        url: "/portfolio/projects/eattoday/6_store_reservation.png",
        label: "6_store_reservation"
    }, {
        url: "/portfolio/projects/eattoday/7_store_history.png",
        label: "7_store_history"
    }, {
        url: "/portfolio/projects/eattoday/8_store_review.png",
        label: "8_store_review"
    },
];

export default function ProjectEatToday() {
    const [open, setOpen] = useState<boolean>(false);
    const handleCloseModal = () => setOpen(false);

    return (
        <Paper className={styles.inContainer} variant='outlined' sx={{ p: 2 }}>

            {/* TITLE SECTION START */}
            <Box display="flex" sx={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                {/* Project Main Title */}
                <Typography variant='h5' fontWeight={600} aria-label='project-name'>
                    오늘 뭐 먹지?
                </Typography>
                <Box display="flex" gap={1}>

                    {/* Project Type */}
                    <Typography variant='subtitle1' aria-label='project-type'>
                        팀 프로젝트
                    </Typography>
                    /

                    {/* Project Period */}
                    <Typography variant='subtitle1' color="GrayText" aria-label='project-period'>
                        2022년 10월
                    </Typography>
                </Box>

            </Box>
            {/* TITLE SECTION END */}

            <Divider sx={{ my: 2 }} />

            {/* IMAGE & DESCRIPTION SECTION START */}
            <Grid container sx={{ width: "100%" }} >

                {/* IMAGE SECTION START */}
                <Grid xs={16} md={5} sx={{ mr: 2 }}>
                    <Carousel
                        autoPlay={false}
                        next={(next, active) => {
                            // console.log(`we left ${active}, and are now at ${next}`);
                        }}
                        prev={(prev, active) => {
                            // console.log(`we left ${active}, and are now at ${prev}`);
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
                <Grid xs={16} md={6.75}>
                    <Box>
                        <Typography aria-label='project-theme'>
                            광주에 있는 맛집 정보를 찾아보고 방문 예약을 할 수 있는 서비스를 React Native를 사용하여 안드로이드 어플리케이션으로 구현
                        </Typography>
                        <Typography mt={2} aria-label='project-outline'>
                            프로젝트의 Backend 서버를 Node.js의 Express를 사용하여 RESTful API 통신 요청 응답 구현을 메인으로 담당하였으며 프로젝트 완성 날짜를 맞추기 위해서 Frontend 개발도 다수 참여하였음.
                        </Typography>
                    </Box>
                    <Box aria-label='project-main-function' sx={{ mt: 2 }}>
                        {/* Project Main Functions */}
                        <Typography sx={{ fontWeight: 600 }}>
                            주요 기능
                        </Typography>
                        <Typography ml={1} component="li">
                            광주광역시 동구에서 제공하는 Open API를 이용하여 가게 정보 불러오기
                        </Typography>
                        <Typography ml={1} component="li">
                            사용자 계정과 판매자 계정을 분리하여 차별화된 기능을 제공
                        </Typography>
                        <Typography ml={1} component="li">
                            이용했던 가게에 리뷰와 별점을 남기고 다른 사용자가 작성한 리뷰를 볼 수 있는 기능
                        </Typography>
                    </Box>
                </Grid>
                {/* SHORT DESCRIPTION END */}

                <Divider sx={{ my: 2, width: "100%" }} />

                {/* DETAIL DESCRIPTION START */}
                <Grid container sx={{ width: "100%" }} rowSpacing={1}>

                    {/* GitHub URL */}
                    <Grid xs={16} md={6} aria-label='project-github'>
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <GitHubIcon />
                            GitHub
                        </Typography>
                        <Typography ml={2} sx={{ display: "flex", flexDirection: "column" }}>
                            <Link href='https://github.com/CasinGit/WhatEatToday' target="_blank" sx={{ color: "#0d6efd !important" }}>
                                github.com/CasinGit/WhatEatToday
                            </Link>
                            <Typography variant='caption' ml={0.5}>
                                (새창에서 열기)
                            </Typography>
                        </Typography>
                    </Grid>

                    {/* Production URL */}
                    <Grid xs={16} md={6} aria-label='project-url'>
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <LinkIcon />
                            URL
                        </Typography>
                        <Typography ml={2} sx={{ display: "flex", flexDirection: "column" }}>
                            <Link href='#' target="_blank" sx={{ color: "#0d6efd !important" }}>
                                {/* casin-projects-clone.vercel.app */}
                            </Link>
                            <Typography variant='caption' ml={0.5}>
                                (새창에서 열기)
                            </Typography>
                        </Typography>
                    </Grid>

                    {/* Frontend Stack */}
                    <Grid xs={16} md={6} aria-label='project-frontend'>
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <FlipToFrontIcon />
                            Frontend
                        </Typography>
                        <Typography ml={2}>
                            React Native
                        </Typography>
                    </Grid>

                    {/* Backend Stack */}
                    <Grid xs={16} md={6} aria-label='project-backend'>
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <FlipToBackIcon />
                            Backend
                        </Typography>
                        <Typography ml={2}>
                            Node.js, Express
                        </Typography>
                    </Grid>

                    {/* Used Database */}
                    <Grid xs={16} md={6} aria-label='project-db'>
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <StorageIcon />
                            DB
                        </Typography>
                        <Typography ml={2}>
                            MongoDB(Mongoose)
                        </Typography>
                    </Grid>

                    {/* Etc */}
                    <Grid xs={16} md={6} aria-label='project-etc'>
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <MoreHorizIcon />
                            Etc
                        </Typography>
                        <Typography ml={2}>
                            Expo(배포)
                        </Typography>
                    </Grid>

                </Grid>
                {/* DETAIL DESCRIPTION END */}

            </Grid>
            {/* IMAGE & DESCRIPTION SECTION END */}

            {/********** DO NOT CHANGE THIS SECTION! **********/}
            {/* OPEN PROJECT DETAIL MODAL BUTTON */}
            <Button variant='outlined' fullWidth sx={{ mt: 3 }}
                onClick={() => setOpen(true)}
            >
                상세보기
            </Button>

            {/* PROJECT DETAIL MODAL */}
            <EatTodayDialog state={open} close={handleCloseModal} images={images} />
            {/********** DO NOT CHANGE THIS SECTION! **********/}

        </Paper >
    )
}