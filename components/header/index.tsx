import React from 'react'
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { AiFillHeart } from "react-icons/ai";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerNav}>
        <Link href="/">
          <p className={styles.headerLink}>Галоўная</p> 
        </Link>

        <Link href="/catalog">
          <p className={styles.headerLink}>Каталог</p>
        </Link>
        
        <Link href="/contacts">
          <p className={styles.headerLink}>Кантакт</p>
        </Link>

         <Link href="/map">
          <p className={styles.headerLink}>Мапа</p>
        </Link>
      </nav>
      <div className={styles.headerLogoContainer}>
        <img
          src="/BBC_logo.png"
          alt="belarusian book crosing logo"
          className={styles.headerLogo}
        />
      </div>
      <div className={styles.headerNav}>
        <button className={styles.headerRegisteButton}>
          <FcGoogle className="h-auto w-10" />
          <Link href="/auth/signin">
            <p className={styles.headerLink}>Рэгістрацыя</p>
          </Link>
        </button>

        <a
          className={styles.patreonLink}
          href="https://www.patreon.com/belarusian_book_crossing"
          target="_blank"
        >
          <AiFillHeart className="h-auto w-24 text-red-600 hover:text-red-900" />
          <p className={styles.patreonLinkText}>Патрэон</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
