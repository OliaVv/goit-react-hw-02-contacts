import { Label } from './Contact.styled';
export const Contact = (name, tel) => {
  return (
    <Label>
      {name}: {tel}
    </Label>
  );
};
