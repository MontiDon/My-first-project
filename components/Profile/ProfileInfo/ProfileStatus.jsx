import React from 'react';



class ProfileStatus extends React.Component {
    placeholder
    state = {
        editMode: false
    }

    activatedEditMode() {
        this.setState({
            editMode: true
            }
        )
    }
    deactivatedEditMode() {
        this.setState({
                editMode: false
            }
        )
    }

    render() {
        debugger
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivatedEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}




export default ProfileStatus;