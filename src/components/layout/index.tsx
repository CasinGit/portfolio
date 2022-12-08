import React, { PropsWithChildren } from "react";
import { Layout, Anchor, Menu } from 'antd';
import HeaderComponent from "./header";
import FooterComponent from "./footer";
const { Header, Content, Footer, Sider } = Layout;
const { Link } = Anchor;

export default function Index(
    { children }: PropsWithChildren
) {
    return (
        <Layout>
            <Sider
                width={150}
                style={{ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "start", height: "100%", backgroundColor: "rgba( 255, 255, 255, 0.0 )" }}
            >
                <Anchor style={{ marginTop: "200px" }}>
                    <Link href="#top-content" title="Top" />
                    <Link href="#about-me" title="AboutMe" />
                    <Link href="#skills" title="Skills" />
                    <Link href="#projects" title="Projects" />
                    <Link href="#career" title="career" />
                </Anchor>
            </Sider>
            <Layout>
                <Header style={{ position: "fixed", background: "rgba( 0, 0, 0, 0.0 )" }}>
                    <HeaderComponent />
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer>
                    <FooterComponent />
                </Footer>
            </Layout>
        </Layout >
    )
}