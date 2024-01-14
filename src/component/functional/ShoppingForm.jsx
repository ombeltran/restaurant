import React, { useState, useContext } from 'react';
import { CarContext } from "../../context/SCarProvider";
import { useForm } from "react-hook-form";



export const ShoppingForm = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const { setDeliveryPrice } = useContext(CarContext);
    const [successfully, setSuccessfully] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        setDeliveryPrice(event.target.value);
    };

    const successMessage = "¡Pedido enviado exitosamente!";

    const onSubmit = async (data) => {
        try {
            setSuccessfully(!successfully);
            console.log(data);
            reset();
        } catch (error) {
            console.log(error);
        }

    };


    return (
        <form
            className='flex flex-col mt-3 gap-1 w-48'
            onSubmit={handleSubmit(onSubmit)}
        >
            <label className='font-bold'>¿Desea servicio de domicilio?</label>
            <select
                value={selectedOption}
                onChange={handleSelectChange}
                className='border-2 rounded-lg'
            >
                <option value="" disabled>Selecciona una opción</option>
                <option value="yes">Sí</option>
                <option value="no">No</option>
            </select>
            <p>Opción seleccionada: {selectedOption}</p>

            {
                selectedOption == "yes" ?
                    (
                        <>
                            <label htmlFor="name">Nombre:</label>
                            <input
                                className='border-2 rounded-lg w-72'
                                type="text"
                                id='name'
                                name='name'
                                required
                                {...register("name", { required: true })}
                            />

                            <label htmlFor="email">Correo electrónico:</label>
                            <input
                                className='border-2 rounded-lg w-72 mb-3'
                                type="email"
                                id='email'
                                name='email'
                                required
                                {...register("email", { required: true })}
                            />

                            <button
                                className='bg-black text-white font-bold py-1 w-72 rounded-full'
                            >
                                Enviar pedido
                                {
                                    (successfully) &&
                                    (<div className=''>
                                        {successMessage}
                                    </div>)
                                }
                            </button>

                        </>
                    ) :
                    (' ')
            }
        </form>
    )
}

export default ShoppingForm;