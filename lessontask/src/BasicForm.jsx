
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFormik } from "formik";
const BasicForm = () => {
  //form submit function
 


    const initialValues = {
      name: '',
      price: '',
      discountPercentage: '',
      imageURL: '',
      unitsInStock: '',
    };
  
    const validationSchema = Yup.object({
      name: Yup.string().required('Required').min(4, 'Minimum 4 characters'),
      price: Yup.number().required('Required').positive('Can be positive'),
      discountPercentage: Yup.number().required('Required').min(0, 'Minimum 0').max(100, 'Maximum 100'),
      imageURL: Yup.string().required('Required'),
      unitsInStock: Yup.number().required('Required'),
    });

  return (
    <div style={{width:'20%',margin:'0 auto', boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', border:'1px solid' ,borderRadius:'10px', height:'350px',padding:'30px' }}>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
    <Form >
      <input style={{marginBottom:'10px',  width:'90%',backgroundColor:'#f1f3f4',height:'25px', border:'1px solid gray'}}
        className={
          formik.errors.name && formik.touched.name ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
        name="name"
        placeholder="Enter Name"
        type="text"
      />
      {formik.errors.name && formik.touched.name && (
        <span style={{ color: "red" }}>{formik.errors.name}</span>
      )}
       <input style={{marginBottom:'10px',  width:'90%', backgroundColor:'#f1f3f4',height:'25px', border:'1px solid gray'}}
        className={
          formik.errors.lastname && formik.touched.lastname ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.lastname}
        name="lastname"
        placeholder="Enter Lastname"
        type="text"
      />
      {formik.errors.lastname && formik.touched.lastname && (
        <span style={{ color: "red" }}>{formik.errors.lastname}</span>
      )}
      <input style={{ marginBottom:'10px', width:'90%',backgroundColor:'#f1f3f4',height:'25px', border:'1px solid gray'}}
        className={formik.errors.mobilnum && formik.touched.mobilnum ? "input-error" : ""}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.mobilnum}
        name="mobilnum"
        placeholder="Enter Mobilnumber"
        type="number"
      />
      {formik.errors.mobilnum && formik.touched.mobilnum && (
        <span style={{ color: "red" }}>{formik.errors.mobilnum}</span>
      )}
      <input style={{ marginBottom:'10px', width:'90%',backgroundColor:'#f1f3f4',height:'25px', border:'1px solid gray'}}
        className={
          formik.errors.email && formik.touched.email ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        name="email"
        placeholder="Enter Email"
        type="email"
      />
      {formik.errors.email && formik.touched.email && (
        <span style={{ color: "red" }}>{formik.errors.email}</span>
      )}
      <input style={{ marginBottom:'10px', width:'90%',backgroundColor:'#f1f3f4',height:'25px', border:'1px solid gray'}}
        className={
          formik.errors.password && formik.touched.password ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        name="password"
        placeholder="Enter Password"
        type="password"
      />
      {formik.errors.password && formik.touched.password && (
        <span style={{ color: "red" }}>{formik.errors.password}</span>
      )}
    
     <button style={{display:'block', width:'30%', margin:'10px auto', backgroundColor:'green', padding:'10px',border:'none' , color:'white'}} disabled={formik.isSubmitting || Object.keys(formik.errors).length>0} type="submit">Sign Up</button>
    
    </Form>
    </Formik>
    </div>
  );
};

export default BasicForm;