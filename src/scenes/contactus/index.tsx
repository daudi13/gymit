import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import contactusGraphics from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {

  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault();
    }
  }
  return (
    <section id={SelectedPage.ContactUs} className="mx-auto w-5/6 pt-24 pb-22 min-h-full">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* header */}
        <motion.div className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: {opacity:1, x: 0}
          }}
        >
          <HText><span className="text-primary-500">join now</span> to get in shape</HText>
          <p className="my-5">Elevate your fitness with expert and pro trainers. Experience personalized guidance for optimal results on your wellness journey. Train like a pro. Discover 100+ diverse fitness classes for all levels. Elevate your wellness with dynamic workouts led by expert instructors. Join us!</p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div className="mt-10 basis-3/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {opacity:1, y: 0}
          }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              className="gap-8"
              method="POST"
              action="https://formsubmit.co/45230adabd81b40b70c29145d2f62624"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 characterrs."}
                </p>
              )}
              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "pattern" && "invalid email address"}
                </p>
              )}
              <textarea
                
                className={inputStyles}
                rows={4}
                cols={60}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 characterrs."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >Submit</button>
            </form>
          </motion.div>
          <motion.div className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {opacity:1, y: 0}
          }}
          >
            <img alt="yoga" src={contactusGraphics} className="w-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs