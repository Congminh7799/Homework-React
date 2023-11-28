import Link from '../../../types/Link';
import Logo from './logo';
import Nav from './nav';

const Navigation = ({ navigation }: { navigation: Link[] }) => {
  return (
    <header className="text-white bg-orange-500 body-font border-b-2 font-bold">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo
          label='Minh Shop'
          href="/home"
        />

        <Nav
          links={navigation}
        />
      </div>
    </header>
  );
};

Navigation.defaultProps = {};

export default Navigation;
