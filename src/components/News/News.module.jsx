import React from 'react';
import s from './News.module..css';
import {NavLink} from "react-router-dom";

const NewsItem = (props) => {
    let path = "/news/" + props.id;

    return <div className={s.news + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.news}>{props.message}</div>
}

const News = (props) => {

    let newsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    return (
        <div className={s.news}>
            <div className={s.newsItems}>
                <NewsItem name={newsData[0].name} id={newsData[0].id} />
                <NewsItem name={newsData[1].name} id={newsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
}

export default News;