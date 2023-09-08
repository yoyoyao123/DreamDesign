import React, { useState } from 'react'
import {  Drawer, Menu,} from 'antd';
import {  MenusItem } from '../../data';
import { useNavigate } from "react-router-dom";


function Drawers({open,setOpen}) {
  const navigate = useNavigate();

  const HandleClick = (item)=>{
    navigate(item.key)

  }

        const showDrawer = () => {
          setOpen(true);
        };
       
        const onClose = () => {
          setOpen((curent)=>!curent);
        };

  return (
    <div>
      <Drawer
        placement="top"
        width={350}
        onClose={onClose}
        open={open}
      >
       <Menu
       mode = "inline"
       items = {MenusItem}
       onClick ={HandleClick}
       />
      </Drawer>

    </div>
  )
}

export default Drawers