function contactTab() {
  let mainContainer = document.getElementById('content');
  let contact = document.createElement('div');
  contact.className = 'tabInfoContainer';

  let phone = document.createElement('strong');
  phone.textContent = "Phone Number:";
  contact.appendChild(phone);

  let phoneInfo = document.createElement('p');
  phoneInfo.textContent = '(555) 555-5555';
  contact.appendChild(phoneInfo);

  let email = document.createElement('strong');
  email.textContent = "Email Address:";
  contact.appendChild(email);

  let emailInfo = document.createElement('p');
  emailInfo.textContent = 'info@pizzastructure.com';
  contact.appendChild(emailInfo);

  let address = document.createElement('strong');
  address.textContent = "Address:";
  contact.appendChild(address);

  let addressInfo = document.createElement('p');
  addressInfo.textContent = '47 Main Street Boston, Ma';
  contact.appendChild(addressInfo);
  
  mainContainer.appendChild(contact);
}

export { contactTab }