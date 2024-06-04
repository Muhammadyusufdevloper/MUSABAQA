import { useState } from 'react';
import './Catalog.scss';
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from 'react-icons/io';
import menuItems from '../../static';

const Catalog = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuItemMouseEnter = (index) => {
        setActiveMenu(index);
    };

    const handleMenuMouseLeave = () => {
        setActiveMenu(null);
    };
    return (
        <div className="catalog">
            <div className="catalog__dropdown-menu" onMouseLeave={handleMenuMouseLeave}>
                {menuItems?.map((item, index) => (
                    <div key={index} className="catalog__menu-item" onMouseEnter={() => handleMenuItemMouseEnter(index)}>
                        <div className='catalog__menu-item__card'>
                            <p>{item.title}</p>
                            {activeMenu === index ? <IoIosArrowRoundForward /> : <IoIosArrowRoundDown />}
                        </div>
                        {activeMenu === index && (
                            <div className="catalog__submenu">
                                <div className='catalog__submenu__wrapper'>
                                    <div className='catalog__submenu__boxes'>
                                        {item.submenu.map((subitem, subindex) => (
                                            <div key={subindex} className="catalog__submenu-item">
                                                <p>{subitem}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
