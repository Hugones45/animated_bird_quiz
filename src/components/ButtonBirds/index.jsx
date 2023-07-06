import styles from "./ButtonBirds.module.css"

export const ButtonBirds = ({ text, functions, styler, disabled }) => {
    return (
        <>
            {disabled === false ? (<button disabled={disabled} style={{ width: styler }} className={styles.birdsButton} onClick={functions}>
                <span>{text} </span>
            </button>) : (<button className={styles.disableButton} disabled >
                <span>{text} </span>
            </button>)}


        </>
    )
}
