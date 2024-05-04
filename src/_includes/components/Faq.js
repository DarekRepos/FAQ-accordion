const { html } = require('common-tags');

function Faq({ question, answer }) {
  return html`
      <details class="faq-item">
        <summary>${question}</summary>
        <div>
        <p>${answer}</p>
        </div>  
      </details>
  `;
}
module.exports = Faq;
