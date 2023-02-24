import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import styles from './index.module.css';
import ImageArea from './image-area';
import IntroductionArea from './introduction-area';
import { Avatar, Grow, SvgIconTypeMap } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import FaceIcon from '@mui/icons-material/Face';
import TodayIcon from '@mui/icons-material/Today';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TocContext from '../../contexts/toc-context';
import { OverridableComponent } from '@mui/material/OverridableComponent';

function DetailCard({ Show, Icon, Title, Caption, Time }:
    { Show: boolean, Icon: any, Title: string, Caption: string, Time: number }
) {
    return (
        <Grid xs={8} sm={6} md={4} sx={{ width: "100%" }}>
            <Grow
                in={Show}
                style={{ transformOrigin: '0 0 0', transitionDelay: Show ? `${Time}ms` : "0ms" }}
                {...(Show ? { timeout: 1000 } : {})}
            >
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Avatar>
                        <Icon />
                    </Avatar>
                    <Box>
                        <Typography sx={{ fontWeight: "bold", fontSize: 22 }}>
                            {Title}
                        </Typography>
                        <Typography sx={{ fontSize: 18, width: "max-content" }}>
                            {Caption}
                        </Typography>
                    </Box>
                </Box>
            </Grow>
        </Grid>
    )
}

export default function AboutMeComp() {
    const TocCtx = useContext(TocContext)!;
    const element = useRef<Element>(null);

    useEffect(() => {
        if (!element.current) return;
        const rect = element.current.getBoundingClientRect();
        TocCtx.setPos((pos) => ({
            ...pos,
            [element.current?.id as string]: Math.floor(rect.top + window.scrollY),
        }));
    }, [TocCtx.setPos])

    const [show, setShow] = useState<boolean>(false);
    useEffect(() => {
        const target = document.querySelector("#AboutMe-GrowAction");
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // entry.target.classList.add("fadeIn");
                    setShow(true);
                }
            })
        }
        const options = {};
        const myObserver = new IntersectionObserver(callback, options);
        myObserver.observe(target as Element);
    }, [])

    return (
        <Box className={styles.container} ref={element} id='AboutMe' >
            <Typography component="h2" className={styles.typo_title} id='AboutMe'>
                About Me
            </Typography>
            <Box className={styles.inContainer}>
                <Grid container spacing={4} id='AboutMe-GrowAction' >

                    <DetailCard Show={show} Icon={FaceIcon} Title="이름" Caption="김기협" Time={200} />
                    <DetailCard Show={show} Icon={TodayIcon} Title="생년월일" Caption="97.02.22" Time={300} />
                    <DetailCard Show={show} Icon={HomeIcon} Title="주소지" Caption="광주광역시 서구 금화로" Time={400} />
                    <DetailCard Show={show} Icon={PhoneIcon} Title="연락처" Caption="010-9090-1061" Time={500} />
                    <DetailCard Show={show} Icon={EmailIcon} Title="이메일" Caption="kkig30@gmail.com" Time={600} />

                </Grid>
            </Box>
        </Box>
    )
}