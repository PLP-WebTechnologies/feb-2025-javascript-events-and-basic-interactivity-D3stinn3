// Event Handling
document.getElementById('clickMeBtn').addEventListener('click', () => {
  alert('Button was clicked!');
});

document.getElementById('hoverBox').addEventListener('mouseover', () => {
  document.getElementById('hoverBox').style.backgroundColor = '#cceeff';
});

document.getElementById('keyInput').addEventListener('keypress', (e) => {
  console.log('Key pressed:', e.key);
});

document.getElementById('clickMeBtn').addEventListener('dblclick', () => {
  alert('Double-clicked the button! 🤫');
});

// Interactive Elements
document.getElementById('colorChangeBtn').addEventListener('click', () => {
  document.body.style.backgroundColor = '#ffe6e6';
});

let currentImage = 1;
document.getElementById('galleryImg').addEventListener('click', () => {
  currentImage = currentImage === 1 ? 2 : 1;
  document.getElementById('galleryImg').src = currentImage === 1 
    ? 'https://via.placeholder.com/300'
    : 'https://via.placeholder.com/300/ff9999';
});

document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    const tabNum = button.dataset.tab;
    document.getElementById('tab1').style.display = tabNum === "1" ? "block" : "none";
    document.getElementById('tab2').style.display = tabNum === "2" ? "block" : "none";
  });
});

// Form Validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let feedback = '';

  if (!email.includes('@')) {
    feedback += 'Invalid email format. ';
  }

  if (password.length < 8) {
    feedback += 'Password must be at least 8 characters. ';
  }

  document.getElementById('formFeedback').textContent = feedback || 'Form submitted successfully!';
});
