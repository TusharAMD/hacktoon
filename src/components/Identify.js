import { useState } from 'react';
import { Button, Input } from 'reactstrap';
import axios from 'axios';

function Identify() {

    const[database,setDatabase] = useState([{"name":"Tom","url":"https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png","type":"Cat","gender":"Male","color":"Grey","genre":"Slapstick","profession":"No Profession","powers":"No Powers"},
    {"name":"Jerry","url":"https://i.pinimg.com/originals/85/58/29/85582987f7125e4868fdcb28661e934f.png","type":"Mouse","gender":"Male","color":"Brown","genre":"Slapstick","profession":"No Profession","powers":"No Powers"},
    {"name":"Pink Panther","url":"https://upload.wikimedia.org/wikipedia/en/9/96/Pink_Panther.png","type":"Panther","gender":"Male","color":"Pink","genre":"Slapstick","profession":"No Profession","powers":"No Powers"},
    {"name":"Oswald","url":"https://wp.scoopwhoop.com/wp-content/uploads/2017/04/27a2356d-b415-47b4-b8bf-f0fa1aa83ce5.jpg","type":"Octopus","gender":"Male","color":"Blue","genre":"Moral Values","profession":"No Profession","powers":"No Powers"},
    {"name":"Dexter","url":"https://i.pinimg.com/originals/0e/0f/8b/0e0f8b42b900892b904381e532306bd0.jpg","type":"Human","gender":"Male","color":"Human - white","genre":"Sci-Fic","profession":"Scientist","powers":"No Powers"}])
    const[type,setType] = useState("Not Selected")
    const[gender,setGender] = useState("Not Selected")
    const[color,setColor] = useState("Not Selected")
    const[genre,setGenre] = useState("Not Selected")
    const[profession,setProfession] = useState("Not Selected")
    const[power,setPower] = useState("Not Selected")


    async function onChangeHandler(e){
        
        axios.post(`http://127.0.0.1:5000/identifier`, {"query":[type,gender,color,genre,profession,power]})
        .then(res => {
            var temp = res.data.data
            setDatabase(temp)
            //console.log(res);
            //console.log(res.data);
            console.log(database)
        })
    }



    return (
      <div className="Identify">
        <div className="search">
            <p style={{fontSize:"2em",color:"white"}}>Search here <span style={{"fontSize": "inherit","verticalAlign": "bottom"}}class="material-symbols-outlined">search</span></p>
            <p>What was your character?</p>
            <Input
                onChange={(e)=>{setType(e.target.value);}}
                id="exampleSelect"
                name="select"
                type="select"
                >
                <option>
                    Not Selected
                </option>
                <option>
                    Human
                </option>
                <option>
                    Cat
                </option>
                <option>
                    Dog
                </option>
                <option>
                    Mouse
                </option>
                <option>
                    Octopus
                </option>
                <option>
                    Penguin
                </option>
                <option>
                    Flower
                </option>
                <option>
                    Pig
                </option>
                <option>
                    Dragon
                </option>
                <option>
                    Rooster
                </option>
                <option>
                    Wolf
                </option>
                <option>
                    Turtle
                </option>
                <option>
                    Panther
                </option>
            </Input>

            <p>What was gender of your character?</p>
            <Input
                onChange={(e)=>{setGender(e.target.value)}}
                id="exampleSelect"
                name="select"
                type="select"
                >
                <option>
                    Not Selected
                </option>    
                <option>
                    Male
                </option>
                <option>
                    Female
                </option>
                <option>
                    Non-Binary
                </option>
            </Input>

            <p>What was their color?</p>
            <Input
                onChange={(e)=>{setColor(e.target.value)}}
                id="exampleSelect"
                name="select"
                type="select"
                >
                <option>
                    Not Selected
                </option>
                <option>
                    Red
                </option>
                <option>
                    Green
                </option>
                <option>
                    Yellow
                </option>
                <option>
                    Blue
                </option>
                <option>
                    Purple
                </option>
                <option>
                    Pink
                </option>
                <option>
                    Brown
                </option>
                <option>
                    Grey
                </option>
                <option>
                    White
                </option>
                <option>
                    Green
                </option>
                <option>
                    Human - white
                </option>
                <option>
                    Human - black
                </option>
                <option>
                    Human - brown
                </option>
            </Input>

            <p>What was genre of the show?</p>
            <Input
                onChange={(e)=>{setGenre(e.target.value)}}
                id="exampleSelect"
                name="select"
                type="select"
                >
                <option>
                    Not Selected
                </option>
                <option>
                    Fantasy
                </option>
                <option>
                    Slapstick
                </option>
                <option>
                    Sci-Fic
                </option>
                <option>
                    Horror
                </option>
                <option>
                    Moral Values
                </option>
                <option>
                    Educational
                </option>
            </Input>

            <p>What was their profession?</p>
            <Input
                onChange={(e)=>{setProfession(e.target.value)}}
                id="exampleSelect"
                name="select"
                type="select"
                >
                <option>
                    Not Selected
                </option>
                <option>
                    No profession
                </option>
                <option>
                    Scientist
                </option>
                <option>
                    Vigilante
                </option>
                <option>
                    Cook
                </option>
                <option>
                    Banker
                </option>
            </Input>

            <p>What was their powers?</p>
            <Input
                onChange={(e)=>{setPower(e.target.value)}}
                id="exampleSelect"
                name="select"
                type="select"
                >
                <option>
                    Not Selected
                </option>
                <option>
                    Speed
                </option>
                <option>
                    Strength
                </option>
                <option>
                    Brain
                </option>
                <option>
                    Luck
                </option>
                <option>
                    No powers
                </option>
            </Input>
            <Button onClick={onChangeHandler}>Submit</Button>

        </div>
        <div className="results">
            <p style={{fontSize:"2em",color:"white"}}>Results</p>
            <div className='resultschild'>
            {database.map((data, index) => {
                return (
                <div key={index}>
                    {/*<p>Index: {JSON.stringify(data)}</p>*/}
                    <div>
                        <a href={data.link}><img style={{"width":"100px"}} src={data.url}></img></a>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
      </div>
    );
  }
  
  export default Identify;