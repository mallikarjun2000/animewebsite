import React ,{ Component } from 'react';
import GENERDATA from './GenersData';
import SingleGenre from './singleGener';

class Gener extends Component{

    render() {
        return (
             <div style={{display:"flex",
                    flexDirection:"row",
                    flexWrap:"wrap"}}>
                 {
                     GENERDATA.map(singleGenre=>{
                         return <SingleGenre key={singleGenre.value} singlegenre = {singleGenre}/>
                     })
                 }
             </div>
        );
    }
}

export default Gener;