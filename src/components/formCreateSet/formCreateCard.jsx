export function FormCreateCard() {
    return (
<form>
    <label>
        Передняя сторона карточки:
        <input type="text" name="fronttext"/>
    </label>
    <label>
        Описание
        <textarea name="backtext"/>
    </label>
        <input type="sumbit" value="Создать карточки"/>
</form >
)
}