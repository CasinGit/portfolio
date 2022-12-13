import React, { PropsWithChildren } from "react";
import styles from './index.module.css';
import HeaderComponent from "./header";
import FooterComponent from "./footer";
import { AppBar, Box, Button, Container, Link, Toolbar, Typography } from "@mui/material";
import Toc from "./toc";
export default function Index(
    { children }: PropsWithChildren
) {
    return (
        <Container disableGutters={true} maxWidth={false} sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
            {/* Toc */}
            <nav className={styles.Sider}>
                <Toc />
            </nav>

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