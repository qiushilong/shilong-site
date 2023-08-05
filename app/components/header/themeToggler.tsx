import React, { useState } from 'react';
import styles from './index.module.scss'
import classNames from 'classnames'

function themeToggler() {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const themeContentStyle = classNames(styles.themeContent,
        { [`${styles.sun}`]: theme === 'light' },
        { [`${styles.moon}`]: theme === 'dark' },
    )

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <section className={styles.theme}>
        <div className={themeContentStyle}>
            <span className={classNames('iconfont', 'icon-sun', styles.themeIcon)} onClick={toggleTheme}></span>
            <span className={classNames('iconfont', 'icon-moon', styles.themeIcon)} onClick={toggleTheme}></span>
        </div>
    </section>
}

export default themeToggler