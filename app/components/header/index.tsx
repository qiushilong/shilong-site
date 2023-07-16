import React from 'react';
import styles from './index.module.scss'

import Menu from './menu'
import Logo from './logo'
import ThemeToggler from './themeToggler'

interface IHeaderProps {
    showBanner?: boolean;
}

function header({ showBanner = false }: IHeaderProps) {


    return (
        <header className={styles.header} style={{
            height: showBanner ? 'var(--banner-height)' : 'var(--menu-height)'
        }}>
            <section className={styles.mainWrapper}>
                <section className={styles.main}>
                    <Logo />
                    <Menu />
                    <ThemeToggler />
                </section>
            </section>

            <section className={styles.banner}></section>

        </header>
    )
}

export default header