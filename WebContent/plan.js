const timeSelect = document.getElementById('time-select');
const eventInput = document.getElementById('event-input');
const addEventBtn = document.getElementById('add-event-btn');
const scheduleDisplay = document.getElementById('schedule-display');

addEventBtn.addEventListener('click', () => {
  const selectedTime = timeSelect.value;
  const eventText = eventInput.value;
  
  if (eventText.trim() !== '') {
    const eventItem = document.createElement('div');
    eventItem.classList.add('event-item');
    eventItem.innerHTML = `<strong>${selectedTime}시</strong> - ${eventText}`;
    scheduleDisplay.appendChild(eventItem);
    
    eventInput.value = '';
  }
});