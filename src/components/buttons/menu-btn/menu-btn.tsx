import { ReactElement } from 'react';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import './menu-btn.scss';

interface IMenuBtnProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (menuStatus: boolean) => void;
}
const MenuBtn = ({
  isMenuOpen,
  setIsMenuOpen,
}: IMenuBtnProps): ReactElement => {
  return (
    <div
      className="menu-container__btn"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? (
        <Close className="btn-icon" />
      ) : (
        <MenuIcon className="btn-icon" />
      )}
    </div>
  );
};

export default MenuBtn;
