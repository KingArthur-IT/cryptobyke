//contact form
document.querySelector('.footer__contact-btn')?.addEventListener('click', () => {
    const contactModal = document.querySelector('.contact-modal');
    contactModal.classList.add('modal-display');
    setTimeout(() => {
      contactModal.classList.add('modal-visible');
    }, 100);
});
  
const closeContactModal = () => {
    const modal = document.querySelector(`.contact-modal`);
    modal.classList.remove('modal-visible');
    setTimeout(() => {
      modal.classList.remove('modal-display');
    }, 300);
};
document.querySelector('.contact-modal')?.addEventListener('click', () => closeContactModal());
document.querySelector('.contact-modal__close')?.addEventListener('click', () => {closeContactModal()});
  
//send msg
let formName = '',
    isFormNameValid = false,
    formEmail = '',
    isFormEmailValid = false,
    formMessage = '',
    isFormMessageValid = false;
const submitBtn = document.querySelector('.contact-modal__btn');
const changeSubmitState = () => {
    if (isFormEmailValid && isFormMessageValid && isFormNameValid)
        submitBtn.classList.add('active')
    else
        submitBtn.classList.remove('active');
}

document.getElementById('contact-form-name')?.addEventListener('input', (e) => {
    formName = e.target.value;
    isFormNameValid = formName.length > 3;
    changeSubmitState();
});
document.getElementById('contact-form-email')?.addEventListener('input', (e) => {
    formEmail = e.target.value;
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isFormEmailValid = re.test(formEmail);
    changeSubmitState();
});
document.getElementById('contact-form-msg')?.addEventListener('input', (e) => {
    formMessage = e.target.value;
    isFormMessageValid = formMessage.length > 10;
    changeSubmitState();
});
  
const clearForm = () => {
    document.getElementById('contact-form-name').value = '';
    document.getElementById('contact-form-email').value = '';
    document.getElementById('contact-form-msg').value = '';
    formName = '';
    isFormNameValid = false;
    formEmail = '';
    isFormEmailValid = false;
    formMessage = '';
    isFormMessageValid = false;
    submitBtn.classList.remove('active');
};

const openWaitingMessageBox = () => {
    const msgBox = document.querySelector('.contact-modal__message-box');
    msgBox.classList.add('loading');
    msgBox.classList.add('visible');
};

const closeMessageBox = (text) => {
    const msgBox = document.querySelector('.contact-modal__message-box');

    msgBox.innerHTML = text;
    msgBox.classList.remove('loading');
    setTimeout(() => {
        msgBox.classList.remove('visible');
        setTimeout(() => {
            closeContactModal();
            clearForm();
        }, 1000);
    }, 1000);
};


document.getElementById('contact-form').onsubmit = async (e) => {
    e.preventDefault();
    
    if (isFormEmailValid && isFormMessageValid && isFormNameValid){
        const formData = new FormData();
        formData.append('name', formName);
        formData.append('email', formEmail);
        formData.append('message', formMessage);

        openWaitingMessageBox();

        await fetch('./php/mail.php', {
          method: 'POST',
          body: formData
        })
        .then((res) => {
            // let result = await response.json();
            console.log(res);
            if (res.status === 200)
                closeMessageBox('Message sended successfully');
            else
                closeMessageBox('Message sended failed');
        })  
        .catch((e) => {
            console.log(e);
            closeMessageBox('Message sended failed');
        });
    }
};
