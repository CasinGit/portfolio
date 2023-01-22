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
import { Box, Paper, Link, Backdrop, CircularProgress } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import type { imagesType } from './airbnb';
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

export default function AirbnbDialog(
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
                        Airbnb 클론 코딩
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box sx={{ display: "flex", px: 10, py: 3, flexDirection: "column", gap: 3, width: "100%", alignItems: "center" }}>
                <Box>
                    <Typography variant='h4'>
                        Airbnb 클론 코딩
                    </Typography>
                    <Typography variant='body2'>
                        개인 프로젝트 / 2022년 11월
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        현재 서비스중인 Airbnb 사이트를 Next.js 프레임 워크로 구현한 프로젝트
                    </Typography>
                </Box>
                <Box sx={{ width: "70%", textAlign: "center" }}>
                    <Typography>
                        Next.js 프레임 워크 학습을 위해 진행한 프로젝트이며 CSR, SSR 기술에 대해 배우고 파일 시스템 기반 라우팅 방법을 배울 수 있었던 개인 프로젝트이다.
                    </Typography>
                </Box>

                <Divider sx={{ width: "100%" }} />

                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "70%" }}>
                    <Typography variant='h5' mb={1}>
                        - 주요 기능 -
                    </Typography>
                    <Box>
                        <Typography component="li">
                            NextAuth를 이용한 소셜 미디어 로그인 기능 구현
                        </Typography>
                        <Typography component="li">
                            GoogleMaps와 Places API를 이용한 숙소 위치 검색 기능
                        </Typography>
                        <Typography component="li">
                            Firebase Storage를 사용하여 숙소 사진 업로드 구현
                        </Typography>
                        <Typography component="li">
                            Paypal Sandbox를 사용하여 숙소 예약, 결제 기능 구현
                        </Typography>
                        <Typography component="li">
                            내가 예약했던 숙소 리스트를 볼 수 있는 기능
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
                            Frontend : Next.js, TypeScript, Mui CSS
                        </Typography>
                        <Typography component="li">
                            Backend : -
                        </Typography>
                        <Typography component="li">
                            Database : MongoDB(MongoDB Atlas)
                        </Typography>
                        <Typography component="li">
                            Deployment : Firebase Storage, GoogleMaps + Places API, Paypal Sandbox, Vercel(배포)
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ width: "100%" }} />

                <Box sx={{ display: "flex", gap: 4 }}>
                    <Link href='https://github.com/CasinGit/airbnb-ts' target="_blank" sx={{ color: "black" }}>
                        <Typography gap={0.5} sx={{ display: "flex", fontWeight: 600 }}>
                            <GitHubIcon />
                            GitHub
                        </Typography>
                    </Link>
                    <Link href='https://casin-projects-clone.vercel.app' target="_blank" sx={{ color: "black" }}>
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