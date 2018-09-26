import styled from 'styled-components'

import avatar from '../../images/avatar.jpg'

export const Hero = styled.section`
  position: relative;
  border-top: 10px solid #676767;
  background: #eeeeee;
  height: 275px;
  overflow: hidden;
  color: #fff;
  display: flex;
  justify-content: center;
`

export const Tag = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 200px;
  color: #fff;
  bottom: -40%;
  position: relative;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 130px;
    bottom: -60%;
  }
  @media (max-width: 400px) {
    font-size: 100px;
    bottom: -70%;
  }
`

export const Avatar = styled.img.attrs({
  src: avatar,
})`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -85px;
  margin-top: -85px;
  border-radius: 100%;
  border: 3px solid #fff;
  width: 170px;
  height: 170px;
  z-index: 1;
`
