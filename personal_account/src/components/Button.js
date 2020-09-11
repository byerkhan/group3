import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import styles from '../styles/buttons.module.css';

export default function Buttons() {
    return(
        <div className={styles.Button}>
            <div className={styles.container}>
                <div className={styles.Header}>
                    <h1>餐饮会员管理系统</h1>
                </div>
                <div className={styles.Buttoncontainer}>
                    <Link to='/contactlist/' style={{textDecoration: 'none'}}>
                        <div className={styles.Login}>
                                会员管理
                        </div>
                    </Link>
                    <Link to='/account/' style={{textDecoration: 'none'}}>
                        <div className={styles.Login}>
                                会员储值
                        </div>
                    </Link>
                </div>
                </div>
            </div>
           
    );
}