import styles from "./styles.module.scss";

export default function SectionTitle({ titleText, paragraphText }) {
    return (
       <div className="bg-slate-100 grow min-h-full">
        <h1 className={styles.title}>{titleText}</h1>
        <p className={styles.paragraph}>{paragraphText}</p>
       </div>
    )
}