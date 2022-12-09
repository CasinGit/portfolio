import { Col, Row, Typography } from "antd";
import styles from './about-me.module.css';

export default function AboutMeComp() {
    return (
        <div className={styles.container}>
            <div className={styles.inContainer}>
                <Typography className={styles.typo_title}>
                    About Me
                </Typography>
                <Row gutter={[16, 16]}>
                    <Col span={12} style={{ display: "flex", flex: 1 }} >
                        <img src="https://post-phinf.pstatic.net/MjAxODAzMTVfMTg5/MDAxNTIxMTEwODcyNDAw.VydowXsV01QXlULeVB0kwkwyS30umKOBsDQH0wRIrq4g.twzyKxF6IfxXxxlzsDIZmUtI43RixX0ypWW1l_1Ru0Yg.JPEG/SmartSelectImage_2018-03-15-19-42-18.jpg?type=w1200" alt="img" width={200} height={250} />
                    </Col>
                    <Col span={12}>
                        <div style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>이름:</Typography>
                            &nbsp;
                            <Typography>김기협</Typography>
                        </div>
                        <div style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>생년월일:</Typography>
                            &nbsp;
                            <Typography>97.02.22</Typography>
                        </div>
                        <div style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>연락처:</Typography>
                            &nbsp;
                            <Typography>010-9090-1061</Typography>
                        </div>
                        <div style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>이메일:</Typography>
                            &nbsp;
                            <Typography>kkig30@gmail.com</Typography>
                        </div>
                        <div style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>주소:</Typography>
                            &nbsp;
                            <Typography>광주광역시 서구 금화로</Typography>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}