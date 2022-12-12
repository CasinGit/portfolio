import styles from './index.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Skill from './skill';

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
        { title: "ubuntu", imgUrl: "/logo/ubuntu_logo.png" },
    ],
    frame_lib: [
        { title: "Express.js", imgUrl: "" },
        { title: "React", imgUrl: "" },
        { title: "ReactNative", imgUrl: "" },
        { title: "Next.js", imgUrl: "" },
        { title: "Redux", imgUrl: "" },
        { title: "Axios", imgUrl: "" },
    ],
    db: [
        { title: "MongoDB", imgUrl: "" },
        { title: "MySQL", imgUrl: "" },
        { title: "MsSQL", imgUrl: "" },
    ],
    ide: [
        { title: "Eclipse", imgUrl: "" },
        { title: "VisualStudio", imgUrl: "" },
        { title: "VisualStudioCode", imgUrl: "" },
    ],
    etc: [
        { title: "Excel", imgUrl: "" },
        { title: "GitHub", imgUrl: "" },
        { title: "Firebase", imgUrl: "" },
        { title: "AmazonAWS", imgUrl: "" },
        { title: "GCP", imgUrl: "" },
    ]
}

export default function SkillsComp() {
    return (
        <Box className={styles.container}>
            <Typography className={styles.typo_title}>
                Skills
            </Typography>
            <Box className={styles.inContainer}>
                <Grid container spacing={3} p={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* 언어 */}
                    <Skill item={skills.language} />
                    {/* OS */}
                    <Skill item={skills.os} />
                    {/* 프레임워크 + 라이브러리 */}
                    <Skill item={skills.frame_lib} />
                    {/* 데이터베이스 */}
                    <Skill item={skills.db} />
                    {/* IDE */}
                    <Skill item={skills.ide} />
                    {/* ETC */}
                    <Skill item={skills.etc} />
                </Grid>
            </Box>
        </Box>
    )
}