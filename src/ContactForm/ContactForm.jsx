import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = { name: "", number: "" };

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" required />
        </label>

        <label>
          Telephone
          <Field type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
