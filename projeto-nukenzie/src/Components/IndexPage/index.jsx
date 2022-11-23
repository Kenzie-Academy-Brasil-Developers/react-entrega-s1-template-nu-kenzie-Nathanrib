import IndexDescription from "../IndexDescription"
import StartButton from "../IndexDescription/StartButton"
import IndexIlustration from "../IndexIlustration"


const IndexPage = ({setEntry}) =>  {
    return(
        <div className="index-page">
        <div  className="index-description">
            <IndexDescription/>
            <StartButton setEntry={setEntry}/>
        </div>
         <IndexIlustration/>
         </div>
       
    )
    }
    
    export default IndexPage



   