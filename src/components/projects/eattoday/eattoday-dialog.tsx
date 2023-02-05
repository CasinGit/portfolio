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
import { Box, Paper, Link, Backdrop } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import type { imagesType } from './eattoday';
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

export default function EatTodayDialog(
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
            <AppBar sx={{ position: 'relative', backgroundColor: "#222222" }}>
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
                        오늘 뭐 먹지?
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box sx={{ display: "flex", px: 10, py: 3, flexDirection: "column", gap: 3, width: "100%", alignItems: "center" }}>
                <Box>
                    <Typography variant='h4'>
                        오늘 뭐 먹지?
                    </Typography>
                    <Typography variant='body2'>
                        팀 프로젝트 / 2022년 10월
                    </Typography>
                </Box>
                <Box sx={{ width: "70%" }}>
                    <Typography>
                        광주에 있는 맛집 정보를 찾아보고 방문 예약을 할 수 있는 서비스를 React Native를 사용하여 안드로이드 어플리케이션으로 구현
                    </Typography>
                </Box>
                <Box sx={{ width: "70%" }}>
                    <Typography>
                        현재 서비스중인 배달의 민족 어플에서 아이디어를 얻어서 가게 예약 시스템을 구현하기로 결정하게 되었음.
                    </Typography>
                    <Typography>
                        프로젝트에서 Backend 개발을 담당하고 RESTful API 요청 응답을 중점으로 구현하였으며 API 명세서가 필요한 이유를 알게되었으며 작성 방법을 배우고 Frontend 개발자와의 소통방법이나 업무 진행사항을 어떻게 공유해야하는지 조금이나마 배울 수 있게 되었고
                    </Typography>
                    <Typography>
                        Github에서 팀 프로젝트를 진행할때 어떤식으로 작업을 해야하는기 감을 잡는 계기가 되었고 모바일 어플리케이션 개발에 대한 기본적인 지식을 배우게 되는 좋은 기회가 되었습니다.
                    </Typography>
                </Box>

                <Divider sx={{ width: "100%" }} />

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "70%" }}>
                    <Typography variant='h5' mb={1}>
                        - 주요 기능 -
                    </Typography>
                    <Box>
                        <Typography component="li">
                            Open API를 이용하여 가게 정보를 가져오고 핸드폰에 기본적으로 내장된 Map 어플을 이용하여 출력
                        </Typography>
                        <Typography component="li">
                            사용자 계정과 판매자 계정을 분리하여 사용자에 따른 차별화된 기능을 제공
                        </Typography>
                        <Typography component="li">
                            이용했던 가게에 리뷰와 별점을 남길 수 있고 다른 사용자가 작성한 리뷰를 보고 리뷰 별점 평균을 볼 수 있는 기능
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ width: "100%" }} />

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, width: "70%" }}>
                    <Typography variant='h5'>
                        - 사용 기술 -
                    </Typography>
                    <Box>
                        <Typography component="li">
                            Frontend : React Native
                        </Typography>
                        <Typography component="li">
                            Backend : Node.js, Express
                        </Typography>
                        <Typography component="li">
                            Database : MongoDB(MongoDB Atlas)
                        </Typography>
                        <Typography component="li">
                            Deployment : Expo(배포)
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ width: "100%" }} />

                <Box sx={{ display: "flex", gap: 4 }}>
                    <Link href='https://github.com/CasinGit/WhatEatToday' target="_blank" sx={{ color: "black" }}>
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

                <Divider sx={{ width: "100%" }} />

                <Box>
                    <ImageList cols={2} gap={8} sx={{ width: "90vh", p: 1 }}>
                        {images.map((item, i) => (
                            <ImageListItem key={item.label} >
                                <Paper onClick={() => {
                                    handleOpen(item.url)
                                }}
                                    sx={{
                                        minHeight: 300, width: "auto", position: "relative",
                                        ":hover": { boxShadow: "2px 2px 5px 1px" }
                                    }}
                                    key={i}
                                >
                                    <img src={item.url} alt={item.label} style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, objectFit: "contain", borderRadius: "3px" }} loading="lazy" />
                                </Paper>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>

            </Box>
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