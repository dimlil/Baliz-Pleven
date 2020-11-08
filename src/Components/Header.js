import React from 'react'
import style from '../styles/header.module.css'
import Logo from './Logo'
import {Link} from 'react-router-dom'
function Header() {
    return (
    <div className={style.navbar}>
        <div className={style.dropdown}>   
            <Logo />
        </div>
        
        <div className={`${style.dropdown} ${style.dropdown_margin}`}>
            <button className={style.dropbtn}>За нас</button>
            <div className={style.dropdown_content}>
                <Link to='/management-board'>Управителен съвет</Link>
                <Link to='/activities'>Дейности</Link>
                <Link to='/reports'>Отчети</Link>
            </div>    
        </div>
        <Link to='/news' className={style.marginFromTop}>Новини</Link>
        <div className={style.dropdown}>
            <button className={style.dropbtn}>Проекти</button>
            <div className={style.dropdown_content}>
                <Link to='/current-projects'>Текущи</Link>
                <Link to='/finished-projects'>Приключили</Link>
                <Link to='/archive'>Архив</Link>
            </div>  
        </div> 
        <Link to='/gallery' className={style.marginFromTop}>Галерия</Link>
        <Link to='/Privacy-and-data-protection-policy' className={style.marginFromTop}>Политика за поверителност и защита на личните данни</Link>
        <Link to='/contacts' className={style.marginFromTop}>Контакти</Link>
    </div>
    )
}

export default Header
