import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const RatingProduct = () => {
    const validationSchema = object().shape({
        content: string().required('Nội dung là bắt buộc').min(3, 'Đánh giá ít nhất 3 ký tự'),
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
            <div className="m-auto flex flex-col gap-4 py-4">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <div className="input-wrapper flex flex-col mb-4">
                        <textarea placeholder='Nội dung tiếng việt có dấu' {...register('content')} />
                        {errors.content && (
                            <p className="text-xs italic text-red-500">{errors.content.message}</p>
                        )}
                    </div>
                    <div className='flex justify-between'>
                        <div className="input-wrapper flex flex-col mb-4 w-1/4">
                            <input placeholder='Tên (bắt buộc)' type="text" {...register('name')} />
                            {errors.name && (
                                <p className="text-xs italic text-red-500">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="input-wrapper flex flex-col mb-4 w-1/4">
                            <input placeholder='Email (bắt buộc)' type="email" {...register('email')} />
                            {errors.email && <p className="text-xs italic text-red-500">{errors.email.message}</p>}
                        </div>

                        <div className="input-wrapper flex flex-col mb-4 w-1/4">
                            <input placeholder='Số ĐT (tùy chọn)' type="phone" {...register('phone')} />
                            {errors.phone && (
                                <p className="text-xs italic text-red-500">{errors.phone.message}</p>
                            )}
                        </div>

                        <div className="input-wrapper">
                            <button
                                type="submit"
                                className=" w-full focus:shadow-outline rounded bg-slate-900 py-2 px-4 font-bold text-white hover:bg-orange-500 focus:outline-none"
                            >
                                Đánh giá
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RatingProduct;