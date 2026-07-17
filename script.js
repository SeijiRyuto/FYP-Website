/**
 * script.js – Interactive features for the QR danger page
 * - Simulates what happens when you click a malicious QR code
 * - Displays a warning message
 * - Transforms QR → Skull → Danger sequence
 * - Educational demo only – all actions are client‑side
 */
document.addEventListener('DOMContentLoaded', () => {

    const qrElement = document.getElementById('fake-qr');
    const warningBox = document.getElementById('warning-message');
    const skullDisplay = document.getElementById('skull-display');
    const dangerSeq = document.getElementById('danger-sequence');
    const qrStage = document.getElementById('qr-stage');

    let isAnimating = false;

    if (qrElement && warningBox && skullDisplay && dangerSeq) {
        qrElement.addEventListener('click', function onClick() {
            if (isAnimating) return;
            isAnimating = true;

            warningBox.classList.remove('hidden');
            alert('⚠️ In a real attack, this could have sent you to a fake banking site!');

            setTimeout(() => {
                qrElement.style.transition = 'opacity 0.4s ease';
                qrElement.style.opacity = '0';

                setTimeout(() => {
                    qrElement.style.display = 'none';
                    skullDisplay.style.display = 'block';
                    void skullDisplay.offsetWidth;

                    setTimeout(() => {
                        dangerSeq.style.display = 'block';
                        void dangerSeq.offsetWidth;
                        dangerSeq.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 200);

                }, 400);

                setTimeout(() => {
                    warningBox.classList.add('hidden');
                }, 6000);

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

    console.log('%c⚠️ Beware of scanning random QR codes!',
        'font-size: 18px; color: #e94560; font-weight: bold;');
    console.log('%cThis page is an educational demo.',
        'font-size: 14px; color: #f0a500;');
});
