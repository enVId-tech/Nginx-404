"use client";
import React, {RefObject} from "react";
import styles from "@/app/page.module.scss";
import './globals.scss';

export default function Home(): React.ReactElement {
    const mainRef: RefObject<HTMLDivElement | null> = React.useRef<HTMLDivElement>(null);
    const appRef: RefObject<HTMLDivElement | null> = React.useRef<HTMLDivElement>(null);
    const messageRef: RefObject<HTMLParagraphElement | null> = React.useRef<HTMLParagraphElement>(null);
    const errorRef: RefObject<HTMLHeadingElement | null> = React.useRef<HTMLHeadingElement>(null);
    const notFoundRef: RefObject<HTMLHeadingElement | null> = React.useRef<HTMLHeadingElement>(null);
    const aFooterRef: RefObject<HTMLParagraphElement | null> = React.useRef<HTMLParagraphElement>(null);
    const myNameUpdated: string = `enVId Tech ${new Date().getFullYear().toString()}`;

    const [windowUrl, setWindowUrl] = React.useState<string>(window.location.pathname);
    const [message, setMessage] = React.useState<string>(`${windowUrl} is not available. Either this page does not exist, or the domain was incorrectly provided. Go to <a href="https://links.etran.dev">links.etran.dev</a> to see a list of all available links`);

    window.onpopstate = () => {
        setWindowUrl(window.location.pathname);
    };

    const onLoaded: () => void = (): void => {
        const url: string = window.location.pathname;
        const numErrors: number = 1000;
        let randomNums: number[] = [];

        if (mainRef.current && appRef.current && messageRef.current && errorRef.current && notFoundRef.current && aFooterRef.current) {
            const main: HTMLDivElement = mainRef.current;
            const app: HTMLDivElement = appRef.current;
            const message: HTMLParagraphElement = messageRef.current;
            const error: HTMLHeadingElement = errorRef.current;
            const notfound: HTMLHeadingElement = notFoundRef.current;
            const aFooter: HTMLParagraphElement = aFooterRef.current;

            setMessage(`${url} is not available. Either this page does not exist, or the domain was incorrectly provided. Go to <a href="https://links.etran.dev">links.etran.dev</a> to see a list of all available links`);
            main.appendChild(message);


            for (let i = 0; i < numErrors / 10; i++) {
                setTimeout(() => {
                    error.innerHTML = `Error ${Math.floor(Math.random() * 1000)}`;
                    aFooter.innerHTML = `<a href="https://github.com/enVId-tech" id="aFooter" target="_blank" rel="noopener">${myNameUpdated}</a><br>Error ${Math.floor(Math.random() * 1000)}`;
                    document.title = `Error`
                }, i * 10);
            }


            setTimeout((): void => {
                document.title = 'Error 404';
                error.innerHTML = '404';
                aFooter.innerHTML = `<a href="https://github.com/enVId-tech" id="aFooter" target="_blank" rel="noopener">${myNameUpdated}</a><br>Error 404`;
                error.style.color = '#ff0000';
                error.style.textShadow = '0 0 7.5px #ff0000';
                notfound.style.animation = 'unfadeDown 0.5s forwards ease-in-out';
                setTimeout(() => {
                    app.style.animation = 'scrollUpDown 2s infinite ease-in-out';
                    main.style.animation = 'unfadeDown 0.5s forwards ease-in-out';
                    main.style.textShadow = '0 0 10px #9c9c9c';
                }, 50);
            }, numErrors);
        }
    };

    React.useEffect(() => {
        onLoaded();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.app}>
                <h1 className={styles.error}>000 Error</h1>
                <h2 className={styles.notfound}>Page Not Found</h2>
            </div>

            <div className={styles.main}>
                {message}
            </div>

            <footer className={styles.footer}>
                <p className={styles.aFooter}>
                    <a href="https://github.com/enVId-tech" target="_blank" rel="noopener">enVIdTech 2025</a>
                    <br/>
                    Error
                </p>
            </footer>
        </div>
    );
}
