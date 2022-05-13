import React from 'react'
import Button from './Button'
import {FaUserPlus,FaUsers} from "react-icons/fa"
import {IoClose} from "react-icons/io5"

const BigTask = () => {
  return (
    <div style={{border:'1px solid black', width: '70%', margin:'auto', marginTop:'6vh',height:'800px'}}>
      <div style={{display:'flex',padding:'2vh'}}>
        <Button
          width_p={'5%'}
          marginesTop={'auto'}
          margines={'20px'}
          text={"Edytuj"} />
        <FaUserPlus style={{fontSize:'4vh', margin:'10px', marginTop:'auto', marginBottom:'auto', width:'10%'}}/>
        <FaUsers style={{fontSize:'4vh', margin:'10px', marginTop:'auto', marginBottom:'auto', width:'10%'}}/>
        <h1 style={{margin:'auto',marginRight:'10px', width:'100%'}}>Tytuł</h1>
        <h1 style={{margin:'auto',marginRight:'20px', width:'15%'}}>Data</h1>
        <IoClose style={{fontSize:'5vh', margin:'auto',marginRight:'20px', width:'10%'}}/>
      </div>
      <div style={{padding:'5vh', textAlign:'justify', fontSize:'20px'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Egestas egestas fringilla phasellus faucibus scelerisque. Augue lacus viverra vitae congue eu consequat ac. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Morbi blandit cursus risus at ultrices. Iaculis urna id volutpat lacus. Orci sagittis eu volutpat odio. Neque viverra justo nec ultrices dui. Sit amet nulla facilisi morbi tempus. Diam phasellus vestibulum lorem sed risus ultricies tristique. Ultrices eros in cursus turpis massa tincidunt. Dictum at tempor commodo ullamcorper a. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Nulla facilisi cras fermentum odio eu feugiat. Amet justo donec enim diam vulputate ut pharetra sit. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Ultrices neque ornare aenean euismod elementum nisi. Placerat vestibulum lectus mauris ultrices eros in. Facilisis volutpat est velit egestas dui id ornare arcu. Elementum integer enim neque volutpat ac tincidunt vitae semper. Semper risus in hendrerit gravida rutrum quisque non tellus. Arcu dictum varius duis at consectetur lorem donec massa. Ipsum dolor sit amet consectetur. Scelerisque viverra mauris in aliquam sem fringilla ut. Lacus laoreet non curabitur gravida arcu ac tortor. Lacus suspendisse faucibus interdum posuere lorem ipsum.
      </div>
    </div>
  )
}

export default BigTask