import React, { useState, useEffect } from "react";
import Button from "./Button";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./task.css";
import TextEditor from "./TextEditor.js";

const AddTask = ({
  form,
  tytul,
  tresc,
  data,
  priorytet,
  tagi,
  funkcja,
  onClose,
}) => {
  const content = ContentState.createFromText(tresc);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(content)
  );

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const [startDate, setStartDate] = React.useState(new Date(data));
  const [prior, setPriorytet] = React.useState(priorytet);
  const [tyt, setTytul] = React.useState(tytul);
  const [tr, setTresc] = React.useState(tresc);
  const [value, setValue] = React.useState("");

  function handleOnClick() {
    // var text = editorState.getCurrentContent().getBlocksAsArray();
    // console.log(text);
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const mappedBlocks = blocks.map(
      (block) => (!block.text.trim() && "\n") || block.text
    );

    let newText = "";
    for (let i = 0; i < mappedBlocks.length; i++) {
      const block = mappedBlocks[i];

      // handle last block
      if (i === mappedBlocks.length - 1) {
        newText += block;
      } else {
        // otherwise we join with \n, except if the block is already a \n
        if (block === "\n") newText += block;
        else newText += block + "\n";
      }

      setTresc(newText);
      console.log(tr);
      console.log(startDate);
      console.log(prior);
      console.log(tyt);
    }
  }

  return (
    <div
      style={{
        border: "1px solid black",
        width: "70%",
        margin: "auto",
        marginTop: "6vh",
        minHeight: "800px",
        borderRadius: "12px",
        backgroundColor: "#FFFFA7",
      }}
    >
      <div style={{ minHeight: "800px" }}>
        <div style={{ display: "flex" }}>
          <input
            style={{
              fontSize: "30px",
              width: "100%",
              margin: "20px",
              border: "1px solid black",
              borderRadius: "12px",
              textAlign: "center",
            }}
            defaultValue={tytul}
            onChange={(e) => setTytul(e.target.value)}
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <input
            style={{
              fontSize: "20px",
              height: "30px",
              margin: "auto",
              marginRight: "50px",
              width: "50px",
              textAlign: "center",
              borderRadius: "12px",
              backgroundColor: "white",
            }}
            type="number"
            name="age"
            defaultValue={prior}
            min={1}
            max={10}
            onChange={(e) => setPriorytet(e.target.value)}
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "2px",
            width: "90%",
            margin: "auto",
          }}
        >
          {/* <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
          />  */}
          <TextEditor setValue={setValue} tresc={tresc} fun={setTresc} />
        </div>
        <input
          style={{
            backgroundColor: "white",
            borderRadius: "6px",
            fontSize: "20px",
            width: "90%",
            marginTop: "10px",
          }}
          defaultValue={tagi}

        />
        <Button
          //fun={() => {setShowEditor(false)}}
          fun={() => {
            
              handleOnClick();
              funkcja("board");
          }}
          width_p={"15%"}
          marginesTop={"15px"}
          margines={"auto"}
          text={"Dodaj"}
        />
      </div>
    </div>
  );
};

export default AddTask;
