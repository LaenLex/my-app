import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div className={s.landscape}>
                <img src='https://srisovki.com/wp-content/uploads/2021/05/Kak-ya-27.jpg' alt='summer'/>
            </div>
            <div className={s.photo}>
                <img
                    src='https://thumbs.dreamstime.com/z/%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BA%D0%B0-%D1%81-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%B9-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D0%B0%D1%82%D0%BE%D0%B9-%D1%80%D0%B0%D0%BC%D0%BA%D0%BE%D0%B9-%D0%B8-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0%D0%BC%D0%B8-%D0%BB%D0%B5%D1%82%D0%BE-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B5-222674346.jpg?w=768'
                    alt='icon'/>
            </div>
            <div className={s.description}>
                <div className={s.name}>Ivan Ivanov</div>
                <div className={s.info}>Ivanovo St. Luise</div>
                <div className={s.old}>999 y.o.</div>
            </div>
        </div>
    );
}

export default ProfileInfo;