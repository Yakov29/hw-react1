import styles from './Descritpion.module.css';

const Descritpion = ({description}) => (
   <p className={styles.description}>
        {description}
   </p>
);



export default Descritpion;