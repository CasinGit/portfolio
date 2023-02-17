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
import type { imagesType } from './smart_factory';
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

export default function SmartFactoryDialog(
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
                        스마트 팩토리 프로젝트
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* TITLE SECTION END */}

            {/* IMAGE & DESCRIPTION SECTION START */}
            <Box sx={{ display: "flex", px: { xs: 5, sm: 7, md: 10 }, py: 3, flexDirection: "column", gap: 3, width: "100%", alignItems: "center" }}>
                <Box>
                    {/* Project Main Title */}
                    <Typography variant='h4'>
                        스마트 팩토리 프로젝트
                    </Typography>
                    {/* Project Type, Period */}
                    <Typography variant='body2'>
                        개인 프로젝트 / 2019년 7월 ~ 2020년 4월
                    </Typography>
                </Box>

                {/* PROJECT DESCRIPTION START */}
                <Box sx={{ width: { xs: "90%", sm: "85%", md: "80%" } }}>
                    <Typography>
                        생산 계획 편성, 자재 교체 이력 관리와 자재 입출고 관리를 위한 ERP 시스템을 VB.NET 언어로 구현한 프로그램
                    </Typography>
                </Box>
                <Box sx={{ width: { xs: "90%", sm: "85%", md: "80%" } }} >
                    <Typography>
                        이전에 다니던 회사에서 자재를 교체할 때마다 수기로 작성하는 업무의 효율 개선을 위해서 자재 교체 이력 관리 프로그램을 만들었고
                    </Typography>
                    <Typography>
                        그 뒤로 라인 담당자와 미팅을 통해 실시간 계획 편성 기능, 생산 이력 작성, BOM 차이점 비교, 자재 입/출고 관리를 하는 ERP 시스템을 추가적으로 구현
                    </Typography>
                    <Typography variant='body2' sx={{ color: "red" }}>
                        (회사 내에서 자체 개발한 프로그램으로 다른 협력사는 관련 없음)
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
                            라인의 생산 계획 작성과 수정을 실시간으로 반영
                        </Typography>
                        <Typography component="li">
                            자재 오삽입 방지와 LotNo 관리를 위해 자재에 부착된 바코드를 이용하여 검증하고 이력을 관리
                        </Typography>
                        <Typography component="li">
                            작업자가 자재를 교체할 시 전산에 등록된 자재의 남은 수량을 자동으로 차감
                        </Typography>
                        <Typography component="li">
                            하루에 한 번씩 자재 교체 이력을 저장/초기화해서 일별 이력 관리
                        </Typography>
                        <Typography component="li">
                            직책에 따라 부여된 바코드를 사용하여 권한별로 기능을 제한
                        </Typography>
                        <Typography component="li">
                            전산에 등록된 자재 보유량과 현재 계획의 총 필요한 자재 수량을 확인하고 발주를 낼 수 있는 기능
                        </Typography>
                        <Typography component="li">
                            TCP Keepalive 기술을 적용하여 서버에 연결된 세션이 살아있는지 주기적으로 확인
                        </Typography>
                        <Typography component="li">
                            프로그램이 새로운 버전이 있을 때 프로그램 실행 또는 사용 중일 때 자동으로 업데이트
                        </Typography>
                        <Typography variant='body2' sx={{ color: "red" }}>
                            (등등 여러가지 기능이 있지만 핵심 기능만 기재)
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
                            Language : VB.NET(Framework version 4.6.1)
                        </Typography>
                        <Typography component="li">
                            Database : MsSQL
                        </Typography>
                        <Typography component="li">
                            Etc : TCP/IP, Excel
                        </Typography>
                    </Box>
                </Box>
                {/* PROJECT SKILL STACK END */}

                <Divider sx={{ width: "100%" }} />

                {/* PROJECT URL START */}
                <Box sx={{ display: "flex", gap: 4 }}>
                    <Typography variant='caption' ml={0.5} sx={{ color: "red" }}>
                        LG 협력사 관련 정보 공개 불가
                    </Typography>
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