import React, {useState,useRef} from "react";

import JoditEditor from "jodit-react";

const TextEditor =({setValue,tresc})=>{

  const [content, setContent] = useState(tresc);

  const editor =useRef(null);
  return <JoditEditor 
    ref={editor}
    value={content}
    tabIndex={1} 
    onBlur={(newContent) => setContent(newContent)}
    onChange={(newContent) => {}}
  />
}
export default TextEditor