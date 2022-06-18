import React, { useState, useEffect } from 'react'
import Button from './Button'
import { EditorState, ContentState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FaUserPlus, FaUsers } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { MdAdd } from "react-icons/md"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./task.css"
import { RiCloseFill } from "react-icons/ri";
import TextEditor from "./TextEditor.js"
import axios from 'axios';


const users = [
  {
    id: 0,
    nick: 'user1'
  },
  {
    id: 1,
    nick: 'user2'
  },
  {
    id: 2,
    nick: 'user3'
  },


];



const BigTask = ({ form, tytul, tresc, data, priorytet, tagi, funkcja, onClose, numTask }) => {

  const content = ContentState.createFromText(tresc);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(content)
  );

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const [showAllUsers, setShowAllUsers] = React.useState(false)
  const [showAddUsers, setShowAddUsers] = React.useState(false)
  const [showEditor, setShowEditor] = React.useState(false)
  const [startDate, setStartDate] = React.useState(new Date(data))
  const [prior, setPriorytet] = React.useState(priorytet)
  const [tyt, setTytul] = React.useState(tytul)
  const [tr, setTresc] = React.useState(tresc)
  const [listUsrs, setListUsrs] = React.useState(users);
  const [usrId, setUsrId] = React.useState(-1);
  const [usrNick, setUsrNick] = React.useState('');
  const [value, setValue] = React.useState('')
  const [newText, setNewText] = React.useState(tresc)
  var id;
  axios.get('http://localhost:8080/notes/search/findAllByTitle?title='+tytul).then(res => {
      id = res.data["_embedded"]["notes"][0]["id"];
  });


  function handleRemove(id) {
    const newList = listUsrs.filter((item) => item.id !== id);

    setListUsrs(newList);
  }

  function uploadImageCallBack(file) {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }

  function handleChange(event) {
    setUsrNick(event.target.value);
  }

  function handleOnClick() {
    // // var text = editorState.getCurrentContent().getBlocksAsArray();
    // // console.log(text);
    // const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    // const mappedBlocks = blocks.map(
    //   block => (!block.text.trim() && "\n") || block.text
    // );

    // let newText = "";
    // for (let i = 0; i < mappedBlocks.length; i++) {
    //   const block = mappedBlocks[i];

    //   // handle last block
    //   if (i === mappedBlocks.length - 1) {
    //     newText += block;
    //   } else {
    //     // otherwise we join with \n, except if the block is already a \n
    //     if (block === "\n") newText += block;
    //     else newText += block + "\n";
    //   }

    setTresc(newText);
    console.log(tr);
    console.log(startDate);
    console.log(prior);
    console.log(tyt);

    axios.patch('http://localhost:8080/notes/62ae171779203106f21b1f19', {
      title: tyt,
      contents: tr
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // this.setUsrId({value:e.target.value})
      console.log(usrNick);
      setUsrId(1);
    }
  }




  return (

    <div style={{ border: '1px solid black', width: '70%', margin: 'auto', marginTop: '6vh', minHeight: '800px', borderRadius: '12px', backgroundColor: '#FFFFA7' }}>
      {!showEditor && <div style={{ display: 'flex', padding: '2vh' }}>
        <Button
          fun={() => { { setShowEditor(true); funkcja(false) } }}
          width_p={'15%'}
          marginesTop={'auto'}
          margines={'20px'}
          text={"Edytuj"} />
        <FaUserPlus onClick={() => setShowAddUsers(!showAddUsers)} style={{ fontSize: '4vh', margin: '10px', marginTop: 'auto', marginBottom: 'auto', width: '10%' }} />
        <FaUsers onClick={() => setShowAllUsers(!showAllUsers)} style={{ fontSize: '4vh', margin: '10px', marginTop: 'auto', marginBottom: 'auto', width: '10%' }} />
        <h1 style={{ margin: 'auto', marginRight: '10px' }}>{tyt}</h1>
        <h1 style={{ margin: 'auto', marginRight: '20px' }}>{startDate.toLocaleDateString()}</h1>
        {form === 'tablica' && <IoClose onClick={onClose} style={{ fontSize: '5vh', margin: 'auto', marginRight: '20px', width: '10%' }} />}
      </div>}

      {!showEditor && <div style={{ display: 'flex', maxHeight: '800px' }}>

        {showAllUsers && <div style={{ border: '1px solid black', margin: '25px', borderRadius: '12px' }}>
          <div>
            {listUsrs.map((item) => (
              <div key={item.id} style={{ border: '1px solid black', borderRadius: '12px', width: '300px', margin: '10px', display: 'flex' }}>
                <CgProfile style={{ borderRadius: '12px', fontSize: '4vh', margin: 'auto', marginLeft: '10px' }} />
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.nick}</p>
                <RiCloseFill style={{ color: 'black', margin: 'auto', marginRight: '10px', fontSize: '30px' }} onClick={() => handleRemove(item.id)} />
              </div>
            ))}
          </div>

        </div>}

        {showAddUsers && <div style={{ border: '1px solid black', padding: '5px', height: '200px', backgroundColor: 'white', margin: '25px', borderRadius: '12px' }}>
          <input style={{ borderRadius: '6px', width: '300px', fontSize: '20px' }} placeholder="Search" onKeyPress={handleKeyPress} onChange={handleChange} />
          {usrId >= 0 &&
            <div style={{ border: '1px solid black', borderRadius: '12px', width: '300px', margin: '10px', display: 'flex' }}>
              <CgProfile style={{ fontSize: '4vh', margin: 'auto', marginLeft: '10px' }} />
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{users[usrId].nick}</p>
              <MdAdd style={{ fontSize: '4vh', margin: 'auto', marginRight: '10px', color: 'black' }} />
            </div>
          }
        </div>}

        <div style={{ padding: '5vh', textAlign: 'justify', fontSize: '20px', overflowY: 'scroll', maxHeight: '600px', width: '100%' }}>
          {tr}
        </div>
      </div>}

      {
        showEditor && <div style={{ minHeight: '800px' }}>
          <div style={{ display: 'flex' }}>
            <Button
              fun={() => { { setShowEditor(false); funkcja(true) } }}
              width_p={'25%'}
              marginesTop={'15px'}
              margines={'50px'}
              text={"Cofnij"}

            />
            <input style={{ fontSize: '30px', width: '100%', margin: '20px', borderRadius: '12px', border: '1px solid black', textAlign: 'center' }}
              defaultValue={tytul}
              onChange={e => setTytul(e.target.value)}
            />
            <DatePicker selected={startDate} onChange={setStartDate} />
            <input
              style={{ borderRadius: '12px', fontSize: '20px', height: '30px', margin: 'auto', marginRight: '50px', width: '50px', textAlign: 'center' }}
              type="number"
              name="age"
              defaultValue={prior}
              min={1}
              max={10}
              onChange={e => setPriorytet(e.target.value)}
            />
          </div>
          <div style={{ backgroundColor: 'white', padding: '2px', width: '90%', margin: 'auto' }}>
            <TextEditor setValue={setValue} tresc={tr} fun={setNewText} />
          </div>
          <input style={{ borderRadius: '6px', fontSize: '20px', width: '90%', marginTop: '10px' }} defaultValue={tagi} />
          <Button
            //fun={() => {setShowEditor(false)}}
            fun={() => { { handleOnClick(); funkcja(true); setShowEditor(false) } }}
            width_p={'15%'}
            marginesTop={'15px'}
            margines={'auto'}
            text={"Edytuj"}
          />
        </div>
      }
    </div>
  )
}

export default BigTask;