import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import FormError from "../../global/FormError";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "../../../../axios"


type FormLogin = {
    username: string,
    password: string,
}

const LoginForm = () => {
    const validationSchema = yup.object().shape({
        username: yup.string().required("Tên người dùng không được để trống"),
        password: yup.string().required("Mật khẩu không được để trống").min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
    });

    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const mutation = useMutation({
        mutationFn: (data: FormLogin) => {
            return axios.post('/users/login', data)
        },
        onMutate: (variables) => {
          // A mutation is about to happen!
      
          // Optionally return a context containing data to use when for example rolling back
          return { id: 1 }
        },
        onError: (error, variables, context) => {
          // An error happened!
          console.log(`rolling back optimistic update with id ${context?.id}`)
        },
        onSuccess: (data, variables, context) => {
          // Boom baby!
        },
        onSettled: (data, error, variables, context) => {
            setCredentials({ username: "", password: "" })
        },
    })

    const onSubmit = (values: FormLogin) => {
        
        mutation.mutate(values);
    };

    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <div className="border flex flex-col justify-center items-center p-20 round-">
                <h1 className="text-2xl font-extrabold text-white tracking-widest mb-2">Login</h1>
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
                        <button className="w-full m-0" type="submit">Đăng nhập</button>
                    </Form>
                </Formik>
            </div>
        </main>
    );
};

export default LoginForm;