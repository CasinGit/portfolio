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
import SmartFactoryDialog from './smart_factory-dialog';

//! 프로젝트 이미지 리스트
export type imagesType = Array<{ url: string, label: string }>
const images: imagesType = [
    {
        url: "/portfolio/projects/smartfactory/1_server.png",
        label: "1_server"
    }, {
        url: "/portfolio/projects/smartfactory/2_replace_part_main.png",
        label: "2_replace_part_main"
    }, {
        url: "/portfolio/projects/smartfactory/3_replace_part_edit.png",
        label: "3_replace_part_edit"
    }, {
        url: "/portfolio/projects/smartfactory/4_production_plan_main.png",
        label: "4_production_plan_main"
    }, {
        url: "/portfolio/projects/smartfactory/5_production_plan_history.png",
        label: "5_production_plan_history"
    }, {
        url: "/portfolio/projects/smartfactory/6_materials_management.png",
        label: "6_materials_management"
    }, {
        url: "/portfolio/projects/smartfactory/7_materials_management_inout.png",
        label: "7_materials_management_inout"
    },
];

export default function ProjectSmartFactory() {
    const [open, setOpen] = useState<boolean>(false);
    const handleCloseModal = () => setOpen(false);

    return (
        <Paper className={styles.inContainer} variant='outlined' sx={{ p: 2 }}>

            {/* TITLE SECTION START */}
            <Box display="flex" sx={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                {/* Project Main Title */}
                <Typography variant='h5' fontWeight={600} aria-label='project-name'>
                    ERP + 생산 라인 계획 편성 프로그램
                </Typography>
                <Box display="flex" gap={1}>

                    {/* Project Type */}
                    <Typography variant='subtitle1' aria-label='project-type'>
                        개인 프로젝트
                    </Typography>
                    /

                    {/* Project Period */}
                    <Typography variant='subtitle1' color="GrayText" aria-label='project-period'>
                        2019년 7월 ~ 2020년 4월
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
                        생산 라인 계획 편성 기능과 자재 오삽입 방지 기능 + ERP 시스템을 연동한 생산 라인 통합 관리 프로그램을 만들었으며
                    </Typography>
                    <Typography aria-label='project-outline'>
                        VB.NET 언어를 사용해 TCP/IP 소켓 통신 방식으로 서버와 클라이언트를 분리하여 구현하였음.
                    </Typography>
                </Grid>
                {/* SHORT DESCRIPTION END */}

                <Divider sx={{ my: 2, width: "100%" }} />

                {/* DETAIL DESCRIPTION START */}
                <Grid container spacing={2} sx={{ width: "100%" }} >
                    <Grid xs={16} md={6} aria-label='project-main-function' sx={{ display: "block" }}>

                        {/* Project Main Functions */}
                        <Typography sx={{ fontWeight: 600 }}>
                            주요 기능
                        </Typography>
                        <Typography ml={1} component="li">
                            라인 계획 작성과 수정을 실시간으로 라인에 반영
                        </Typography>
                        <Typography ml={1} component="li">
                            자재 오삽입 방지와 LotNo 관리를 위해 바코드를 이용하여 검증, 이력 관리
                        </Typography>
                        <Typography ml={1} component="li">
                            라인 작업자가 자재를 교체할 시 전산에 등록된 자재의 남은 수량을 자동 차감
                        </Typography>
                        <Typography ml={1} component="li">
                            직책에 따라 개별적으로 부여된 바코드를 사용하여 권한별로 중요 기능 제한
                        </Typography>
                        <Typography ml={1} component="li">
                            전산에 등록된 자재 보유량과 현재 계획의 총 필요 자재들을 비교하여 부족한 자재들을 확인하고 발주를 낼 수 있는 기능
                        </Typography>
                        <Typography ml={1} component="li">
                            전산 관리를 위해 DB CRUD가 가능한 프로그램을 별도로 구현
                        </Typography>
                        <Typography ml={1} component="li">
                            프로그램에 새로운 버전이 있을 때 프로그램 실행 또는 사용 중일 때 자동으로 업데이트하는 기능
                        </Typography>
                    </Grid>

                    <Grid xs={16} md={6} aria-label='project-etc'>

                        {/* GitHub URL */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600 }}>
                            <GitHubIcon />
                            GitHub
                        </Typography>
                        <Typography ml={2}>
                            {/* <Link href='#' target="_blank" sx={{ color: "#0d6efd !important" }}>
                                GitHub 비공개
                            </Link> */}
                            <Typography variant='caption' ml={0.5} sx={{ color: "red" }}>
                                LG 협력사 관련 정보 공개 불가
                            </Typography>
                        </Typography>

                        {/* Production URL */}
                        {/* <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <LinkIcon />
                            URL
                        </Typography>
                        <Typography ml={2}>
                            <Link href='#' target="_blank" sx={{ color: "#0d6efd !important" }}>

                            </Link>
                            <Typography variant='caption' ml={0.5}>
                                (새창에서 열기)
                            </Typography>
                        </Typography> */}

                        {/* Language Stack */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <FlipToBackIcon />
                            Language
                        </Typography>
                        <Typography ml={2}>
                            VB.NET(Framework 4.6.1)
                        </Typography>

                        {/* Used Database */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <StorageIcon />
                            DB
                        </Typography>
                        <Typography ml={2}>
                            MsSQL
                        </Typography>

                        {/* Etc */}
                        <Typography gap={1} sx={{ display: "flex", fontWeight: 600, mt: 1 }}>
                            <MoreHorizIcon />
                            Etc
                        </Typography>
                        <Typography ml={2}>
                            TCP/IP, Excel
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

            <SmartFactoryDialog state={open} close={handleCloseModal} images={images} />
        </Paper >
    )
}