/**
 * script.js – Interactive features for the QR danger page
 * - Simulates what happens when you click a malicious QR code
 * - Displays a warning message
 * - Transforms QR → Skull → Danger sequence
 * - Animates a live scam counter (simulated)
 * All actions are purely educational and client-side.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- FAKE QR CODE → WARNING → SKULL → SEQUENCE ----------
    const qrElement = document.getElementById('fake-qr');
    const warningBox = document.getElementById('warning-message');
    const skullDisplay = document.getElementById('skull-display');
    const dangerSeq = document.getElementById('danger-sequence');
    const qrStage = document.getElementById('qr-stage');

    // State to prevent re-triggering while animation is running
    let isAnimating = false;

    if (qrElement && warningBox && skullDisplay && dangerSeq) {
        qrElement.addEventListener('click', () => {
            // Prevent multiple rapid clicks
            if (isAnimating) return;
            isAnimating = true;

            // ---- Step 1: Show warning message ----
            warningBox.classList.remove('hidden');

            // ---- Step 2: Alert (educational) ----
            alert('⚠️ In a real attack, this could have sent you to a fake banking site!');

            // ---- Step 3: After 1s, hide QR and show skull ----
            setTimeout(() => {
                // Fade out QR
                qrElement.style.opacity = '0';
                // After fade, hide QR and show skull
                setTimeout(() => {
                    qrElement.style.display = 'none';
                    skullDisplay.style.display = 'block';
                    // trigger reflow for animation
                    void skullDisplay.offsetWidth;
                }, 400);

                // ---- Step 4: After 1.2s more, show danger sequence ----
                setTimeout(() => {
                    dangerSeq.style.display = 'block';
                    // scroll into view for visibility
                    dangerSeq.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 1200);

                // ---- Step 5: After 6s, auto-hide warning (cleanup) ----
                setTimeout(() => {
                    warningBox.classList.add('hidden');
                }, 5000);

                // ---- Step 6: Reset the animation after 10s (so user can try again) ----
                setTimeout(() => {
                    // Reset: show QR, hide skull & sequence, hide warning
                    qrElement.style.display = 'inline-block';
                    qrElement.style.opacity = '1';
                    skullDisplay.style.display = 'none';
                    dangerSeq.style.display = 'none';
                    warningBox.classList.add('hidden');
                    isAnimating = false;
                    // Scroll back to the QR area
                    qrStage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 10000);

            }, 800); // wait 800ms after click before starting transformation
        });
    }

    // ---------- ANIMATED SCAM COUNTER ----------
    const counterElement = document.getElementById('scam-counter');
    if (counterElement) {
        let currentCount = 1247;

        setInterval(() => {
            const increase = Math.floor(Math.random() * 5) + 1;
            currentCount += increase;
            counterElement.textContent = currentCount.toLocaleString();
        }, 3000);
    }

    // ---------- CONSOLE EASTER EGG ----------
    console.log('%c⚠️ Beware of scanning random QR codes!',
        'font-size: 18px; color: #e94560; font-weight: bold;');
    console.log('%cThis page is an educational demo.',
        'font-size: 14px; color: #f0a500;');

    // ---------- BITLY LINK PLACEHOLDER REMINDER (in console) ----------
    console.log('%c🔗 Remember to replace the Bitly links in the HTML!',
        'font-size: 13px; color: #f0a500;');
    console.log('%c   Look for "BITLY LINK" comments in the HTML.',
        'font-size: 13px; color: #aaa;');
});
