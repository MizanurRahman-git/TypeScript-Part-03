abstract class UIElement {
  constructor(protected id: string) {}

  abstract render(): string;
}

class Input extends UIElement {
  constructor(
    id: string,
    private type: string,
    private placeholder: string,
  ) {
    super(id);
  }

  render() {
    return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"/>`;
  }
}

class Button extends UIElement {
  constructor(
    id: string,
    private lavel: string,
  ) {
    super(id);
  }

  render() {
    return `<button id="${this.id}">${this.lavel}</button>`;
  }
}

class Form extends UIElement {
  private children: UIElement[] = [];

  appendChild(child: UIElement) {
    this.children.push(child);
  }

  render() {
    const childrenHtml = this.children
      .map((child) => child.render())
      .join("\n ");

    return `<form id="${this.id}" style="border:1px solid #003049; padding: 20px; max-width:300px; display:flex; flex-direction: column; gap: 10px; border-radius:5px ">\n ${childrenHtml} \n</form>`;
  }
}

const formSubmission = new Form("logIn-form");
const emailInput = new Input("email", "email", "Enter Your Email");
const passInput = new Input("pass", "password", "Enter Your Password");
const submitBtn = new Button("submit-btn", "Submit");

// console.log(emailInput.render());
// console.log(passInput.render());
// console.log(submitBtn.render());

formSubmission.appendChild(emailInput);
formSubmission.appendChild(passInput);
formSubmission.appendChild(submitBtn);

console.log(formSubmission.render());

const rootElement = document.getElementById("root");

if (rootElement) {
  rootElement.innerHTML = formSubmission.render();
}
