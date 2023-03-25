import "./app.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import DataField from "./components/DataField";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([])

  const addData =()=>{
    setData([...data, {name, email}])
    setName('')
    setEmail('')
  }

  const removeItem = (index)=>{
      let arr=data;
      arr.splice(index, 1)
      setData([...arr])
  }

  return (
    <div className="App">
      <Header />

      {/* form section */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event)=>setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* data section */}
      <div className="data">
          <div className="datalist">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
      </div>
      {
        data.map((element, index) =>{
          return(
            <div className="datalist">
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <h4>Remove</h4>
            <Stack>
                <Button onClick={() =>removeItem(index)} color="error" variant="contained">
                     <DeleteIcon/>
                </Button>
            </Stack>
           
        </div>
          )
        })
      }
    </div>
  );
}

export default App;
