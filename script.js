document.getElementById('mailIcon').addEventListener('click', () => {
    // Show the card cover when the mail icon is clicked
    document.getElementById('mailIcon').style.display = 'none';
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.style.display = 'block';
  });
  
  document.getElementById('cardCover').addEventListener('click', () => {
    // Animate the card opening
    const cardCover = document.getElementById('cardCover');
    const cardInside = document.getElementById('cardInside');
    
    cardCover.style.transition = 'transform 0.8s';
    cardCover.style.transform = 'rotateY(180deg)';
    
    // Display the inside of the card after the animation
    setTimeout(() => {
      cardCover.style.display = 'none';
      cardInside.style.display = 'block';
    }, 800);
  });
  