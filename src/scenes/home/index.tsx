import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import HomePageText from "@/assets/HomePageText.png"
import HomePageGrahic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import useMediaQuery from '@/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
  return (
    <section
      id={SelectedPage.Home}
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div className="md:-mt-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.2 }} variants={{
            hidden: { opacity: 0, x: -100 },
            visible: {opacity:1, x: 0}
          }}>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Experience unparalleled fitness at our unrivaled gym with world-class studios and training classes, designed to help you achieve the body shape you've always dreamed of. Achieve your dream body now
            </p>
          </motion.div>
        <motion.div className="mt-8 flex items-center gap-8 md:justify-start" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{delay: 0.3, duration: 1.2 }} variants={{
            hidden: { opacity: 0, x: -100 },
            visible: {opacity:1, x: 0}
          }}>
          <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
          <AnchorLink className="text-sm font-bold text-primary-500 hover:text-secondary-500" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
            <p>Learn more</p>
          </AnchorLink>
        </motion.div>
        </div>
        <motion.div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.2 }} variants={{
          hidden: { opacity: 0, x: 200 },
          visible: {opacity: 1, x: 0}
        }}>
          <img alt="home-page-graphics" src={HomePageGrahic} />
        </motion.div>
      </motion.div>
      {/* SPONSORS */}
      {
        isAboveMediumScreen && (
          <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-8">
                <img alt="red-bull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </div>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Home