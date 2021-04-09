import react from 'react';
import smiles2 from '../assets/smiles2.jpg';
import { useTranslation } from 'react-i18next';


const Story = () => {
    const {t, i18n } = useTranslation();


    return(
        <div>
            <h1 className='title' style={{textAlign: 'center'}}>Our Story</h1>
            <h3>{t('story.designed')}</h3>
            <br/>
            <h3>{t('story.hesays')}</h3>

        </div>
    );
};

export default Story;