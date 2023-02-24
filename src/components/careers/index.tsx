import styles from './index.module.css';
import Box from '@mui/material/Box';
import { Avatar, Divider, Paper, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import TocContext from '../../contexts/toc-context';

export default function CareersComp() {
    const TocCtx = useContext(TocContext)!;
    const element = useRef<Element>(null);
    const [topPosition, setTopPosition] = useState<number>(0);

    // 디바운스 코드
    useEffect(() => {
        const timerId = setTimeout(() => {
            if (element.current) {
                setTopPosition(Math.floor(element.current?.getBoundingClientRect().bottom));
                // console.log(topPosition);
            }
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [element.current?.getBoundingClientRect().bottom]);

    useEffect(() => {
        if (!element.current) return;
        const rect = element.current.getBoundingClientRect();
        TocCtx.setPos((pos) => ({
            ...pos,
            [element.current?.id as string]: Math.floor(rect.top + window.scrollY),
        }));
    }, [TocCtx.setPos, topPosition])

    return (
        <Box className={styles.container} ref={element} id="Careers">
            <Typography component="h2" className={styles.typo_title} id='Careers'>
                Careers
            </Typography>

            <Stack spacing={2} sx={{ display: "flex", width: "100%", mt: 3 }}>
                <Grid container sx={{ width: "100%" }}>
                    <Grid xs={16} md={2} sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <Avatar src='/portfolio/logo/career_1.jpg' sx={{ width: "150px", height: "150px" }} />
                    </Grid>

                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    <Grid xs={16} md={9.5}>
                        <Box>
                            <Typography sx={{ fontWeight: 600, fontSize: 24 }}>
                                한국경영원 인재개발원
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 1 }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                                디지털 컨버전스 MERN 기반 Full Stack 개발자 양성과정
                            </Typography>
                            <Typography color="GrayText" sx={{ fontSize: 16 }}>
                                2022-06-07 ~ 2022-12-29 (900시간)
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <Typography>
                                국가직무능력표준(NCS) 기반 국가 기간 전략산업직종훈련
                            </Typography>

                            <Divider flexItem sx={{ my: 3 }} />

                            <Typography sx={{ fontWeight: 600, mb: 1 }}>
                                ▎MongoDB, Express, React, Node.js 기반 개발자 양성과정
                            </Typography>
                            <Typography component="li">
                                JavaScript 기반 프로그래밍 언어 활용, 개발 환경 구축
                            </Typography>
                            <Typography component="li">
                                Node.js 기반 서버 애플리케이션 구축, React 기반 Frontend 화면 구현
                            </Typography>
                            <Typography component="li">
                                MongoDB 기반 NoSQL 어플리케이션 구축
                            </Typography>
                            <Typography component="li">
                                안드로이드 기반 스마트 디바이스 App 구현
                            </Typography>
                            <Typography component="li">
                                MongoDB, Express, React, Node.js 기반 애플리케이션 테스트 및 배포
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                {/* <Paper sx={{ p: 1 }}>Paper 1</Paper> */}
                {/* <Paper sx={{ p: 1 }}>Paper 2</Paper> */}
                {/* <Paper sx={{ p: 1 }}>Paper 3</Paper> */}
            </Stack>
        </Box >
    )
}