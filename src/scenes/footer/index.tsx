import logo from "@/assets/Logo.png"


const Footer = () => {
  return (
    <section className="bg-primary-100 w-full mt-28 px-20 py-20 flex flex-col gap-12 md:flex-row justify-between">
      <div className="md:basis-2/5">
        <img alt="footer-logo" src={logo} className="mb-5" />
        <p className="mb-5">Founded in 2010, Evogym has been a fitness pioneer since its inception. Our mission is to inspire and empower individuals on their wellness journey, fostering a community where everyone can thrive. With a vision to revolutionize fitness through innovation and inclusivity, Evogrm is committed to providing state-of-the-art facilities, expert guidance, and a supportive environment, making every workout an evolutionary step toward a healthier, happier life.</p>
        <p>&copy; Evogym All Rights Reserved</p>
      </div>

      <div>
        <p className="font-bold mb-3">Links</p>
        <ul>
          <li className="hover:underline">Alternative medicine outlets</li>
          <li className="hover:underline">Visit our Outlets</li>
          <li className="hover:underline">Book an appointment</li>
        </ul>
      </div>
      <div>
        <p className="mb-3">Feel free to reach us anytime of the day</p>
        <p>(+254) 765 989 456</p>
      </div>
    </section>
  )
}

export default Footer