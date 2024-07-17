import './globals.css';
import React, { ReactNode } from 'react';
import Recoil from '@/components/Recoil/Recoil';
import ThemeRegistry from '@/components/ReactQuery/ThemeRegistry';
import ReactQuery from '@/components/ReactQuery/Provider';
import Header from '@/components/Layout/Header';
import FullLayout from '@/components/Layout/FullLayout';
import { Metadata } from 'next';
import Favicon from '/public/assets/yellowFootPrint.png';

export const metadata: Metadata = {
  title: 'GLOG',
  description:
    '개발자들을 위해 만들어진 블로그를 작성해보세요! 발자국 시스템, PR 시스템으로 블로그를 꾸준히 쓸 수 있도록 도와줍니다',
  openGraph: {
    siteName: 'GLOG',
    title: 'GLOG',
    description:
      '개발자들을 위해 만들어진 블로그를 작성해보세요! 발자국 시스템, PR 시스템으로 블로그를 꾸준히 쓸 수 있도록 도와줍니다',
    images: '/GLOG_LOGO.png',
  },
  verification: {
    google: 'Ot9R1wLIt3DP15IpoikrTHTptAcVxD5f-MX5poEjgrQ',
    other: {
      'naver-site-verification': '3dfd0cdaeff6632ccb0dbc69fab0545fe7e83d44',
    },
  },
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <Recoil>
          <ReactQuery>
            <ThemeRegistry options={{ key: 'mui' }}>
              <Header />
              <div className="light">
                <FullLayout>{children}</FullLayout>
              </div>
            </ThemeRegistry>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
