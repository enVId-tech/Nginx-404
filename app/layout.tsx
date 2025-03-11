// app/layout.tsx
import {Montserrat} from 'next/font/google';
import {Metadata} from 'next';
import './globals.scss';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    icons: {
        icon: [
            {
                url: 'https://etran.dev/_next/static/media/enVId.2da63aac.png',
                type: 'image/x-icon',
            },
        ],
        shortcut: [
            {
                url: 'https://etran.dev/_next/static/media/enVId.2da63aac.png',
                type: 'image/x-icon',
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={montserrat.variable}>
        <body>
        {children}
        </body>
        </html>
    );
}