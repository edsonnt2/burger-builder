import React, { Component } from "react";
import "./style.css";
import Spinner from "../../../components/UI/Spinner";
import Button from "../../../components/UI/Button";
import api from "../../../service/api";
import Input from "../../../components/UI/Input";

export class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "ifood",
              displayValue: "iFood"
            },
            {
              value: "fastest",
              displayValue: "Fastest"
            },
            {
              value: "cheapest",
              displayValue: "Cheapest"
            }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    loading: false
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) isValid = value.trim() !== "" && isValid;

    if (rules.minLength)
      isValid = value.trim().length >= rules.minLength && isValid;
    if (rules.maxLength)
      isValid = value.trim().length <= rules.maxLength && isValid;
    return isValid;
  }

  onChanged = e => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    // const updateElementForm = {
    //   ...updatedOrderForm[e.target.name]
    // };
    updatedOrderForm[e.target.name].value = e.target.value;
    updatedOrderForm[e.target.name].valid = this.checkValidity(
      updatedOrderForm[e.target.name].value,
      updatedOrderForm[e.target.name].validation
    );
    updatedOrderForm[e.target.name].touched = true;

    let formIsValid = true;
    for (const inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid });
  };

  orderHandle = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    const {
      name,
      street,
      zipCode,
      country,
      email,
      deliveryMethod
    } = this.state.orderForm;

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: name.value,
        email: email.value,
        address: {
          street: street.value,
          zipCode: zipCode.value,
          country: country.value
        }
      },
      deliveryMethod: deliveryMethod.value
    };

    const res = await api.post("/orders.json", order);
    if (res) this.props.history.push("/");

    this.setState({ loading: false });
  };

  render() {
    const formElementsArray = [];
    for (const key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form onSubmit={e => this.orderHandle(e)}>
            {formElementsArray.map(formElement => (
              <Input
                key={formElement.id}
                name={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={this.onChanged}
              />
            ))}

            <Button btnType="Success" disabled={!this.state.formIsValid}>
              ORDER
            </Button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactData;
