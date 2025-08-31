const foodItems = [
  { name: "Rice", quantity: "10 kg" },
  { name: "Wheat Flour", quantity: "5 kg" },
  { name: "Dal", quantity: "3 kg" },
  { name: "Milk Packets", quantity: "6" },
  { name: "Vegetables", "quantity": "10 kg" }
];

const homepageContainer = document.querySelector('.homepage-container');
const donateBtn = document.getElementById('donate-btn');
const receiveBtn = document.getElementById('receive-btn');
const donorSection = document.getElementById('donor-section');
const receiverSection = document.getElementById('receiver-section');
const foodList = document.getElementById("food-list");
const backToHomeDonorBtn = document.getElementById('back-to-home-donor');
const backToHomeReceiverBtn = document.getElementById('back-to-home-receiver');

const donateForm = document.getElementById('donate-form');
const foodDescriptionInput = document.getElementById('food-description');
const quantityInput = document.getElementById('quantity');
const pickupTimeInput = document.getElementById('pickup-time');
const addressInput = document.getElementById('address');


function renderFoodItems() {
  foodList.innerHTML = '';
  foodItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "food-item";
    itemDiv.innerHTML = `
      <span>${item.name} - ${item.quantity}</span>
      <button class="btn" onclick="alert('Requested ${item.name}')">Request</button>
    `;
    foodList.appendChild(itemDiv);
  });
}

donateBtn.addEventListener('click', () => {
  homepageContainer.classList.add('hidden');
  donorSection.classList.remove('hidden');
  receiverSection.classList.add('hidden');
});

receiveBtn.addEventListener('click', () => {
  homepageContainer.classList.add('hidden');
  receiverSection.classList.remove('hidden');
  donorSection.classList.add('hidden');
  renderFoodItems();
});

backToHomeDonorBtn.addEventListener('click', () => {
  donorSection.classList.add('hidden');
  homepageContainer.classList.remove('hidden');
  donateForm.reset();
});

backToHomeReceiverBtn.addEventListener('click', () => {
  receiverSection.classList.add('hidden');
  homepageContainer.classList.remove('hidden');
});


donateForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const foodDescription = foodDescriptionInput.value;
  const quantity = quantityInput.value;
  const pickupTime = pickupTimeInput.value;
  const address = addressInput.value;

  if (!foodDescription || !quantity || !pickupTime || !address) {
    alert('Please fill in all fields before submitting your donation.');
    return;
  }

  console.log('Donation Submitted:', {
    foodDescription,
    quantity,
    pickupTime,
    address
  });

  alert('Thank you for your donation! Your food details have been submitted.');

  donateForm.reset();
});