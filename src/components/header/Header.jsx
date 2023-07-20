import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://cdn-icons-png.flaticon.com/512/906/906377.png?w=740&t=st=1689774792~exp=1689775392~hmac=1886f715d1e8b0d37fc96f999c098a51264f0ff1e91d83f531ae1f24bfc9d5c0'
                alt={'img'}/>
        </header>
    );
}

export default Header;