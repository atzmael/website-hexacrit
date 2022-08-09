import styles from './styles.module.scss';

interface BlocPresentationProps {
    children: any;
}

const BlocPresentation = ({ children }: BlocPresentationProps) => {
    return (
        <div className={styles["pres"]}>
            <h1 className={styles["pres-title"]}>COUCOU</h1>
            {children}
        </div>
    )
}

export default BlocPresentation;