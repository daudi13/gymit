import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";


type Props = {
  selectedPage: string,
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean
}

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: Props) => {
  const flexBetween = "flex items-center justify-between"
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav>
      <div
      className={`${flexBetween} ${navBackground} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} />
            {isAboveMediumScreen ? (<div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                </div>
            </div>
            ) :
              (
            <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Bars3Icon className="text-white h-6 w-6"/>
            </button>)
            }
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="flex flex-col ml-[33%] gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar