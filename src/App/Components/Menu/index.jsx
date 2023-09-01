import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { RoundImage } from '../RoundImage';

export const Menu = () => {
    return (
        <div className="header-menu">
            <SettingIcon />
            <RoundImage />
            <p className="osoba">
                <span>Krzysztof</span>
                <span>kursant</span>
            </p>
        </div>
    );
};


