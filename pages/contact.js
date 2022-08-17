import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { getSocialsAndContact } from '../services';
import { Footer, Socials } from '../components'
import ContactDetails from '../components/ContactDetails';




const contact = ({ socials }) => {
  // console.log(socials.contactInformationsConnection.edges);
  return (
    <div>
      <Head>
        <title>Contact- Lumen</title>
      </Head>
      <div className={styles.navbar}>
          <Navbar />
      </div>
    <div className={styles.contactSection} >
      <p className={styles.contactPrompt}>We love hearing from our readers. Please, feel free to reach out to us at:  </p>
      <div className={styles.contactLinksWrapper}>
        {socials.contactInformationsConnection.edges.map((contact) => <div className={styles.contactLinks}><ContactDetails contact={contact.node} key={contact.title} /> </div>)}
      </div>
      </div>

      <div className={styles.footerSectionWrapper}>
        <div className={styles.socialsSectionWrapper}>
          <h4 className={styles.socialsHeader}>Connect with us on Social Media —</h4>
          <div className={styles.socialLinksWrapper}>
            {socials.socialsConnection.edges.map((social) => <div className={styles.socialLinks}><Socials social={social.node} key={social.title} /> </div>)}
          </div>
          <hr />
        </div>
        <Footer />
      </div>
    
    </div>
  )
}

export default contact
export async function getStaticProps() {
  const socials = (await getSocialsAndContact()) || [];

    return {
        props: { socials }
    }

}