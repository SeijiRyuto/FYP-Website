/**
 * script.js – Interactive features for the QR danger page
 * - Simulates what happens when you click a malicious QR code
 * - Displays a warning message
 * - Transforms QR → Skull → Danger sequence
 * - Educational demo only – all actions are client‑side
 */
document.addEventListener('DOMContentLoaded', () => {

    // ---------- DOM refs ----------
    const qrElement = document.getElementById('fake-qr');
    const warningBox = document.getElementById('warning-message');
    const skullDisplay = document.getElementById('skull-display');
    const dangerSeq = document.getElementById('danger-sequence');
    const qrStage = document.getElementById('qr-stage');

    // ---------- state ----------
    let isAnimating = false;

    // ---------- FAKE QR CODE → WARNING → SKULL → SEQUENCE ----------
    if (qrElement && warningBox && skullDisplay && dangerSeq) {

        qrElement.addEventListener('click', function onClick() {
            if (isAnimating) return;
            isAnimating = true;

            // Step 1: show warning message
            warningBox.classList.remove('hidden');

            // Step 2: educational alert
            alert('⚠️ In a real attack, this could have sent you to a fake banking site!');

            // Step 3: after 600ms, fade QR and reveal skull & sequence
            setTimeout(() => {
                qrElement.style.transition = 'opacity 0.4s ease';
                qrElement.style.opacity = '0';

                setTimeout(() => {
                    qrElement.style.display = 'none';
                    skullDisplay.style.display = 'block';
                    void skullDisplay.offsetWidth; // force reflow

                    setTimeout(() => {
                        dangerSeq.style.display = 'block';
                        void dangerSeq.offsetWidth;
                        dangerSeq.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 200);

                }, 400);

                // auto-hide the warning after 6s
                setTimeout(() => {
                    warningBox.classList.add('hidden');
                }, 6000);

                // reset everything after 12s
                setTimeout(() => {
                    qrElement.style.display = 'inline-block';
                    qrElement.style.opacity = '1';
                    qrElement.style.transition = '';
                    skullDisplay.style.display = 'none';
                    dangerSeq.style.display = 'none';
                    warningBox.classList.add('hidden');
                    isAnimating = false;
                    qrStage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 12000);

            }, 600);
        });
    }

    // ---------- CONSOLE REMINDER ----------
    console.log('%c⚠️ Beware of scanning random QR codes!',
        'font-size: 18px; color: #e94560; font-weight: bold;');
    console.log('%cThis page is an educational demo.',
        'font-size: 14px; color: #f0a500;');
    console.log('%c🔗 Remember to replace any placeholder links in the HTML!',
        'font-size: 13px; color: #f0a500;');
    console.log('%c   The risk cards (href="#") can point to your own resource pages.',
        'font-size: 13px; color: #aaa;');
});
