import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function Register() {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<h3>Register</h3>
			<TextField
				name="fname"
				type="text"
				inputRef={register({
					required: "First Name required",
					minLength: { value: 1, message: "First Name required" },
					pattern: /^[A-Za-z]+$/i
				})}
				label="First Name"
				style={{ margin: 20 }}
				helperText={errors.fname && errors.fname.message}
				fullWidth
				margin="normal"
				InputLabelProps={{
					shrink: true
				}}
				variant="outlined"
			/>
			<TextField
				name="lname"
				type="text"
				inputRef={register({
					required: "Last Name required",
					minLength: { value: 1, message: "Last Name required" },
					pattern: /^[A-Za-z]+$/i
				})}
				label="Last Name"
				style={{ margin: 20 }}
				helperText={errors.lname && errors.lname.message}
				fullWidth
				margin="normal"
				InputLabelProps={{
					shrink: true
				}}
				variant="outlined"
			/>
			<TextField
				type="password"
				placeholder="Password"
				name="password"
				inputRef={register({
					required: "password required",
					minLength: { value: 6, message: "must be at least 6 characters" }
				})}
				label="Password"
				style={{ margin: 20 }}
				helperText={errors.password && errors.password.message}
				fullWidth
				margin="normal"
				InputLabelProps={{
					shrink: true
				}}
				variant="outlined"
			/>
			{/* {errors.password && errors.password.message} */}
			{/* <input
				type="text"
				placeholder="Email"
				name="email"
				ref={register({
					required: true,
					maxLength: 20,
					pattern: /^[A-Za-z]+$/i
				})}
			/> */}

			<input type="submit" />
		</form>
	);
}

export default Register;
