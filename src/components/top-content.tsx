// import { Typography } from 'antd';
import styles from './top-content.module.css';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

export default function TopContentComp() {
    const motionTxt = "웹 개발자 포트폴리오";
    const [text, setText] = useState<string>("");
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("인터벌 실행");
            setText(text + motionTxt[count]); // 이전 set한 문자 + 다음 문자
            setCount(count + 1); // 개수 만큼 체크 
        }, 100);
        if (motionTxt.length === text.length) clearInterval(interval);

        return () => clearInterval(interval);
    })

    return (
        <Box className={styles.container} >
            <Typography className={styles.typo_name}>
                - 김기협 -
            </Typography>
            <Typography className={styles.typo_desc}>
                {text}
            </Typography>
        </Box>
    )
}