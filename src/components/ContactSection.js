import { Container, Typography, Box, TextField, Button} from "@mui/material";
import { useFormik} from "formik";
import * as Yup from "yup";

const ContactSection = ()=>{
const formik = useFormik({
 initialValues : {
    fname : "",
    lname : "",
    mobile : "",
    message : ""
 },
 validationSchema : Yup.object({
    fname : Yup.string().min(2, "first name must be at least 2 characters").required("first name is required"),
    lname : Yup.string().min(2, "last name must be at least 2 characters").required("last name is required"),
    mobile : Yup.number().required("mobile no. is required"),
    message : Yup.string().min(10, "message must be 10 characters long").required("message is required")
 }),
 onSubmit : (values)=>{
    console.log(values);
 }
});

    return (
        <Container>
            <Typography variant="h3" marginTop="1.5rem" marginBottom="1.5rem">
Contact Us:-
            </Typography>
        <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField id="outlined-basic" type="text" name="fname" label="First Name" variant="outlined" sx={{marginRight:"2rem", width:"30%"}} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname} helperText={formik.touched.fname && Boolean(formik.errors.fname) ? formik.errors.fname : null} error={formik.touched.fname && Boolean(formik.errors.fname)}/>

        <TextField id="outlined-basic" type="text" name="lname" label="Last Name" variant="outlined" sx={{marginRight: "2rem", width:"30%"}} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lname} helperText={formik.touched.lname && Boolean(formik.errors.lname)?formik.errors.lname : null} error={formik.touched.lname && Boolean(formik.errors.lname)}/>

        <TextField id="outlined-basic" type="number" name="mobile" label="Phone Number" variant="outlined" sx={{width:"30%"}} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile} helperText={formik.touched.mobile && Boolean(formik.errors.mobile)? formik.errors.mobile: null} error={formik.touched.mobile && Boolean(formik.errors.mobile)}/>

        <TextField id="outlined-basic" label="Message" name="message" variant="outlined" multiline rows={4} sx={{width:"100%", marginTop:"2rem"}} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} helperText={formik.touched.message && Boolean(formik.errors.message)?formik.errors.message: null} error={formik.touched.message && Boolean(formik.errors.message)}/>

        <Button variant="contained" type="submit" sx={{marginTop:"1rem"}}>SEND</Button>
        </Box>
        </Container>
    )
};

export default ContactSection;