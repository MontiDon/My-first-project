import s from "./Paginator.module.css";
import React from "react";


const Paginator = ({totalUsersCount, pageSize,currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
                {pages.map(p => {
                    return <span className={currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}
        </div>
    )
}

export default Paginator;

