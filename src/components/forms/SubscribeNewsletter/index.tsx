import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const SubscribeNewsletter = () => {
    const validationSchema = object().shape({
        name: string()
            .required('Tên là bắt buộc')
            .min(3, 'Tên ít nhất 3 kí tự'),
        email: string().required('Địa chỉ email là bắt buộc').email('Địa chỉ email không đúng định dạng'),
        phone: string()
            .required('Số điện thoại là bắt buộc')
            .min(8, 'Số điện thoại ít nhất 10 ký tự'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    })

    const onSubmit = (data: any) => {
        console.log(data)
        // Do something with the form data
    }

    return (
        <>
            <div className="m-auto flex flex-col gap-4 bg-orange-500 p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <div className="input-wrapper flex flex-col mb-4">
                        <input placeholder='Your name *' type="text" {...register('name')} />
                        {errors.name && (
                            <p className="text-xs italic text-white">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="input-wrapper flex flex-col mb-4">
                        <input placeholder='Your email address *' type="email" {...register('email')} />
                        {errors.email && <p className="text-xs italic text-white">{errors.email.message}</p>}
                    </div>

                    <div className="input-wrapper flex flex-col mb-4">
                        <input placeholder='Your mobile phone *' type="phone" {...register('phone')} />
                        {errors.phone && (
                            <p className="text-xs italic text-white">{errors.phone.message}</p>
                        )}
                    </div>

                    <div className="input-wrapper">
                        <button
                            type="submit"
                            className=" w-full focus:shadow-outline rounded bg-slate-900 py-2 px-4 font-bold hover:text-orange-500 text-white hover:bg-white focus:outline-none"
                        >
                            Subscribe email list
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SubscribeNewsletter;