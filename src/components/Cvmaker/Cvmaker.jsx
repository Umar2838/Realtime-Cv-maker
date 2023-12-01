import React, { useRef, useState } from 'react'
import ButtonAppBar from '../Navbar/Navbar'
import "./Cvmaker.css"
import { circularProgressClasses } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CakeIcon from '@mui/icons-material/Cake';
import HouseIcon from '@mui/icons-material/House';
import BoyIcon from '@mui/icons-material/Boy';
import WcIcon from '@mui/icons-material/Wc';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FeedIcon from '@mui/icons-material/Feed';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { LocationCity } from '@mui/icons-material';
const Cvmaker = () => {

  const [Dateshow, setDateshow] = useState(false)
  const [Placeshow, setPlaceshow] = useState(false)
  const [Gendershow, setGendershow] = useState(false)
  const [Nationalityshow, setNationalityshow] = useState(false)
  const [Relegionshow, setRelegionshow] = useState(false)
  const [Statusshow, setStatusshow] = useState(false)
  const [Websiteshow, setWebsiteshow] = useState(false)
  const [Linkdinshow, setLinkdinshow] = useState(false)

  const [CvContent, setCvContent] = useState({
    image: "",
    fullname: "",
    headline: "",
    email: "",
    phone: "",
    address: "",
    postal: "",
    city: "",
    dob: "",
    pob: "",
    gender: "",
    nationality: "",
    relegion: "",
    status: "",
    website: "",
    linkedin: ""
  })

  const phonelimit = 11

  const handleCvContent = (e) => {
    const { name, value } = e.target;
    setCvContent({ ...CvContent, [name]: value });
  };

  const fileInputRef = useRef(null)

  const handleButtonClick = () => {
    fileInputRef.current.click();
  }


  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    const ImageURL = URL.createObjectURL(selectedImage)
    setCvContent({ ...CvContent, image: ImageURL });
  }

  const handleDateOpen = () => {
    setDateshow(true)

  }
  const handlePlaceOpen = () => {
    setPlaceshow(true)

  }
  const handleGenderOpen = () => {
    setGendershow(true)

  }
  const handleNationality = () => {
    setNationalityshow(true)

  }
  const handleRelegion = () => {
    setRelegionshow(true)

  }
  const handleStatus = () => {
    setStatusshow(true)

  }
  const handleWebsite = () => {
    setWebsiteshow(true)

  }
  const handleLinkdin = () => {
    setLinkdinshow(true)

  }

  const handleDateBlur = () => {
    setDateshow(false)


  }
  const handlePlaceBlur = () => {
    setPlaceshow(false)


  }
  const handleGenderBlur = () => {
    setGendershow(false)


  }
  const handleNationalityBlur = () => {
    setNationalityshow(false)

  }
  const handleRelegionBlur = () => {
    setRelegionshow(false)

  }
  const handleStatusBlur = () => {
    setStatusshow(false)

  }
  const handleWebsiteBlur = () => {
    setWebsiteshow(false)

  }
  const handleLinkdinBlur = () => {
    setLinkdinshow(false)

  }

  { console.log(CvContent.fullname) }

  return (
    <div>
      <ButtonAppBar />
      <div className="cvmaker-wrapper" >
        <div className="cvmaker-form">
          <h2>Personal Details</h2>
          <div className="cvmaker-input" >

            <input style={{ display: "none" }} ref={fileInputRef} onChange={handleImage} type="file" id="fileInput" accept="image/*" />
            <div className="pic" onClick={handleButtonClick} ><CameraAltIcon className='camera' /></div>
            <div>
              <p className="input-text">Fullname:</p>
              <input className="cv-input" name="fullname" onChange={handleCvContent} value={CvContent.fullname} type="text" />
            </div>
            <div>
              <p className="input-text">Headline:</p>
              <input className="cv-input" name="headline" onChange={handleCvContent} value={CvContent.headline} type="text" />
            </div>
            <div>
              <p className="input-text">Email Address:</p>
              <input className="cv-input" name="email" onChange={handleCvContent} value={CvContent.email} type="email" />
            </div>
            <div>
              <p className="input-text">Phone Number:</p>
              <input className="cv-input" name="phone" maxLength={11} onChange={handleCvContent} value={CvContent.phone} type="number" />
            </div>
            <div>
              <p className="input-text">Address:</p>
              <input className="cv-input" name="address" onChange={handleCvContent} value={CvContent.address} type="text" />
            </div>
            <div>
              <p className="input-text">Postal Code:</p>
              <input className="cv-input" name="postal" onChange={handleCvContent} value={CvContent.postal} type="number" />
            </div>
            <div>
              <p className="input-text">City:</p>
              <input className="cv-input" name="city" onChange={handleCvContent} value={CvContent.city} type="text" />
            </div>

            {Dateshow ? <div>
              <p className="input-text">Date of birth</p>
              <input className="cv-input" name="dob" onChange={handleCvContent} value={CvContent.dob} onBlur={handleDateBlur} type="date" />
            </div>
              :
              <div>
                <div className="cv-input " onClick={handleDateOpen} style={{ marginTop: "24px" }}><AddIcon className='add-icon' /> Date of birth</div>
              </div>
            }
            {Placeshow ? <div>
              <p className="input-text">Place of birth</p>
              <input className="cv-input" name="pob" onBlur={handlePlaceBlur} onChange={handleCvContent} value={CvContent.pob} type="text" />
            </div>
              :
              <div>
                <div className="cv-input " onClick={handlePlaceOpen} style={{ marginTop: "24px" }}><AddIcon className='add-icon' /> Palce of birth</div>
              </div>
            }
            {Gendershow ? <div>
              <p className="input-text">Gender</p>
              <input className="cv-input" name="gender" onBlur={handleGenderBlur} onChange={handleCvContent} value={CvContent.gender} type="text" />
            </div>
              :
              <div>
                <div className="cv-input " onClick={handleGenderOpen} style={{ marginTop: "24px" }}><AddIcon className='add-icon' /> Gender</div>
              </div>
            }
            {Nationalityshow ? <div>
              <p className="input-text">Nationality</p>
              <input className="cv-input" name="nationality" onBlur={handleNationalityBlur} onChange={handleCvContent} value={CvContent.nationality} type="text" />
            </div>
              :
              <div>
                <div className="cv-input " onClick={handleNationality} style={{ marginTop: "24px" }}><AddIcon className='add-icon' /> Nationality</div>
              </div>
            }
            {Relegionshow ? <div>
              <p className="input-text">Relegion</p>
              <input className="cv-input" name="relegion" onChange={handleCvContent} value={CvContent.relegion} onBlur={handleRelegionBlur} type="text" />
            </div>
              :
              <div>
                <div className="cv-input " onClick={handleRelegion} style={{ marginTop: "24px" }}><AddIcon className='add-icon' /> Relegion</div>
              </div>
            }
            {Statusshow ? <div>
              <p className="input-text">Civil Status</p>
              <input className="cv-input" name="status" onChange={handleCvContent} value={CvContent.status} onBlur={handleStatusBlur} type="text" />
            </div>
              :
              <div>
                <div className="cv-input " onClick={handleStatus} style={{ marginTop: "24px" }}><AddIcon className='add-icon' /> Civil Status</div>
              </div>
            }
            {Websiteshow ? <div>
              <p className="input-text">Website</p>
              <input className="cv-input" name="website" onChange={handleCvContent} value={CvContent.website} onBlur={handleWebsiteBlur} type="text" />
            </div>
              :
              <div>
                <div className="cv-input " onClick={handleWebsite} style={{ marginTop: "24px" }}><AddIcon className='add-icon' /> Website</div>
              </div>
            }
            {Linkdinshow ? <div>
              <p className="input-text">LinkedIn</p>
              <input className="cv-input" name="linkedin" onChange={handleCvContent} value={CvContent.linkdin} onBlur={handleLinkdinBlur} type="text" />
            </div>
              :
              <div>
                <div className="cv-input " onClick={handleLinkdin} style={{ marginTop: "24px" }}><AddIcon className='add-icon' /> LinkedIn</div>
              </div>
            }

          </div>

          <h2>Education</h2>
        </div>
        <div className="cvpreview-wrapper">
<div className="cv-header">
  <h1>{CvContent.fullname}</h1>
  <hr/>
  <h3>{CvContent.headline}</h3>
  <hr/>
</div>
          <div className="cv-left-bar">
            <div>
              <img className="show-img" src={CvContent.image} alt="" />

              <div className="contact-header">
                <div>
                  <h6>P-Information</h6>
                </div>

                <div>
                  <FeedIcon className='contact-icon' />
                </div>
              </div>
              <hr  className="h-line" />
              <div className="contact-data">
                <p><CakeIcon className='phone-icon' />{CvContent.dob}</p>
                <p><HouseIcon className='phone-icon' />{CvContent.pob}</p>
                <p><BoyIcon className='phone-icon' />{CvContent.gender}</p>
                <p><WcIcon className='phone-icon' />{CvContent.status}</p>
                <p><MarkAsUnreadIcon className='phone-icon' />{CvContent.postal}</p>
                <p><LocationCity className='phone-icon' />{CvContent.city}</p>
                
              </div>

              <div className="contact-header">
                <div>
                  <h6>Contact</h6>
                </div>

                <div>
                <PersonIcon className='contact-icon' />
                 
                </div>
              </div>
              <hr className="h-line" />
              <div className="contact-data">
                <p><PhoneIcon className='phone-icon' />{CvContent.phone}</p>
                <p><EmailIcon className='phone-icon' />{CvContent.email}</p>
                <p><LocationOnIcon className='phone-icon' />{CvContent.address}</p>
                <p><LanguageIcon className='phone-icon' />{CvContent.website}</p>
                <p><LinkedInIcon className='phone-icon' />{CvContent.linkdin}</p>

              </div>

              <div className="contact-header">
                <div>
                  <h6>Skills</h6>
                </div>

                <div>
                  <WorkspacePremiumIcon className='contact-icon' />
                </div>
              </div>
              <hr className="h-line" />
              <div className="contact-data">
                <p><PhoneIcon className='phone-icon' />{CvContent.phone}</p>
                <p><EmailIcon className='phone-icon' />{CvContent.email}</p>
                <p><LocationOnIcon className='phone-icon' />{CvContent.address}</p>
                <p><LanguageIcon className='phone-icon' />{CvContent.website}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cvmaker











