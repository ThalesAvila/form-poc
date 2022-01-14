import { Row, Col } from "reactstrap";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

const initialValues = {
  messages: [
    {
      message: "Marc",
    },
    {
      message: "Diego",
    },
  ],
};

const FormPage = () => {
  return (
    <Row>
      <Col
        className="bg-light"
        md={{
          offset: 3,
          size: 6,
        }}
        sm="12"
      >
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="messages">
                {({ push, remove }) => (
                  <>
                    {values.messages.length > 0 &&
                      values.messages.map((message, index) => (
                        <Row key={index}>
                          <Col>
                            <Field
                              name={`messages.${index}.message`}
                              placeholder="Digite sua mensagem..."
                              type="text"
                            />
                            <button
                              type="button"
                              onClick={() => push({ message: "" })}
                            >
                              +
                            </button>
                            <button type="button" onClick={() => remove(index)}>
                              X
                            </button>
                          </Col>
                        </Row>
                      ))}
                  </>
                )}
              </FieldArray>
              <button type="submit">Exibir</button>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

export default FormPage;
