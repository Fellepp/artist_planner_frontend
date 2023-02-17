import styles from './ArtistList.module.css'
import { useState } from "react";

const ArtistList = () => {

    let items: string[] = []
    for (let i = 1; i <= 50; i++) {
        items.push(`Artist${i}`);
    }

    const [list, setList] = useState(items);

    const handleClick = (index: number) => {
        const removedItem = list[index];
        console.log("Removed item", removedItem);
        setList(list.filter((item, i) => i !== index));
    };

    return (
        <div>
            <h1 className={styles.title}>Currently tracked artists</h1>
            <div className={styles.buttonArea}>
                {list.map((item, index) => (
                    <button key={index} onClick={() => handleClick(index)} style={{ margin: "10px 0" }}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};


export default ArtistList