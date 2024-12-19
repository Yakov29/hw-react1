import styles from './Colors.module.css';
import Item from './Item';

const colors = ["red", "blue", "green"]
const Colors = () => (
    
    <ul>
        {
            colors.map((color) => {
                return <Item color={color}/>
            })
        }
    </ul>
);



export default Colors;
