const { html } = require('common-tags');

function Faq({ question, answer }) {
  return html`
      <details>
        <summary>${question}</summary>
        <div>
        <p>${answer}</p>
        <i aria-hidden="true" class=""></i>
        </div>  
      </details>
  `;
}
module.exports = Faq;
