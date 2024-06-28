import toast from "react-hot-toast";
import { Field, Form, Formik } from "formik";
const INITIAL_VALUES = {
  search: "",
};

const SearchBar = ({ searchQuery }) => {
  const handleSubmit = (values, action) => {
    if (!values.search.trim()) {
      toast.error("Search field cannot be empty");
      return;
    }
    searchQuery(values.search);
    action.resetForm();
  };

  return (
    <header>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
