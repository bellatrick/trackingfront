import styled from "styled-components";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;


const Track = styled.div`
height: 30px;
background-color: teal;
color: white;
font-size: 14px;
font-weight: 500;
flex: 1;
display: flex;
align-items: center;
`;
const Email = styled.div`
height: 30px;
background-color: teal;
color: white;
font-size: 14px;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
`;
const Number = styled.div`
height: 30px;
background-color: teal;
color: white;
font-size: 14px;
font-weight: 500;
flex: 1;
display: flex;
align-items: center;
`


const Announcement = () => {
  return (
    <Container>
       <Track>
         TRACK ONLINE 
         <ArrowForwardIcon />
         Track your parcel online
         </Track>
       <Email>
         < MailOutlineOutlinedIcon  />
         contact@fleetwoodscouriers.com
         </Email>
       <Number>
         <PhoneIphoneIcon  />
         +1 (678) 561‑2614
         </Number>
    </Container>

  )};

export default Announcement;