import React from 'react'
import {connect} from "react-redux";
function VoitureItem(props) {
    return (
        <div>
            {props.dataVoiture}
        </div>
    )
}
const mapStateToProps = (state) =>{
    console.log("ssss",state.voiture)
    return{
        dataVoiture: JSON.stringify(state.voiture)
    }
}
export default connect(mapStateToProps)(VoitureItem)
