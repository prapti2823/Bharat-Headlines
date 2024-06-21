import React from 'react'
import { Row } from 'react-bootstrap'
import { Github, Instagram, Linkedin, Whatsapp } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Footer = () => {

    const socialMedia = [
        {
            id: 1,
            link: 'https://github.com/prapti2823',
            icon: <Github fontSize={25} />,
        },
        {
            id: 2,
            link: 'https://www.linkedin.com/in/prapti-shah-998535252/',
            icon: <Linkedin fontSize={25} />,
        },
        {
            id: 3,
            link: 'https://www.instagram.com/_prapti_shah/',
            icon: <Instagram fontSize={25} />,
        },
        {
            id: 4,
            link: 'https://api.whatsapp.com/send/?phone=918155920951&text&type=phone_number&app_absent=0',
            icon: <Whatsapp fontSize={25} />,
        },
    ]

    return (
        <div>
            <footer>
                <div className='flex flex-col justify-center align-items-center p-2 bg-gray-300'>
                    <Row className='m-2 pb-2 text-white max-sm:pb-0'>
                        Designed and Developed By Prapti Shah 🖤
                    </Row>
                    <Row className='pt-2 max-sm:pt-0'>
                        <div className='flex justify-center'>
                            {socialMedia && socialMedia.map((item, id) => (
                                <Link to={item.link} target='_blank' className='p-3' key={id}>{item.icon}</Link>
                            ))}
                        </div>
                    </Row>
                </div>
            </footer>
        </div>
    )
}

export default Footer
