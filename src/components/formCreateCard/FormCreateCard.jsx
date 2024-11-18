import './FormCreateCard.css';
import { useForm } from "react-hook-form";
export function FormCreateCard() {
    const { register, handleSubmit, formState: { errors } } = useForm
    ({defaultValues:{
        name:'',
        description:''
    }});
    return (
        <form onSubmit={handleSubmit((data) => { console.log(data); })}>
            <div className="form__item">
                <label htmlFor="name">Передняя сторона карточки:</label>
                <input type="text" name="fronttext" id="fronttext"
                    {...register("name1", {
                        required: "Заполните поле Передняя сторона карточки",
                        minLength: {
                            value: 1,
                            message: "Название набора минимум 1 символ"
                        }
                    })} />
                    <p className='error-msg'>{errors.name1?.message}</p>
            </div>

            <div className="form__item">
                <label htmlFor="name">Задняя сторона карточки:</label>
                <input type="text" name="fronttext" id="fronttext"
                    {...register("name", {
                        required: "Заполните поле Задняя сторона карточки",
                        minLength: {
                            value: 1,
                            message: "Название набора минимум 1 символ"
                        }
                    })} />
                    <p className='error-msg'>{errors.name?.message}</p>
            </div>

            {/* <div className="form__item">
                <label htmlFor="description">Описание</label>
                <textarea name="backtext" id="backtext" {...register("description", 
                { required:"Заполните поле Описание"})} />
                <p className='error-msg'>{errors.description?.message}</p>
            </div> */}

            <div className="form__item">
                <input type="submit" value="Создать карточку" />
                
            </div>
        </form >
)
// <form>
//     <label>
//         Передняя сторона карточки:
//         <input type="text" name="fronttext"/>
//     </label>
//     <label>
//         Описание
//         <textarea name="backtext"/>
//     </label>
//         <input type="sumbit" value="Создать карточки"/>
// </form >
// )
}