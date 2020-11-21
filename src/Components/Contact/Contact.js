import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Contact.css'
import { Button } from '@material-ui/core'

function Contact() {

    // const [msg, setMsg] = useState('none');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div id="contact" className="contact">
            
            <h4>Contacts</h4>      
            <h2>Get in touch</h2> 
            <form name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLScsNNJZ7MDbsRw2kCZN5Dth15CA3ASahtayiOZZtQ9j-9uahA/formResponse?" target="hidden_iframe">
                <br/>
                <div className="contact_input">
                    <TextField  style={{backgroundColor: '#330014'}}  InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <AccountCircle className="contact_icons"/>
                                                </InputAdornment>
                                            ),
                                            }} variant="outlined" label="Name" color="secondary" className="name" type="text" name="entry.1036668568" id="entry.1036668568" placeholder="Name"/><br/>
                    <TextField  style={{backgroundColor: '#330014'}}  InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <AlternateEmailIcon className="contact_icons"/>
                                                </InputAdornment>
                                            ),
                                            }} variant="outlined" label="Email" color="secondary" className="email" type="text" name="entry.645664935" id="entry.645664935" placeholder="Email"/> <br/>
                    <TextField  style={{backgroundColor: '#330014'}}  InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <ModeCommentIcon className="contact_icons"/>
                                                </InputAdornment>
                                            ),
                                            }} variant="outlined" label="Type Message" multiline rows={4} color="secondary" className="message" type="text" name="entry.601596778" id="entry.601596778" placeholder="Type Message.."/><br/>
                    <Button ariant="outlined" type="submit" value="Submit" onClick={handleClickOpen}>Send</Button>
                </div>
                {/* <div style={{display: `${msg}`}} className="message_sent">
                    <h2>Message Sent Succeessfully</h2>
                </div> */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth={'xs'}
                >
                    <DialogContent className="contacts_dialog">
                    <DialogContentText id="alert-dialog-description">
                        Message Sent Successfully
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button className="dialog_button" onClick={handleClose} color="primary">
                        Close
                    </Button>
                    </DialogActions>
                </Dialog>
                
            </form>

            <div className="social">
                <div className="social_left">
                    <a href="mailto:gayathrysuresh2000@gmail.com" className="mail">
                        <div className="icon_container"><EmailIcon /></div>
                        <h5>gayathrysuresh2000@gmail.com</h5>
                    </a>
                    <a href="tel:919746146820" className="phone">
                        <div className="icon_container"><PhoneInTalkIcon /></div>
                        <h5>+91 9746146820</h5>
                    </a>
                    <a href="https://www.google.co.in/maps/search/+OKKAL+P.O,+KALADY,+Ernakulam,+Kerala/@10.1565534,76.4409899,15z/data=!3m1!4b1" target="blank" rel="noopener noreferrer" className="address">
                        <div className="icon_container"><RoomIcon /></div>
                        <h5>THOPPIL HOUSE, OKKAL P.O, <br/> KALADY, ERNAKULAM, KERALA</h5>
                    </a>
                </div>
                <div className="social_right">
                    <a href="https://www.instagram.com/gayathry_17/" target="_blank" rel="noopener noreferrer" className="social_container">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.pinterest.com/gayathrysuresh2000/" target="_blank" rel="noopener noreferrer" className="social_container">
                        <PinterestIcon />
                    </a>
                    <a href="https://github.com/Gayathry17" target="_blank" rel="noopener noreferrer" className="social_container">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/gayathry-s-a364071aa" target="_blank" rel="noopener noreferrer" className="social_container">
                        <LinkedInIcon />
                    </a>

                </div>
            </div>

            <div className="footer">
                {/* <h3>Made with<span> 💖 </span>by Hemanth R</h3> */}
                <h3>Copyright <span className="copyright"> © </span> {new Date().getFullYear()} | Gayathry<span className="heart"> ❤ </span></h3>
            </div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>

        <iframe className="iframe" title="contact" name="hidden_iframe" id="hidden_iframe"></iframe>
        </div>
    )
}

export default Contact

//https://docs.google.com/forms/d/e/1FAIpQLScsNNJZ7MDbsRw2kCZN5Dth15CA3ASahtayiOZZtQ9j-9uahA/

// https://docs.google.com/forms/d/e/1FAIpQLScsNNJZ7MDbsRw2kCZN5Dth15CA3ASahtayiOZZtQ9j-9uahA/viewform?usp=pp_url&entry.1036668568=hemanth&entry.645664935=hemanthrt18@gmail.com&entry.601596778=hello