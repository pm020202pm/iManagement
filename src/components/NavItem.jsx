import React from 'react'
import {motion} from 'framer-motion'
import './NavItem.css'
function Item({icon, name, onClick}) {
  return (
    <motion.div className='item' onClick={onClick}>
        <motion.div className='icon'>{icon}</motion.div>
        <motion.span>{name}</motion.span>
    </motion.div>
  )
}
export default Item