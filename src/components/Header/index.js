import React from 'react';
import { sucessColor, primaryColor } from '../../config/colors';
import { Nav } from './styled';
import { FaUser, FaHome, FaSignOutAlt } from 'react-icons/fa'

export default function Header(){
  return (
    <Nav>
      <a href=""><FaHome size='30px' color={sucessColor}/></a>
      <a href=""><FaUser size='20px'/></a>
      <a href=""><FaSignOutAlt size='20px'/></a>
    </Nav>

  )
}