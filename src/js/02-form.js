const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

// Sayfa açılınca localStorage'tan doldur
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email ?? '';
  formData.message = parsedData.message ?? '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// INPUT DELEGATION
form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// SUBMIT
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  // boş kontrol
  if (!email || !message) {
    return;
  }

  const result = {
    email,
    message,
  };

  console.log(result);

  // temizle
  form.reset();
  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';
});