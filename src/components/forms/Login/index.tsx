import { ErrorMessage, Field, Formik, Form } from "formik";
import FormError from "../../global/FormError";
import * as yup from "yup";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "../../../../axios"
import { useNavigate } from "react-router-dom";

type FormLogin = {
    username: string,
    password: string,
}
const Login = () => {
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        username: yup.string().required("Tên người dùng không được để trống"),
        password: yup.string().required("Mật khẩu không được để trống").min(3, "Mật khẩu phải có ít nhất 3 ký tự"),
    });

    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const mutation = useMutation({
        mutationFn: (data: FormLogin) => {
            return axios.post('/users/login', data)
        },
        onError: (error) => {
            // An error happened!
            console.log(error)
        },
        onSuccess: (data, variables) => {
            if (data.data?.login) {
                const token = data.data?.token;
                if (token) {
                    localStorage.setItem("authToken", token);
                    navigate("/home");
                }
            } else {
                alert('Thông tin đăng nhập sai!!!')
            }
        },
    })

    const onSubmit = (values: FormLogin) => {

        mutation.mutate(values);
        mutation.reset();
    };

    return (
        <Formik
            initialValues={credentials}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form className="flex flex-col justify-center items-center">
                <Field
                    name="username"
                    type="text"
                    label="Tên người dùng"
                    placeholder="Nhập tên người dùng"
                    className="w-[300px]"
                />
                <ErrorMessage name="username">{msg => <FormError msg={msg} />}</ErrorMessage>
                <Field
                    name="password"
                    type="password"
                    label="Mật khẩu"
                    placeholder="Nhập mật khẩu"
                    className="w-[300px]"
                />
                <ErrorMessage name="password">{msg => <FormError msg={msg} />}</ErrorMessage>
                <button className="w-full m-0 mt-2" type="submit">Đăng nhập</button>
            </Form>
        </Formik>
    )
}

export default Login;