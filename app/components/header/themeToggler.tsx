import React from 'react';
import styles from './index.module.scss'

function themeToggler() {

    return <section className={styles.theme}>
        <span className='iconfont icon-sun'></span>
    </section>
}

export default themeToggler