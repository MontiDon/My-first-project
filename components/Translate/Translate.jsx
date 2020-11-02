import React from 'react';
import s from './Translate.module.css'

const Translate = (props) => {
    return (
        <div>
            Translate
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Translate</button>
                <button>Clear</button>
            </div>
        </div>
    )
}

export default Translate;