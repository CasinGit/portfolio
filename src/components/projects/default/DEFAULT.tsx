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
import DefaultDialog from './default-dialog';

//! 프로젝트 이미지 리스트
export type imagesType = Array<{ url: string, label: string }>
const images: imagesType = [
    {
        url: "/portfolio/projects/test/1_img.png",
        label: "1"
    }, {
        url: "/portfolio/projects/test/2_img.png",
        label: "2"
    }, {
        url: "/portfolio/projects/test/3_img.png",
        label: "3"
    }, {
        url: "/portfolio/projects/test/4_img.png",
        label: "4"
    }, {
        url: "/portfolio/projects/test/5_img.png",
        label: "5"
    },
];

export default function ProjectDefault() {
    const [open, setOpen] = useState<boolean>(false);
    const handleCloseModal = () => setOpen(false);

    return (
        <Paper className={styles.inContainer} variant='outlined' sx={{ p: 2 }}>

            {/* TITLE SECTION START */}
            <Box display="flex" sx={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                {/* Project Main Title */}
                <Typography variant='h5' fontWeight={600} aria-label='project-name'>
                    프로젝트 제목
                </Typography>
                <Box display="flex" gap={1}>

                    {/* Project Type */}
                    <Typography variant='subtitle1' aria-label='project-type'>
                        개인 프로젝트 or 팀 프로젝트
                    </Typography>
                    /

                    {/* Project Period */}
                    <Typography variant='subtitle1' color="GrayText" aria-label='project-period'>
                        20**년 *월 ~ 20**년 *월
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
                            프로젝트 간단 설명
                        </Typography>
                        <Typography mt={2} aria-label='project-outline'>
                            프로젝트 상세 설명
                        </Typography>
                    </Box>
                    <Box aria-label='project-main-function' sx={{ mt: 3 }}>
                        {/* Project Main Functions */}
                        <Typography sx={{ fontWeight: 600 }}>
                            주요 기능
                        </Typography>
                        <Typography ml={1} component="li">
                            프로젝트 주요 기능 1
                        </Typography>
                        <Typography ml={1} component="li">
                            프로젝트 주요 기능 2
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
                            <Link href='#' target="_blank" sx={{ color: "#0d6efd !important" }}>
                                Github URL
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
                                Project URL
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
                            프론트엔드 사용 기술
                        </Typography>
                    </Grid>

                    {/* Backend Stack */}
                    <Grid xs={16} md={6} aria-label='project-backend'>
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <FlipToBackIcon />
                            Backend
                        </Typography>
                        <Typography ml={2}>
                            백엔드 사용 기술
                        </Typography>
                    </Grid>

                    {/* Used Database */}
                    <Grid xs={16} md={6} aria-label='project-db'>
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <StorageIcon />
                            DB
                        </Typography>
                        <Typography ml={2}>
                            DB 사용 기술
                        </Typography>
                    </Grid>

                    {/* Etc */}
                    <Grid xs={16} md={6} aria-label='project-etc'>
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <MoreHorizIcon />
                            Etc
                        </Typography>
                        <Typography ml={2}>
                            기타 사용 기술
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
            <DefaultDialog state={open} close={handleCloseModal} images={images} />
            {/********** DO NOT CHANGE THIS SECTION! **********/}

        </Paper >
    )
}