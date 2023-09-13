import styles from './Product.module.css'

export default function ImageProduct({ image }) {
    return (
        <div
            className={styles.image}
            style={{
                backgroundImage: `url('${image}')`
            }}>
        </div>
    )
}