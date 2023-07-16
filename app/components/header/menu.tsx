'use client'

import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss'

interface MenuItem {
    title: string
    link: string;
    sel: boolean;
}

const menuList: MenuItem[] = [
    {
        title: 'Blog',
        link: '/',
        sel: true
    },
    {
        title: 'AI',
        link: '/ai',
        sel: false
    },
    {
        title: 'Project',
        link: '/project',
        sel: false
    }
]

function handleItemClick(item: MenuItem) {
    if (item.sel) {
        return;
    }
}

const menuItemStyle = (menuItem: MenuItem) => classNames(styles.menuItem, {
    [`${styles.menuItemSel}`]: menuItem.sel
})

function menu() {
    return <section className={styles.menu}>
        <ul className={styles.menuUl}>
            {menuList.map((menuItem) => (
                <li key={menuItem.title} className={menuItemStyle(menuItem)} onClick={() => handleItemClick(menuItem)}>{menuItem.title}</li>
            ))}
        </ul>
    </section>
}

export default menu