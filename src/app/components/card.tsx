"use client"
import styles from '@/app/components/card.module.css'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'



export default function Card() {
  const [view, setView] = useState<boolean>(true)
  const handleClick = () => {
    setView(!view)
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.colimg}>

        </div>
        <div className={styles.coltext}>
          <h1>Shift the overall look and feel by adding these wonderful
            touches to furniture in your home</h1>
          <p>Ever been in a room and felt like something was missing? Perhaps
            it felt slightly bare and uninviting. I’ve got some simple tips
            to help you make any room feel complete.</p>
          <div className={styles.sharediv}>
            <Image
              src={'/01/avatar-michelle.jpg'}
              width={40}
              height={40}
              alt='avatar'
            />
            <div className={styles.infodiv}>
              <h3>Michelle Appleton</h3>
              <h4>28 Jun 2020</h4>
            </div>

            <button className={clsx(styles.basebutton, {
              [styles.changebtb]: view === false
            })} onClick={handleClick}></button>
          </div>
          {view ? '' : <Shared />}
        </div>
      </div>
    </>
  )
}

function Shared() {
  return (
    <>
      <div className={styles.sharedcomponent}>
        <div className={styles.divcontent}>
          <span>SHARE</span>
          <Image
            src={'/01/icon-facebook.svg'}
            width={20}
            height={20}
            alt='facebook'
          />
          <Image
            src={'/01/icon-pinterest.svg'}
            width={20}
            height={20}
            alt='pinterest'
          />
          <Image
            src={'/01/icon-twitter.svg'}
            width={20}
            height={20}
            alt='twitter'
          />
        </div>
      </div>
    </>
  )
}