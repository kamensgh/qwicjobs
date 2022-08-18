import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


function Pagination() {
    return (
        <div>
            <ul className="page">
                <li className="page__btn">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </li>
                <li className="page__numbers"> 1</li>
                <li className="page__numbers active">2</li>
                <li className="page__numbers">3</li>
                <li className="page__numbers">4</li>
                <li className="page__numbers">5</li>
                <li className="page__numbers">6</li>
                <li className="page__dots">...</li>
                <li className="page__numbers"> 10</li>
                <li className="page__btn"> <FontAwesomeIcon icon={faChevronRight} /></li>
            </ul>
        </div>
    )
}

export default Pagination;