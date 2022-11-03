import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Layout } from 'antd';

import Header from '../../components/header'
import Footer from '../../components/footer'

import { Menu, MenuProps, Button } from 'antd';
import React, { useState } from 'react';
import {
    HomeOutlined,
    AimOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { BreadCrumbs } from '../breadcrumbs';
type LayoutProps = {
    children: React.ReactNode,
};
const { Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Галоўная', '/', <HomeOutlined />),
    getItem('Мапа', '/map', <AimOutlined />),
    getItem('Пра нас', '/about', <TeamOutlined />),
];



export default function AppLayout({ children }: LayoutProps) {
    const { data } = useSession()
    const router = useRouter()

    return (
        <Layout style={{ minHeight: '100vh' }}>
          
            <Header />
            <Layout className="site-layout">
                <Content style={{ margin: '40px 16px 0', flexGrow: 1 }}>
                    <div style={{ padding: 24, minHeight: 360, height: '100%' }}>
                        {children}
                    </div>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    )
}