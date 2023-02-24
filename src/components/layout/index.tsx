import React, { PropsWithChildren } from "react";
import styles from './index.module.css';
import HeaderComponent from "./header";
import FooterComponent from "./footer";
import { AppBar, Box, Button, Container, Link, Toolbar, Typography } from "@mui/material";

export default function Index(
    { children }: PropsWithChildren
) {
    return (
        <>
            <style jsx>{`
                .header_background {
                    background: rgba(0, 0, 0, 0.4) !important;
                    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) !important;
                }
            `}</style>

            <Container disableGutters={true} maxWidth={false} sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>

                {/* Header */}
                <AppBar className={styles.Header} id="inner_Header">
                    <HeaderComponent />
                </AppBar>

                {/* Main */}
                <Box className={styles.Main} >
                    <main>{children}</main>
                </Box>

                {/* Footer */}
                <Toolbar className={styles.Footer}>
                    <FooterComponent />
                </Toolbar>

            </Container >
        </>
    )
}