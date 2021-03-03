import React, {useState} from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deactivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div>
                <span onClick={activatedEditMode}>{props.status || '----'}</span>
            </div>
            }
            { editMode &&
            <div>
                <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivatedEditMode} />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;