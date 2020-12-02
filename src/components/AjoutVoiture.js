import React,{useState} from 'react'
import {connect} from "react-redux"
import reducer from '../Reducers/reducer'
import {addVoiture} from '../action/action'
function AjoutVoiture() {
    const [text, setText]=useState({})
    const [name, setName]= useState("")
    const [puissance, setPuissance]= useState("")
    const [description, setDescription]= useState("")
    const nameChange = (e) =>{
        setName(e.target.value)
    }
    const puissanceChange = (e) =>{
        setPuissance(e.target.value)
    }
    const descriptionChange = (e) =>{
        setDescription(e.target.value)
        setText ({
            name,
            puissance,
            description
        })
        console.log(text)
    }
    const handleSubmit = () =>{
        setText ({
            name,
            puissance,
            description
        })
        console.log(text)
    }
    return (
        <div className='container'>
              <h1>Ajout voiture</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} id="name" onChange={e=>nameChange(e)}/><br/>
                    <input type="text" id="puissance" value={puissance} onChange={e=>puissanceChange(e)}/><br/>
                    <input type="text" id="description" value={description} onChange={e=>descriptionChange(e)}/>
                    <button type="submit">Add</button>
                </form>
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return{addVoiture: text =>dispatch(addVoiture, text)
    }
}
export default connect(null,mapDispatchToProps)(AjoutVoiture);
