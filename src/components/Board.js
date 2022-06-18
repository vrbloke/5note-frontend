import React from "react";
import Task from "./Task";
import BigTask from "./BigTask";
import axios from 'axios';


const Board = (props, { funkcja }) => {
  const [showTasks, setShowTasks] = React.useState(true);
  const [aa, seta] = React.useState([]);
  const [tytul, setTytul] = React.useState("tytul");
  const [tresc, setTresc] = React.useState("tresc");
  const [data, setData] = React.useState("2022-05-01");
  const [priorytet, setPriorytet] = React.useState(1);
  const [tagi, setTagi] = React.useState(["abc"]);
  const [id, setId] = React.useState("");


  function findTask(tyt)
  {
    axios.get('http://localhost:8080/notes/search/findAllByTitle?title='+tyt).then(res => {
     
      setTytul(res.data["_embedded"]["notes"][0].title);
      setTresc(res.data["_embedded"]["notes"][0].contents);
      setData("2022-05-01");
      setPriorytet(1);
      setTagi(["abc"]);
      seta(res.data["_embedded"]["notes"][0])
      console.log(res.data["_embedded"]["notes"][0].title);
      setShowTasks(false);
      setId(res.data["_embedded"]["notes"][0].id);
    });
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {showTasks && (
        <div>
          <div>
            { props.notatki.map((item) => (
              <Task
               key={item.id}
                onIcon={() => {
                  findTask(item.title);                
                }}
                tytul={item.title}
                tresc={item.contents}
                {...props}
              />
            ))}

          </div>
        </div>
      )}
      {!showTasks && (
        <div style={{ height: "100%" }}>
          <BigTask
            onClose={() => setShowTasks(true)}
            form={props.format}
            tytul={tytul}
            tresc={tresc}
            data={data}
            priorytet={priorytet}
            tagi={tagi}
            id={id}
            funkcja={() => funkcja}
          />
        </div>
      )}
    </div>
  );
};

export default Board;
