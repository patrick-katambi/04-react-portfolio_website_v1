import LogoSection from './components/logo'
import MenuLinks from './components/menu_links'
import AboutMe from './components/about_me'

function NavigationBar() {
  return (
    <div className="h-[80px] w-full px-[5vw] bg-primary text-accent font-codeMedium flex flex-row justify-between items-center">
      {/* <LogoSection /> */}
      <div></div>
      <div className="flex flex-row items-center gap-x-8 text-sm font-codeLight">
        {/* <MenuLinks /> */}
        {/* <AboutMe /> */}
      </div>
    </div>
  );
}

export default NavigationBar
