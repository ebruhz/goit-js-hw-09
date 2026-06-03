const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

// Sayfa açıldığında localStorage'dan verileri al
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Input olayını dinle
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Submit olayını dinle
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Please fill in all fields');
    return;
  }

  console.log({
    email,
    message,
  });

  localStorage.removeItem(STORAGE_KEY);

  form.reset();

  formData.email = '';
  formData.message = '';
});