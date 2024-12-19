import styles from './Site.module.css';

const Site = ({name, link}) => (
    <a href={link}>{name}</a>
);



export default Site;