function appendWaButton(iframe) {
    let deal = iframe.contentDocument;
    let icons = deal.querySelector('.crm-entity-widget-client-actions-container');
    let number = deal.querySelector('.crm-entity-widget-client-contact-phone').textContent.replace(/\D/g, '');
    let linkWa = 'https://wa.me/' + number;
    let a = document.createElement('a');
    let iconWa = chrome.runtime.getURL('icon.svg');
    if (number[0] === '8') number = number.replace(8, '7');

    a.setAttribute('target', '_blank');
    a.href = linkWa;
    a.style.cssText = `
    display: inline-block;
    margin-left: 8px;
    width: 22px;
    height: 22px;
    background-image: url(${iconWa});
    background-size: cover;`;
    icons.append(a);
}
document.body.addEventListener('click', function (event) {
    let clickElement = event.target.href;

    if (event.target.href) {
        if (event.target.href.includes('/crm/deal/details/')) {
            let dealIframe = document.querySelector('.side-panel.side-panel-container > .side-panel-content-container > iframe');
            dealIframe.onload = function () {
                appendWaButton(dealIframe);
            }
        }
    }
});
