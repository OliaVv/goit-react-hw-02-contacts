import { Button, Field, Form, Input } from './AddForm.styled';
export const AddForm = ({ formSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    //console.log(event.target.elements.name.value);
    const { name, tel } = event.target.elements;
    formSubmit(name.value, tel.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        Ім'я
        <Input name="name" />
      </Field>
      <Field>
        Телефон
        <Input name="tel" />
      </Field>
      <Button> Додати контакт</Button>
    </Form>
  );
};
