import React, { PropsWithChildren } from "react";
import styles from './index.module.css';
import { Layout, Anchor } from 'antd';
import HeaderComponent from "./header";
import FooterComponent from "./footer";
const { Header, Content, Footer, Sider } = Layout;
const { Link } = Anchor;

export default function Index(
    { children }: PropsWithChildren
) {
    return (
        <Layout>
            <Sider className={styles.Sider} width={150}>
                <Anchor style={{ marginTop: "200px", borderRadius: "15px", backgroundColor: "rgba(0, 0, 0, 0.2)", padding: 10 }} >
                    <Link href="#top-content" title="Top" />
                    <Link href="#about-me" title="AboutMe" />
                    <Link href="#skills" title="Skills" />
                    <Link href="#projects" title="Projects" />
                    <Link href="#career" title="Career" />
                </Anchor>
            </Sider>
            <Layout>
                <Header className={styles.Header}>
                    <HeaderComponent />
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer className={styles.Footer}>
                    <FooterComponent />
                </Footer>
            </Layout>
        </Layout >
    )
}