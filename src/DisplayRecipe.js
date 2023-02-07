import React, { Component } from 'react';

class DisplayRecipe extends Component {
    render() {
        const { recipes } = this.props;
        return (
            <div>
                <p style={{textAlign:"center",fontFamily:"Ink Free",fontSize:"50px"}}>Recipes</p>
                <table style={{backgroundColor:"#e6e2d3",width:"90%",marginLeft:"auto",marginRight:"auto",border:"5px solid #b9936c",borderRadius:"10px"}}>
                    {recipes.map(recipeInfo => {
                        return (
                            <tr>
                                <td style={{textAlign:"center",fontSize:"30px",fontFamily:"Ink Free",borderBottom:"1px solid #b2b2b2",padding:"15px"}}><img src={recipeInfo.strCategoryThumb} /> {recipeInfo.strCategory}</td>
                                <td style={{fontFamily:"Candara",fontSize:"20px",borderBottom:"1px solid #b2b2b2"}}>{recipeInfo.strCategoryDescription}</td>
                            </tr>
                        )
                    })
                    }
                </table>
            </div>
        );
    }
}

export default DisplayRecipe;