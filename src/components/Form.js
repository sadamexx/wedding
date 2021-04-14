import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { Container, Form, FormGroup, Button, Label, Input, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { useTranslation } from 'react-i18next';


const Contact = () => {
    const {t, i18n } = useTranslation();
    init("user_C4kO3zHNmEgfDI4XeWzsn");
    const [formInput, setFormInput] = useState({
        user_name: "",
        user_email: '',
        message: ''
    });

    const [isSuccessActive, setSuccessActive] = useState(false);
    const [isFailureActive, setFailureActive] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_t5fxt7f', 'template_j8uehgo', e.target, 'user_C4kO3zHNmEgfDI4XeWzsn')
        .then((result) => {
            setSuccessActive(true)
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            setFailureActive(true)
            console.log(error.text);
        });
    }

    return(
        <Container>
        <Form className="contact-form" onSubmit={sendEmail}>
            <FormGroup>
                <Label>{t('form.name')}</Label>
                <Input type="text" name="user_name"/>
            </FormGroup>

            <FormGroup>
                <Label>{t('form.email')}</Label>           
                <Input type="email" name="user_email" />           
            </FormGroup>

            <FormGroup>      
                <Label>{t('form.message')}</Label>
                <Input type="textarea" name="message"/>
        </FormGroup>

        <FormGroup>
            <Button value="Send" onSubmit>{t('form.submit')}</Button>
            </FormGroup>
        </Form>
       
        
        
        <div className={isSuccessActive ? "p-3 bg-success my-2 rounded" : "d-none"}>            
                <Toast>
                    <ToastHeader>
                        {t('form.toastHeadSuccess')}
                    </ToastHeader>
                    <ToastBody>
                        {t('form.toastBodySuccess')}
                    </ToastBody>
                </Toast>
            </div>
        
            <div className={isFailureActive ? "p-3 bg-warning my-2 rounded" : "d-none" }>
                <Toast>
                <ToastHeader>
                    {t('form.toastHeadFail')}
                </ToastHeader>
                <ToastBody>
                    {t('form.toastBodyFail')}
                </ToastBody>
            </Toast>
            </div>            
        </Container>
    );
};

export default Contact;