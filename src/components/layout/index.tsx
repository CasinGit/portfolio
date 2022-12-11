import React, { PropsWithChildren } from "react";
import styles from './index.module.css';
import HeaderComponent from "./header";
import FooterComponent from "./footer";
import { AppBar, Box, Container, Toolbar } from "@mui/material";

export default function Index(
    { children }: PropsWithChildren
) {
    return (
        <Container disableGutters={true} maxWidth={false} sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
            {/* 옆에 슬라이더 부분 */}
            {/* <Sider className={styles.Sider} width={150}>
                    <Anchor style={{ marginTop: "200px", borderRadius: "15px", backgroundColor: "rgba(0, 0, 0, 0.2)", padding: 10 }} >
                        <Link href="#top-content" title="Top" />
                        <Link href="#about-me" title="AboutMe" />
                        <Link href="#skills" title="Skills" />
                        <Link href="#projects" title="Projects" />
                        <Link href="#career" title="Career" />
                    </Anchor>
                </Sider> */}

            {/* Header */}
            <Box className={styles.Header} >
                <HeaderComponent />
            </Box>

            {/* Main */}
            <AppBar position="relative" sx={{
                backgroundColor: "white",
                color: "black",
                flex: 1
            }} >
                <main>{children}</main>
            </AppBar>

            {/* Footer */}
            <Toolbar className={styles.Footer}>
                <FooterComponent />
            </Toolbar>

        </Container >
    )
}