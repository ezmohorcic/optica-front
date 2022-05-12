
import css from "../LoginCard/LoginCard.module.css"

export const inputsReducer = (inputs,handleInput) => (name,index) =>
{
    return(
        <div key={`inputCredential_${index}`} className={css.inputShell}>
            <label className={css.inputShell__label}>{name}</label>
            <input 
                className={css.inputShell__input} 
                type={name.includes("password") ? "password" : "text"} 
                name={name} 
                value={inputs[name]}
                onChange={handleInput}
            />
        </div>
        
    )
}