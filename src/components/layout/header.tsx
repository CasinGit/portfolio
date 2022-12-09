import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function HeaderComponent() {
    return (
        <div style={{ display: "flex", alignItems: "flex-end" }}>
            <Button ghost color="red" size={'large'} icon={<VerticalAlignTopOutlined style={{ color: "black" }} />} style={{ boxShadow: "0px 0px 5px 1px black" }} />
        </div>
    )
}