import React from 'react'
import Link from './Link'
import github from '../../../server/public/images/github.png'
import linkedin from '../../../server/public/images/linkedin.png'
import mail from '../../../server/public/images/mail.png'

export default function Links() {
  return (
    <footer className="flex flex-row pb-20 mt-7">
      <Link
        name="github"
        link="https://github.com/christelleq"
        image={github}
      />
      <Link
        name="linkedin"
        link="https://linkedin.com/in/christelle-quilang"
        image={linkedin}
      />
      <Link
        name="mail"
        link="mailto:christellequilang@protonmail.com"
        image={mail}
      />
    </footer>
  )
}
