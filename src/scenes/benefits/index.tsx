import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { BenefitType } from '@/shared/types';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphics from "@/assets/BenefitsPageGraphic.png";


const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2}
  }
}

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description: "Elevate your workout with top-tier gym equipment. Unleash your potential in our state-of-the-art fitness space, where excellence meets exercise innovation."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Discover 100+ diverse fitness classes for all levels. Elevate your wellness with dynamic workouts led by expert instructors. Join us!"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Elevate your fitness with expert and pro trainers. Experience personalized guidance for optimal results on your wellness journey. Train like a pro"
  },
]


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benfits = ({
  setSelectedPage
}: Props) => {
  return (
    <section id={SelectedPage.Benefits} className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div className="md:w-3/5 md:my-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.2 }} variants={{
            hidden: { opacity: 0, x: -100 },
            visible: {opacity:1, x: 0}
          }}>
          <HText>More than just a Gym</HText>
          <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. we provide true care into each and every member.</p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {
            benefits.map((benefit: BenefitType, index: number) => (
              <Benefit key={index} title={benefit.title} icon={benefit.icon} description={benefit.description} setSelectedPage={setSelectedPage} />
            ))
          }
        </motion.div>
        <div className='md:flex items-center justify-between gap-20 md:my-28'>
          <motion.img className='mx-auto' alt="benefts-page-graphics" src={BenefitsPageGraphics} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.2 }} variants={{
            hidden: { opacity: 0, x: -100 },
            visible: {opacity:1, x: 0}
          }} />
          <motion.div className="md:basis-1/2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.2 }} variants={{
            hidden: { opacity: 0, x: 200 },
            visible: {opacity:1, x: 0}
          }}>
            <div className="relative">
              <div className="hero">
                <div>
                  <HText>millions of happy members getting <span className="text-primary-500">fit</span></HText>
                </div>
              </div>
            </div>
            <p className='my-5'>
              Join our vibrant community of millions of happy members getting fit and thriving. Experience the joy of wellness with our diverse programs, expert trainers, and state-of-the-art facilities. Whether you're a fitness enthusiast or just starting, find your path to health and happiness.
            </p>
            <p className='mb-5'>
              Discover the support, motivation, and results that have made our community a dynamic force in achieving individual fitness goals. Embrace the journey, join the millions, and transform your life today
            </p>
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
            <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
            </div>
          </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benfits