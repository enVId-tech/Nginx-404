'use client';

import React, { useEffect, useState, useRef, RefObject } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

export default function NotFoundPage(): React.ReactElement {
    const [errorCode, setErrorCode] = useState<string>('000');
    const [footerError, setFooterError] = useState<string>('000');
    const [animateElements, setAnimateElements] = useState<boolean>(false);
    const [hostname, setHostname] = useState<string>('');
    const errorRef: RefObject<HTMLHeadingElement | null> = useRef<HTMLHeadingElement>(null);
    const notFoundRef: RefObject<HTMLHeadingElement | null> = useRef<HTMLHeadingElement>(null);
    const appRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const mainRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

    const currentYear: number = new Date().getFullYear();
    const myNameUpdated: string = `enVId Tech ${currentYear}`;
    const numError: number = 1000;

    useEffect((): void => {
        // Set the hostname after component has mounted
        setHostname(window.location.host);

        document.title = 'Error';

        // Random error code animation
        for (let i: number = 0; i < numError / 10; i++) {
            setTimeout((): void => {
                setErrorCode(Math.floor(Math.random() * 1000).toString());
                setFooterError(Math.floor(Math.random() * 1000).toString());
            }, i * 10);
        }

        // Final state
        setTimeout((): void => {
            document.title = 'Error 404';
            setErrorCode('404');
            setFooterError('404');

            if (errorRef.current) {
                errorRef.current.style.color = '#ff0000';
                errorRef.current.style.textShadow = '0 0 7.5px #ff0000';
            }

            if (notFoundRef.current) {
                notFoundRef.current.style.animation = 'unfadeDown 0.5s forwards ease-in-out';
            }

            setTimeout((): void => {
                setAnimateElements(true);
            }, 50);
        }, numError);
    }, []);

    return (
        <div className={styles.container}>
            <div
                ref={appRef}
                className={`${styles.app} ${animateElements ? styles.scrollAnimation : ''}`}
            >
                <h1 ref={errorRef} className={styles.error}>{errorCode} Error</h1>
                <h2 ref={notFoundRef} className={styles.notfound}>Page Not Found</h2>
            </div>

            <div
                ref={mainRef}
                className={`${styles.main} ${animateElements ? styles.unfadeAnimation : ''}`}
            >
                <p className={styles.message}>
                    {hostname && (
                        <>
                            {hostname} is not available. Either this page does not exist, or the domain was incorrectly provided. Go to <Link href="https://links.etran.dev" className={styles.link}>links.etran.dev</Link> to see a list of all available links
                        </>
                    )}
                </p>
            </div>

            <footer className={styles.footer}>
                <p className={styles.aFooter}>
                    <a href="https://github.com/enVId-tech" target="_blank" rel="noopener">
                        {myNameUpdated}
                    </a>
                    <br />Error {footerError}
                </p>
            </footer>
        </div>
    );
}