import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.left}></div>
            <div className={s.center}>
                <a>All rights reserved</a>
            </div>
            <div className={s.right}></div>
        </div>
     );
}

export default Footer;