import React from 'react';
import { sucessColor } from '../../config/colors';
import { Nav } from './styled';
import { FaUser, FaHome, FaSignOutAlt, FaBook } from 'react-icons/fa';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <Nav>
      <Link to="/"><FaHome class="FaHome" size="30px" color={sucessColor}/></Link>
      <Link to="/item"><FaBook class="FaUser" size="20px" /></Link>
      <Link to="/login"><FaUser class="FaUser" size='20px'/></Link>
      <Link to="/loggout"><FaSignOutAlt class="FaSignOutAlt" size='20px'/></Link>
    </Nav>

  )
}