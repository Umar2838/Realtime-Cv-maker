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
import AddBoxIcon from '@mui/icons-material/AddBox';
import profile from "../../assets/th.png"
import WorkIcon from '@mui/icons-material/Work';
import { LocationCity } from '@mui/icons-material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
const Cvmaker = () => {

  const [Dateshow, setDateshow] = useState(false)
  const [Gendershow, setGendershow] = useState(false)
  const [Statusshow, setStatusshow] = useState(false)
  const [Websiteshow, setWebsiteshow] = useState(false)
  const [Linkdinshow, setLinkdinshow] = useState(false)
  const [showpersonaldetails, setShowPersonalDetails] = useState(true)
  const [hidepersonaldetails, setHidePersonalDetails] = useState(true)
  const [showeducationdetails, setShowEducationDetails] = useState(true)
  const [hideeducationdetails, setHideEducationDetails] = useState(true)
  const [showeprofessionaldetails, setShowProfessionalDetails] = useState(true)
  const [hideprofessionaldetails, setHideProfessionalDetails] = useState(true)
  const [showworkexperience,setShowWorkexperience] = useState(true)
  const [hideworkexperience,setHideWorkexperience] = useState(true)
  const [moreducation,setmoreeducation] = useState(true)
  const [isChecked,setIsChecked] = useState(false)
  const [workisChecked,setWorkIsChecked] = useState(false)
  const [workpresent,setWorkpresent] = useState("")
  const [graduatepresent,setgraduatepresent] = useState("")
  const [disableYearSelect, setDisableYearSelect] = useState(false);
  const [disableWorkYearSelect, setDisableWorkYearSelect] = useState(false);



  const [CvContent, setCvContent] = useState({
    image: "",
    fullname: "",
    headline: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    dob: "",
    gender: "",
    status: "",
    website: "",
    linkedin: "",
    school:"",
    schoolcity:"",
    degree:"",
    fieldstudy:"",
    graduationdate:"",
    year:"",
    profdetails:"",
    jobposition:"",
    campanyname:"",
    joblocation:"",
    startyear:"",
    endyear:"",
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

  const handlepersonaldetails = ()=>{
setShowPersonalDetails(false)
setHidePersonalDetails(false)
  }
  const handlehidepersonalDetails = () =>{
    setShowPersonalDetails(true)
    setHidePersonalDetails(true)
  }
  const handleEducationdetails = ()=>{
    setShowEducationDetails(false)
    setHideEducationDetails(false)
      }
      const handlehideEducationDetails = () =>{
        setShowEducationDetails(true)
        setHideEducationDetails(true)
      }
      const handleProfessionaldetails = ()=>{
     setShowProfessionalDetails(false)
     setHideProfessionalDetails(false)
          }
          const handlehideProfessionalDetails = () =>{
            setShowProfessionalDetails(true)
            setHideProfessionalDetails(true)
          }

          const handleWorkExperience = ()=>{
            setShowWorkexperience(false)
            setHideWorkexperience(false)
                 }
                 const handlehideWorkExperience = () =>{
                   setShowWorkexperience(true)
                   setHideWorkexperience(true)
                 }

  const handleDateOpen = () => {
    setDateshow(true)

  }
  const handleGenderOpen = () => {
    setGendershow(true)

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
  const handleGenderBlur = () => {
    setGendershow(false)


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
 

  const handleChecked = (event) =>{
    setIsChecked(event.target.checked);
    setDisableYearSelect(event.target.checked); 
    setgraduatepresent("present")

   }
     const handleworkChecked = (event) =>{
    setWorkIsChecked(event.target.checked);
    setDisableWorkYearSelect(event.target.checked); 
    setWorkpresent("present")
    
   }

   const handlemoreEducationdetails = () =>{
    setmoreeducation(false)
   }

   const pdfRef = useRef()

const downloadPDF = () =>{
  const input = pdfRef.current;
  html2canvas(input).then((canvas)=>{
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p","mm","a4",true);
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight)
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 30;
    pdf.addImage(imgData , 'PNG' , imgX , imgY ,imgWidth* ratio ,imgHeight * ratio);
    pdf.save("resume.pdf");
  })
}

  return (
    <div>
      <ButtonAppBar />
      <div className="cvmaker-wrapper" >
        <div className="cvmaker-form">
          <div className='personal-details-main'>
<div>
          <h2>Personal Details</h2>
</div>
<div   >
  {hidepersonaldetails ? <AddBoxIcon onClick={handlepersonaldetails} /> : <DisabledByDefaultRoundedIcon onClick={handlehidepersonalDetails} />
}
</div>
          </div>
    
  {showpersonaldetails ? false : 
  
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
              <p className="input-text">City:</p>
              <input className="cv-input" name="city" onChange={handleCvContent} value={CvContent.city} type="text" />
            </div> 

              <div className='open-input'>

            {Dateshow ? <div>
              <p className="input-text">Date of birth</p>
              <input className="cv-input" name="dob" onChange={handleCvContent} value={CvContent.dob} onBlur={handleDateBlur} type="date" />
            </div>
              :
              <div>
                <div className="cv-input " onClick={handleDateOpen} style={{ marginTop: "24px" }}><AddIcon className='add-icon' /> Date of birth</div>
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

          
            </div>
}
<div className='education-main'>
<div>
          <h2>Education</h2>
</div>
{hideeducationdetails ? <AddBoxIcon onClick={handleEducationdetails} /> : <DisabledByDefaultRoundedIcon onClick={handlehideEducationDetails} />}

</div>
{showeducationdetails ? false : 

<div className='education-wrapper'>
<div className='cvmaker-input'>
<div> 
            <p className="input-text">Graduate Degree:</p>
            <div className='graduation-div'>
            <div className='cv-input'>
              <select  value={CvContent.year} name='year' onChange={handleCvContent} disabled={disableYearSelect}>
              <option className="cv-input" value="">Year</option>
              <option className="cv-input" value="2023">2023</option>
              <option className="cv-input" value="2022">2022</option>
              <option className="cv-input" value="2021">2021</option>
              <option className="cv-input" value="2020">2020</option>
              <option className="cv-input" value="2019">2019</option>
              <option className="cv-input" value="2018">2018</option>
              <option className="cv-input" value="2017">2017</option>
              <option className="cv-input" value="2016">2016</option>
              <option className="cv-input" value="2015">2015</option>
              <option className="cv-input" value="2014">2014</option>
              <option className="cv-input" value="2013">2013</option>
              <option className="cv-input" value="2012">2012</option>
              <option className="cv-input" value="2011">2011</option>
              <option className="cv-input" value="2010">2010</option>
              <option className="cv-input" value="2009">2009</option>
              <option className="cv-input" value="2008">2008</option>
              <option className="cv-input" value="2007">2007</option>
              <option className="cv-input" value="2006">2006</option>
              <option className="cv-input" value="2005">2005</option>
              <option className="cv-input" value="2004">2004</option>
              <option className="cv-input" value="2003">2003</option>
              <option className="cv-input" value="2002">2002</option>
              <option className="cv-input" value="2001">2001</option>
              <option className="cv-input" value="2000">2000</option>
              <option className="cv-input" value="1999">1999</option>
              <option className="cv-input" value="1998">1998</option>
              <option className="cv-input" value="1997">1997</option>
              <option className="cv-input" value="1996">1996</option>
              <option className="cv-input" value="1995">1995</option>
              <option className="cv-input" value="1994">1994</option>
              <option className="cv-input" value="1993">1993</option>
              <option className="cv-input" value="1992">1992</option>
              <option className="cv-input" value="1991">1991</option>
              <option className="cv-input" value="1990">1990</option>
              <option className="cv-input" value="1989">1989</option>
              <option className="cv-input" value="1988">1988</option>
              <option className="cv-input" value="1987">1987</option>

              </select>
            </div>
            </div>
           
            </div>
<div>
              <p className="input-text">School/College/University:</p>
              <input className="cv-input" name="school" onChange={handleCvContent} value={CvContent.school} type="text" />
            </div>
            <div>
              <p className="input-text">City/Country:</p>
              <input className="cv-input" name="schoolcity" onChange={handleCvContent} value={CvContent.schoolcity} type="text" />
            </div>
          
<div > 

            <p className="input-text">Select a degree:</p>
            <div className='cv-input'>
              <select  value={CvContent.degree} name='degree' onChange={handleCvContent}>
              <option className="cv-input" value="">Select a degree</option>
              <option className="cv-input" value="High School Diploma">High School Diploma</option>
              <option className="cv-input" value="GED">GED</option>
              <option className="cv-input" value="Associate of Arts">Associate of Arts</option>
              <option className="cv-input" value="Associate of Science">Associate of Science</option>
              <option className="cv-input" value="Associate of Applied Science">Associate of Applied Science</option>
              <option className="cv-input" value="Bachelors of Art">Bachelors of Art</option>
              <option className="cv-input" value="BBA">BBA</option>
              <option className="cv-input" value="Masters of Arts">Masters of Arts</option>
              <option className="cv-input" value="Masters of Science">Masters of Science</option>
              <option className="cv-input" value="MBA">MBA</option>
              <option className="cv-input" value="J.D.">J.D.</option>
              <option className="cv-input" value="M.D.">M.D.</option>
              <option className="cv-input" value="Ph.D.">Ph.D.</option>
              <option className="cv-input" value="Matriculation">Matriculation</option>
              <option className="cv-input" value="Intermediate">Intermediate</option>

              </select>
            </div>
</div>
            <div>
              <p className="input-text">Field of Study:</p>
              <input className="cv-input" name="fieldstudy" onChange={handleCvContent} value={CvContent.fieldstudy} type="text" />
            </div>
            <div>

            </div>
          
            <div>
              <input className='checkbox'  onChange={handleChecked} checked={isChecked}  type='checkbox' />
              <label>Currently present</label>
            </div>
</div>
            <button className='add-edu-btn' onClick={handleEducationdetails}  ><div className='edu-text'><AddBoxIcon className='add-edu-icon'/>Add education</div></button>
</div>



}

<div className='professional-main'>
<div>
          <h2>Professional Details</h2>
</div>
{hideprofessionaldetails ? <AddBoxIcon onClick={handleProfessionaldetails} /> : <DisabledByDefaultRoundedIcon onClick={handlehideProfessionalDetails} />}

</div>

{showeprofessionaldetails ? false : 

<div>
              <p className="input-text">Profession details:</p>
              <textarea className="cv-input prof-input" placeholder='Enter details of 50 words' name="profdetails" onChange={handleCvContent} value={CvContent.profdetails} type="text" />
            </div>

}
<div className='education-main'>
<div>
          <h2>Work experience</h2>
</div>
{hideworkexperience ? <AddBoxIcon onClick={handleWorkExperience} /> : <DisabledByDefaultRoundedIcon onClick={handlehideWorkExperience} />}
</div>


{showworkexperience ? false : 

<div className='education-wrapper'>
<div className='cvmaker-input'>
<div>
              <p className="input-text">Job Position/Title Here:</p>
              <input className="cv-input" name="jobposition" onChange={handleCvContent} value={CvContent.jobposition} type="text" />
            </div>
            <div>
              <p className="input-text">Company name:</p>
              <input className="cv-input" name="campanyname" onChange={handleCvContent} value={CvContent.campanyname} type="text" />
            </div>
          
            <div>
              <p className="input-text">Location:</p>
              <input className="cv-input" name="joblocation" onChange={handleCvContent} value={CvContent.joblocation} type="text" />
            </div>
            <div>

            </div>
            <div> 
            <p className="input-text">Job Duration:</p>
            <div className='graduation-div'>

  <div className='cv-input'>
              <select  value={CvContent.startyear} name='startyear' onChange={handleCvContent} >
              <option className="cv-input" value="">Start Year</option>
              <option className="cv-input" value="2023">2023</option>
              <option className="cv-input" value="2022">2022</option>
              <option className="cv-input" value="2021">2021</option>
              <option className="cv-input" value="2020">2020</option>
              <option className="cv-input" value="2019">2019</option>
              <option className="cv-input" value="2018">2018</option>
              <option className="cv-input" value="2017">2017</option>
              <option className="cv-input" value="2016">2016</option>
              <option className="cv-input" value="2015">2015</option>
              <option className="cv-input" value="2014">2014</option>
              <option className="cv-input" value="2013">2013</option>
              <option className="cv-input" value="2012">2012</option>
              <option className="cv-input" value="2011">2011</option>
              <option className="cv-input" value="2010">2010</option>
              <option className="cv-input" value="2009">2009</option>
              <option className="cv-input" value="2008">2008</option>
              <option className="cv-input" value="2007">2007</option>
              <option className="cv-input" value="2006">2006</option>
              <option className="cv-input" value="2005">2005</option>
              <option className="cv-input" value="2004">2004</option>
              <option className="cv-input" value="2003">2003</option>
              <option className="cv-input" value="2002">2002</option>
              <option className="cv-input" value="2001">2001</option>
              <option className="cv-input" value="2000">2000</option>
              <option className="cv-input" value="1999">1999</option>
              <option className="cv-input" value="1998">1998</option>
              <option className="cv-input" value="1997">1997</option>
              <option className="cv-input" value="1996">1996</option>
              <option className="cv-input" value="1995">1995</option>
              <option className="cv-input" value="1994">1994</option>
              <option className="cv-input" value="1993">1993</option>
              <option className="cv-input" value="1992">1992</option>
              <option className="cv-input" value="1991">1991</option>
              <option className="cv-input" value="1990">1990</option>
              <option className="cv-input" value="1989">1989</option>
              <option className="cv-input" value="1988">1988</option>
              <option className="cv-input" value="1987">1987</option>

              </select>
            </div>
           
            <div className='cv-input'>
              <select  value={CvContent.endyear} name='endyear' onChange={handleCvContent} disabled={disableWorkYearSelect}>
              <option className="cv-input" value="">End Year</option>
              <option className="cv-input" value="2023">2023</option>
              <option className="cv-input" value="2022">2022</option>
              <option className="cv-input" value="2021">2021</option>
              <option className="cv-input" value="2020">2020</option>
              <option className="cv-input" value="2019">2019</option>
              <option className="cv-input" value="2018">2018</option>
              <option className="cv-input" value="2017">2017</option>
              <option className="cv-input" value="2016">2016</option>
              <option className="cv-input" value="2015">2015</option>
              <option className="cv-input" value="2014">2014</option>
              <option className="cv-input" value="2013">2013</option>
              <option className="cv-input" value="2012">2012</option>
              <option className="cv-input" value="2011">2011</option>
              <option className="cv-input" value="2010">2010</option>
              <option className="cv-input" value="2009">2009</option>
              <option className="cv-input" value="2008">2008</option>
              <option className="cv-input" value="2007">2007</option>
              <option className="cv-input" value="2006">2006</option>
              <option className="cv-input" value="2005">2005</option>
              <option className="cv-input" value="2004">2004</option>
              <option className="cv-input" value="2003">2003</option>
              <option className="cv-input" value="2002">2002</option>
              <option className="cv-input" value="2001">2001</option>
              <option className="cv-input" value="2000">2000</option>
              <option className="cv-input" value="1999">1999</option>
              <option className="cv-input" value="1998">1998</option>
              <option className="cv-input" value="1997">1997</option>
              <option className="cv-input" value="1996">1996</option>
              <option className="cv-input" value="1995">1995</option>
              <option className="cv-input" value="1994">1994</option>
              <option className="cv-input" value="1993">1993</option>
              <option className="cv-input" value="1992">1992</option>
              <option className="cv-input" value="1991">1991</option>
              <option className="cv-input" value="1990">1990</option>
              <option className="cv-input" value="1989">1989</option>
              <option className="cv-input" value="1988">1988</option>
              <option className="cv-input" value="1987">1987</option>

              </select>
            </div>
            </div>
           <div>
              <input className='checkbox'  onChange={handleworkChecked} value="present" checked={workisChecked}  type='checkbox' />
              <label>Currently present</label>
            </div>
            </div>
            
</div>
            <button className='add-edu-btn' onClick={handleEducationdetails}  ><div className='edu-text'><AddBoxIcon className='add-edu-icon'/>Add Work</div></button>
</div>



}
        </div>




{/* CV PREVIEWER */}



        <button className='printBtn' onClick={downloadPDF} >Download</button>
        <div ref={pdfRef} className="cvpreview-wrapper">
<div className="cv-header">
  <h1>{CvContent.fullname}</h1>
  <hr/>
  <h3>{CvContent.headline}</h3>
  <hr/>
</div>

<div className='professional-preview' >
  <div className='prof-main' >
  <div>Profession Details</div>
  <div><PersonIcon className='proficon' /></div>
  </div>
  <div className='profdetails' >{CvContent.profdetails}</div>
</div>

<div className='work-preview' >
  <div className='prof-main' >
  <div>Work Experience</div>
  <div><WorkIcon className='proficon' /></div>
  </div>
  <div className='workyear' >
<div  className='vertical-text-work' >{CvContent.startyear}</div>
<div className='vertical-text-work' >{CvContent.endyear || workpresent}</div>
<div className='work-line' ></div>
<div className='work-details'>
<div>{CvContent.jobposition}</div>
  <div>{CvContent.campanyname}</div>
  <div>{CvContent.joblocation}</div>
</div>
  </div>
</div>


          <div className="cv-left-bar">
            <div>
              <img className="show-img" src={CvContent.image || profile  } alt="" />

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
                <p><BoyIcon className='phone-icon' />{CvContent.gender}</p>
                <p><WcIcon className='phone-icon' />{CvContent.status}</p>
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
                <p><LinkedInIcon className='phone-icon' />{CvContent.linkedin}</p>

              </div>

              <div className="contact-header">
                <div>
                  <h6>Education</h6>
                </div>

                <div>
                  <SchoolIcon className='contact-icon' />
                </div>
              </div>
              <hr className="h-line" />
              <div className="eductaion-data">
   
   <div className='edcation-info'>
    <div className='vertical-text' >{CvContent.year || graduatepresent}</div>
<div className='schoolname' >{CvContent.school}</div>

<div className='degreename' >
  <div>{CvContent.degree}</div>
  <div>{CvContent.fieldstudy}</div>
</div>
<div className='schoolCity'>{CvContent.schoolcity}</div>
<div className='schoolCity'>{isChecked}</div>

   <hr/>
   </div>       
              </div>
            

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cvmaker











