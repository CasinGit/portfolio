import styles from './index.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skill from './skill';
import { Fade, ImageList, ImageListItem } from '@mui/material';
import TocContext from '../../contexts/toc-context';
import { useContext, useEffect, useRef, useState } from 'react';

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
        { title: "HTML5", imgUrl: "/logo/HTML5_Logo.svg" },
        { title: "CSS3", imgUrl: "/logo/CSS3_Logo.svg" },
        { title: "JavaScript", imgUrl: "/logo/Javascript_Logo.svg" },
        { title: "TypeScript", imgUrl: "/logo/Typescript_Logo.svg" },
        { title: "VB.NET", imgUrl: "/logo/VB_NET.png" },
    ],
    os: [
        { title: "Linux", imgUrl: "/logo/Linux_Logo.png" },
        { title: "WindowsServer", imgUrl: "/logo/WindowsServer.png" },
    ],
    frame_lib: [
        { title: "Express.js", imgUrl: "/logo/express.png" },
        { title: "React", imgUrl: "/logo/_React.png" },
        { title: "ReactNative", imgUrl: "/logo/React_native.png" },
        { title: "Next.js", imgUrl: "/logo/Nextjs-logo.svg" },
        { title: "Redux", imgUrl: "/logo/Redux.png" },
        { title: "Axios", imgUrl: "/logo/axios.svg" },
    ],
    db: [
        { title: "MongoDB", imgUrl: "/logo/mongoDB.svg" },
        { title: "MySQL", imgUrl: "/logo/mySQL.svg" },
        { title: "MsSQL", imgUrl: "/logo/msSQL.png" },
    ],
    ide: [
        { title: "Eclipse", imgUrl: "/logo/eclipse.svg" },
        { title: "VisualStudio", imgUrl: "/logo/VS.svg" },
        { title: "VisualStudioCode", imgUrl: "/logo/VSC.svg" },
    ],
    etc: [
        { title: "Excel", imgUrl: "/logo/excel.svg" },
        { title: "GitHub", imgUrl: "/logo/GitHub_Logo.png" },
        { title: "Firebase", imgUrl: "/logo/Firebase.svg" },
        { title: "AmazonAWS", imgUrl: "/logo/aws.svg" },
        { title: "GCP", imgUrl: "/logo/GCP.svg" },
    ]
}

export default function SkillsComp() {
    const TocCtx = useContext(TocContext)!;
    const element = useRef<Element>(null);

    useEffect(() => {
        if (!element.current) return;
        const rect = element.current.getBoundingClientRect();
        console.log(rect.top, window.scrollY);
        TocCtx.setPos((pos) => ({
            ...pos,
            [element.current?.id as string]: rect.top + window.scrollY,
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
                Skills
            </Typography>
            <Box className={styles.inContainer} id='Skills-FadeAction'>
                <ImageList variant="masonry" cols={3} gap={10}>
                    <Fade in={show} style={{ transitionDelay: show ? "200ms" : "0ms" }}
                        {...(show ? { timeout: 1000 } : {})}
                    >
                        <ImageListItem sx={{ overflow: "auto" }}>
                            <Skill item={skills.language} header="언어" />
                        </ImageListItem>
                    </Fade>
                    <Fade in={show} style={{ transitionDelay: show ? "300ms" : "0ms" }}
                        {...(show ? { timeout: 1000 } : {})}
                    >
                        <ImageListItem sx={{ overflow: "auto" }}>
                            <Skill item={skills.os} header="OS" />
                        </ImageListItem>
                    </Fade>
                    <Fade in={show} style={{ transitionDelay: show ? "400ms" : "0ms" }}
                        {...(show ? { timeout: 1000 } : {})}
                    >
                        <ImageListItem sx={{ overflow: "auto" }}>
                            <Skill item={skills.frame_lib} header="프레임워크 + 라이브러리" />
                        </ImageListItem>
                    </Fade>
                    <Fade in={show} style={{ transitionDelay: show ? "500ms" : "0ms" }}
                        {...(show ? { timeout: 1000 } : {})}
                    >
                        <ImageListItem sx={{ overflow: "auto" }}>
                            <Skill item={skills.db} header="DB" />
                        </ImageListItem>
                    </Fade>
                    <Fade in={show} style={{ transitionDelay: show ? "600ms" : "0ms" }}
                        {...(show ? { timeout: 1000 } : {})}
                    >
                        <ImageListItem sx={{ overflow: "auto" }}>
                            <Skill item={skills.ide} header="IDE" />
                        </ImageListItem>
                    </Fade>
                    <Fade in={show} style={{ transitionDelay: show ? "700ms" : "0ms" }}
                        {...(show ? { timeout: 1000 } : {})}
                    >
                        <ImageListItem sx={{ overflow: "auto" }}>
                            <Skill item={skills.etc} header="ETC" />
                        </ImageListItem>
                    </Fade>
                </ImageList>
            </Box>
        </Box>
    )
}