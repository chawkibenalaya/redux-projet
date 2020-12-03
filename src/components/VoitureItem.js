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
    console.log("ssss",state)
    return{
        dataVoiture: JSON.stringify(state?.voitures)
    }
}
export default connect(mapStateToProps)(VoitureItem)
