
const timeItems = document.querySelectorAll('.time-item');
const timelineFill = document.getElementById('timelineFill');

const fillSizes = ['12%', '41%', '70%', '100%'];

function activateStep(index) {
  timeItems.forEach(function(item) {
    item.classList.remove('active');
  });

  timeItems[index].classList.add('active');
  timelineFill.style.width = fillSizes[index];
}

timeItems.forEach(function(item, index) {
  item.addEventListener('mouseenter', function() {
    activateStep(index);
  });
});

const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const item = button.parentElement;
    item.classList.toggle('open');
  });
});

const mentorButtons = document.querySelectorAll('.mentor-btn');
const modal = document.getElementById('mentorModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

mentorButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const mentorId = button.getAttribute('data-mentor');
    const mentorContent = document.getElementById(`mentor-${mentorId}`);

    if (mentorContent) {
      modalBody.innerHTML = mentorContent.innerHTML;
      modal.classList.add('show');
      document.body.classList.add('modal-open');
    }
  });
});

closeModal.addEventListener('click', function() {
  modal.classList.remove('show');
  document.body.classList.remove('modal-open');
});

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
  }
});