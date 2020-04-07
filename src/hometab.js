function homeTab() {
  let mainContainer = document.getElementById('content');
  let home = document.createElement('div');
  home.className = 'tabInfoContainer';

  let welcome1 = document.createElement('p');
  welcome1.style.cssText = 'margin-top: 0px;';
  welcome1.textContent = 'Velit scelerisque in dictum non consectetur a erat nam at. Nulla posuere sollicitudin aliquam ultrices. Malesuada fames ac turpis egestas integer eget. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Accumsan sit amet nulla facilisi morbi. Consectetur adipiscing elit duis tristique sollicitudin nibh.';
  let welcome2 = document.createElement('p');
  welcome2.textContent = 'Montes nascetur ridiculus mus mauris vitae ultricies. Nibh tellus molestie nunc non blandit massa enim nec. Ut etiam sit amet nisl purus in. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin.';
  let welcome3 = document.createElement('p');
  welcome3.textContent = 'Mi quis hendrerit dolor magna eget est lorem ipsum. Amet facilisis magna etiam tempor orci eu lobortis elementum. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Sem et tortor consequat id porta. Gravida in fermentum et sollicitudin ac.';

  home.appendChild(welcome1);
  home.appendChild(welcome2);
  home.appendChild(welcome3);


  mainContainer.appendChild(home);
}

export { homeTab }