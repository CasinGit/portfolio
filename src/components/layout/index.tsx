import React, { PropsWithChildren } from "react";
import { Layout, Menu } from 'antd';
import HeaderComponent from "./header";
import FooterComponent from "./footer";
const { Header, Content, Footer, Sider } = Layout;

export default function Index(
    { children }: PropsWithChildren
) {
    return (
        <Layout>
            <Sider
                width={150}
                style={{ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", height: "100%", width: "100px", backgroundColor: "rgba( 255, 255, 255, 0.0 )" }}
            >
                <Menu
                    style={{ background: "rgba( 255, 255, 255, 0.0 )", borderInlineEnd: "rgba(0, 0, 0, 0.0)", marginTop: "300px" }}
                    // defaultSelectedKeys={['1']}
                    items={["Home", "AboutMe", "Skills", "Project", "Career"].map(
                        (value, index) => ({
                            key: value,
                            label: `${value}`,
                            style: {
                                backgroundColor: "rgba( 255, 255, 255, 0.0 )"
                            },
                            onClick: (evt) => {
                                console.log("클릭이벤트", evt)
                            }
                        }),
                    )}
                />
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