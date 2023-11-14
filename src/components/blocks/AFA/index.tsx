import { useState } from 'react'

const AFA = () => {

    const [registerPhoneNumber, setRegisterPhoneNumber] = useState<string>('');

    const [phoneNumber, setphoneNumber] = useState<string>('');

    const updatePhoneNumber = (event: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setphoneNumber(value);
    }

    const handleRegisterPhoneNumber = () => {
        if (phoneNumber) {
            console.log('Số điện thoại ' + phoneNumber + ' đã được đăng ký thành công!!!')
            setRegisterPhoneNumber(phoneNumber);
        }
    }

    return (
        <>
            <div className="text-xl font-bold mb-2">Gọi lại tư vấn</div>
            <div className="mb-2">Bạn muốn chúng tôi gọi lại tư vấn, vui lòng điền số điện thoại vào form dưới đây</div>
            <div className="flex">
                <input name="phone-registation" className="border-2 mr-2 px-2" value={phoneNumber} onChange={updatePhoneNumber} placeholder="Số điện thoại của bạn" type="text" />
                <button onClick={handleRegisterPhoneNumber} className="font-bold min-w-[30%] text-white bg-orange-500 px-2 py-1">Đăng ký</button>
            </div>
        </>
    )
}

export default AFA;