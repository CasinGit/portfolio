import styles from './index.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skill from './skill';
import { Fade, ImageList, ImageListItem } from '@mui/material';
import TocContext from '../../contexts/toc-context';
import { useContext, useEffect, useRef, useState } from 'react';
import Masonry from '@mui/lab/Masonry';

export type skillType = { title: string, imgUrl: string };
type skillsType = {
    language: Array<skillType>;
    os: Array<skillType>;
    frame_lib: Array<skillType>;
    db: Array<skillType>;
    ide: Array<skillType>;
    etc: Array<skillType>;
}
const skills: skillsType = {
    language: [
        { title: "HTML5", imgUrl: "/portfolio/logo/HTML5_Logo.svg" },
        { title: "CSS3", imgUrl: "/portfolio/logo/CSS3_Logo.svg" },
        { title: "JavaScript", imgUrl: "/portfolio/logo/Javascript_Logo.svg" },
        { title: "TypeScript", imgUrl: "/portfolio/logo/Typescript_Logo.svg" },
        { title: "VB.NET", imgUrl: "/portfolio/logo/VB_NET.png" },
    ],
    os: [
        { title: "Linux", imgUrl: "/portfolio/logo/Linux_Logo.png" },
        { title: "WindowsServer", imgUrl: "/portfolio/logo/WindowsServer.png" },
    ],
    frame_lib: [
        { title: "Express.js", imgUrl: "/portfolio/logo/express.png" },
        { title: "React", imgUrl: "/portfolio/logo/React.png" },
        { title: "ReactNative", imgUrl: "/portfolio/logo/React_native.png" },
        { title: "Next.js", imgUrl: "/portfolio/logo/Nextjs-logo.svg" },
        { title: "Redux", imgUrl: "/portfolio/logo/Redux.png" },
        { title: "Axios", imgUrl: "/portfolio/logo/axios.svg" },
    ],
    db: [
        { title: "MongoDB", imgUrl: "/portfolio/logo/mongoDB.svg" },
        { title: "MySQL", imgUrl: "/portfolio/logo/mySQL.svg" },
        { title: "MsSQL", imgUrl: "/portfolio/logo/msSQL.png" },
    ],
    ide: [
        { title: "Eclipse", imgUrl: "/portfolio/logo/eclipse.svg" },
        { title: "VisualStudio", imgUrl: "/portfolio/logo/VS.svg" },
        { title: "VisualStudioCode", imgUrl: "/portfolio/logo/VSC.svg" },
    ],
    etc: [
        { title: "Excel", imgUrl: "/portfolio/logo/excel.svg" },
        { title: "GitHub", imgUrl: "/portfolio/logo/GitHub_Logo.png" },
        { title: "Firebase", imgUrl: "/portfolio/logo/Firebase.svg" },
        { title: "AmazonAWS", imgUrl: "/portfolio/logo/aws.svg" },
        { title: "GCP", imgUrl: "/portfolio/logo/GCP.svg" },
    ]
}

function SkillCard({ show, header, item, delay }:
    { show: boolean, header: string, item: Array<skillType>, delay: number }
) {
    return (
        <Fade in={show} style={{ transitionDelay: show ? `${delay}ms` : "0ms" }}
            {...(show ? { timeout: 1000 } : {})}
        >
            <Box>
                <ImageListItem sx={{ overflow: "inherit" }}>
                    <Skill item={item} header={header} />
                </ImageListItem>
            </Box>
        </Fade>
    )
}

export default function SkillsComp() {
    const TocCtx = useContext(TocContext)!;
    const element = useRef<Element>(null);

    useEffect(() => {
        if (!element.current) return;
        const rect = element.current.getBoundingClientRect();
        // console.log(rect.top, window.scrollY);
        TocCtx.setPos((pos) => ({
            ...pos,
            [element.current?.id as string]: Math.floor(rect.top + window.scrollY),
        }));
    }, [TocCtx.setPos, element.current?.getBoundingClientRect().height])

    const [show, setShow] = useState<boolean>(false);
    useEffect(() => {
        const target = document.querySelector("#Skills-FadeAction");
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
        <Box className={styles.container} ref={element} id="Skills">
            <Typography component="h2" className={styles.typo_title} id='Skills'>
                Skill Stack
            </Typography>
            <Box className={styles.inContainer} id='Skills-FadeAction'>
                <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
                    <SkillCard show={show} header='언어' item={skills.language} delay={200} />
                    <SkillCard show={show} header='프레임워크 + 라이브러리' item={skills.frame_lib} delay={300} />
                    <SkillCard show={show} header='DB' item={skills.db} delay={400} />
                    <SkillCard show={show} header='OS' item={skills.os} delay={500} />
                    <SkillCard show={show} header='IDE' item={skills.ide} delay={600} />
                    <SkillCard show={show} header='ETC' item={skills.etc} delay={700} />
                </Masonry>
            </Box>
        </Box>
    )
}