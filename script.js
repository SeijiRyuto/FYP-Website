/**
 * script.js – Interactive features for the QR danger page
 * - Simulates what happens when you click a malicious QR code
 * - Displays a warning message
 * - Animates a live scam counter (simulated)
 * All actions are purely educational and client-side.
 */

// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  
  // ---------- FAKE QR CODE CLICK SIMULATION ----------
  const qrElement = document.getElementById('fake-qr');
  const warningBox = document.getElementById('warning-message');

  if (qrElement && warningBox) {
    qrElement.addEventListener('click', () => {
      // Show the hidden warning message
      warningBox.classList.remove('hidden');
      
      // Optional: simulate a fake redirect alert
      alert('⚠️ In a real attack, this could have sent you to a fake banking site!');
      
      // Automatically hide the warning after 8 seconds for cleaner UI
      setTimeout(() => {
        warningBox.classList.add('hidden');
      }, 8000);
    });
  }

  // ---------- ANIMATED SCAM COUNTER ----------
  // This function updates the counter periodically to simulate live data.
  const counterElement = document.getElementById('scam-counter');
  if (counterElement) {
    // Start value (can be any number)
    let currentCount = 1247;
    
    // Update the counter every 3 seconds
    setInterval(() => {
      // Increase by a random number between 1 and 5 to mimic real-time reports
      const increase = Math.floor(Math.random() * 5) + 1;
      currentCount += increase;
      // Format the number with commas for readability
      counterElement.textContent = currentCount.toLocaleString();
    }, 3000);
  }
  
  // ---------- OPTIONAL: CONSOLE WARNING ----------
  // This is just a fun easter egg for developers who open the console.
  console.log('%c⚠️ Beware of scanning random QR codes!',
              'font-size: 18px; color: #e94560; font-weight: bold;');
  console.log('%cThis page is an educational demo.',
              'font-size: 14px; color: #f0a500;');
});
